interface SectionTitleProps {
  id: string;
  title: string;
  isDarkMode: boolean;
}

export function SectionTitle({ id, title, isDarkMode }: SectionTitleProps) {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <h2
        id={`${id}-heading`}
        className={`text-xl font-bold tracking-tight ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-px flex-1 ${
          isDarkMode ? "bg-slate-800" : "bg-slate-200"
        }`}
      />
    </div>
  );
}
