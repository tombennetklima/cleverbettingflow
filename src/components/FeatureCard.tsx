
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-2xl bg-glass border border-white/10 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      )}
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="absolute inset-0 rounded-2xl border border-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default FeatureCard;
