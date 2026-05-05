import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Parties & Events",
  description:
    "Birthday parties, school picnics, corporate team-building, kitty parties and private hire at The Great Escape, Longacres Mall. No venue fee — packages include the room, game credits, and food.",
};

const packages = [
  {
    id: "birthday",
    name: "Kids Birthday Parties",
    blurb: "Game credits, food, decorated private area, dedicated host, and a guaranteed sugar high. Pick a Junior's package and we'll handle the rotation.",
    accent: "bg-escape-red text-cream-50",
    bullets: ["Up to ~20 kids", "Soft Play / Bumper Cars", "Cake & drinks add-ons", "Private party room"],
    bookType: "Birthday Party",
    cta: "Plan a birthday",
  },
  {
    id: "schools",
    name: "School Picnics & Trips",
    blurb: "End-of-term outings and learner-day trips for 6+. Junior's packages from K99.99/kid (4 games) or K149.99 (6 games + Soft Play / Bumper). 1 teacher gets a free meal per 25 kids.",
    accent: "bg-escape-green text-cream-50",
    bullets: ["6 yrs+", "Group rotations", "Free teacher meal · 1 per 25 kids", "School-groups line: +260 96 887 8592"],
    bookType: "School Group",
    cta: "Book a school trip",
  },
  {
    id: "corporate",
    name: "Corporate & Team-Building",
    blurb: "Off-sites, year-end functions, client entertainment. Mix of bowling, racing leaderboards and VR — all in one venue, all weather-proof.",
    accent: "bg-escape-blue text-cream-50",
    bullets: ["10–80 guests", "Custom rotations", "Tournament leaderboards", "Catering options"],
    bookType: "Corporate / Team-Building",
    cta: "Get a corporate quote",
  },
  {
    id: "private",
    name: "Private Hire — Kitty Parties, Hen Dos, More",
    blurb: "Karaoke lounge, private rooms, and the run of the floor for groups who want it more contained. Cocktails optional, karaoke compulsory.",
    accent: "bg-escape-yellow",
    bullets: ["Private lounges", "Karaoke", "Custom packages", "Adults-only options"],
    bookType: "Private Hire",
    cta: "Enquire — private hire",
  },
];

export default function PartiesPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Parties & Events"
            title="No venue fee. Just the fun."
            subtitle="Pick a package — the room, game credits, and food are bundled in. We handle the rotation; you bring the people."
            accent="red"
          />
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-escape-yellow border-2 border-ink-950 p-6 sm:p-8 shadow-pop relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cream-50/30" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">House promise</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              No venue fee for parties.
            </h2>
            <p className="mt-3 max-w-xl text-ink-950/80">
              You only pay for the package — game credits, food, and the private area are bundled in.
              All the fun, no extra venue costs.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {packages.map((p) => (
            <article
              id={p.id}
              key={p.id}
              className="rounded-3xl border-2 border-ink-950 bg-cream-50 shadow-pop overflow-hidden flex flex-col"
            >
              <div className={`p-6 ${p.accent} border-b-2 border-ink-950`}>
                <h3 className="font-display font-bold text-2xl sm:text-3xl leading-tight">{p.name}</h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-ink-950/75">{p.blurb}</p>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-escape-red font-bold mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Link
                    href={`/book?type=${encodeURIComponent(p.bookType)}`}
                    className="rounded-full px-5 py-2.5 font-bold bg-ink-950 text-cream-50 border-2 border-ink-950 shadow-popSm hover:translate-y-[2px] hover:shadow-none transition"
                  >
                    {p.cta} →
                  </Link>
                  <a
                    href="https://wa.me/260973572871"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full px-5 py-2.5 font-bold bg-cream-50 border-2 border-ink-950 hover:bg-ink-950 hover:text-cream-50 transition"
                  >
                    WhatsApp us
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
