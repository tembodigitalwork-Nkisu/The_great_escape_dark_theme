import Link from "next/link";

export default function AttractionCard({
  name,
  blurb,
  price,
  ages,
  duration,
  intensity,
  accent = "yellow",
  bookType,
}) {
  const accentMap = {
    yellow: "bg-escape-yellow text-ink-950",
    red: "bg-escape-red text-cream-50",
    blue: "bg-escape-blue text-cream-50",
    green: "bg-escape-green text-cream-50",
    cream: "bg-cream-50 text-ink-950",
  };
  return (
    <article className="rounded-3xl border-2 border-ink-950 bg-ink-900 shadow-pop overflow-hidden flex flex-col text-cream-50">
      <div className={`p-5 ${accentMap[accent]} border-b-2 border-ink-950`}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-2xl leading-tight">{name}</h3>
          {price && (
            <span className="shrink-0 inline-flex items-center bg-ink-950 text-cream-50 border-2 border-ink-950 rounded-full px-3 py-1 text-sm font-bold">
              {price}
            </span>
          )}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-cream-50/75">{blurb}</p>
        <dl className="mt-5 grid grid-cols-3 gap-3 text-xs">
          {ages && (
            <div>
              <dt className="font-bold uppercase tracking-wider text-cream-50/45">Ages</dt>
              <dd className="mt-1 font-semibold">{ages}</dd>
            </div>
          )}
          {duration && (
            <div>
              <dt className="font-bold uppercase tracking-wider text-cream-50/45">Length</dt>
              <dd className="mt-1 font-semibold">{duration}</dd>
            </div>
          )}
          {intensity && (
            <div>
              <dt className="font-bold uppercase tracking-wider text-cream-50/45">Vibe</dt>
              <dd className="mt-1 font-semibold">{intensity}</dd>
            </div>
          )}
        </dl>
        {bookType && (
          <Link
            href={`/book?type=${encodeURIComponent(bookType)}`}
            className="mt-6 self-start rounded-full px-4 py-2 text-sm font-bold bg-cream-50 text-ink-950 border-2 border-ink-950 hover:bg-escape-yellow transition"
          >
            Book this →
          </Link>
        )}
      </div>
    </article>
  );
}
