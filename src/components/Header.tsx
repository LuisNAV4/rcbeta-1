
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'unset' : 'hidden'; // Control del scroll
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Cerrar el menú
    document.body.style.overflow = 'unset'; // Habilitar scroll al seleccionar una opción
  };

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src="/public/logo-rc-png.ico" 
            alt="Logo Colegio El Relámpago del Catatumbo" 
            className="h-10 w-auto transition-all duration-300 ease-in-out hover:scale-110"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Inicio', 'Noticias', 'Asignaturas', 'Contacto'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium transition-all duration-300 ease-in-out relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:origin-center after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {item}
            </a>
          ))}
          {/* Login Button */}
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "flex items-center gap-2 transition-all",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90 border-primary" 
                : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border-white/30"
            )}
          >
            <LogIn className="h-4 w-4" />
            Inicio de sesión
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-black"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
         <div className="fixed inset-0 z-40 bg-white pt-20 pb-6 px-4 animate-fade-in md:hidden">
          <nav className="flex flex-col space-y-6">
            {['Inicio', 'Noticias', 'Asignaturas', 'Contacto'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-foreground text-lg font-medium py-2 border-b border-muted"
                onClick={handleMenuItemClick} // Cerrar el menú y habilitar scroll
              >
                {item}
              </a>
            ))}
            <Button className="flex items-center justify-center gap-2 w-full">
              <LogIn className="h-4 w-4" />
              Inicio de sesión
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
