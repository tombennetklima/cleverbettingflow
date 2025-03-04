
import { cn } from "@/lib/utils";

interface DecorativeElementProps {
  variant?: "dots" | "circle" | "lines" | "ring" | "filigree";
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
            className="w-1.5 h-1.5 rounded-full bg-brown/40"
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
          "rounded-full bg-gradient-to-tr from-sand-light/40 to-brown/5 animate-pulse-light", 
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
            className="h-0.5 bg-gradient-to-r from-transparent via-brown/30 to-transparent rounded-full"
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
        <div className="absolute inset-0 rounded-full border border-brown/10 animate-pulse-light"></div>
        <div className="absolute inset-[3px] rounded-full border border-brown/10"></div>
        <div className="absolute inset-[6px] rounded-full border border-dashed border-brown/5"></div>
      </div>
    );
  }
  
  if (variant === "filigree") {
    return (
      <div className={cn("relative", className)}>
        <div className="absolute w-full h-full border border-brown/10 rounded-full animate-rotate-slow"></div>
        <div className="absolute w-[75%] h-[75%] left-[12.5%] top-[12.5%] border border-brown/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute w-[50%] h-[50%] left-[25%] top-[25%] border border-dashed border-brown/20 rounded-full animate-pulse-light"></div>
        <div className="absolute w-[20%] h-[20%] left-[40%] top-[40%] border border-brown/10 rounded-full"></div>
        <div className="absolute w-1 h-1 left-[calc(50%-2px)] top-[calc(50%-2px)] bg-brown/40 rounded-full"></div>
      </div>
    );
  }
  
  return null;
};

export default DecorativeElement;
