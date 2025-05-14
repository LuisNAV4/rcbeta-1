import { useEffect } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SubjectsSection from "@/components/SubjectsSection";
import Footer from "@/components/Footer";
import EnrollSection from "@/components/EnrollSection"; // Nuevo import

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
