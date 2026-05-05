import Link from "next/link";

export const metadata = {
  title: "Lost in the arcade",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] grid place-items-center py-20 dots-soft">
      <div className="mx-auto max-w-xl px-4 sm:px-6 text-center">
        <p className="font-display text-[8rem] leading-none font-bold text-escape-yellow text-stroke">404</p>
        <h1 className="mt-4 font-display font-bold text-3xl sm:text-5xl tracking-tight text-cream-50">
          You took a wrong turn at the bowling alley.
        </h1>
        <p className="mt-4 text-cream-50/70 text-lg">
          That page doesn't exist — but the arcade still does. Pick a destination:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full px-5 py-2.5 font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950 shadow-popSm hover:translate-y-[2px] hover:shadow-none transition">
            Back to home
          </Link>
          <Link href="/attractions" className="rounded-full px-5 py-2.5 font-bold bg-ink-900 text-cream-50 border-2 border-cream-50 hover:bg-cream-50 hover:text-ink-950 transition">
            See what's on
          </Link>
          <Link href="/contact" className="rounded-full px-5 py-2.5 font-bold bg-ink-900 text-cream-50 border-2 border-cream-50 hover:bg-cream-50 hover:text-ink-950 transition">
            Find us
          </Link>
        </div>
      </div>
    </main>
  );
}
