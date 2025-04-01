
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SubjectsSection from "@/components/SubjectsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const EnrollSection = () => {
  return (
    <section className="bg-primary/10 py-12" id="inscribir">
      <div className="section-container py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¡Inscribe a tu hijo hoy mismo!</h2>
          <p className="text-lg mb-8">
            Abre las puertas a un futuro brillante con una educación de calidad en 
            U.E.P El Relámpago del Catatumbo. Ofrecemos un ambiente seguro y estimulante 
            para el desarrollo académico y personal de los estudiantes.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg" >
            Proceso de Inscripción
          </Button>
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
