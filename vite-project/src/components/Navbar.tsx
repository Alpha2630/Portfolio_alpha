import { Container, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Accueil", href: "#", id: "home" },
    { name: "A propos", href: "#apropos", id: "apropos" },
    { name: "Mes experiences", href: "#experiences", id: "experiences" },
    { name: "Mes projets", href: "#projets", id: "projets" },
  ];

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setIsMenuOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80; // Ajustez selon la hauteur de votre navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-center md:justify-between items-center p-4 container mx-auto">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center font-bold text-3xl md:text-xl hover:text-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#", "home");
          }}
        >
          <Container className="mr-2"/>
          ALPHA<span className="text-accent">DEV</span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`
                  btn btn-sm btn-ghost 
                  transition-all duration-300
                  ${activeSection === link.id 
                    ? 'text-accent font-bold border-b-2 border-accent' 
                    : 'hover:text-accent'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden btn btn-ghost btn-sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div className={`
        md:hidden 
        bg-white dark:bg-gray-900 
        shadow-lg 
        transition-all duration-300 ease-in-out
        ${isMenuOpen 
          ? 'max-h-96 opacity-100 visible' 
          : 'max-h-0 opacity-0 invisible'
        }
        overflow-hidden
      `}>
        <ul className="flex flex-col py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`
                  block py-3 px-4 
                  rounded-lg 
                  transition-all duration-200
                  font-medium
                  ${activeSection === link.id
                    ? 'bg-accent/10 text-accent border-l-4 border-accent'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-accent'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;