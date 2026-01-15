import { Code2, Cpu, Globe, Shield, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="apropos" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            À <span className="text-accent">Propos</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mon parcours, mes compétences et ma vision pour l'avenir de la technologie
          </p>
        </div>

        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Côté gauche - Texte et expérience */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Mon <span className="text-accent">Parcours</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Passionné par l'intersection entre la robotique et le développement web, 
              je consacre mon temps à créer des solutions innovantes qui combinent 
              intelligence artificielle, automatisation et expériences utilisateur exceptionnelles.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Mon approche allie rigueur technique et créativité pour transformer des concepts 
              complexes en applications fonctionnelles et accessibles. Chaque projet est 
              l'occasion de repousser les limites de l'innovation technologique.
            </p>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-8 h-8 text-accent" />
                  <span className="text-3xl font-bold">20+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Projets réalisés</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Cpu className="w-8 h-8 text-accent" />
                  <span className="text-3xl font-bold">5+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Projets en robotique</p>
              </div>
            </div>

            {/* Bouton */}
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg px-8 inline-flex items-center gap-2"
            >
              Travaillons ensemble
              <Zap className="w-5 h-5" />
            </a>
          </div>

          {/* Côté droit - Compétences */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Mes <span className="text-accent">Compétences</span>
            </h3>

            {/* Barres de compétences */}
            <div className="space-y-6">
              {[
                { skill: "Développement Frontend", level: 75, icon: <Code2 className="w-5 h-5" /> },
                { skill: "Robotique & Automatisation", level: 60, icon: <Cpu className="w-5 h-5" /> },
                { skill: "JavaScript & React", level: 70, icon: <Globe className="w-5 h-5" /> },
                { skill: "Python & Programmation", level: 65, icon: <Shield className="w-5 h-5" /> },
                { skill: "UI/UX Design", level: 60, icon: <Users className="w-5 h-5" /> },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span className="font-medium">{item.skill}</span>
                    </div>
                    <span className="text-sm font-bold">{item.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section valeurs */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Mes <span className="text-accent">Valeurs</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Innovation Continue",
                description: "Je recherche constamment les technologies émergentes pour créer des solutions d'avant-garde."
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Qualité & Fiabilité",
                description: "Chaque ligne de code est écrite avec rigueur pour garantir des performances optimales."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Collaboration",
                description: "Je crois en la puissance du travail d'équipe pour atteindre l'excellence technique."
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <div className="text-accent">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section vision */}
        <div className="mt-20 bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-8 md:p-12 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Vision pour l'<span className="text-accent">Avenir</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Je m'imagine contribuer à la prochaine révolution technologique où 
                la robotique et le web convergent pour créer des expériences 
                numériques plus intelligentes, plus intuitives et plus accessibles.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Mon objectif est de développer des systèmes qui non seulement 
                automatisent les tâches répétitives mais qui améliorent 
                significativement la qualité de vie et l'efficacité dans divers secteurs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-accent/20 rounded-full flex items-center justify-center">
                  <Cpu className="w-24 h-24 text-accent animate-pulse" />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;