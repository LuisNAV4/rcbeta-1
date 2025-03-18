
import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SubjectsSection from "@/components/SubjectsSection";
import Footer from "@/components/Footer";

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
      
      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-slide-right opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-6">
                Nuestra Institución
              </span>
              <h2 className="text-3xl font-bold mb-6">Excelencia educativa con más de 30 años de experiencia</h2>
              <p className="text-muted-foreground mb-6">
                En Colegio Excelencia, creemos que cada estudiante tiene un potencial único que merece ser desarrollado. Nuestra misión es proporcionar una educación integral que no solo cultive el conocimiento académico, sino también los valores humanos, la creatividad y el pensamiento crítico.
              </p>
              <p className="text-muted-foreground mb-8">
                Con un equipo de educadores apasionados y dedicados, instalaciones modernas y un enfoque centrado en el estudiante, creamos un ambiente donde los jóvenes pueden crecer, aprender y prepararse para los desafíos del futuro.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">30+</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Años de experiencia</h4>
                    <p className="text-sm text-muted-foreground">Tradición y excelencia</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">95%</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Aprobación</h4>
                    <p className="text-sm text-muted-foreground">De estudiantes y padres</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-left opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000" 
                  alt="Colegio Excelencia" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Educación certificada</h4>
                      <p className="text-sm text-muted-foreground">Programas acreditados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsSection />
      <SubjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
