import { useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from "./ui/button";
import logoImage from "../images/logo-rc-png.ico";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'unset' : 'hidden';
  };

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <header 
        className={cn(
          "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4 px-4 md:px-8 bg-primary"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/inicio";
            }}
            className="flex items-center text-white font-bold text-lg space-x-2"
          >
            <img 
              src={logoImage}
              alt="Logo Colegio RC" 
              className="h-12 w-auto transition-all duration-300 ease-in-out hover:scale-125"
            />
            U.E.P El Relámpago del Catatumbo
          </a>
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 relative z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>
        {/* Línea sólida debajo del header */}
        <div className="absolute left-0 right-0 bottom-0 w-full">
          <div className="bg-[color:var(--orange-accent)] h-2 w-full" />
        </div>
      </header>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay con gradiente de color principal a blanco */}
          <div
            className="fixed inset-0 z-40 bg-gradient-to-br from-primary/70 to-white/60 backdrop-blur-sm transition-opacity duration-300 md:hidden"
            onClick={handleMenuItemClick}
            aria-label="Cerrar menú"
          />
          {/* Panel lateral deslizante */}
          <div
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs z-50 bg-white/70 backdrop-blur-xl shadow-xl transition-transform duration-300 md:hidden flex flex-col pt-10 pb-6 px-6"
            style={{ transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)" }}
          >
            {/* Botón X arriba a la derecha */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
              onClick={handleMenuItemClick}
              aria-label="Cerrar menú"
              type="button"
            >
              <X className="h-6 w-6 text-black" />
            </button>
            <nav className="flex flex-col space-y-6 mt-8">
              { [
                { label: 'Inicio', id: 'inicio' },
                { label: 'Noticias', id: 'noticias' },
                { label: 'Inscribir', id: 'inscripciones' },
                { label: 'Asignaturas', id: 'asignaturas' },
                { label: 'Contacto', id: 'contacto' }
              ].map((item) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="text-primary text-lg font-medium py-2 border-b border-primary/20"
                  onClick={handleMenuItemClick}
                >
                  {item.label}
                </a>
              ))}
              <Button className="flex items-center justify-center gap-2 w-full bg-[color:var(--orange-accent)] hover:bg-[color:var(--orange-accent)]/90 text-white" asChild>
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Inicio de sesión
                </Link>
              </Button>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
