import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dots-soft pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-escape-yellow/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-escape-blue/25 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink-900 border border-cream-50/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cream-50/85">
              <span className="h-2 w-2 rounded-full bg-escape-green animate-bob" />
              Now open · Longacres Mall, Lusaka
            </span>

            <h1 className="mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-cream-50">
              Where reality
              <br />
              takes a{" "}
              <span className="bg-escape-yellow text-ink-950 px-3 py-0.5 rounded-md inline-block leading-[0.9] border-2 border-ink-950 shadow-popSm">
                break.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-cream-50/75">
              Zambia's most advanced indoor gaming arena. PGA-licensed golf simulator,
              VR racing in real car cockpits, bowling, kids' rides — all under one roof.
              <span className="font-bold text-cream-50"> Entry is free. Pay per game.</span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-full px-6 py-3 font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition"
              >
                Book a session →
              </Link>
              <Link
                href="/attractions"
                className="rounded-full px-6 py-3 font-bold bg-ink-900 text-cream-50 border-2 border-cream-50 hover:bg-cream-50 hover:text-ink-950 transition"
              >
                See what's on
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                ["FREE", "Entry"],
                ["From K20", "Per game"],
                ["8K+", "Instagram"],
                ["Wed–Sun", "Open late"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl font-bold text-escape-yellow">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-cream-50/55 mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <HeroStack />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStack() {
  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/6] max-w-md mx-auto">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-escape-yellow border-2 border-ink-950" />
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl bg-escape-blue border-2 border-ink-950 -rotate-1" />
      <div className="relative rounded-3xl bg-ink-900 border-2 border-cream-50 h-full p-6 flex flex-col justify-between dots-soft">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-escape-yellow">Tagline</p>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight text-cream-50">
            Get<span className="text-escape-red">.</span> Set
            <span className="text-escape-blue">.</span> Game
            <span className="text-escape-yellow">.</span>
          </p>
        </div>

        <ul className="space-y-3">
          {[
            ["PGA Golf Simulator", "Pro Level"],
            ["VR Racing Cockpits", "Pro Level"],
            ["Bowling Alley", "All ages"],
            ["Virtual Rollercoaster", "TikTok viral"],
          ].map(([name, tag], i) => (
            <li key={name} className="flex items-center justify-between gap-3 bg-ink-800 border border-cream-50/15 rounded-xl px-3 py-2">
              <span className="flex items-center gap-2 font-semibold text-sm text-cream-50">
                <span className={`h-2 w-2 rounded-full ${
                  ["bg-escape-red", "bg-escape-blue", "bg-escape-yellow", "bg-escape-green"][i]
                }`} />
                {name}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-cream-50/55">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
