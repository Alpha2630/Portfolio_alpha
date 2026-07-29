import { useEffect, useRef } from "react";
import { Code2, Cpu, Globe, Shield, Users, Zap } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: "gold" | "royal";
}

/**
 * AmbientNetwork
 * Nuage de particules dorées/royales qui dérivent lentement et se
 * relient entre elles quand elles sont proches, comme une constellation
 * vivante en arrière-plan.
 */
const AmbientNetwork = () => {
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

    const GOLD = "212, 175, 55";
    const ROYAL = "94, 132, 214";

    const PARTICLE_COUNT = 55;
    const particles: Particle[] = [];

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

    const seedParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: 1 + Math.random() * 1.8,
          hue: Math.random() < 0.35 ? "gold" : "royal",
        });
      }
    };

    const LINK_DIST = 140;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const opacity = 0.14 * (1 - dist / LINK_DIST);
            const color = a.hue === "gold" ? GOLD : ROYAL;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(" + color + ", " + opacity + ")";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        const color = p.hue === "gold" ? GOLD : ROYAL;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + color + ", 0.55)";
        ctx.fill();

        // halo léger autour de chaque nœud
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + color + ", 0.05)";
        ctx.fill();
      });
    };

    const tick = () => {
      draw();
      rafId = requestAnimationFrame(tick);
    };

    resize();
    seedParticles();

    if (prefersReducedMotion) {
      draw();
    } else {
      tick();
    }

    const onResize = () => {
      resize();
      seedParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
};

const About = () => {
  return (
    <section id="apropos" className="relative py-16 md:py-24 px-4 md:px-8 bg-bg-primary overflow-hidden">

      {/* ===== FOND ANIMÉ : RÉSEAU AMBIANT ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <AmbientNetwork />
      </div>

      {/* Effets de fond existants */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      {/* ===== CONTENU PRINCIPAL ===== */}

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Discover my journey, my skills, and my vision for the future of technology
          </p>
        </div>

        {/* Main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              My <span className="text-gold">Journey</span>
            </h3>

            <p className="text-text-secondary mb-6 leading-relaxed">
              Currently in my second year of Computer Science, Digital Transformation track,
              I'm building strong foundations for my tech career. Passionate about
              web development, I dream of one day exploring the fascinating world
              of robotics.
            </p>

            <p className="text-text-secondary mb-8 leading-relaxed">
              My curiosity and thirst for learning push me to exceed my limits every day.
              While my current skills are rooted in web development, my vision extends
              far beyond: I want to understand how digital technology can bring matter
              to life through robotics.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Zap className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-3xl font-bold text-text-primary">10+</span>
                </div>
                <p className="text-text-secondary">Web projects completed</p>
              </div>

              <div className="bg-bg-card p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-royal/20 rounded-lg border border-gold/20 group-hover:border-gold/50 transition-all">
                    <Cpu className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-3xl font-bold text-text-primary">∞</span>
                </div>
                <p className="text-text-secondary">Passion for robotics</p>
              </div>
            </div>

            {/* Bouton corrigé ✅ */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-bg-primary font-semibold rounded-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
            >
              Let's work together
              <Zap className="w-5 h-5" />
            </a>
          </div>

          {/* Right side - Skills */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
              My <span className="text-gold">Skills</span>
            </h3>

            <div className="space-y-6">
              {[
                { skill: "Frontend Development", level: 75, icon: Code2, color: "#61DAFB" },
                { skill: "JavaScript & React", level: 70, icon: Globe, color: "#F7DF1E" },
                { skill: "HTML & CSS", level: 80, icon: Code2, color: "#E34F26" },
                { skill: "Robotics (Beginner)", level: 20, icon: Cpu, color: "#00D4FF" },
                { skill: "Digital Transformation", level: 65, icon: Users, color: "#D4AF37" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-royal/20 rounded-lg border border-gold/10 group-hover:border-gold/30 transition-all">
                          <Icon className="w-4 h-4 text-gold" />
                        </div>
                        <span className="font-medium text-text-primary">{item.skill}</span>
                      </div>
                      <span className="text-sm font-bold text-gold-light">{item.level}%</span>
                    </div>
                    <div className="h-1.5 bg-royal/20 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{
                          width: `${item.level}%`,
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                          boxShadow: `0 0 20px ${item.color}33`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-12">
            My <span className="text-gold">Values</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Insatiable Curiosity",
                description: "I learn every day to become the developer I aspire to be tomorrow.",
              },
              {
                icon: Shield,
                title: "Continuous Learning",
                description: "From my studies to personal projects, every step is an opportunity to grow.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "I believe in the power of teamwork to turn ideas into reality.",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-bg-card p-8 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-royal/10 group"
                >
                  <div className="w-16 h-16 bg-royal/20 rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:border-gold/50 transition-all group-hover:scale-110">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-4">{value.title}</h4>
                  <p className="text-text-secondary">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision section */}
        <div className="mt-20 bg-gradient-to-br from-royal/20 to-gold/5 p-8 md:p-12 rounded-2xl border border-gold/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-transparent to-gold/10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                My Vision for the <span className="text-gold">Future</span>
              </h3>
              <p className="text-text-secondary mb-4">
                As a digital transformation student, I'm preparing to be a driver of change.
                My goal: master web development today so that tomorrow, I can explore
                the perfect fusion between digital and robotics.
              </p>
              <p className="text-text-secondary">
                I'm convinced that the future belongs to those who can build bridges
                between virtual and physical worlds. This dual passion will guide
                my professional journey in the years to come.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-royal/30 to-gold/20 rounded-full flex items-center justify-center border border-gold/30 shadow-2xl shadow-royal/20 animate-pulse-gold">
                  <Cpu className="w-24 h-24 text-gold" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-royal/30 rounded-full -z-10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/20 rounded-full -z-10 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;