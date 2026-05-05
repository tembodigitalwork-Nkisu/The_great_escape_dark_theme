// Update SITE_URL once the production domain is wired up.
const SITE_URL = "https://thegreatescape.example";

const routes = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/attractions", priority: 0.9, freq: "monthly" },
  { path: "/pricing", priority: 0.9, freq: "monthly" },
  { path: "/parties", priority: 0.9, freq: "monthly" },
  { path: "/food", priority: 0.7, freq: "monthly" },
  { path: "/about", priority: 0.6, freq: "yearly" },
  { path: "/contact", priority: 0.8, freq: "monthly" },
  { path: "/book", priority: 0.9, freq: "weekly" },
];

export default function sitemap() {
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
