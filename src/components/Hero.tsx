
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import backgroundImage from "@/images/Colegio RC FONDO.png";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="inicio">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700"
        style={{
          
          backgroundImage: `url(${backgroundImage})`,
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out, transform 0.3s ease-out'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span 
            className={cn(
              "inline-block px-3 py-1 text-sm font-medium bg-primary/90 backdrop-blur-sm rounded-full mb-6 transition-all duration-700",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Educación de excelencia
          </span>
          
          <h1 
            className={cn(
              "text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            U.E.P El Relámpago del Catatumbo
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 transition-all duration-700 delay-200",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Formando líderes del mañana con valores, educación integral y excelencia académica en un ambiente inspirador.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          > 



            <a 
              href="#noticias" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Noticias
            </a>
            <a 
              href="#inscripciones" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl" >
              Inscripciones
              </a>
            <a 
              href="#contacto" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-white/30"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
