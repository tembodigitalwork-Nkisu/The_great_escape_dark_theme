"use client";

import { usePathname } from "next/navigation";
import WhatsAppGlyph from "./WhatsAppGlyph";

export default function WhatsAppButton() {
  const pathname = usePathname();
  const hidden = pathname === "/contact" || pathname === "/book";

  return (
    <a
      href="https://wa.me/260973572871?text=Hi%20Great%20Escape%2C%20I%27d%20like%20to%20book%20a%20session."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-lg ring-2 ring-cream-50/40 transition-all duration-300 ${
        hidden ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 hover:scale-110"
      }`}
    >
      <WhatsAppGlyph className="h-7 w-7 text-white" />
    </a>
  );
}
