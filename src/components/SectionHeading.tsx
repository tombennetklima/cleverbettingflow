
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
    <div className={cn("space-y-4 max-w-3xl", center && "mx-auto text-center", className)}>
      {tag && (
        <span className="inline-block text-sm font-medium bg-gold/10 text-gold px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-medium font-['Playfair_Display'] tracking-tight">
        <span className="golden-gradient">{title}</span>
      </h2>
      {subtitle && <p className="text-lg text-white/70">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
