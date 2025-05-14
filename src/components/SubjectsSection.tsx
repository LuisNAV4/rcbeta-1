
import { useEffect, useRef, useState } from "react";
import SubjectCard from "./SubjectCard";
import { 
  BookOpen, 
  Calculator, 
  GraduationCap, 
  Globe, 
  Atom, 
  Palette, 
  Music, 
  LineChart 
} from "lucide-react";

const subjects = [
  {
    id: 1,
    icon: BookOpen,
    title: "Lengua y Literatura",
    description: "Desarrollo de habilidades de comunicación, comprensión lectora y expresión escrita a través del estudio de diversos textos literarios."
  },
  {
    id: 2,
    icon: Calculator,
    title: "Matemáticas",
    description: "Desarrollo del pensamiento lógico, resolución de problemas y aplicación de conceptos matemáticos en situaciones cotidianas."
  },
  {
    id: 3,
    icon: Globe,
    title: "Ciencias Sociales",
    description: "Estudio de la historia, geografía y formación ciudadana para comprender el mundo y desarrollar pensamiento crítico."
  },
  {
    id: 4,
    icon: Atom,
    title: "Ciencias Naturales",
    description: "Exploración de fenómenos naturales, biología, química y física para entender el mundo natural y el método científico."
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "Programa del Diploma (BI)",
    description: "Preparación para el Bachillerato Internacional con énfasis en el pensamiento crítico y la investigación académica."
  },
  {
    id: 6,
    icon: Palette,
    title: "Artes Visuales",
    description: "Desarrollo de la creatividad y expresión a través de diversas técnicas artísticas y apreciación del arte."
  },
  {
    id: 7,
    icon: Music,
    title: "Música",
    description: "Exploración del ritmo, melodía y armonía a través de la interpretación musical y apreciación de diversos géneros musicales."
  },
  {
    id: 8,
    icon: LineChart,
    title: "Robótica",
    description: "Desarrollo de habilidades en programación, diseño y construcción de robots para resolver problemas tecnológicos."
  }
];

const SubjectsSection = () => {
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
    <section id="asignaturas" className="section-with-diagonal bg-transparent relative" ref={sectionRef}>
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Programas Académicos</h2>
          <p className="section-subtitle">Ofrecemos un plan de estudios integral para el desarrollo completo de nuestros estudiantes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.id}
              icon={subject.icon}
              title={subject.title}
              description={subject.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Primaria
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Media
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Comunicados y Horarios
          </a>
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Programa del Diploma (BI)
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
