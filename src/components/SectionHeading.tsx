
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  tag,
  center = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("space-y-3 max-w-3xl", center && "mx-auto text-center", className)}>
      {tag && (
        <span className="inline-block text-sm font-medium text-accent/90 bg-accent/10 px-3 py-1 rounded-full animate-fade-in">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
