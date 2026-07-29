import { ArrowRight } from "lucide-react";
import Profil from "../assets/font/alpha_cv.png"

const Home = () => {
  return (
    <section className="relative py-10 md:py-20 px-4 md:px-8 bg-bg-primary overflow-hidden">
      
      {/* ════════════════════════════════════════ */}
      {/* ANIMATIONS IRON MAN EN ARRIÈRE-PLAN  */}
      {/* ════════════════════════════════════════ */}
      
      {/* Lignes lumineuses diagonales */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ligne 1 - Diagonal descendante */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[-20%] left-[-10%] w-[200%] h-[2px] bg-gradient-to-r from-transparent via-royal-light to-transparent rotate-45 animate-sweep-down opacity-40" />
          <div className="absolute top-[-10%] left-[-5%] w-[180%] h-[1px] bg-gradient-to-r from-transparent via-royal-light/30 to-transparent rotate-45 animate-sweep-down delay-300 opacity-30" />
          <div className="absolute top-[10%] left-[-15%] w-[150%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent rotate-45 animate-sweep-down delay-600 opacity-20" />
        </div>

        {/* Ligne 2 - Diagonal ascendante */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <div className="absolute bottom-[-20%] right-[-10%] w-[200%] h-[2px] bg-gradient-to-l from-transparent via-royal-light to-transparent -rotate-45 animate-sweep-up opacity-40" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[180%] h-[1px] bg-gradient-to-l from-transparent via-royal-light/30 to-transparent -rotate-45 animate-sweep-up delay-400 opacity-30" />
          <div className="absolute bottom-[10%] right-[-15%] w-[150%] h-[1px] bg-gradient-to-l from-transparent via-gold/20 to-transparent -rotate-45 animate-sweep-up delay-700 opacity-20" />
        </div>
      </div>

      {/* Cercle lumineux (effet Arc Reactor) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-royal/10 animate-pulse-ring" />
        <div className="absolute inset-0 w-[600px] h-[600px] rounded-full border border-royal/5 animate-pulse-ring-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-royal/5 blur-3xl animate-pulse-glow" />
      </div>

      {/* Particules lumineuses */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-royal-light rounded-full animate-float-particle" />
        <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-gold/50 rounded-full animate-float-particle delay-300" />
        <div className="absolute top-[40%] left-[5%] w-0.5 h-0.5 bg-royal-light rounded-full animate-float-particle delay-600" />
        <div className="absolute top-[70%] left-[30%] w-1 h-1 bg-gold/30 rounded-full animate-float-particle delay-900" />
        <div className="absolute top-[30%] right-[20%] w-0.5 h-0.5 bg-royal-light rounded-full animate-float-particle delay-1200" />
        <div className="absolute top-[80%] right-[40%] w-1 h-1 bg-gold/20 rounded-full animate-float-particle delay-1500" />
      </div>

      {/* ════════════════════════════════════════ */}
      {/* CONTENU PRINCIPAL (INCHANGÉ) */}
      {/* ════════════════════════════════════════ */}
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12">

          <div className="w-full md:w-1/2 md:order-1 order-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Web <span className="text-accent">Developer</span> & Future <span className="text-accent">Roboticist</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Computer Science student (L2) in Digital Transformation. I build modern web experiences today, 
                with the dream of exploring robotics tomorrow. Currently focused on creating clean, functional interfaces.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                  <span className="font-medium text-lg">JavaScript, Python, Java, HTML/CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                  <span className="font-medium text-lg">React, Bootstrap, Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full shrink-0"></div>
                  <span className="font-medium text-lg">Passionate about Web Dev & Robotics</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="btn btn-primary btn-lg flex items-center justify-center gap-3 px-8 py-4 text-lg"
                >
                  Contact me
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a 
                  href="#projets" 
                  className="btn btn-outline btn-lg px-8 py-4 text-lg"
                >
                  View my projects
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:order-2 order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src={Profil}
                  alt="Profile photo"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10 hidden md:block"></div>
              
              <div className="absolute -bottom-3 -right-3 md:bottom-10 md:-right-6 bg-primary text-white px-5 py-3 rounded-xl shadow-xl">
                <span className="font-bold text-lg">Developer</span>
              </div>
              
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium md:hidden">
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