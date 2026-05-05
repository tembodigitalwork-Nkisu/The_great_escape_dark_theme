# The Great Escape — Marketing Site

Multi-page Next.js 15 site for The Great Escape, the indoor gaming arena at Longacres Shopping Mall, Lusaka, Zambia. Operated under the Microgravity entertainment-technology brand.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js 15 (App Router, JS)
- React 19
- Tailwind CSS 3
- `next/font/google` (Fredoka display + Inter body)
- `next/image` for asset optimisation
- No backend yet — booking forms open WhatsApp / email

## Site map

| Route | Purpose |
|---|---|
| `/` | Hero, value props, hours, promos, destination cards |
| `/attractions` | Pro Level + Noob Level lineups |
| `/pricing` | Per-game, packages, weekday vs weekend |
| `/parties` | Birthday, school, corporate, private hire |
| `/food` | Menu — pizzas, mains, drinks |
| `/about` | Microgravity, mission, the tech |
| `/contact` | Map, NAP, hours, parking, inline form |
| `/book` | Booking form (pre-fills via `?type=`) |

## Brand

- **Logo**: "GREAT ESCAPE" wordmark + "Get. Set. Game." tagline (CSS-rendered approximation in `components/Logo.js`)
- **Colors**: yellow `#FCD400`, red `#EE1C25`, blue `#1B47DC`, green `#28B845`, ink `#0c0c0c`, cream `#fffdf3`
- **Voice**: playful, high-energy, family-friendly. "Where reality takes a break."

## What's still placeholder

- Headline experience prices (Golf, VR, Bowling) marked `K—` — need real per-session figures from the venue
- Email backend — `BookingForm.js` mailto/WhatsApp only, wire to Resend / Formspree / Supabase before launch
- Real venue photos — currently using brand colour blocks and CSS patterns
- Production URL — `https://thegreatescape.example` is a placeholder in `app/layout.js`, `app/sitemap.js`, `app/robots.js`

## Deploy

`vercel` from the project root. Set production domain, then update the placeholder URL in the three files above.

## Phone numbers

- Main / WhatsApp: **+260 97 357 2871**
- School groups: **+260 96 887 8592**
