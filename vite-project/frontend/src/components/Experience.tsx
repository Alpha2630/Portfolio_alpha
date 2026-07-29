import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, Code2, Globe, Users, Calendar,
  Target, Rocket, Brain, Sparkles
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiVite, SiMongodb, SiExpress, SiNodedotjs,
  SiGit, SiGithub, SiDocker, SiVercel,
  SiHtml5, SiCss,
  SiPython,
  SiBootstrap, SiPostgresql
} from "react-icons/si";

// ==================== GLOBE BACKGROUND (couleurs iron-blue d'origine) ====================
const GlobeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0, height = 0, rafId = 0, angle = 0;
    const POINT_COUNT = 140;
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radiusAtY,
        y: y,
        z: Math.sin(theta) * radiusAtY,
      });
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.3;

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const tilt = 0.35;
      const cosT = Math.cos(tilt);
      const sinT = Math.sin(tilt);

      const projected = points.map((p) => {
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;
        const y2 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;
        const scale = 1.4 / (1.4 - z2 * 0.9);
        const sx = cx + x1 * radius * scale;
        const sy = cy + y2 * radius * scale;
        const depth = (z2 + 1) / 2;
        return { sx, sy, depth };
      });

      const sorted = projected.slice().sort((a, b) => a.depth - b.depth);

      const LINK_DIST = radius * 0.62;
      const COLOR_LINE = "56, 189, 248";
      const COLOR_NODE = "125, 211, 248";

      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const a = sorted[i];
          const b = sorted[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const depth = (a.depth + b.depth) / 2;
            const opacity = Math.max(0, 0.22 * (depth + 1) * (1 - dist / LINK_DIST));
            if (opacity > 0.005) {
              ctx.beginPath();
              ctx.moveTo(a.sx, a.sy);
              ctx.lineTo(b.sx, b.sy);
              ctx.strokeStyle = `rgba(${COLOR_LINE}, ${opacity})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      sorted.forEach((p) => {
        const depth = (p.depth + 1) / 2;
        const r = 1.1 + depth * 1.6;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${COLOR_NODE}, ${0.25 + depth * 0.65})`;
        ctx.fill();
      });
    };

    const tick = () => {
      angle += 0.0016;
      draw();
      rafId = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    const parent = canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    resize();
    tick();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
};

// ==================== GALAXY BACKGROUND (nouveau, pour toute la zone Technical Skills) ====================
interface Star {
  x: number;
  y: number;
  r: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: "white" | "gold" | "blue";
}

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    let t = 0;

    const stars: Star[] = [];
    const STAR_COUNT = 160;

    const COLORS = {
      white: "255, 255, 255",
      gold: "212, 175, 55",
      blue: "94, 132, 214",
    };

    const seedStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        const roll = Math.random();
        const hue: Star["hue"] = roll < 0.7 ? "white" : roll < 0.88 ? "blue" : "gold";
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: Math.random() < 0.85 ? 0.6 + Math.random() * 1 : 1.4 + Math.random() * 1.4,
          baseOpacity: 0.25 + Math.random() * 0.55,
          twinkleSpeed: 0.5 + Math.random() * 1.5,
          twinklePhase: Math.random() * Math.PI * 2,
          hue,
        });
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedStars();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        const twinkle = prefersReducedMotion
          ? 1
          : 0.55 + 0.45 * Math.sin(t * s.twinkleSpeed + s.twinklePhase);
        const opacity = s.baseOpacity * twinkle;
        const color = COLORS[s.hue];

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();

        // léger halo pour les étoiles un peu plus grosses
        if (s.r > 1.3) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${opacity * 0.12})`;
          ctx.fill();
        }
      });
    };

    const tick = () => {
      t += 0.02;
      draw();
      rafId = requestAnimationFrame(tick);
    };

    resize();

    if (prefersReducedMotion) {
      draw();
    } else {
      tick();
    }

    const resizeObserver = new ResizeObserver(() => resize());
    const parent = canvas.parentElement;
    if (parent) resizeObserver.observe(parent);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
      {/* Nébuleuses floutées, en accord avec la palette gold/royal */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-royal/20 blur-3xl" />
      <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-iron-blue/10 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
    </div>
  );
};

// ==================== SKILLS DATA ====================
const skillsData = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
];

// ==================== ROUE 2D RESPONSIVE ====================
const RoueSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(170);
  const [iconSize, setIconSize] = useState("w-10 h-10 md:w-12 md:h-12");

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 400) {
          setRadius(110);
          setIconSize("w-7 h-7");
        } else if (width < 640) {
          setRadius(130);
          setIconSize("w-8 h-8");
        } else {
          setRadius(170);
          setIconSize("w-10 h-10 md:w-12 md:h-12");
        }
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const doubledNames = [...skillsData, ...skillsData, ...skillsData];
  const n = skillsData.length;

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div ref={containerRef} className="relative w-full max-w-[440px] aspect-square mx-auto">
        <GlobeBackground />
        <div className="absolute inset-0 animate-wheel-2d">
          {skillsData.map((skill, i) => {
            const angle = (i / n) * 360;
            const Icon = skill.icon;
            return (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                style={{
                  transform: `rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
                }}
              >
                <Icon className={`${iconSize} transition-all duration-300 hover:scale-125`} style={{ color: skill.color }} />
              </div>
            );
          })}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-iron-blue/30 animate-pulse-ring" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-iron-blue/20 rounded-full blur-xl animate-pulse-glow" />
      </div>

      <div className="relative w-full overflow-hidden py-3 border-y border-iron-blue/20">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none z-10" />
        <div className="flex animate-ticker-horizontal whitespace-nowrap">
          {doubledNames.map((skill, idx) => (
            <span key={idx} className="mx-4 md:mx-6 text-xs md:text-base font-medium text-text-secondary hover:text-iron-blue-light transition-colors duration-300 cursor-default">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== PAGE EXPERIENCE ====================
const Experience = () => {
  return (
    <section id="experiences" className="py-16 md:py-24 px-4 md:px-8 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gold">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Education, language skills, and professional goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Academic */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <GraduationCap className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Academic <span className="text-gold">Background</span>
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-gold/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-gold rounded-full shadow-lg shadow-gold/30" />
                <div className="bg-gradient-to-br from-royal/10 to-gold/5 p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-sm font-semibold text-gold">2026 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">Bachelor's in Computer Science (L2)</h4>
                  <p className="text-text-secondary mb-3">
                    Digital Transformation track. Building strong foundations in web development while nurturing a passion for robotics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-royal/20 text-royal-light text-sm rounded-full border border-royal/20">Web Dev</span>
                    <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20">Programming</span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">Digital Transformation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-text-secondary/30 rounded-full" />
                <div className="bg-gradient-to-br from-royal/10 to-gold/5 p-6 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-text-secondary/50" />
                    <span className="text-sm font-semibold text-text-secondary/50">2024</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">High School Diploma (Scientific)</h4>
                  <p className="text-text-secondary">Obtained scientific high school diploma, solid foundation in mathematics and physics.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Languages */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Language <span className="text-gold">Skills</span>
              </h3>
            </div>

            <div className="space-y-6 mb-10">
              {[
                { language: "Malagasy", level: "Mother tongue", levelText: "Native", color: "from-green-500 to-emerald-400" },
                { language: "French", level: "Good command", levelText: "Native", color: "from-blue-500 to-blue-400" },
                { language: "English", level: "Intermediate", levelText: "B1/B2", color: "from-gold to-gold-light" },
                { language: "German", level: "Beginner", levelText: "A1/A2", color: "from-orange-500 to-orange-400" }
              ].map((lang, idx) => (
                <div key={idx} className="bg-gradient-to-br from-royal/10 to-gold/5 p-5 rounded-xl border border-gold/5 hover:border-gold/20 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg text-text-primary">{lang.language}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-royal/20 text-text-secondary border border-gold/10">{lang.levelText}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">{lang.level}</p>
                  <div className="h-1.5 bg-royal/20 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                         style={{ width: lang.language === "Malagasy" || lang.language === "French" ? "100%" : lang.language === "English" ? "60%" : "30%" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-royal/20 to-gold/5 p-6 rounded-xl border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-gold" />
                <h4 className="text-xl font-bold text-text-primary">Professional Goals</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Master web development today to explore the exciting intersection between digital and robotics tomorrow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-text-secondary">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Excel in web development (my current expertise)</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Rocket className="w-4 h-4 text-gold" />
                  <span>Explore robotics and automation as a future path</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Brain className="w-4 h-4 text-gold" />
                  <span>Build projects bridging digital and physical worlds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== TECHNICAL SKILLS : ROUE 2D DANS UN FOND GALACTIQUE ===== */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-royal to-royal/50 rounded-full flex items-center justify-center border border-gold/30 shadow-lg shadow-royal/20">
              <Code2 className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              Technical <span className="text-gold">Skills</span>
            </h3>
          </div>

          <div className="relative py-10 px-4 md:px-10 rounded-2xl border border-gold/10">
            <GalaxyBackground />
            <div className="relative z-10">
              <RoueSkills />
            </div>
          </div>
        </div>

        {/* ===== APPROACH ===== */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-gold" />
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              My <span className="text-gold">Approach</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Active Learning",
                description: "I build my skills through hands-on projects and personal research, growing as a developer every day."
              },
              {
                icon: Rocket,
                title: "Adaptability",
                description: "From web development to robotics, I embrace new technologies with enthusiasm and dedication."
              },
              {
                icon: Target,
                title: "Long-Term Vision",
                description: "My current focus on web development is a stepping stone toward my dream: merging digital with robotics."
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-royal/10 to-gold/5 p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10 group">
                  <div className="w-14 h-14 bg-royal/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-4">{item.title}</h4>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;