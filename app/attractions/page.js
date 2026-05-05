import SectionHeader from "@/components/SectionHeader";
import AttractionCard from "@/components/AttractionCard";

export const metadata = {
  title: "Attractions",
  description:
    "Pro Level: PGA-licensed golf simulator, VR racing cockpits, VR bay, bowling, racing simulators. Noob Level: kids simulators, mini bikes, soft play, virtual rollercoaster.",
};

const proHeadline = [
  { name: "PGA Golf Simulator", blurb: "Tee off on famous courses worldwide with PGA-licensed software. Sessions in 15-min blocks up to a full hour.", price: "Ask in-venue", ages: "10+", duration: "15–60 min", intensity: "Chill", accent: "green", bookType: "Golf Simulator" },
  { name: "VR Racing Cockpits", blurb: "Real car cockpits with motion feedback. The most immersive racing experience in Zambia.", price: "Ask in-venue", ages: "12+", duration: "Per race", intensity: "Thrilling", accent: "red", bookType: "VR Racing" },
  { name: "VR Bay", blurb: "Rotating library of VR titles — rollercoasters, action games, exploration. Most advanced setup in Lusaka.", price: "Ask in-venue", ages: "10+", duration: "Per session", intensity: "Thrilling", accent: "blue", bookType: "VR Bay" },
  { name: "Bowling Alley", blurb: "Full alley with automatic scoring. Walk-in lanes plus reservable for groups and parties.", price: "Ask in-venue", ages: "All ages", duration: "Per game", intensity: "Chill", accent: "yellow", bookType: "Bowling" },
];

const proSimulators = ["6D Three Screen Racing / Crazy Racing", "Cruisin Blast with Vibration", "Dynamic Car (Cruisin Blast)", "Monster Eye", "Night Hunter Motion", "Overtake DX", "The Walking Dead", "Transformer"];

const noobLineup = [
  { name: "Soft Play", blurb: "Padded play zone for the smallest ones. Climb, slide, crawl — with our staff keeping watch.", price: "Per session", ages: "2–6", intensity: "Chill", accent: "yellow", bookType: "Soft Play" },
  { name: "Bumper Cars", blurb: "Pad up, pile in, bump everyone you love. A kids' favourite.", price: "Per ride", ages: "5+", intensity: "Thrilling", accent: "red", bookType: "Bumper Cars" },
  { name: "Mini Bikes", blurb: "Pint-sized rides for pint-sized riders. Safe, supervised, and a guaranteed photo op.", price: "Per ride", ages: "3–8", intensity: "Chill", accent: "green", bookType: "Mini Bikes" },
  { name: "Merry-Go-Round", blurb: "The classic. Lights, music, the whole spin.", price: "Per ride", ages: "2–8", intensity: "Chill", accent: "blue", bookType: "Merry-Go-Round" },
  { name: "Virtual Rollercoaster", blurb: "Our viral TikTok favourite — strap in, look down, scream tactically.", price: "Per ride", ages: "8+", intensity: "Thrilling", accent: "red", bookType: "Virtual Rollercoaster" },
  { name: "Classic Arcade", blurb: "Retro and modern arcade machines, token-fed and ready when you are.", price: "Per game", ages: "All ages", intensity: "Chill", accent: "yellow", bookType: "Arcade" },
];

const noobSimulators = ["Dolphin Star", "Happy Cruise", "Robo Sweep", "Sweet Kart"];

export default function AttractionsPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <SectionHeader
            eyebrow="Attractions"
            title="Two levels. One arena."
            subtitle="Upstairs is the Pro Level — high-end simulators and VR. Downstairs is the Noob Level — kids' rides, soft play, and arcade classics. Bring everyone."
          />
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-escape-blue text-cream-50 border-y-2 border-ink-950">
        <div className="absolute inset-0 dots-bright opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="bg-escape-yellow text-ink-950 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
              Pro Level
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Headline experiences.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {proHeadline.map((a) => <AttractionCard key={a.name} {...a} />)}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-ink-950 bg-ink-950 text-cream-50 p-6 sm:p-8 shadow-pop">
            <h3 className="font-display font-bold text-2xl">Pro Level simulator games · K38.99 each</h3>
            <p className="mt-2 text-cream-50/70">Eight rotating titles in the upstairs racing and motion bays.</p>
            <ul className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              {proSimulators.map((g) => (
                <li key={g} className="rounded-xl border border-cream-50/15 bg-ink-900 px-3 py-2 font-semibold text-center">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-escape-red text-cream-50 border-b-2 border-ink-950">
        <div className="absolute inset-0 dots-bright opacity-20 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <span className="bg-escape-yellow text-ink-950 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
              Noob Level
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">For the small humans.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {noobLineup.map((a) => <AttractionCard key={a.name} {...a} />)}
          </div>

          <div className="mt-12 rounded-3xl border-2 border-ink-950 bg-ink-950 text-cream-50 p-6 sm:p-8 shadow-pop">
            <h3 className="font-display font-bold text-2xl">Noob Level simulator games · K34.99 each</h3>
            <ul className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
              {noobSimulators.map((g) => (
                <li key={g} className="rounded-xl border border-cream-50/15 bg-ink-900 px-3 py-2 font-semibold text-center">
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
