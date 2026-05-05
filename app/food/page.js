import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Food & Drinks",
  description:
    "Pizzas, chicken strips, sides, and drinks at The Great Escape, Longacres Mall. Plus the Freewheelin' Wednesday voucher: spend K100 on games, get K50 off food.",
};

const menu = {
  Pizzas: [
    { name: "Margherita Pizza", price: 90, desc: "Crispy base, fresh basil & parsley, classic tomato sauce, melted mozzarella." },
    { name: "Hawaiian Pizza", price: 125, desc: "Tomato base, savoury beef macon, juicy pineapple chunks, fresh parsley, mozzarella." },
    { name: "Chicken Sausage Pizza", price: 125, desc: "Tender chicken sausage, fresh parsley, gooey mozzarella on crispy base." },
  ],
  Mains: [
    { name: "Chicken Strips & Chips", price: 75, desc: "Crispy golden-crumb chicken strips on a bed of fresh lettuce, chips on the side, 1000-island sauce." },
  ],
};

export default function FoodPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Food & Drinks"
            title="Slices and stories between games."
            subtitle="A focused menu built around what plays well between rounds. Pizzas, chicken strips, cold drinks. Eat-in or grab and go."
            accent="green"
          />
        </div>
      </section>

      <section className="relative py-12 sm:py-16 bg-escape-yellow text-ink-950 border-y-2 border-ink-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-ink-950 text-cream-50 border-2 border-ink-950 p-6 sm:p-8 shadow-pop relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-escape-yellow/20" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-escape-red">Promo · Wednesdays only</p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Freewheelin' Wednesday: K100 played, K50 fed.
            </h2>
            <p className="mt-3 max-w-xl text-cream-50/75">
              Every K100 you spend on games on Wednesdays earns you a K50 food voucher in-house.
              Stack it. Use it. Eat well.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
          {Object.entries(menu).map(([heading, items]) => (
            <div key={heading}>
              <div className="flex items-center gap-3">
                <span className="bg-escape-red text-cream-50 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
                  {heading}
                </span>
                <span className="h-px flex-1 bg-cream-50/15" />
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {items.map((item) => (
                  <article key={item.name} className="rounded-3xl border border-cream-50/15 bg-ink-900 p-6 hover:border-escape-yellow/60 transition">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-xl text-cream-50">{item.name}</h3>
                      <span className="shrink-0 bg-escape-yellow text-ink-950 border-2 border-ink-950 rounded-full px-3 py-1 text-sm font-bold">
                        K{item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-cream-50/70 text-sm">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold bg-escape-yellow text-ink-950 border-2 border-ink-950 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition"
            >
              Find us at Longacres →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
