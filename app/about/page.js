import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About / Our Tech",
  description:
    "The Great Escape is part of the Microgravity entertainment-technology group, building VR, AR and mixed-reality venues across the region. PGA-licensed software, real car cockpits, the most advanced VR setup in Zambia.",
};

const stack = [
  {
    title: "PGA-licensed golf",
    blurb: "The same simulator software that pros train on. Real courses, real ballistics, indoor turf.",
  },
  {
    title: "Real car cockpits",
    blurb: "VR racing isn't a wheel and a chair — our cockpits move with the cars. Force feedback included.",
  },
  {
    title: "Most advanced VR in Zambia",
    blurb: "Rotating library of headset titles. Standalone bay so you can play hard without bumping into anything (much).",
  },
  {
    title: "Auto-scoring bowling",
    blurb: "Full alley with automatic scoring — no maths required between frames.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="About / Our Tech"
            title="Built on Microgravity."
            subtitle="The Great Escape is part of Microgravity, an entertainment-technology group rolling out VR, AR and mixed-reality venues across Africa. That's why the kit on our floor isn't standard arcade fare."
            accent="blue"
          />
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 rounded-3xl bg-ink-950 text-cream-50 border-2 border-ink-950 p-8 shadow-pop relative overflow-hidden">
            <div className="absolute inset-0 dots-bright opacity-15 pointer-events-none" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] text-escape-yellow">Mission</p>
            <p className="relative mt-3 font-display text-2xl sm:text-3xl font-bold leading-tight">
              "Zambia's most advanced gaming arena."
            </p>
            <p className="relative mt-5 text-cream-50/80">
              An indoor, all-weather, all-ages place where families, teens, and adults can each find something
              they want to do — and where the VR and simulator kit is genuinely good, not gimmicks.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stack.map((s) => (
              <article key={s.title} className="rounded-3xl border-2 border-ink-950 bg-cream-50 p-6 shadow-popSm">
                <h3 className="font-display font-bold text-lg text-escape-blue">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-950/75">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-escape-yellow border-y-2 border-ink-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
            Walk in. Play your way.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-ink-950/80">
            Entry is free. Buy tokens, pick what you want to play, and build your own afternoon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/attractions"
              className="rounded-full px-6 py-3 font-bold bg-ink-950 text-cream-50 border-2 border-ink-950 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition"
            >
              See what's on
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 font-bold bg-cream-50 border-2 border-ink-950 hover:bg-ink-950 hover:text-cream-50 transition"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
