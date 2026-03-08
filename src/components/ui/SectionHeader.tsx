interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
