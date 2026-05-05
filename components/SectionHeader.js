export default function SectionHeader({ eyebrow, title, subtitle, accent = "yellow", center = true }) {
  const accentBg = {
    yellow: "bg-escape-yellow",
    red: "bg-escape-red text-cream-50",
    blue: "bg-escape-blue text-cream-50",
    green: "bg-escape-green text-cream-50",
  }[accent];

  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <span className={`inline-block ${accentBg} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border-2 border-ink-950 shadow-popSm`}>
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight text-ink-950">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-ink-950/70 text-lg">{subtitle}</p>}
    </div>
  );
}
