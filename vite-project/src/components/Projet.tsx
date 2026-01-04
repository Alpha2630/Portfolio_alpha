import { ExternalLink, Github, Cpu, Code2, Globe, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Site Portfolio Robotique",
      description: "Un site web interactif présentant des projets robotiques avec des animations 3D et des démonstrations en temps réel.",
      tags: ["React", "Three.js", "Tailwind", "Framer Motion"],
      icon: <Cpu className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-500/10"
    },
    {
      title: "Application Web IoT",
      description: "Dashboard pour contrôler et monitorer des dispositifs IoT avec visualisation de données en temps réel.",
      tags: ["JavaScript", "Node.js", "Chart.js", "WebSocket"],
      icon: <Zap className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-green-500/10"
    },
    {
      title: "Simulateur Robotique",
      description: "Application web pour simuler des mouvements de robots avec des paramètres configurables et des résultats visuels.",
      tags: ["Python", "React", "Pygame", "API REST"],
      icon: <Code2 className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-purple-500/10"
    },
    {
      title: "E-commerce Technologique",
      description: "Plateforme e-commerce moderne spécialisée dans les composants électroniques et kits robotiques.",
      tags: ["React", "Redux", "Stripe", "MongoDB"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-orange-500/10"
    },
    {
      title: "API pour Contrôle Robotique",
      description: "API RESTful pour contrôler des robots à distance avec authentification et logging des actions.",
      tags: ["Node.js", "Express", "JWT", "MongoDB"],
      icon: <Cpu className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-red-500/10"
    },
    {
      title: "Interface Contrôleur Robot",
      description: "Interface utilisateur intuitive pour contrôler un robot mobile avec commandes en temps réel et retour vidéo.",
      tags: ["React", "WebRTC", "Socket.io", "Bootstrap"],
      icon: <Zap className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="projets" className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-accent">Projets</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez mes réalisations en développement web et robotique, où l'innovation rencontre la technologie
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="btn btn-sm btn-active">Tous</button>
          <button className="btn btn-sm btn-ghost">Robotique</button>
          <button className="btn btn-sm btn-ghost">Web</button>
          <button className="btn btn-sm btn-ghost">React</button>
          <button className="btn btn-sm btn-ghost">IoT</button>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 right-4 ${project.color} w-12 h-12 rounded-full flex items-center justify-center`}>
                  <div className="text-gray-800 dark:text-white">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    className="btn btn-sm btn-outline flex-1 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="btn btn-sm btn-primary flex-1 flex items-center justify-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Des idées de projets ?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vous avez un projet en tête ? Discutons de comment nous pouvons collaborer 
              pour donner vie à vos idées les plus innovantes.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Proposer un projet
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;