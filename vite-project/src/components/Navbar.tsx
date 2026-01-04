import { Container, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navLinks = [
    { name: "Accueil", href: "#", id: "home" },
    { name: "A propos", href: "#apropos", id: "apropos" },
    { name: "Mes experiences", href: "#experiences", id: "experiences" },
    { name: "Mes projets", href: "#projets", id: "projets" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Utilisation de l'Intersection Observer pour une détection plus précise
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px", // Détecte quand la section est à 100px du haut
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    // Observer toutes les sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Gestion spéciale pour le haut de page
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection("home");
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Calculer la position avec offset
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Mettre à jour la section active immédiatement pour le feedback visuel
        setActiveSection(id);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-center md:justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center font-bold text-2xl md:text-xl hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#", "home");
          }}
        >
          <Container className="mr-2 w-7 h-7 md:w-6 md:h-6"/>
          ALPHA<span className="text-accent">DEV</span>
        </a>

        {/* Menu Desktop - Version simplifiée */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href, link.id)}
              className={`
                relative px-5 py-3 rounded-lg transition-all duration-300
                font-medium whitespace-nowrap
                ${activeSection === link.id 
                  ? 'text-accent font-bold' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-accent'
                }
                group
              `}
            >
              {link.name}
              {/* Indicateur de section active */}
              <div className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2
                h-1 w-12 rounded-full
                transition-all duration-300
                ${activeSection === link.id 
                  ? 'bg-accent scale-100 opacity-100' 
                  : 'bg-accent/0 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-50'
                }
              `} />
            </button>
          ))}
        </div>

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden btn btn-ghost btn-circle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-7 h-7 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.id)}
                className={`
                  flex items-center justify-between py-4 px-6
                  transition-all duration-200 text-left
                  font-medium
                  ${activeSection === link.id
                    ? 'bg-accent/10 text-accent border-r-4 border-accent'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                <span>{link.name}</span>
                {activeSection === link.id && (
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;