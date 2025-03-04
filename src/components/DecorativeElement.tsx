
import { cn } from "@/lib/utils";

interface DecorativeElementProps {
  variant?: "dots" | "circle" | "lines" | "ring";
  className?: string;
}

const DecorativeElement = ({
  variant = "dots",
  className,
}: DecorativeElementProps) => {
  
  if (variant === "dots") {
    return (
      <div className={cn("grid grid-cols-3 gap-2", className)}>
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{ 
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3 + (i % 3) * 0.2
            }}
          ></div>
        ))}
      </div>
    );
  }
  
  if (variant === "circle") {
    return (
      <div 
        className={cn(
          "rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 animate-pulse-light", 
          className
        )}
      ></div>
    );
  }
  
  if (variant === "lines") {
    return (
      <div className={cn("space-y-1.5", className)}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="h-0.5 bg-primary/20 rounded-full"
            style={{ 
              width: `${60 + i * 10}%`,
              opacity: 0.3 + i * 0.2
            }}
          ></div>
        ))}
      </div>
    );
  }
  
  if (variant === "ring") {
    return (
      <div className={cn("relative", className)}>
        <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-pulse-light"></div>
        <div className="absolute inset-[3px] rounded-full border border-primary/20"></div>
        <div className="absolute inset-[6px] rounded-full border border-dashed border-primary/10"></div>
      </div>
    );
  }
  
  return null;
};

export default DecorativeElement;
