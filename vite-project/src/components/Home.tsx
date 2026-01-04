import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="py-10 md:py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Partie gauche - Texte */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Développeur <span className="text-accent">Full Stack</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
              Passionné par la création d&apos;applications web modernes et performantes.
              Je transforme vos idées en solutions numériques élégantes et fonctionnelles.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">Développement Frontend & Backend</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">Applications React & Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">UI/UX Design & Architecture</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn btn-primary btn-lg flex items-center justify-center gap-2"
              >
                Me contacter
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#projets" 
                className="btn btn-outline btn-lg"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          {/* Partie droite - Photo */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Conteneur pour la photo avec effets */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                {/* Remplacez "/photo-profil.jpg" par le chemin de votre photo */}
                <img
                  src="../assets/font/alpha_cv.png" // ← Modifiez ce chemin
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Élément décoratif */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
              
              {/* Badge d'expérience */}
              <div className="absolute -bottom-2 -right-2 md:bottom-8 md:-right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">5+ ans</span>
                <p className="text-xs">d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;