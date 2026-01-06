import { Container, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Accueil", href: "#", id: "home" },
    { name: "À propos", href: "#apropos", id: "apropos" },
    { name: "Expériences", href: "#experiences", id: "experiences" },
    { name: "Projets", href: "#projets", id: "projets" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md border-b"
          : "bg-transparent"}
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
          className="flex items-center font-bold text-2xl tracking-wide"
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
              className={`relative font-medium transition
                ${
                  activeSection === link.id
                    ? "text-accent"
                    : "text-gray-700 dark:text-gray-300 hover:text-accent"
                }
              `}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>

        
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-full w-72
                       bg-white dark:bg-gray-900
                       z-50 shadow-xl p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl">
                ALPHA<span className="text-accent">TECH</span>
              </span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition
                    ${
                      activeSection === link.id
                        ? "bg-accent/10 text-accent"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
