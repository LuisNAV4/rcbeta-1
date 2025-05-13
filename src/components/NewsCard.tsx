
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  summary: string;
  index: number;
}

const NewsCard = ({ image, title, date, summary, index }: NewsCardProps) => {
  return (
    <div 
      className="hover-card bg-white rounded-xl overflow-hidden shadow-md animate-fade-in opacity-0 border border-primary/20"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <Calendar size={16} />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{summary}</p>
        <div className="mt-4 pt-4 border-t border-muted">
          <a 
            href="#" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Leer más
            <svg 
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
