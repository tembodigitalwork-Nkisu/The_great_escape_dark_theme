import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Pricing",
  description:
    "Transparent pricing at The Great Escape, Lusaka. Pro Level simulators K38.99, Noob Level K34.99, kids' Junior packages from K99.99. Pay per game — no entry fee.",
};

const proGames = ["6D Three Screen Racing / Crazy Racing", "Cruisin Blast with Vibration", "Dynamic Car (Cruisin Blast)", "Monster Eye", "Night Hunter Motion", "Overtake DX", "The Walking Dead", "Transformer"];
const noobGames = ["Dolphin Star", "Happy Cruise", "Robo Sweep", "Sweet Kart"];

const headline = [
  { name: "PGA Golf Simulator", note: "15-min to 1-hour blocks" },
  { name: "VR Racing Cockpits", note: "Per race" },
  { name: "VR Bay", note: "Per session" },
  { name: "Bowling", note: "Per game / lane" },
  { name: "Virtual Rollercoaster", note: "Per ride" },
  { name: "Karaoke / Private Lounge", note: "Per hour" },
];

const packages = [
  { name: "Junior's Package — 4 games", price: "K99.99", save: "Save K88.96 per kid", blurb: "School trips for 6 years and below. Soft Play + any 4 games. 1 free meal per 25 kids for the teacher." },
  { name: "Junior's Package — 6 games + Soft Play / Bumper Car", price: "K149.99", save: "Save K118.94 per kid", blurb: "Bigger Junior's package — Soft Play OR Bumper Car plus 6 games. School groups and parties." },
];

export default function PricingPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <SectionHeader
            eyebrow="Pricing"
            title="Pay per game. No entry fee."
            subtitle="Bring K20 or K200 — entirely up to you. Token-based, weekday rates lower than weekends, and clear packages for kids and parties."
            accent="yellow"
          />
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-5">
          <PriceCard tone="yellow" title="Weekday rate" big="From K20" sub="per game" list={["Lower midweek rates", "Quieter floor — easier with kids", "Pair with Freewheelin' Wednesday for K50 food voucher"]} />
          <PriceCard tone="blue" title="Weekend rate" big="From K38.99" sub="per game" list={["Full Pro Level lineup running", "Best buzz, biggest crowd", "Book ahead for Pro Level simulators"]} />
        </div>
      </section>

      <section className="relative py-12 sm:py-16 border-y-2 border-ink-950 bg-ink-900">
        <div className="absolute inset-0 dots-soft opacity-50 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="bg-escape-yellow text-ink-950 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
              Headline experiences
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-cream-50">Premium tier.</h2>
          </div>
          <p className="max-w-2xl text-cream-50/70 mb-8">
            Pricing for the headline experiences (golf simulator, VR cockpits, bowling, etc.) is set per-session and confirmed at the venue.
            Walk in or message us for a quote on a specific slot.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {headline.map((h) => (
              <li key={h.name} className="rounded-2xl bg-ink-950 text-cream-50 border border-cream-50/15 p-4 flex items-start justify-between gap-3 hover:border-escape-yellow/60 transition">
                <div>
                  <p className="font-display font-bold text-lg leading-tight">{h.name}</p>
                  <p className="text-xs text-cream-50/55 mt-1">{h.note}</p>
                </div>
                <span className="shrink-0 bg-escape-yellow text-ink-950 border-2 border-ink-950 rounded-full px-2.5 py-0.5 text-xs font-bold whitespace-nowrap">
                  Ask
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-5">
          <SimulatorList accent="bg-escape-blue text-cream-50" title="Pro Level simulator games" price="K38.99 each" games={proGames} />
          <SimulatorList accent="bg-escape-red text-cream-50" title="Noob Level simulator games" price="K34.99 each" games={noobGames} />
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-escape-yellow text-ink-950 border-y-2 border-ink-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block bg-ink-950 text-cream-50 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
              Junior packages
            </span>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight">
              Built for school trips & little ones.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {packages.map((p) => (
              <article key={p.name} className="rounded-3xl border-2 border-ink-950 bg-ink-950 text-cream-50 p-6 shadow-pop">
                <h3 className="font-display font-bold text-2xl leading-tight">{p.name}</h3>
                <p className="mt-3 text-cream-50/75">{p.blurb}</p>
                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="font-display text-4xl font-bold text-escape-yellow">{p.price}</p>
                  <span className="bg-escape-red text-cream-50 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold">
                    {p.save}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/parties"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold bg-ink-950 text-cream-50 border-2 border-ink-950 shadow-popSm hover:translate-y-[2px] hover:shadow-none transition"
            >
              See full party packages →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PriceCard({ tone, title, big, sub, list }) {
  const toneMap = {
    yellow: "bg-escape-yellow text-ink-950",
    blue: "bg-escape-blue text-cream-50",
  };
  return (
    <article className={`rounded-3xl border-2 border-ink-950 p-8 shadow-pop ${toneMap[tone]}`}>
      <p className="text-xs font-bold uppercase tracking-wider opacity-80">{title}</p>
      <p className="mt-2 font-display text-5xl sm:text-6xl font-bold leading-none">
        {big}
        <span className="block text-base font-semibold opacity-70 mt-2">{sub}</span>
      </p>
      <ul className="mt-6 space-y-2 text-sm">
        {list.map((l) => (
          <li key={l} className="flex gap-2">
            <span>▸</span>
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function SimulatorList({ accent, title, price, games }) {
  return (
    <div className={`rounded-3xl border-2 border-ink-950 ${accent} p-6 sm:p-8 shadow-pop`}>
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <h3 className="font-display font-bold text-xl sm:text-2xl">{title}</h3>
        <span className="bg-escape-yellow text-ink-950 border-2 border-ink-950 rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap">
          {price}
        </span>
      </div>
      <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
        {games.map((g) => (
          <li key={g} className="rounded-xl bg-ink-950 text-cream-50 border-2 border-ink-950 px-3 py-2 font-semibold">
            {g}
          </li>
        ))}
      </ul>
    </div>
  );
}
