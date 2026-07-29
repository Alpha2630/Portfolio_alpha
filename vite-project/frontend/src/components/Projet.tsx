import { useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Globe,
  Zap,
  ShoppingCart,
  Users,
  Rocket,
} from "lucide-react";

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
 * Réseau de particules pour l'arrière-plan (même que sur About/Experience)
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

    const PARTICLE_COUNT = 40;
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
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: 1 + Math.random() * 1.6,
          hue: Math.random() < 0.35 ? "gold" : "royal",
        });
      }
    };

    const LINK_DIST = 130;

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
            const opacity = 0.10 * (1 - dist / LINK_DIST);
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
        ctx.fillStyle = "rgba(" + color + ", 0.45)";
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

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website built to showcase web development skills and projects with dark mode support.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E-Commerce Product Page",
      description:
        "A fully responsive product page with image gallery, cart functionality, and smooth checkout flow.",
      tags: ["JavaScript", "React", "LocalStorage", "Responsive"],
      icon: <ShoppingCart className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Task Management Dashboard",
      description:
        "A Kanban-style dashboard for managing daily tasks with drag-and-drop functionality and local storage.",
      tags: ["React", "Tailwind", "Drag & Drop", "Context API"],
      icon: <Code2 className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time data from an API and displays forecasts with dynamic backgrounds.",
      tags: ["JavaScript", "API REST", "CSS3", "Geolocation"],
      icon: <Zap className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Student Management System",
      description:
        "A CRUD application for managing student records with search, filter, and data validation features.",
      tags: ["Java", "MySQL", "Swing", "MVC Pattern"],
      icon: <Users className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Landing Page Design",
      description:
        "A conversion-focused landing page with modern design, animations, and a lead capture form.",
      tags: ["HTML/CSS", "Bootstrap", "JavaScript", "AOS"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="projets" className="relative py-16 md:py-24 px-4 md:px-8 bg-bg-primary overflow-hidden">

      {/* ===== FOND ANIMÉ : RÉSEAU AMBIANT ===== */}
      <div className="absolute inset-0 pointer-events-none">
        <AmbientNetwork />
      </div>

      {/* Effets de fond */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal/5 via-transparent to-royal/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-royal/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-text-primary">
            My <span className="text-gold">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Discover my web development projects, where I build practical
            solutions while learning new technologies
          </p>
        </div>

        {/* Filters - Style premium */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button className="px-5 py-2 rounded-full bg-gold text-bg-primary font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20">
            All
          </button>
          <button className="px-5 py-2 rounded-full border border-gold/30 text-text-secondary hover:text-gold hover:border-gold/60 transition-all duration-300 text-sm">
            React
          </button>
          <button className="px-5 py-2 rounded-full border border-gold/30 text-text-secondary hover:text-gold hover:border-gold/60 transition-all duration-300 text-sm">
            JavaScript
          </button>
          <button className="px-5 py-2 rounded-full border border-gold/30 text-text-secondary hover:text-gold hover:border-gold/60 transition-all duration-300 text-sm">
            HTML/CSS
          </button>
          <button className="px-5 py-2 rounded-full border border-gold/30 text-text-secondary hover:text-gold hover:border-gold/60 transition-all duration-300 text-sm">
            Java
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-royal/10 to-gold/5 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-royal/10"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-royal/20 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-all">
                  <div className="text-gold">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-royal/20 text-gold-light text-xs rounded-full border border-gold/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gold/30 text-text-secondary hover:text-gold hover:border-gold/60 rounded-lg transition-all duration-300 text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gold to-gold-light text-bg-primary font-medium rounded-lg hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-br from-royal/20 via-gold/5 to-royal/10 p-8 md:p-12 rounded-2xl max-w-3xl mx-auto border border-gold/20 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-royal/10 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-royal/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-royal/20 rounded-full flex items-center justify-center border border-gold/30 group-hover:border-gold/50 transition-all duration-300">
                  <Rocket className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Have a <span className="text-gold">project</span> idea?
              </h3>

              <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                I'm always open to new opportunities. Let's discuss how we can
                work together to bring your ideas to life.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gold to-gold-light text-bg-primary font-semibold rounded-xl hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Let's collaborate
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;