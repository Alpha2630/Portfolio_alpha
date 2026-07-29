import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Profil from "../assets/font/alpha_cv.png";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

const NetworkGlobe = () => {
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
    let angle = 0;

    const COLOR_LINE = "56, 189, 248";
    const COLOR_NODE = "125, 211, 248";
    const COLOR_RING = "56, 189, 248";

    const POINT_COUNT = 140;
    const points: Point3D[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radiusAtY,
        y,
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
      const sphereRadius = Math.min(width, height) * 0.3;

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
        return {
          sx: cx + x1 * sphereRadius * scale,
          sy: cy + y2 * sphereRadius * scale,
          z: z2,
        };
      });

      const ringTilts = [0.15, 0.5, 0.85];
      ringTilts.forEach((rt, i) => {
        ctx.beginPath();
        ctx.ellipse(
          cx,
          cy,
          sphereRadius * (1.55 + i * 0.28),
          sphereRadius * (0.42 + i * 0.1),
          rt + angle * 0.15,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = "rgba(" + COLOR_RING + ", " + (0.1 - i * 0.02) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const LINK_DIST = sphereRadius * 0.62;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const depth = (a.z + b.z) / 2;
            const opacity = Math.max(
              0,
              0.22 * (depth + 1) * (1 - dist / LINK_DIST)
            );
            if (opacity <= 0.005) continue;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.strokeStyle = "rgba(" + COLOR_LINE + ", " + opacity + ")";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      const sorted = projected.slice().sort((a, b) => a.z - b.z);
      sorted.forEach((p) => {
        const depth = (p.z + 1) / 2;
        const r = 1.1 + depth * 1.6;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + COLOR_NODE + ", " + (0.25 + depth * 0.65) + ")";
        ctx.fill();
      });
    };

    const tick = () => {
      angle += 0.0016;
      draw();
      rafId = requestAnimationFrame(tick);
    };

    resize();
    if (prefersReducedMotion) {
      draw();
    } else {
      tick();
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
  );
};

const Home = () => {
  return (
    <section className="relative min-h-screen py-10 md:py-20 px-4 md:px-8 bg-bg-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <NetworkGlobe />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-iron-blue/10 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2 md:order-1 order-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
                Web <span className="text-iron-blue-light">Developer</span> and Future{" "}
                <span className="text-iron-blue-light">Roboticist</span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Computer Science student in Digital Transformation. I build modern web
                experiences today, with the dream of exploring robotics tomorrow. Currently
                focused on creating clean, functional interfaces.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">
                    JavaScript, Python, Java, HTML/CSS
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">
                    React, Bootstrap, Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">
                    Passionate about Web Dev and Robotics
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold bg-iron-blue-light hover:bg-iron-blue-lighter text-white rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-iron-blue/20"
                >
                  Contact me
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a
                  href="#projets"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium border border-iron-blue/30 text-text-primary hover:text-iron-blue-light rounded-xl hover:border-iron-blue/60 hover:shadow-lg hover:shadow-iron-blue/10 transition-all duration-300"
                >
                  View my projects
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:order-2 order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-iron-blue-light shadow-2xl shadow-iron-blue/20">
                <img
                  src={Profil}
                  alt="Profile photo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-iron-blue/20 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-iron-blue/10 rounded-full -z-10 hidden md:block"></div>

              <div className="absolute -bottom-3 -right-3 md:bottom-10 md:-right-6 bg-bg-secondary text-text-primary px-5 py-3 rounded-xl shadow-xl border border-iron-blue/20">
                <span className="font-bold text-lg">Developer</span>
              </div>

              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-iron-blue-light text-white px-4 py-1 rounded-full text-sm font-medium md:hidden">
                My profile
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;