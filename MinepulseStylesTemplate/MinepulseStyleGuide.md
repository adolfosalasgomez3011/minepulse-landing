# MinePulse — Web Page Style Guide
_GoalPraxis / MinePulse Platform | Version 1.0 | March 2026_

---

## Brand Identity

**Product Name:** MinePulse  
**Parent Company:** GoalPraxis S.A.C. (Lima, Perú)  
**Tagline:** _Locate. Optimize. Protect._  
**Market:** Mid-size mining operations — Peru, Bolivia, Chile, South America  
**Tech Base:** Enterprise-grade IoT, Private LoRaWAN networks  
**Positioning:** "80% of Big Mine capability, at 20% of the cost."

---

## Colour Palette

Inspired by **tektelic.com** dark-navy corporate tech style, adapted with Peruvian mining identity (Inca gold heritage, Andean earth tones).

| Token                | Hex         | Usage                                              |
|----------------------|-------------|----------------------------------------------------|
| `--color-navy`       | `#0a1628`   | Hero background, nav bar, darkest bg               |
| `--color-navy-mid`   | `#0f2040`   | Dark section backgrounds                           |
| `--color-navy-light` | `#162d55`   | Cards on dark backgrounds                          |
| `--color-blue`       | `#1a6ed8`   | Primary CTA buttons, links, section tags           |
| `--color-blue-light` | `#3d9bff`   | Hover states, highlighted text on dark bg          |
| `--color-gold`       | `#d4a017`   | **PRIMARY CTA**, hero accent, ROI numbers, logo    |
| `--color-gold-light` | `#f0bf3a`   | Gold hover states                                  |
| `--color-teal`       | `#0eaeb8`   | "Protect" pillar — safety theme                   |
| `--color-green`      | `#22c55e`   | Active status, success, positive outcomes          |
| `--color-red`        | `#ef4444`   | Alerts, cost/risk indicators                       |
| `--color-slate-100`  | `#f1f5f9`   | Light section background                           |
| `--color-white`      | `#ffffff`   | Card backgrounds, body text on dark                |

### Colour Usage Rules
- **Page backgrounds (dark):** `--color-navy` → `--color-navy-mid`
- **Page sections (light):** `--color-slate-100` and `--color-white`
- **Primary CTA:** Always gold (`#d4a017`) — highest visual weight
- **Secondary CTA:** Blue (`#1a6ed8`)
- **Three Pillars:** Locate=Blue · Optimize=Gold · Protect=Teal

---

## Typography

| Role          | Font Family         | Weight    | Size              |
|---------------|---------------------|-----------|-------------------|
| Hero H1       | Montserrat          | 900       | clamp(2.8rem, 7vw, 5rem) |
| Section H2    | Montserrat          | 800       | clamp(2rem, 4vw, 2.75rem)|
| Card H3/H4    | Montserrat          | 700–800   | 1.1–1.5rem        |
| Body copy     | Inter               | 400       | 1rem (16px)       |
| Lead text     | Inter               | 400       | 1.05–1.2rem       |
| Labels/Chips  | Inter               | 600–700   | 0.7–0.8rem        |

**Google Fonts import:** `Montserrat:wght@700;800;900` + `Inter:wght@300;400;500;600;700;800`

---

## Visual Style

- **Dark-first design** — professional, trust-inspiring, industrial control room feel
- **Subtle grid overlay** on dark sections (IoT network data feel)
- **Glow effects** on buttons and active elements (electric blue)
- **Gold accents** for all value/ROI-related numbers and primary CTAs
- **Animated counters** for ROI figures and dashboard KPIs
- **Live-blinking dots** on the dashboard map (green=active, red=alert)
- **Border radius:** 6px (small) → 12px (cards) → 20px (large cards) → 32px (feature cards)
- **Backdrop blur** on sticky navigation bar

---

## Layout Structure

```
┌──────────────────────────────────────────────────┐
│  Navigation (sticky, dark, blur)                 │
├──────────────────────────────────────────────────┤
│  Hero (full-screen, navy, grid-bg, orb glows)    │
│  → Badge | H1 | Subtitle | CTAs | Stats bar      │
├──────────────────────────────────────────────────┤
│  Problem Band (dark mid, single-line impact)     │
├──────────────────────────────────────────────────┤
│  Three Pillars: Locate | Optimize | Protect      │
│  (light slate-100 bg, 3-column cards)            │
├──────────────────────────────────────────────────┤
│  How It Works (dark, 4-step architecture flow)   │
├──────────────────────────────────────────────────┤
│  Platform Preview (white, text + dashboard mock) │
├──────────────────────────────────────────────────┤
│  ROI Section (dark, cost bars + pricing plans)   │
├──────────────────────────────────────────────────┤
│  Industries: Mining | Construction | Energy      │
├──────────────────────────────────────────────────┤
│  Pilot Roadmap (white, 3-step Month 1-2-3)       │
├──────────────────────────────────────────────────┤
│  About GoalPraxis (dark mid, quote card)         │
├──────────────────────────────────────────────────┤
│  Contact / Lead Form (light)                     │
├──────────────────────────────────────────────────┤
│  Footer (dark, links + legal)                    │
└──────────────────────────────────────────────────┘
```

**Max width:** 1200px container · **Section padding:** 96px vertical  
**Responsive breakpoints:** 1024px (tablets) · 768px (mobile nav) · 480px (small screens)

---

## Component Library Reference

| Component         | File location         | Key classes                         |
|-------------------|-----------------------|-------------------------------------|
| Buttons           | `css/styles.css`      | `.btn-gold`, `.btn-primary`, `.btn-outline` |
| Section Header    | `css/styles.css`      | `.section-header`, `.section-tag`    |
| Pillar Cards      | `css/styles.css`      | `.pillar-card`, `.pillar-featured`   |
| Dashboard Mock    | `css/styles.css`      | `.dashboard-mock`, `.asset-dot`      |
| Price Plans       | `css/styles.css`      | `.plan-card`, `.plan-card-featured`  |
| Contact Form      | `css/styles.css`      | `.contact-form`, `.form-group`       |

Style tokens: see `MinepulseStylesTemplate/tokens.css`

---

## Peru / South America Identity

- **Gold** as primary accent = Inca heritage, mining wealth, value
- **Navy** = depth, trust, Andean night sky
- Hero badge says: _"IoT Intelligence for Latin American Mining"_
- Contact address: Lima, Perú — Serving the Andes & South America
- Tagline references operations like "Operación Andes Norte" in dashboard
- Language strategy: English for global reach, Spanish for local demos

---

## NDA Compliance Notes

- **No mention of "Tektelic"** anywhere in public-facing content
- Hardware referred to generically: "enterprise-grade IoT sensors", "rugged GPS tags"
- LoRaWAN network described without specific vendor references
- GoalPraxis is positioned as the **solution provider** — MinePulse as the **product**

---

## File Structure

```
GoalPraxis-MinepulseWebpage/
├── index.html                        ← Main web page
├── css/
│   └── styles.css                    ← Full stylesheet
├── js/
│   └── main.js                       ← Interactions & animations
└── MinepulseStylesTemplate/
    ├── MinepulseStyleGuide.md        ← This file
    └── tokens.css                    ← CSS design tokens reference
```
