import { GraduationCap, Code2, Globe, Users, Calendar, BookOpen } from "lucide-react";

const Experience = () => {
  return (
    <section id="experiences" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mon <span className="text-accent">Parcours</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Formations, compétences linguistiques et objectifs professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Colonne gauche - Formation académique */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Formation <span className="text-accent">Académique</span></h3>
            </div>

            {/* Timeline formation */}
            <div className="relative pl-8 border-l-2 border-accent space-y-8">
              {/* Étape actuelle */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-accent rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">2026 - Présent</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Licence 2 en Informatique</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    Formation approfondie en programmation, algorithmique et technologies web.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      Algorithmique
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full">
                      Programmation
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      Bases de données
                    </span>
                  </div>
                </div>
              </div>

              {/* Bac */}
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-500">2024</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Baccalauréat Scientifique</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Obtention du baccalauréat scientifique, bonne base en mathématique et en physique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Compétences et langues */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Compétences <span className="text-primary">Linguistiques</span></h3>
            </div>

            {/* Langues */}
            <div className="space-y-6 mb-10">
              {[
                { language: "Français", level: "Bonne maîtrise", levelText: "Natif", color: "bg-blue-500" },
                { language: "Malgache", level: "Langue maternelle", levelText: "Natif", color: "bg-green-500" },
                { language: "Anglais", level: "Intermédiaire", levelText: "B1/B2", color: "bg-purple-500" },
                { language: "Allemand", level: "Débutant", levelText: "A1/A2", color: "bg-orange-500" }
              ].map((lang, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{lang.language}</span>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                      {lang.levelText}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{lang.level}</p>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${lang.color} rounded-full`}
                      style={{ 
                        width: lang.language === "Français" || lang.language === "Malgache" ? "100%" :
                               lang.language === "Anglais" ? "70%" : "40%" 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Objectifs */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
                <h4 className="text-xl font-bold">Objectifs Professionnels</h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Développer une expertise technique solide en informatique pour évoluer dans le domaine 
                de la robotique et de l'intelligence artificielle.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Spécialisation en robotique et automatisation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Maîtrise approfondie du développement web</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Projets concrets en intelligence artificielle</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section compétences techniques */}
        <div className="mt-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-center">Compétences <span className="text-primary">Techniques</span></h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", icon: "JS", color: "bg-yellow-100 dark:bg-yellow-900/30", textColor: "text-yellow-700 dark:text-yellow-300" },
              { name: "React", icon: "⚛️", color: "bg-blue-100 dark:bg-blue-900/30", textColor: "text-blue-700 dark:text-blue-300" },
              { name: "Python", icon: "🐍", color: "bg-green-100 dark:bg-green-900/30", textColor: "text-green-700 dark:text-green-300" },
              { name: "HTML/CSS", icon: "🌐", color: "bg-orange-100 dark:bg-orange-900/30", textColor: "text-orange-700 dark:text-orange-300" },
              { name: "Java", icon: "☕", color: "bg-red-100 dark:bg-red-900/30", textColor: "text-red-700 dark:text-red-300" },
              { name: "Tailwind", icon: "🎨", color: "bg-teal-100 dark:bg-teal-900/30", textColor: "text-teal-700 dark:text-teal-300" },
              { name: "Bootstrap", icon: "🚀", color: "bg-purple-100 dark:bg-purple-900/30", textColor: "text-purple-700 dark:text-purple-300" },
              { name: "Git", icon: "📦", color: "bg-gray-100 dark:bg-gray-700", textColor: "text-gray-700 dark:text-gray-300" }
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  <span className={skill.textColor}>{skill.icon}</span>
                </div>
                <h4 className="font-bold text-lg">{skill.name}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {["JavaScript", "React", "HTML/CSS"].includes(skill.name) ? "Intermédiaire" : 
                   ["Python", "Java"].includes(skill.name) ? "Bases solides" : "Connaissance"}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section valeurs */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-accent" />
            <h3 className="text-2xl md:text-3xl font-bold">Mon <span className="text-accent">Approche</span></h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Apprentissage Actif",
                description: "Je me forme activement aux nouvelles technologies à travers des projets pratiques et des recherches personnelles."
              },
              {
                title: "Adaptabilité",
                description: "Capacité à m'adapter rapidement aux nouvelles technologies et méthodologies de travail."
              },
              {
                title: "Curiosité Technologique",
                description: "Une soif d'apprendre qui me pousse à explorer constamment les innovations en robotique et développement web."
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-4">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;