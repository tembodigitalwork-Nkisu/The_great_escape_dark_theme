import SectionHeader from "@/components/SectionHeader";
import LazyMap from "@/components/LazyMap";
import HoursStrip from "@/components/HoursStrip";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Find Us / Contact",
  description:
    "Find The Great Escape inside Longacres Shopping Mall (KK Mall), Alick Nkhata Road, Lusaka. Phone +260 97 357 2871, school groups +260 96 887 8592.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Find us"
            title="Longacres Shopping Mall, Lusaka."
            subtitle="On Alick Nkhata Road. Free secure parking, restaurants nearby — works as a quick stop or a longer outing."
            accent="green"
          />
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-3xl border-2 border-ink-950 bg-ink-900 shadow-pop overflow-hidden">
            <div className="aspect-[4/3] relative">
              <LazyMap />
            </div>
            <div className="p-5 sm:p-6 space-y-2 text-sm border-t-2 border-ink-950">
              <p className="font-display font-bold text-lg text-cream-50">The Great Escape</p>
              <p className="text-cream-50/75">
                Longacres Shopping Mall (KK Mall)<br />
                Alick Nkhata Road, Lusaka, Zambia
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Longacres+Shopping+Mall+Lusaka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-escape-yellow font-bold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <ContactCard accent="bg-escape-yellow text-ink-950" heading="Talk to us">
              <ContactRow icon={<PhoneIcon />} label="Main / WhatsApp">
                <a href="tel:+260973572871" className="font-bold hover:underline">+260 97 357 2871</a>
              </ContactRow>
              <ContactRow icon={<PhoneIcon />} label="School groups">
                <a href="tel:+260968878592" className="font-bold hover:underline">+260 96 887 8592</a>
              </ContactRow>
              <ContactRow icon={<MailIcon />} label="WhatsApp">
                <a
                  href="https://wa.me/260973572871"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:underline"
                >
                  Chat on WhatsApp →
                </a>
              </ContactRow>
              <ContactRow icon={<LinkIcon />} label="Linktree">
                <a
                  href="https://linktr.ee/thegesczm"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:underline"
                >
                  linktr.ee/thegesczm
                </a>
              </ContactRow>
            </ContactCard>

            <ContactCard accent="bg-escape-blue text-cream-50" heading="Parking & navigation">
              <p className="text-cream-50/90 text-sm">
                Free secure parking available throughout Longacres Mall. Use any of the mall entrances —
                ask at the directory or follow the gaming-arcade signs.
              </p>
            </ContactCard>
          </div>
        </div>
      </section>

      <HoursStrip heading="Hours" />

      <section className="relative py-16 sm:py-24 bg-ink-900 border-y border-cream-50/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Or send a message"
            title="Use the form."
            subtitle="Faster than DMs. We confirm every booking before charging anything."
            accent="red"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ accent, heading, children }) {
  return (
    <div className={`rounded-3xl border-2 border-ink-950 ${accent} p-6 shadow-pop`}>
      <h3 className="font-display font-bold text-xl">{heading}</h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="shrink-0 grid place-items-center h-9 w-9 rounded-full bg-ink-950 border-2 border-ink-950 text-cream-50">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <span className="block text-xs font-bold uppercase tracking-wider opacity-70">{label}</span>
        <span className="block">{children}</span>
      </div>
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.13 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
      <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 1 0 7.07 7.07l1.5-1.5" />
    </svg>
  );
}
