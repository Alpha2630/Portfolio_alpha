import { ArrowRight } from "lucide-react";
import Profil from "../assets/font/alpha_cv.png"

const Home = () => {
  return (
    <section className="relative min-h-screen py-10 md:py-20 px-4 md:px-8 bg-bg-primary overflow-hidden">

      {/* Animations Iron Man - Arrière-plan */}

      {/* Ligne de scan horizontale */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-iron-blue-light to-transparent animate-scan-line" />
      </div>

      {/* Ligne de scan verticale */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-iron-blue-light to-transparent animate-scan-vertical" />
      </div>

      {/* Lignes horizontales multiples */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full h-[1px] bg-iron-blue/10 animate-grid-line"
            style={{
              top: `${15 + i * 14}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Lignes diagonales éparpillées */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-iron-blue-light/40 to-transparent rotate-12 animate-diagonal-scan" />
        <div className="absolute top-[30%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-iron-blue-light/20 to-transparent -rotate-6 animate-diagonal-scan delay-1000" />
        <div className="absolute top-[50%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-iron-blue-light/15 to-transparent rotate-20 animate-diagonal-scan delay-2000" />
        <div className="absolute top-[70%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-iron-blue-light/30 to-transparent -rotate-12 animate-diagonal-scan delay-3000" />
        <div className="absolute top-[90%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-iron-blue-light/10 to-transparent rotate-8 animate-diagonal-scan delay-4000" />
      </div>

      {/* Particules lumineuses */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-iron-blue-light/40 animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Cercle Iron Man (Arc Reactor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border border-iron-blue/20 animate-pulse-ring" />
        <div className="absolute inset-0 w-[500px] h-[500px] rounded-full border border-iron-blue/10 animate-pulse-ring-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-iron-blue/10 blur-2xl animate-pulse-glow" />
      </div>

      {/* Effet de cascade de données */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-0.5 h-4 bg-iron-blue/30 animate-data-cascade" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <div className="absolute top-[40%] right-[10%] flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-0.5 h-3 bg-iron-blue/20 animate-data-cascade" style={{ animationDelay: `${i * 0.25 + 1}s` }} />
          ))}
        </div>
        <div className="absolute bottom-[30%] left-[8%] flex gap-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-0.5 h-5 bg-iron-blue/15 animate-data-cascade" style={{ animationDelay: `${i * 0.15 + 2}s` }} />
          ))}
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12">

          <div className="w-full md:w-1/2 md:order-1 order-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
                Web <span className="text-iron-blue-light">Developer</span> & Future <span className="text-iron-blue-light">Roboticist</span>
              </h1>

              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                Computer Science student (L2) in Digital Transformation. I build modern web experiences today,
                with the dream of exploring robotics tomorrow. Currently focused on creating clean, functional interfaces.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">JavaScript, Python, Java, HTML/CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">React, Bootstrap, Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-iron-blue-light rounded-full shrink-0"></div>
                  <span className="font-medium text-lg text-text-primary">Passionate about Web Dev & Robotics</span>
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
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
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