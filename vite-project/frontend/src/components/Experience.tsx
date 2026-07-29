import { useEffect, useRef } from "react";
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

// ==================== GLOBE BACKGROUND (identique à celui de Home) ====================
const GlobeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0, height = 0, dpr = 1, rafId = 0, angle = 0;
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

      // Projection 3D
      const projected = points.map((p) => {
        // Rotation autour de Y
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;
        // Rotation autour de X (inclinaison)
        const y2 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;
        const scale = 1.4 / (1.4 - z2 * 0.9);
        const sx = cx + x1 * radius * scale;
        const sy = cy + y2 * radius * scale;
        const depth = (z2 + 1) / 2;
        return { sx, sy, depth };
      });

      // Trier par profondeur
      const sorted = projected.slice().sort((a, b) => a.depth - b.depth);

      // Lignes
      const LINK_DIST = radius * 0.62;
      const COLOR_LINE = "56, 189, 248";   // cyan clair
      const COLOR_NODE = "125, 211, 248";  // bleu clair

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

      // Points
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

    resize();
    tick();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />;
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

// ==================== ROUE 2D ====================
const RoueSkills = () => {
  const doubledNames = [...skillsData, ...skillsData, ...skillsData];
  const n = skillsData.length;
  const rayon = 170;

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Conteneur de la roue avec fond globe en arrière-plan */}
      <div className="relative w-96 h-96 md:w-[440px] md:h-[440px]">
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
                  transform: `rotate(${angle}deg) translateX(${rayon}px) rotate(${-angle}deg)`,
                }}
              >
                <Icon
                  className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-125"
                  style={{ color: skill.color }}
                />
              </div>
            );
          })}
        </div>
        {/* Cercle central (Arc Reactor) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-iron-blue/30 animate-pulse-ring" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-iron-blue/20 rounded-full blur-xl animate-pulse-glow" />
      </div>

      {/* Ticker horizontal */}
      <div className="relative w-full overflow-hidden py-3 border-y border-iron-blue/20">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none z-10" />
        <div className="flex animate-ticker-horizontal whitespace-nowrap">
          {doubledNames.map((skill, idx) => (
            <span key={idx} className="mx-6 text-sm md:text-base font-medium text-text-secondary hover:text-iron-blue-light transition-colors duration-300 cursor-default">
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
      {/* Dégradés de fond existants (sans le globe global) */}
      <div className="absolute inset-0 bg-gradient-to-b from-iron-blue/5 via-transparent to-iron-blue/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-iron-blue/10 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-iron-blue-light">Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Education, language skills, and professional goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Academic */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-iron-blue/20 rounded-full flex items-center justify-center border border-iron-blue/30">
                <GraduationCap className="w-6 h-6 text-iron-blue-light" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Academic <span className="text-iron-blue-light">Background</span>
              </h3>
            </div>

            <div className="relative pl-8 border-l-2 border-iron-blue/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-iron-blue-light rounded-full shadow-lg shadow-iron-blue/30" />
                <div className="bg-gradient-to-br from-iron-blue/10 to-transparent p-6 rounded-xl border border-iron-blue/20 hover:border-iron-blue/40 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-iron-blue-light" />
                    <span className="text-sm font-semibold text-iron-blue-light">2026 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">Bachelor's in Computer Science (L2)</h4>
                  <p className="text-text-secondary mb-3">
                    Digital Transformation track. Building strong foundations in web development while nurturing a passion for robotics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-iron-blue/20 text-iron-blue-light text-sm rounded-full border border-iron-blue/20">Web Dev</span>
                    <span className="px-3 py-1 bg-iron-blue/20 text-iron-blue-light text-sm rounded-full border border-iron-blue/20">Programming</span>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">Digital Transformation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-text-secondary/30 rounded-full" />
                <div className="bg-gradient-to-br from-iron-blue/10 to-transparent p-6 rounded-xl border border-iron-blue/10 hover:border-iron-blue/30 transition-all duration-300">
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
              <div className="w-12 h-12 bg-iron-blue/20 rounded-full flex items-center justify-center border border-iron-blue/30">
                <Globe className="w-6 h-6 text-iron-blue-light" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                Language <span className="text-iron-blue-light">Skills</span>
              </h3>
            </div>

            <div className="space-y-6 mb-10">
              {[
                { language: "Malagasy", level: "Mother tongue", levelText: "Native", color: "from-green-500 to-emerald-400" },
                { language: "French", level: "Good command", levelText: "Native", color: "from-blue-500 to-blue-400" },
                { language: "English", level: "Intermediate", levelText: "B1/B2", color: "from-iron-blue-light to-iron-blue-lighter" },
                { language: "German", level: "Beginner", levelText: "A1/A2", color: "from-orange-500 to-orange-400" }
              ].map((lang, idx) => (
                <div key={idx} className="bg-gradient-to-br from-iron-blue/10 to-transparent p-5 rounded-xl border border-iron-blue/10 hover:border-iron-blue/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg text-text-primary">{lang.language}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-iron-blue/20 text-text-secondary border border-iron-blue/20">{lang.levelText}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">{lang.level}</p>
                  <div className="h-1.5 bg-iron-blue/20 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000`}
                         style={{ width: lang.language === "Malagasy" || lang.language === "French" ? "100%" : lang.language === "English" ? "60%" : "30%" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-iron-blue/20 to-transparent p-6 rounded-xl border border-iron-blue/30">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-iron-blue-light" />
                <h4 className="text-xl font-bold text-text-primary">Professional Goals</h4>
              </div>
              <p className="text-text-secondary mb-4">
                Master web development today to explore the exciting intersection between digital and robotics tomorrow.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-text-secondary">
                  <Sparkles className="w-4 h-4 text-iron-blue-light" />
                  <span>Excel in web development (my current expertise)</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Rocket className="w-4 h-4 text-iron-blue-light" />
                  <span>Explore robotics and automation as a future path</span>
                </li>
                <li className="flex items-center gap-2 text-text-secondary">
                  <Brain className="w-4 h-4 text-iron-blue-light" />
                  <span>Build projects bridging digital and physical worlds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== TECHNICAL SKILLS : ROUE 2D AVEC FOND GLOBE ===== */}
        <div className="mt-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-14 h-14 bg-gradient-to-br from-iron-blue to-iron-blue/50 rounded-full flex items-center justify-center border border-iron-blue/30 shadow-lg shadow-iron-blue/20">
              <Code2 className="w-7 h-7 text-iron-blue-light" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary">
              Technical <span className="text-iron-blue-light">Skills</span>
            </h3>
          </div>

          <RoueSkills />
        </div>

        {/* ===== APPROACH ===== */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-iron-blue-light" />
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              My <span className="text-iron-blue-light">Approach</span>
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
                <div key={idx} className="bg-gradient-to-br from-iron-blue/10 to-transparent p-8 rounded-xl border border-iron-blue/10 hover:border-iron-blue/30 transition-all duration-300 hover:shadow-xl hover:shadow-iron-blue/10 group">
                  <div className="w-14 h-14 bg-iron-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-iron-blue/20 group-hover:border-iron-blue/50 transition-all">
                    <Icon className="w-7 h-7 text-iron-blue-light group-hover:scale-110 transition-transform" />
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