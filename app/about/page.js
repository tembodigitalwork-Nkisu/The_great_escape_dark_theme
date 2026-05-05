import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About / Our Tech",
  description:
    "The Great Escape is part of the Microgravity entertainment-technology group, building VR, AR and mixed-reality venues across the region. PGA-licensed software, real car cockpits, the most advanced VR setup in Zambia.",
};

const stack = [
  { title: "PGA-licensed golf", blurb: "The same simulator software that pros train on. Real courses, real ballistics, indoor turf." },
  { title: "Real car cockpits", blurb: "VR racing isn't a wheel and a chair — our cockpits move with the cars. Force feedback included." },
  { title: "Most advanced VR in Zambia", blurb: "Rotating library of headset titles. Standalone bay so you can play hard without bumping into anything (much)." },
  { title: "Auto-scoring bowling", blurb: "Full alley with automatic scoring — no maths required between frames." },
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
          <div className="lg:col-span-2 rounded-3xl bg-escape-yellow text-ink-950 border-2 border-ink-950 p-8 shadow-pop relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cream-50/30" />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.3em] opacity-80">Mission</p>
            <p className="relative mt-3 font-display text-2xl sm:text-3xl font-bold leading-tight">
              "Zambia's most advanced gaming arena."
            </p>
            <p className="relative mt-5 text-ink-950/80">
              An indoor, all-weather, all-ages place where families, teens, and adults can each find something
              they want to do — and where the VR and simulator kit is genuinely good, not gimmicks.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stack.map((s) => (
              <article key={s.title} className="rounded-3xl border border-cream-50/15 bg-ink-900 p-6 hover:border-escape-yellow/60 transition">
                <h3 className="font-display font-bold text-lg text-escape-yellow">{s.title}</h3>
                <p className="mt-2 text-sm text-cream-50/75">{s.blurb}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-escape-blue text-cream-50 border-y-2 border-ink-950">
        <div className="absolute inset-0 dots-bright opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight">
            Walk in. Play your way.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream-50/85">
            Entry is free. Buy tokens, pick what you want to play, and build your own afternoon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/attractions"
              className="rounded-full px-6 py-3 font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition"
            >
              See what's on
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-6 py-3 font-bold bg-ink-950 text-cream-50 border-2 border-cream-50 hover:bg-cream-50 hover:text-ink-950 transition"
            >
              Find us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
