import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dots-soft pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-escape-yellow/40 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-escape-blue/30 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream-50 border-2 border-ink-950 px-3 py-1 text-xs font-bold uppercase tracking-widest shadow-popSm">
              <span className="h-2 w-2 rounded-full bg-escape-green animate-bob" />
              Now open · Longacres Mall, Lusaka
            </span>

            <h1 className="mt-6 font-display font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-ink-950">
              Where reality
              <br />
              takes a{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-3 sm:h-5 bg-escape-yellow -z-10" />
                break.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg sm:text-xl text-ink-950/75">
              Zambia's most advanced indoor gaming arena. PGA-licensed golf simulator,
              VR racing in real car cockpits, bowling, kids' rides — all under one roof.
              <span className="font-bold text-ink-950"> Entry is free. Pay per game.</span>
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
                className="rounded-full px-6 py-3 font-bold bg-cream-50 text-ink-950 border-2 border-ink-950 hover:bg-ink-950 hover:text-cream-50 transition"
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
                  <dt className="font-display text-2xl font-bold text-ink-950">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-ink-950/60 mt-1">{v}</dd>
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
      {/* Yellow card */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-escape-yellow border-2 border-ink-950" />
      {/* Blue card */}
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl bg-escape-blue border-2 border-ink-950 -rotate-1" />
      {/* Front card */}
      <div className="relative rounded-3xl bg-cream-50 border-2 border-ink-950 h-full p-6 flex flex-col justify-between dots-soft">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-escape-red">Tagline</p>
          <p className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-tight">
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
            <li key={name} className="flex items-center justify-between gap-3 bg-cream-50 border-2 border-ink-950 rounded-xl px-3 py-2 shadow-popSm">
              <span className="flex items-center gap-2 font-semibold text-sm">
                <span className={`h-2 w-2 rounded-full ${
                  ["bg-escape-red", "bg-escape-blue", "bg-escape-yellow", "bg-escape-green"][i]
                }`} />
                {name}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-bold text-ink-950/60">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
