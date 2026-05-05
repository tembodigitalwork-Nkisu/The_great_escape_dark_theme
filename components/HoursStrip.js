"use client";

import { useEffect, useState } from "react";

const days = [
  { abbr: "Mon", full: "Monday", hours: null },
  { abbr: "Tue", full: "Tuesday", hours: null },
  { abbr: "Wed", full: "Wednesday", hours: "14:00 – 20:00" },
  { abbr: "Thu", full: "Thursday", hours: "14:00 – 22:00" },
  { abbr: "Fri", full: "Friday", hours: "14:00 – 22:00" },
  { abbr: "Sat", full: "Saturday", hours: "11:00 – 23:00" },
  { abbr: "Sun", full: "Sunday", hours: "11:00 – 22:00" },
];

export default function HoursStrip({ heading = "When we're open" }) {
  const [todayIdx, setTodayIdx] = useState(-1);

  useEffect(() => {
    // JS getDay(): 0 = Sun ... 6 = Sat. Our array starts on Mon.
    const js = new Date().getDay();
    setTodayIdx(js === 0 ? 6 : js - 1);
  }, []);

  return (
    <section className="relative py-16 sm:py-20 bg-escape-blue text-cream-50">
      <div className="absolute inset-0 dots-bright opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="inline-block bg-escape-yellow text-ink-950 border-2 border-ink-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-popSm">
              Hours
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl tracking-tight">{heading}</h2>
          </div>
          <p className="text-cream-50/80 text-sm max-w-md">
            Closed Monday and Tuesday. Built around after-school, evening, and weekend traffic.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {days.map((d, i) => {
            const closed = !d.hours;
            const isToday = i === todayIdx;
            return (
              <div
                key={d.abbr}
                className={`rounded-xl border-2 border-ink-950 p-4 ${
                  isToday
                    ? "bg-escape-yellow text-ink-950 shadow-pop"
                    : closed
                    ? "bg-cream-50/10 text-cream-50/60"
                    : "bg-cream-50 text-ink-950"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-wider">
                  {d.abbr}
                  {isToday && <span className="ml-1 text-escape-red">· today</span>}
                </p>
                <p className={`mt-1 font-display font-bold ${closed ? "" : "text-base sm:text-lg"}`}>
                  {d.hours ?? "Closed"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
