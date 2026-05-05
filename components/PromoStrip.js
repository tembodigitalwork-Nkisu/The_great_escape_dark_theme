import Link from "next/link";

const promos = [
  {
    title: "Freewheelin' Wednesday",
    desc: "Spend K100 on games, get a K50 food voucher. Every Wednesday, on the house.",
    accent: "bg-escape-yellow",
    cta: { label: "See the menu", href: "/food" },
  },
  {
    title: "No venue fee for parties",
    desc: "Choose a party package and the room is on us — game credits, food, private area included.",
    accent: "bg-escape-red text-cream-50",
    cta: { label: "Plan a party", href: "/parties" },
  },
];

export default function PromoStrip() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-5">
        {promos.map((p) => (
          <article
            key={p.title}
            className={`rounded-3xl border-2 border-ink-950 ${p.accent} p-6 sm:p-8 shadow-pop relative overflow-hidden`}
          >
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-cream-50/15" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">Promo</p>
            <h3 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight">{p.title}</h3>
            <p className="mt-3 text-base opacity-90 max-w-md">{p.desc}</p>
            <Link
              href={p.cta.href}
              className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold bg-cream-50 text-ink-950 border-2 border-ink-950 shadow-popSm hover:translate-y-[2px] hover:shadow-none transition"
            >
              {p.cta.label} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
