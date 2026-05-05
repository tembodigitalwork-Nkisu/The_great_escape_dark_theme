import Link from "next/link";

const destinations = [
  { href: "/attractions", title: "Attractions", blurb: "Pro Level + Noob Level. The full lineup.", accent: "bg-escape-blue text-cream-50" },
  { href: "/pricing", title: "Pricing", blurb: "Per-game, packages, weekday vs weekend.", accent: "bg-escape-yellow" },
  { href: "/parties", title: "Parties & Events", blurb: "Birthdays, school trips, corporate, kitty parties.", accent: "bg-escape-red text-cream-50" },
  { href: "/food", title: "Food & Drinks", blurb: "Pizzas, chicken strips, cold drinks.", accent: "bg-escape-green text-cream-50" },
  { href: "/contact", title: "Find us", blurb: "Longacres Mall, Lusaka. Map + hours + parking.", accent: "bg-cream-50" },
  { href: "/book", title: "Book a session", blurb: "Lock in your slot — golf sim, VR, racing, parties.", accent: "bg-ink-950 text-cream-50" },
];

export default function DestinationCards() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-escape-green text-cream-50 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
            Skip the scroll
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight">Jump to what you came for.</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className={`group rounded-3xl border-2 border-ink-950 p-6 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition ${d.accent}`}
            >
              <h3 className="font-display font-bold text-2xl">{d.title}</h3>
              <p className="mt-2 text-sm opacity-90">{d.blurb}</p>
              <span className="mt-5 inline-flex items-center text-sm font-bold">
                Open <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
