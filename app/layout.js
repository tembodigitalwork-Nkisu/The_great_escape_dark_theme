import { Fredoka, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://thegreatescape.example"),
  title: {
    default: "The Great Escape — Lusaka's Indoor Gaming Arena at Longacres Mall",
    template: "%s — The Great Escape",
  },
  description:
    "Zambia's most advanced indoor gaming arena. PGA-licensed golf simulator, VR racing in real car cockpits, bowling, virtual rollercoaster and more — at Longacres Mall, Lusaka.",
  keywords: [
    "things to do in Lusaka",
    "VR Lusaka",
    "golf simulator Lusaka",
    "kids birthday Lusaka",
    "arcade Lusaka",
    "bowling Lusaka",
    "Great Escape Zambia",
    "Longacres Mall",
  ],
  openGraph: {
    title: "The Great Escape — Get. Set. Game.",
    description:
      "Indoor gaming arena at Longacres Mall, Lusaka. VR, golf simulator, bowling, kids' rides, parties.",
    type: "website",
    locale: "en_ZM",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Great Escape — Get. Set. Game.",
    description:
      "Indoor gaming arena at Longacres Mall, Lusaka. VR, golf simulator, bowling, kids' rides, parties.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FCD400",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton />
        <BusinessSchema />
      </body>
    </html>
  );
}

function BusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "The Great Escape",
    alternateName: "Great Escape Zambia",
    image: "https://thegreatescape.example/og.jpg",
    "@id": "https://thegreatescape.example",
    url: "https://thegreatescape.example",
    telephone: "+260973572871",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Longacres Shopping Mall, Alick Nkhata Road",
      addressLocality: "Lusaka",
      addressCountry: "ZM",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday"], opens: "14:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "14:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "11:00", closes: "23:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "22:00" },
    ],
    sameAs: [
      "https://www.instagram.com/greatescapezm/",
      "https://www.facebook.com/greatescapezm",
      "https://www.tiktok.com/@greatescapezm",
      "https://x.com/greatescapezm",
      "https://linktr.ee/thegesczm",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
