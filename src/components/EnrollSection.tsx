
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, GraduationCap, BookOpen, Users, CheckCircle } from 'lucide-react';

const EnrollSection = () => {
  return (
    <section className="section-with-diagonal bg-transparent relative" id="inscripciones">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">PREINSCRIPCIONES 2025-2026</h2>
            <p className="mb-6">
              Abre las puertas a un futuro brillante con una educación de calidad en 
              U.E.P El Relámpago del Catatumbo.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Más Información
            </Button>
          </div>
          
          <div className="bg-red-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">INGRESA A TU CLASE</h2>
            <p className="mb-6">
              Accede a tu portal educativo para consultar tus clases, horarios, tareas y recursos.
            </p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-center">Proceso de Inscripción</h3>
            
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Paso 1:</strong> Completar formulario de solicitud de inscripción online o presencial.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Paso 2:</strong> Presentar documentos requeridos (partida de nacimiento, certificado escolar previo).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Paso 3:</strong> Agendar entrevista con coordinación académica.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Paso 4:</strong> Realizar el pago de matrícula para asegurar el cupo.</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CalendarPlus className="mr-2 h-5 w-5" />
                Iniciar Proceso de Inscripción
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
