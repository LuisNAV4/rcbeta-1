
import { useEffect, useRef, useState } from "react";
import NewsCard from "./NewsCard";

const newsItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000",
    title: "Estudiantes destacan en olimpiada nacional de matemáticas",
    date: "2 de mayo, 2023",
    summary: "Nuestros estudiantes obtuvieron el primer lugar en la competencia nacional de matemáticas, demostrando excelencia académica y compromiso con el aprendizaje."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000",
    title: "Nuevo programa de intercambio cultural para el próximo semestre",
    date: "15 de abril, 2023",
    summary: "Estamos emocionados de anunciar nuestro nuevo programa de intercambio cultural que permitirá a los estudiantes experimentar diferentes culturas y ampliar sus horizontes."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=1000",
    title: "Inauguración del nuevo laboratorio de ciencias",
    date: "28 de marzo, 2023",
    summary: "Hoy inauguramos nuestro nuevo laboratorio de ciencias equipado con tecnología de punta para potenciar el aprendizaje práctico de nuestros estudiantes."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000",
    title: "Conferencia internacional de educación en nuestro campus",
    date: "10 de marzo, 2023",
    summary: "Educadores de todo el mundo se reunieron en nuestro campus para discutir las últimas tendencias y métodos en educación integral."
  }
];

const NewsSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="noticias" className="bg-transparent" ref={sectionRef}>
      <div className="section-container">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">Noticias y Eventos</h2>
          <p className="section-subtitle">Mantente informado sobre los últimos acontecimientos en nuestra institución</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="border-2 border-amber-500 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <NewsCard
                image={item.image}
                title={item.title}
                date={item.date}
                summary={item.summary}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow hover:shadow-md transition-all duration-300"
          >
            Ver todas las noticias
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
