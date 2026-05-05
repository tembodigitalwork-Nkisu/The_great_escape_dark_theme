"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const types = [
  "Walk-in / single session",
  "Golf Simulator",
  "VR Racing",
  "VR Bay",
  "Bowling",
  "Birthday Party",
  "School Group",
  "Corporate / Team-Building",
  "Private Hire",
  "General enquiry",
];

function BookingFormInner() {
  const params = useSearchParams();
  const initialType = (() => {
    const t = params.get("type");
    if (t && types.includes(t)) return t;
    return types[0];
  })();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    type: initialType,
    date: "",
    party: "",
    message: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const whatsapp = () => {
    const text = [
      `Hi Great Escape — I'd like to book.`,
      `Name: ${form.name}`,
      `Type: ${form.type}`,
      `Date / time: ${form.date}`,
      `Group size: ${form.party}`,
      form.message ? `Notes: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    return `https://wa.me/260973572871?text=${encodeURIComponent(text)}`;
  };

  const mailto = () => {
    const subject = `Booking enquiry — ${form.type}`;
    const body = [
      `Name: ${form.name}`,
      `Phone / WhatsApp: ${form.phone}`,
      `Type: ${form.type}`,
      `Preferred date / time: ${form.date}`,
      `Group size: ${form.party}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    return `mailto:bookings@thegreatescape.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-3xl border-2 border-ink-950 bg-cream-50 shadow-pop p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <Field label="Your name">
        <input type="text" required value={form.name} onChange={update("name")} placeholder="Full name" className={inputClass} />
      </Field>
      <Field label="Phone / WhatsApp">
        <input type="tel" required value={form.phone} onChange={update("phone")} placeholder="+260 ..." className={inputClass} />
      </Field>
      <Field label="What for?">
        <select value={form.type} onChange={update("type")} className={inputClass}>
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred date / time">
        <input type="text" value={form.date} onChange={update("date")} placeholder="Sat afternoon, 14 June..." className={inputClass} />
      </Field>
      <Field label="Group size" full>
        <input type="text" value={form.party} onChange={update("party")} placeholder="e.g. 4 friends, 12 kids, 25-person off-site" className={inputClass} />
      </Field>
      <Field label="Anything else?" full>
        <textarea rows={4} value={form.message} onChange={update("message")} placeholder="Birthday cake station? Tournament? First-timers?" className={`${inputClass} resize-y`} />
      </Field>

      <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
        <a
          href={whatsapp()}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center rounded-full px-5 py-3 font-bold bg-escape-green text-cream-50 border-2 border-ink-950 shadow-pop hover:translate-y-[3px] hover:shadow-popSm transition"
        >
          Send via WhatsApp
        </a>
        <a
          href={mailto()}
          className="flex-1 text-center rounded-full px-5 py-3 font-bold bg-cream-50 border-2 border-ink-950 hover:bg-ink-950 hover:text-cream-50 transition"
        >
          Send via Email
        </a>
      </div>
    </form>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="rounded-3xl border-2 border-ink-950 bg-cream-50 p-8 text-center text-ink-950/50">Loading form…</div>}>
      <BookingFormInner />
    </Suspense>
  );
}

const inputClass =
  "w-full rounded-xl bg-cream-50 border-2 border-ink-950 px-3 py-2.5 text-ink-950 placeholder-ink-950/40 focus:outline-none focus:ring-4 focus:ring-escape-yellow/60 transition";

function Field({ label, full, children }) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-xs font-bold uppercase tracking-wider text-ink-950/70">{label}</span>
      {children}
    </label>
  );
}
