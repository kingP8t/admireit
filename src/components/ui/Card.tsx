import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hover && "hover:border-accent/20 hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
