import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Puedes reemplazar estos imports por tus imágenes reales
import hero1 from "../images/Colegio RC FONDO.png";
import hero2 from "../images/Image1.webp";
import hero3 from "../images/491453449_1715316772721886_485470513121743243_n.jpg";

const images = [hero1, hero2, hero3];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Carrusel automático
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 20000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reinicia el intervalo cuando se navega manualmente
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 20000);
  };

  // Navegación manual
  const goToPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    resetInterval();
  };
  const goToNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
    resetInterval();
  };
  const goToIndex = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent(idx);
    resetInterval();
  };

  return (
    <section className="relative h-screen w-full overflow-hidden" id="inicio">
      {/* Carousel de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`hero-bg-${idx}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
              idx === current ? "opacity-100 z-0" : "opacity-0 z-0"
            )}
            style={{ transitionProperty: "opacity" }}
            draggable={false}
          />
        ))}
        {/* Gradiente y overlay encima del carrusel */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {/* Flechas de navegación */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
          onClick={goToPrev}
          aria-label="Anterior"
          tabIndex={0}
          type="button"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
          onClick={goToNext}
          aria-label="Siguiente"
          tabIndex={0}
          type="button"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
        {/* Círculos indicadores */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "w-3 h-3 rounded-full border border-white transition-all duration-300",
                idx === current
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/40 hover:bg-white/70"
              )}
              onClick={(e) => goToIndex(idx, e)}
              aria-label={`Ir a la imagen ${idx + 1}`}
              tabIndex={0}
              type="button"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-8 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 pt-28 md:pt-32">
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
          /* Inspiramos mentes curiosas: valores, crecimiento y calidad educativa. */
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
