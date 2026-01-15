import { Container, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navLinks = [
    { name: "Accueil", href: "#", id: "home" },
    { name: "À propos", href: "#apropos", id: "apropos" },
    { name: "Expériences", href: "#experiences", id: "experiences" },
    { name: "Projets", href: "#projets", id: "projets" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Intersection Observer pour détecter la section active
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
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

    // Observer chaque section
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

  // Reset à "home" quand on scroll tout en haut
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Si on est tout en haut, on est sur "home"
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
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Met à jour la section active après le clic
      setActiveSection(id);
    }
  };

  // Fermer le menu en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
        }
      `}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#", "home");
          }}
          className="flex items-center font-bold text-2xl tracking-wide hover:text-accent transition-colors"
        >
          <Container className="w-6 h-6 mr-2 text-accent" />
          ALPHA<span className="text-accent">TECH</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.id)}
              className={`relative font-medium transition-all duration-300 px-1
                ${
                  activeSection === link.id
                    ? "text-accent font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-accent"
                }
              `}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full animate-pulse" />
              )}
              
              {/* Indicateur hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent/30 rounded-full transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Ouvrir le menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-full w-72
                       bg-white dark:bg-gray-900
                       z-50 shadow-xl p-6 transform transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl">
                ALPHA<span className="text-accent">TECH</span>
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-between
                    ${
                      activeSection === link.id
                        ? "bg-accent/10 text-accent border-r-4 border-accent"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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
            
            {/* Footer du menu mobile */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                © {new Date().getFullYear()} AlphaTech
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;