import { ArrowRight } from "lucide-react";
import Profil from "../assets/font/alpha_cv.png"

const Home = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12">
          {/* Partie texte - À GAUCHE sur desktop */}
          <div className="w-full md:w-1/2 md:order-1 order-2">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Passionné de <span className="text-accent">Robotique</span> & <span className="text-accent">Développement</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Je combine ma passion pour la robotique avec l'expertise en développement web pour créer des solutions innovantes et performantes. 
                Spécialisé dans la conception d'interfaces modernes et l'automatisation intelligente.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-lg">Expertise en JavaScript, Python, Java, HTML/CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-lg">Maîtrise de React, Bootstrap, Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-medium text-lg">Innovation en Robotique & Développement Web</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="btn btn-primary btn-lg flex items-center justify-center gap-3 px-8 py-4 text-lg"
                >
                  Me contacter
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a 
                  href="#projets" 
                  className="btn btn-outline btn-lg px-8 py-4 text-lg"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
          </div>

          {/* Partie photo - À DROITE sur desktop */}
          <div className="w-full md:w-1/2 flex justify-center md:order-2 order-1">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img
                  src={Profil}
                  alt="Photo de profil"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' dy='.3em' fill='%239ca3af'%3EPhoto%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/10 rounded-full -z-10 hidden md:block"></div>
              
              <div className="absolute -bottom-3 -right-3 md:bottom-10 md:-right-6 bg-primary text-white px-5 py-3 rounded-xl shadow-xl">
                <span className="font-bold text-lg">Dévellopeur</span>
                <p className="text-xs">Innovation</p>
              </div>
              
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium md:hidden">
                Mon profil
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Home;