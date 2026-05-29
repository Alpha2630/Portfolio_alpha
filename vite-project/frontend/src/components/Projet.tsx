import { ExternalLink, Github, Code2, Globe, Zap, ShoppingCart, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built to showcase web development skills and projects with dark mode support.",
      tags: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-500/10"
    },
    {
      title: "E-Commerce Product Page",
      description: "A fully responsive product page with image gallery, cart functionality, and smooth checkout flow.",
      tags: ["JavaScript", "React", "LocalStorage", "Responsive"],
      icon: <ShoppingCart className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-orange-500/10"
    },
    {
      title: "Task Management Dashboard",
      description: "A Kanban-style dashboard for managing daily tasks with drag-and-drop functionality and local storage.",
      tags: ["React", "Tailwind", "Drag & Drop", "Context API"],
      icon: <Code2 className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-purple-500/10"
    },
    {
      title: "Weather App",
      description: "A weather application that fetches real-time data from an API and displays forecasts with dynamic backgrounds.",
      tags: ["JavaScript", "API REST", "CSS3", "Geolocation"],
      icon: <Zap className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-yellow-500/10"
    },
    {
      title: "Student Management System",
      description: "A CRUD application for managing student records with search, filter, and data validation features.",
      tags: ["Java", "MySQL", "Swing", "MVC Pattern"],
      icon: <Users className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-green-500/10"
    },
    {
      title: "Landing Page Design",
      description: "A conversion-focused landing page with modern design, animations, and a lead capture form.",
      tags: ["HTML/CSS", "Bootstrap", "JavaScript", "AOS"],
      icon: <Globe className="w-8 h-8" />,
      github: "#",
      live: "#",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="projets" className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover my web development projects, where I build practical solutions while learning new technologies
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="btn btn-sm btn-active">All</button>
          <button className="btn btn-sm btn-ghost">React</button>
          <button className="btn btn-sm btn-ghost">JavaScript</button>
          <button className="btn btn-sm btn-ghost">HTML/CSS</button>
          <button className="btn btn-sm btn-ghost">Java</button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project image */}
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

              {/* Project content */}
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

                {/* Action buttons */}
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
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 dark:from-accent/20 dark:to-primary/20 p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a project idea?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to new opportunities. Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Let's collaborate
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;