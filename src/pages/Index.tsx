
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SubjectsSection from "@/components/SubjectsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarPlus, GraduationCap, BookOpen, Users, CheckCircle } from 'lucide-react';

const EnrollSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-white" id="inscripciones">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjkxRjgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTEyIDIwaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptLTEyIDIwaDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXptMC00aDR2MWgtNHYtMXoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-2 py-1.5 px-4 text-primary bg-primary/10 border-primary/20">
            <CalendarPlus className="h-3.5 w-3.5 mr-1" />
            Período de inscripciones abierto
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            ¡Asegura el futuro de tu hijo hoy!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Abre las puertas a un futuro brillante con una educación de calidad en 
            U.E.P El Relámpago del Catatumbo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Excelencia Académica</h3>
            <p className="text-gray-600 text-center">Nuestro programa educativo está diseñado para fomentar el pensamiento crítico y el desarrollo integral.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Metodología Innovadora</h3>
            <p className="text-gray-600 text-center">Combinamos métodos tradicionales con las últimas innovaciones educativas para un aprendizaje efectivo.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Comunidad Educativa</h3>
            <p className="text-gray-600 text-center">Formamos una comunidad donde estudiantes, padres y educadores trabajan juntos por el éxito académico.</p>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
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
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-md hover:shadow-xl transition-all duration-300">
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

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NewsSection />
      <EnrollSection />
      <SubjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
