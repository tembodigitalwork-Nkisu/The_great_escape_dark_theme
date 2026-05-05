import SectionHeader from "@/components/SectionHeader";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Book a Session",
  description:
    "Send The Great Escape your booking details — golf simulator, VR, racing, bowling, birthday parties, school groups, corporate. We confirm before charging.",
};

export default function BookPage() {
  return (
    <main>
      <section className="relative py-16 sm:py-20 dots-soft">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Book a session"
            title="Tell us what and when."
            subtitle="Fastest reply via WhatsApp. Email works too. We'll confirm slot, capacity, and cost before you pay anything."
            accent="yellow"
          />
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
