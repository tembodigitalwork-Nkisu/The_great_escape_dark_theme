import Link from "next/link";

const props = [
  {
    title: "PGA Golf Simulator",
    blurb: "Tee off on famous courses worldwide. 15-min to 1-hour blocks. Rain or shine.",
    accent: "bg-escape-green",
    icon: <GolfIcon />,
  },
  {
    title: "VR Racing Cockpits",
    blurb: "Real car cockpits with motion feedback. Most immersive racing in Zambia.",
    accent: "bg-escape-red",
    icon: <RaceIcon />,
  },
  {
    title: "VR Bay & Rollercoaster",
    blurb: "Rotating library of VR titles. Including the TikTok-famous virtual rollercoaster.",
    accent: "bg-escape-blue",
    icon: <VrIcon />,
  },
  {
    title: "Bowling, Arcade, Kids",
    blurb: "Full bowling alley, classic arcade, soft play, mini bikes. Something for every age.",
    accent: "bg-escape-yellow",
    icon: <PinIcon />,
  },
];

export default function ValueProps() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-escape-yellow text-ink-950 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
            What's on
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight text-cream-50">
            Four floors of fun, no kidding.
          </h2>
          <p className="mt-4 text-cream-50/70 text-lg">
            Headline attractions you won't find anywhere else in Lusaka — plus the classics
            for when you just want to bowl, race, or hand a token to a kid and breathe.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {props.map((p) => (
            <article
              key={p.title}
              className="group rounded-3xl border border-cream-50/10 bg-ink-900 p-6 transition hover:border-escape-yellow/60 hover:-translate-y-1"
            >
              <span className={`grid place-items-center h-14 w-14 rounded-2xl ${p.accent} border-2 border-ink-950 text-ink-950`}>
                {p.icon}
              </span>
              <h3 className="mt-5 font-display font-bold text-xl text-cream-50">{p.title}</h3>
              <p className="mt-2 text-sm text-cream-50/65">{p.blurb}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/attractions"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold bg-ink-900 text-cream-50 border-2 border-cream-50 hover:bg-cream-50 hover:text-ink-950 transition"
          >
            See all attractions →
          </Link>
        </div>
      </div>
    </section>
  );
}

function GolfIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v15" />
      <path d="M12 4l5 2-5 2" />
      <circle cx="12" cy="20" r="2" />
    </svg>
  );
}
function RaceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12h2l3-3h10l3 3h2" />
      <path d="M5 12v6h14v-6" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
    </svg>
  );
}
function VrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="20" height="10" rx="3" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="16" cy="12" r="2" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="20" rx="6" ry="2" />
      <path d="M12 18c-2 0-3-2-3-5s1-9 3-9 3 6 3 9-1 5-3 5z" />
    </svg>
  );
}
