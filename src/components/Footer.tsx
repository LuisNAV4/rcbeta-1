
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white" id="contacto">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">U.E.P El Relámpago del Catatumbo</h3>
            <p className="mb-6 text-white/80">
              Formando líderes del mañana con valores, educación integral y excelencia académica en un ambiente inspirador.
            </p>
            <div className="flex space-x-4">
              
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <MessageCircle size={18} />
              </a>
              <a href="https://www.facebook.com/colegiorcoficial" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
              <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/colegiorc" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces rápidos</h4>
            <ul className="space-y-4">
              {['Inicio', 'Noticias', 'Asignaturas', 'Admisiones', 'Calendario'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
              <a href="https://maps.app.goo.gl/UBMNGQ1TcxJUzoHb7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start text-white/80">
                <MapPin className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/80">Av. Principal 1234, Ciudad</span></a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span className="text-white/80">+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span className="text-white/80">info@relampagocatatumbo.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} U.E.P El Relámpago del Catatumbo. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
