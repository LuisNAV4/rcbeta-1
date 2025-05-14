
import { LucideIcon } from "lucide-react";

interface SubjectCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const SubjectCard = ({ icon: Icon, title, description, index }: SubjectCardProps) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover-card animate-fade-in opacity-0"
      style={{ 
        animationDelay: `${100 + index * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default SubjectCard;
