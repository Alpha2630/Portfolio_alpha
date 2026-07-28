import { Container, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "About", href: "#apropos", id: "apropos" },
    { name: "Experience", href: "#experiences", id: "experiences" },
    { name: "Projects", href: "#projets", id: "projets" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  // Intersection Observer to detect active section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.1,
    }

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    observerRef.current = new IntersectionObserver(handleIntersect, options)

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Reset to "home" when scrolling to the top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      if (window.scrollY < 50) {
        setActiveSection("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string, id: string) => {
    setIsMenuOpen(false)

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveSection("home")
      return
    }

    const el = document.getElementById(id)
    if (el) {
      const headerOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      
      setActiveSection(id)
    }
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-bg-primary/90 backdrop-blur-lg border-b border-gold/10 shadow-2xl shadow-royal/5"
          : "bg-bg-primary/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick("#", "home")
          }}
          className="flex items-center font-bold text-2xl tracking-wide transition-all duration-300 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Container className="w-6 h-6 mr-2 text-gold relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <span className="text-text-primary group-hover:text-gold transition-colors duration-300">
            ALPHA
          </span>
          <span className="text-gold group-hover:text-gold-light transition-colors duration-300">
            TECH
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.href, link.id)}
              className={`relative font-medium transition-all duration-300 px-1 py-1 ${
                activeSection === link.id
                  ? "text-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold rounded-full shadow-lg shadow-gold/50 animate-pulse" />
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold/30 rounded-full blur-sm" />
                </>
              )}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold/30 rounded-full transition-all duration-300 ${
                activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2.5 rounded-xl bg-royal/20 border border-gold/10 hover:border-gold/30 text-text-secondary hover:text-gold transition-all duration-300"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-bg-primary/80 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-full w-72 bg-bg-primary border-l border-gold/10 z-50 shadow-2xl shadow-royal/20 p-6 transform transition-transform duration-300"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-xl text-text-primary">
                ALPHA<span className="text-gold">TECH</span>
              </span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-royal/20 text-text-secondary hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href, link.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-between group ${
                    activeSection === link.id
                      ? "bg-gold/10 text-gold border-r-2 border-gold"
                      : "text-text-secondary hover:text-text-primary hover:bg-royal/10"
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50" />
                      <span className="text-[10px] text-gold/60">●</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            
            {/* Mobile menu footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gold/10">
              <p className="text-sm text-text-secondary/50 text-center">
                © {new Date().getFullYear()} AlphaTech
              </p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="w-1 h-1 bg-gold/30 rounded-full" />
                <span className="w-1 h-1 bg-gold/20 rounded-full" />
                <span className="w-1 h-1 bg-gold/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar