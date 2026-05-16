# DESIGN.md — SageBloom Florist Landing Page Design System

## 1. Design Overview

This document defines the complete visual design rules for a premium florist landing page based on the provided SageBloom website screenshot. The design direction is elegant, soft, feminine, premium, romantic, and calm. It combines a sage green botanical brand identity with warm ivory backgrounds, refined typography, high-quality floral imagery, soft card UI, and generous whitespace.

The website should feel like a high-end flower shop or gifting boutique. It should not look loud, playful, overly colorful, or corporate. Every section must feel polished, curated, airy, and emotionally warm.

### Core Design Keywords

- Elegant
- Premium
- Feminine
- Botanical
- Romantic
- Soft luxury
- Fresh and natural
- Clean and spacious
- Warm neutral
- Editorial florist aesthetic
- Conversion-focused e-commerce

### Visual Personality

The UI should communicate:

- Flowers as meaningful gifts, not just products.
- A handcrafted and curated florist brand.
- Soft luxury through spacing, muted colors, and refined typography.
- Trust through clean product cards, service badges, and testimonials.
- Ease of shopping through repeated CTAs, product sections, occasion categories, and FAQ.

---

## 2. Page Structure and Layout Hierarchy

The landing page follows a long-form e-commerce homepage structure with multiple product discovery and trust-building sections.

### Overall Page Flow

1. Top announcement/service bar
2. Main navigation header
3. Hero section
4. Hero feature highlights
5. Shop by Category
6. Best Sellers product grid
7. Trust / benefit strip
8. Shop by Occasion
9. Large preserved flower promotional banner
10. Custom bouquet process section
11. Floral inspiration gallery
12. Customer testimonials
13. FAQ section
14. Final CTA banner
15. Footer

### Layout Width

Use a centered container layout.

Recommended values:

```css
--container-max-width: 1200px;
--container-padding-desktop: 32px;
--container-padding-tablet: 24px;
--container-padding-mobile: 16px;
```

For very large screens, keep content visually centered and avoid stretching cards too widely. The design in the screenshot uses a broad desktop layout, but individual content blocks stay aligned to a consistent max-width.

### Page Background

The page background is warm white / ivory, not pure white.

Recommended:

```css
body {
  background: #FAF8F2;
}
```

Sections alternate subtly between:

- Warm ivory page background
- White/cream cards
- Soft beige promotional panels
- Pale sage gradient hero/banner backgrounds

---

## 3. Color Palette

The color palette is based on sage green, ivory, cream, muted beige, warm gray, and blush floral accents.

### Primary Colors

| Token | Hex | Usage |
|---|---:|---|
| Primary Sage | `#596B4A` | Primary buttons, top bar, icons, active states |
| Deep Olive Sage | `#46563A` | Header accents, strong text on green backgrounds, button hover |
| Muted Sage | `#718164` | Secondary icons, feature illustrations, small labels |
| Pale Sage | `#DDE5D5` | Icon circles, soft backgrounds, decorative fills |
| Sage Mist | `#EEF3E9` | Large pale panels, hover backgrounds |

### Neutral Background Colors

| Token | Hex | Usage |
|---|---:|---|
| Warm Ivory | `#FAF8F2` | Main page background |
| Soft Cream | `#F5F0E7` | Cards, category blocks, banner backgrounds |
| Warm White | `#FFFDF8` | Navbar, product cards, FAQ cards |
| Light Beige | `#E9DFD0` | Borders, dividers, soft outlines |
| Muted Sand | `#D8C9B5` | Secondary borders, image backgrounds |

### Text Colors

| Token | Hex | Usage |
|---|---:|---|
| Main Text | `#2F352B` | Headings, important labels |
| Body Text | `#5E6258` | Paragraphs and descriptions |
| Muted Text | `#8A8C82` | Metadata, captions, helper text |
| Soft Text | `#A3A198` | Decorative small text, disabled text |

### Floral Accent Colors

| Token | Hex | Usage |
|---|---:|---|
| Soft Blush | `#EBC7BD` | Flower accents, badges, small decorative elements |
| Dusty Rose | `#D9A69B` | Popular labels, floral detail accents |
| Champagne | `#EAD8BF` | Gift accents, ribbons, promotional background |
| Warm Gold | `#C8A35D` | Star ratings, premium highlights only |

### Recommended CSS Variables

```css
:root {
  --color-primary: #596B4A;
  --color-primary-dark: #46563A;
  --color-primary-muted: #718164;
  --color-primary-pale: #DDE5D5;
  --color-primary-mist: #EEF3E9;

  --color-bg: #FAF8F2;
  --color-surface: #FFFDF8;
  --color-surface-soft: #F5F0E7;
  --color-border: #E9DFD0;
  --color-border-muted: #D8C9B5;

  --color-text: #2F352B;
  --color-text-body: #5E6258;
  --color-text-muted: #8A8C82;
  --color-text-soft: #A3A198;

  --color-blush: #EBC7BD;
  --color-rose: #D9A69B;
  --color-champagne: #EAD8BF;
  --color-gold: #C8A35D;
}
```

### Color Usage Rules

- Use sage green as the primary brand color, but not excessively.
- Use ivory and cream as the dominant colors.
- Use blush only as a subtle floral accent, never as the main UI color.
- Avoid bright pink, neon green, strong red, harsh black, or high-saturation colors.
- Product photography may contain stronger floral colors, but UI elements should stay muted.
- Borders should be very light and warm-toned.
- Buttons should use solid sage green with white/cream text.

---

## 4. Typography System

The screenshot uses a refined editorial style: elegant serif display headings paired with a clean, readable sans-serif for navigation, product text, and descriptions.

### Font Pairing

Recommended Google Font combination:

```css
--font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
--font-body: 'Inter', 'Manrope', 'Nunito Sans', Arial, sans-serif;
```

Alternative premium pairing:

```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Manrope', Arial, sans-serif;
```

### Heading Style

Headings are elegant, thin-to-medium weight, high contrast, and slightly editorial.

Rules:

- Use serif font for major titles.
- Font weight should be 400 or 500, not bold.
- Letter spacing should be slightly negative for large headings.
- Line height should be tight but readable.

Recommended:

```css
h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--color-text);
  font-weight: 400;
  letter-spacing: -0.02em;
}
```

### Body Style

Body text is small, clean, and calm. It should not overpower imagery or headings.

```css
body {
  font-family: var(--font-body);
  color: var(--color-text-body);
  font-size: 14px;
  line-height: 1.6;
  font-weight: 400;
}
```

### Typography Scale

| Element | Desktop Size | Mobile Size | Weight | Line Height | Notes |
|---|---:|---:|---:|---:|---|
| Hero H1 | 52–64px | 36–42px | 400 | 1.0–1.08 | Large elegant serif |
| Section H2 | 28–34px | 24–28px | 400 | 1.15 | Serif, calm |
| Promo H2 | 40–48px | 30–36px | 400 | 1.08 | Banner heading |
| Card Title | 14–16px | 14px | 500–600 | 1.3 | Sans-serif |
| Product Name | 13–15px | 13px | 500 | 1.35 | Sans-serif |
| Product Price | 14–16px | 14px | 600 | 1.3 | Stronger weight |
| Nav Link | 12–13px | 14px | 500 | 1 | Clean and compact |
| Button Text | 12–14px | 13px | 600 | 1 | Medium weight |
| Caption | 11–12px | 11px | 400 | 1.4 | Muted text |

### Example Typography CSS

```css
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.04;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.section-title {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 2.5vw, 2.125rem);
  line-height: 1.15;
  font-weight: 400;
  color: var(--color-text);
}

.body-copy {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-body);
}
```

---

## 5. Spacing System

The design uses generous whitespace but compact cards. Spacing is clean and consistent.

### Spacing Tokens

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

### Section Spacing

| Section Type | Desktop Padding | Mobile Padding |
|---|---:|---:|
| Top bar | 8–10px vertical | 8px |
| Header | 20–24px vertical | 16px |
| Hero | 64–80px vertical | 40–56px |
| Product/category sections | 32–48px vertical | 28–36px |
| Promo banners | 32–48px vertical | 28–36px |
| Footer | 40–56px vertical | 32–40px |

### Internal Card Padding

| Component | Padding |
|---|---:|
| Product card | 12–16px |
| Category card | 10–14px |
| Feature pill/card | 14–20px |
| Testimonial card | 20–24px |
| FAQ row | 14–18px |
| Footer column | 12–16px |

---

## 6. Border Radius Rules

The design uses rounded corners but stays refined. Radius is soft and elegant, not overly bubbly.

### Radius Tokens

```css
--radius-xs: 6px;
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-full: 999px;
```

### Usage

| Element | Radius |
|---|---:|
| Buttons | 6–8px |
| Product cards | 10–14px |
| Category cards | 10–14px |
| Large promotional banners | 16–20px |
| Icon circles | 999px |
| Testimonial cards | 12–16px |
| FAQ wrapper | 16px |
| Image gallery cards | 10–14px |

### Rules

- Use consistent rounded cards throughout the page.
- Large hero or banner images should use 16–20px radius.
- Product images inside cards should have slightly smaller radius than the outer card.
- Icon containers should be circular.

---

## 7. Border and Shadow System

The UI uses very soft borders and minimal shadows. Borders are more important than shadows.

### Borders

Recommended:

```css
--border-soft: 1px solid #E9DFD0;
--border-muted: 1px solid rgba(216, 201, 181, 0.65);
```

Use borders on:

- Product cards
- Category cards
- FAQ rows
- Navbar divider
- Feature strips
- Footer columns
- Secondary buttons

### Shadows

Shadows should be subtle and warm. Avoid dark or heavy drop shadows.

```css
--shadow-xs: 0 1px 2px rgba(47, 53, 43, 0.04);
--shadow-sm: 0 4px 12px rgba(47, 53, 43, 0.06);
--shadow-md: 0 10px 28px rgba(47, 53, 43, 0.08);
```

### Shadow Usage

| Element | Shadow |
|---|---|
| Navbar | Very subtle bottom shadow or border only |
| Product cards | `shadow-xs`, `shadow-sm` on hover |
| Large promo banner | `shadow-sm` |
| Dropdown/mobile menu | `shadow-md` |
| CTA cards | `shadow-sm` |

### Hover Effects

```css
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-sm);
  border-color: rgba(89, 107, 74, 0.25);
}
```

Hover should feel refined and gentle.

---

## 8. Header and Navigation

The header consists of two parts:

1. Thin top service bar in sage green.
2. Main white/ivory navigation bar.

### Top Service Bar

The top bar communicates key selling points.

Content examples:

- Same-Day Delivery Available
- Fresh Flowers, Handpicked Daily
- Delivery Across Major Cities
- Premium Gifting & Packaging

Design rules:

```css
.top-bar {
  background: #596B4A;
  color: #FFFDF8;
  height: 34px;
  font-size: 12px;
  font-weight: 500;
}
```

Layout:

- Horizontal flex layout.
- Items centered across the bar.
- Small line icons before text.
- Vertical separators between items.
- Icon size: 14–16px.
- Text opacity: 0.9.

### Main Navbar

The navbar is clean, white, and spacious.

```css
.navbar {
  background: rgba(255, 253, 248, 0.96);
  border-bottom: 1px solid rgba(233, 223, 208, 0.7);
  height: 76px;
}
```

Layout:

- Logo on the left.
- Navigation links centered.
- Search, wishlist, cart, and CTA on the right.
- Use sticky behavior if needed.
- Keep ample horizontal spacing.

### Logo Treatment

Logo combines a botanical line icon with serif brand name.

Rules:

- Logo icon: thin floral line art.
- Brand text: serif, medium size, sage green or dark muted text.
- Logo height: 40–48px desktop.
- Avoid heavy or modern tech-style logos.

### Navigation Links

```css
.nav-link {
  font-size: 12px;
  font-weight: 500;
  color: #2F352B;
  padding: 8px 12px;
}
```

Rules:

- Use small and refined link text.
- Keep links visually quiet.
- Hover color should be sage green.
- Do not underline by default.

### Header Icons

- Use thin-line icons.
- Stroke width: 1.5–1.75px.
- Size: 20–22px.
- Color: `#2F352B`.
- Cart badge: small sage green circle with ivory number.

---

## 9. Button System

Buttons are compact, refined, and conversion-focused.

### Primary Button

Used for main CTAs such as Order Now, Shop Flowers, Request Custom Bouquet.

```css
.btn-primary {
  background: #596B4A;
  color: #FFFDF8;
  border: 1px solid #596B4A;
  border-radius: 7px;
  padding: 12px 22px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1;
}

.btn-primary:hover {
  background: #46563A;
  border-color: #46563A;
}
```

### Secondary Button

Used for less dominant actions such as Shop by Occasion.

```css
.btn-secondary {
  background: transparent;
  color: #596B4A;
  border: 1px solid rgba(89, 107, 74, 0.45);
  border-radius: 7px;
  padding: 12px 22px;
  font-size: 13px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #EEF3E9;
  border-color: #596B4A;
}
```

### Small Product Button

Used inside product cards.

```css
.btn-product {
  width: 100%;
  background: #596B4A;
  color: #FFFDF8;
  border-radius: 6px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 600;
}
```

### Button Rules

- Do not use large pill buttons everywhere.
- Keep button height around 36–44px.
- Use sage green for main CTAs only.
- Secondary buttons should feel soft and outlined.
- Button corners should be subtly rounded, not fully pill-shaped.

---

## 10. Hero Section

The hero is the emotional centerpiece of the page.

### Hero Layout

Desktop layout:

- Two-column composition.
- Left: headline, paragraph, CTAs, feature highlights.
- Right: large bouquet image.
- Background: soft cream/ivory with pale sage botanical blur accents.
- Height: approximately 420–520px depending on viewport.

Recommended grid:

```css
.hero {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  min-height: 480px;
  background: linear-gradient(90deg, #FAF8F2 0%, #F5F0E7 55%, #EEF3E9 100%);
}
```

### Hero Heading

Text:

`Flowers for Every Meaningful Moment`

Rules:

- Large serif heading.
- Dark muted text.
- Tight line height.
- Max width around 500px.

```css
.hero-title {
  max-width: 520px;
  font-size: 58px;
  line-height: 1.02;
  font-weight: 400;
}
```

### Hero Body Copy

- Font size: 15–16px.
- Max width: 420–460px.
- Color: muted body text.
- Keep copy concise.

### Hero Image

The bouquet image dominates the right side.

Rules:

- Use a high-resolution bouquet photo with transparent or light background.
- Bouquet should feel large, premium, and slightly overlapping the hero background.
- Include wrapped paper, ribbons, and soft floral colors.
- Avoid hard rectangular image frames in the hero.
- Allow organic image shape and negative space.

### Decorative Botanical Blurs

The screenshot uses out-of-focus leaf shapes near edges.

Rules:

- Use very soft sage/green blurred botanical elements.
- Position them at top-left and right edges.
- Opacity around 0.25–0.45.
- They should frame the hero without distracting.

---

## 11. Feature Highlight Icons

Below the hero CTAs, small feature badges communicate benefits.

Examples:

- Fresh Flowers — Handpicked Daily
- Same-Day Delivery — Across Major Cities
- Curated Gifts — For Every Moment
- Handcrafted — With Love & Care

### Design Rules

```css
.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-icon {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid #DDE5D5;
  background: #FFFDF8;
  color: #596B4A;
}
```

Text:

- Title: 12–13px, 600 weight, dark.
- Subtitle: 10–11px, muted.

Icons:

- Thin botanical/gift/delivery line icons.
- Sage green stroke.
- Keep icon style consistent.

---

## 12. Category Cards

The `Shop by Category` section uses compact image cards in a horizontal grid.

### Layout

- 7–8 cards per desktop row.
- Equal width cards.
- Small image at top, label below.
- Section title left, view-all link right.

```css
.category-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
}
```

### Category Card Style

```css
.category-card {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}
```

Image:

- Aspect ratio: 1:1 or 4:3.
- Rounded inner corners: 8–10px.
- Background: pale cream.
- Product should be centered.

Label:

- Font size: 12–13px.
- Weight: 500.
- Color: dark muted.

Hover:

- Slight lift.
- Border becomes pale sage.
- Image may scale to 1.02.

---

## 13. Product Card System

The `Best Sellers` section uses clean e-commerce product cards.

### Product Grid

Desktop:

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
}
```

Tablet:

```css
.product-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

Mobile:

```css
.product-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
```

### Product Card Style

```css
.product-card {
  position: relative;
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 12px;
  padding: 12px;
  overflow: hidden;
}
```

### Product Image

- Aspect ratio: 1:1.
- Object-fit: contain or cover depending on product image type.
- Background: warm cream.
- Rounded: 8–10px.
- Keep product centered and large.

### Wishlist Icon

- Position: top-right inside card.
- Icon: heart outline.
- Size: 18px.
- Color: muted sage/gray.
- Background may be transparent or a very light circle.

```css
.wishlist-button {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: rgba(255, 253, 248, 0.85);
}
```

### Product Badges

Badges appear in top-left for labels like Best Seller, Popular, New.

```css
.product-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
}
```

Badge color rules:

- Best Seller: pale sage background, sage text.
- Popular: pale blush background, dusty rose text.
- New: pale green background, sage text.

### Product Text

```css
.product-name {
  font-size: 13px;
  font-weight: 500;
  color: #2F352B;
  margin-top: 10px;
}

.product-price {
  font-size: 14px;
  font-weight: 600;
  color: #2F352B;
  margin-top: 4px;
}
```

### Product Card Rules

- Cards should feel compact but not cramped.
- Keep product names short and readable.
- Use consistent image height.
- CTA button aligns at the bottom.
- Add subtle hover lift.

---

## 14. Trust / Benefits Strip

A horizontal card strip appears after Best Sellers.

### Purpose

It communicates brand trust and value propositions:

- Leading flower & gifting brand
- Best quality arrangements
- Wide product selection
- Same-day delivery available

### Layout

Desktop:

- One large rounded container.
- Four equal columns.
- Icon left, text right.
- Thin vertical dividers between items.

```css
.benefit-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 14px;
  padding: 22px 28px;
}
```

### Icons

- Size: 32–40px.
- Thin-line style.
- Sage color.
- No filled colorful icons.

### Text

- Title: 13px, weight 600, dark.
- Description: 11–12px, muted.

---

## 15. Shop by Occasion Section

Occasion cards help users shop based on emotional moments.

### Layout

- Section title left.
- Explore/View all link right.
- 8 cards in a horizontal grid.
- Each card has a flower image and white text panel below.

### Card Style

```css
.occasion-card {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
}
```

Image:

- Aspect ratio around 1:1.
- Object-fit: cover.
- Top rounded through overflow hidden.

Text panel:

- Background: warm white.
- Padding: 10–12px.
- Title: 14px, weight 500.
- Subtitle: 10–11px, muted, two lines maximum.

### Occasion Tone

Occasion labels should be warm and human:

- Birthday — Make their day extra special.
- Anniversary — Celebrate love beautifully.
- Congratulations — Cheers to new beginnings.
- Graduation — Proud moments deserve flowers.
- Wedding — For your big day & beyond.
- Newborn — Welcome little blessings.
- Sympathy — Thoughts & prayers with flowers.
- Mother’s Day — Thank her for everything.

---

## 16. Large Promotional Banner

The preserved flowers banner introduces a premium collection.

### Visual Style

- Full-width rounded banner inside container.
- Soft sage/beige gradient overlay.
- Text on left.
- Product/lifestyle image on right.
- Premium and editorial feel.

```css
.promo-banner {
  min-height: 220px;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(238,243,233,0.95), rgba(245,240,231,0.3)), url(...);
  background-size: cover;
  background-position: center right;
}
```

### Text Rules

- Small eyebrow text: 13px, muted sage, serif or sans.
- Main title: 38–48px serif.
- Description: 14px muted text.
- CTA: primary sage button.

### Image Direction

- Use preserved roses in a glass dome.
- Neutral lifestyle background.
- Soft depth of field.
- Beige/sage lighting.

---

## 17. Custom Bouquet Process Section

This section explains a four-step custom bouquet journey.

### Layout

Desktop:

- Left small intro card with CTA.
- Right larger process card with four horizontal steps and bouquet image.

```css
.custom-section {
  display: grid;
  grid-template-columns: 0.8fr 2.2fr;
  gap: 20px;
}
```

### Process Card

```css
.process-card {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 16px;
  padding: 24px;
}
```

### Step Design

Each step contains:

- Circular icon at top.
- Dotted connector line between icons.
- Large step number.
- Step title.
- Short description.

Icon circle:

```css
.step-icon {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 1px solid #DDE5D5;
  background: #FFFDF8;
  color: #596B4A;
}
```

Connector:

```css
.step-connector {
  border-top: 1px dashed #D8C9B5;
}
```

Numbers:

- Serif font.
- 28–34px.
- Color: muted olive or warm taupe.

---

## 18. Floral Inspiration Gallery

A gallery strip showcases lifestyle floral photography.

### Layout

- 6 images in a horizontal grid.
- Equal height cards.
- Rounded corners.
- Minimal text, mostly visual.

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}
```

### Image Rules

- Use high-quality flower lifestyle images.
- Aspect ratio: 4:3 or 1:1 depending on layout.
- Object-fit: cover.
- Rounded corners: 10–12px.
- Keep color palette soft: blush, white, ivory, sage, beige.
- Avoid oversaturated images.

---

## 19. Testimonials Section

Testimonials are displayed in soft cards with star ratings.

### Layout

- Section title left.
- Carousel arrows on left and right sides.
- 3 testimonial cards visible on desktop.

```css
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

### Testimonial Card

```css
.testimonial-card {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 14px;
  padding: 22px;
}
```

### Star Rating

- Use warm gold: `#C8A35D`.
- Size: 12–14px.
- Keep subtle and compact.

### Quote Text

- Font size: 12–13px.
- Color: body text.
- Line height: 1.5.

### Customer Avatar

- Circular avatar.
- Size: 34–40px.
- Customer name: 12px, 600.
- City: 11px, muted.

---

## 20. FAQ Section

The FAQ section uses a large rounded container with two columns of accordion rows and a floral image block on the right.

### Layout

Desktop:

- Left: FAQ heading and accordion list.
- Right: image of white flowers.
- Two-column FAQ layout inside left area.

```css
.faq-section {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 16px;
  padding: 24px;
}
```

### FAQ Row

```css
.faq-item {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 500;
}
```

### Plus Icon

- Align right.
- Size: 14–16px.
- Color: muted sage.
- Stroke width: 1.5px.

### FAQ Image

- Right-aligned floral photo.
- Rounded corners: 12–14px.
- Soft ivory and sage colors.

---

## 21. Final CTA Banner

The final CTA reinforces conversion before the footer.

### Layout

- Large rounded horizontal banner.
- Left: headline and short copy.
- Center: bouquet image.
- Right: primary CTA button.
- Bottom/right: small benefit icons.

```css
.final-cta {
  background: linear-gradient(90deg, #EEF3E9, #F5F0E7);
  border-radius: 18px;
  padding: 32px 40px;
  min-height: 170px;
}
```

### Headline

- Serif font.
- 34–42px desktop.
- Dark muted color.
- Text: `Make Every Moment Bloom`.

### Decorative Details

- Floating flower petals.
- Soft bouquet image overlapping slightly.
- Keep decorative elements subtle and not cluttered.

---

## 22. Footer Design

The footer is clean, warm, and information-rich.

### Layout

Desktop footer columns:

1. Brand identity and social links
2. Quick Links
3. Customer Service
4. Contact Us
5. We Deliver To
6. Hours

```css
.footer {
  background: #FFFDF8;
  border-top: 1px solid #E9DFD0;
  padding: 44px 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr repeat(5, 1fr);
  gap: 32px;
}
```

### Footer Typography

- Column title: 12–13px, 600, dark.
- Link text: 11–12px, muted.
- Brand description: 12px, muted, line-height 1.5.
- Copyright: 11px, muted.

### Social Icons

- Thin line icons.
- Size: 16px.
- Color: muted sage.
- Spacing: 10–12px.

---

## 23. Image Direction

Images are a major part of this design. The UI depends heavily on premium floral photography.

### Image Style

Use:

- High-resolution bouquets.
- Soft natural light.
- Warm beige or ivory backgrounds.
- Blush, white, cream, and sage floral arrangements.
- Elegant wrapping paper.
- Satin ribbon details.
- Gift boxes and flower boards.
- Lifestyle setups with shallow depth of field.

Avoid:

- Harsh studio lighting.
- Oversaturated flower colors.
- Busy backgrounds.
- Low-quality cutout images.
- Neon or dark moody color grading.
- Generic stock images that feel artificial.

### Product Image Treatment

- Use consistent product scale across cards.
- Remove messy backgrounds where possible.
- Prefer transparent PNG or light cream background product photos.
- Center product in the card.
- Leave comfortable breathing room around product.

---

## 24. Iconography Rules

Icon style is thin, botanical, elegant, and simple.

### Icon Specifications

```css
.icon {
  width: 20px;
  height: 20px;
  stroke-width: 1.5;
  color: #596B4A;
}
```

### Icon Categories

Use icons for:

- Delivery truck
- Fresh flower / bouquet
- Gift box
- Heart / handcrafted care
- Trophy / trust
- Calendar / custom bouquet step
- Wallet / budget step
- Search / cart / wishlist
- Location pin / phone / mail

### Icon Rules

- All icons should have consistent stroke width.
- Avoid filled icons except tiny badges.
- Do not mix cartoon icons with line icons.
- Keep icons aligned visually within circular containers.

---

## 25. Component-Specific Design Rules

### Section Header

```css
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.section-view-link {
  font-size: 12px;
  font-weight: 500;
  color: #596B4A;
}
```

Rules:

- Section title uses serif font.
- View-all link uses small sans-serif text.
- Include a small arrow icon on the right.

### Cards

```css
.card {
  background: #FFFDF8;
  border: 1px solid #E9DFD0;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(47, 53, 43, 0.04);
}
```

### Divider Lines

Use very soft warm beige lines.

```css
.divider {
  height: 1px;
  background: rgba(233, 223, 208, 0.75);
}
```

### Labels and Badges

```css
.badge {
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
}
```

### Price Text

- Use the same currency style consistently.
- Product price should be visually stronger than product description.
- Avoid oversized price typography.

---

## 26. Responsive Design Rules

### Desktop ≥ 1024px

- Use full multi-column layout.
- Hero: two columns.
- Category grid: 6–8 columns.
- Product grid: 4–6 columns.
- Occasion grid: 4–8 columns.
- Footer: 5–6 columns.

### Tablet 768px–1023px

- Hero remains two columns but with reduced text size.
- Category grid: 4 columns.
- Product grid: 3 columns.
- Occasion grid: 4 columns.
- Custom bouquet process stacks partially.
- Footer: 3 columns.

### Mobile < 768px

- Header becomes mobile menu.
- Top bar should scroll horizontally or show only 1–2 key messages.
- Hero stacks vertically: text first, image second.
- Hero title around 36–42px.
- Category grid: 2 columns or horizontal scroll.
- Product grid: 2 columns.
- Occasion cards: 2 columns or horizontal scroll.
- Trust strip stacks into 1–2 columns.
- Custom bouquet process becomes vertical steps.
- Gallery becomes 2 columns.
- Testimonials show one card per row or carousel.
- FAQ becomes single column.
- Footer stacks into accordion or vertical columns.

### Mobile Spacing Adjustments

```css
@media (max-width: 767px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }

  section {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  .hero-title {
    font-size: 38px;
  }
}
```

---

## 27. Interaction and Motion

The design should feel calm. Motion should be subtle.

### Recommended Motion

- Card hover: translateY(-2px), soft shadow.
- Button hover: slightly darker sage.
- Image hover: scale(1.02).
- Accordion open: smooth height/opacity transition.
- Carousel arrow hover: pale sage background.

### Timing

```css
--transition-fast: 150ms ease;
--transition-normal: 220ms ease;
--transition-slow: 350ms ease;
```

### Rules

- Avoid bouncing animations.
- Avoid heavy parallax.
- Avoid dramatic transitions.
- Keep motion premium and restrained.

---

## 28. Accessibility Rules

- Maintain readable text contrast, especially on sage backgrounds.
- Use semantic buttons and links.
- Provide alt text for all product and floral images.
- Make focus states visible with a pale sage outline.
- Ensure mobile tap targets are at least 44px high where possible.
- Do not rely only on color for badges or statuses.

Recommended focus state:

```css
:focus-visible {
  outline: 2px solid #718164;
  outline-offset: 3px;
}
```

---

## 29. Implementation Tokens

Use these tokens as the base design system.

```css
:root {
  /* Colors */
  --color-primary: #596B4A;
  --color-primary-dark: #46563A;
  --color-primary-muted: #718164;
  --color-primary-pale: #DDE5D5;
  --color-primary-mist: #EEF3E9;

  --color-bg: #FAF8F2;
  --color-surface: #FFFDF8;
  --color-surface-soft: #F5F0E7;
  --color-border: #E9DFD0;
  --color-border-muted: #D8C9B5;

  --color-text: #2F352B;
  --color-text-body: #5E6258;
  --color-text-muted: #8A8C82;
  --color-text-soft: #A3A198;

  --color-blush: #EBC7BD;
  --color-rose: #D9A69B;
  --color-champagne: #EAD8BF;
  --color-gold: #C8A35D;

  /* Fonts */
  --font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', 'Manrope', Arial, sans-serif;

  /* Radius */
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 999px;

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(47, 53, 43, 0.04);
  --shadow-sm: 0 4px 12px rgba(47, 53, 43, 0.06);
  --shadow-md: 0 10px 28px rgba(47, 53, 43, 0.08);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Layout */
  --container-max-width: 1200px;
  --container-padding: 32px;
}
```

---

## 30. Tailwind CSS Theme Recommendation

If implementing with Tailwind, extend the theme with these values.

```js
export default {
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#EEF3E9',
          100: '#DDE5D5',
          300: '#9EAD91',
          500: '#718164',
          600: '#596B4A',
          700: '#46563A',
        },
        cream: {
          50: '#FFFDF8',
          100: '#FAF8F2',
          200: '#F5F0E7',
          300: '#E9DFD0',
        },
        blush: {
          100: '#EBC7BD',
          300: '#D9A69B',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Manrope', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        banner: '18px',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(47, 53, 43, 0.06)',
        premium: '0 10px 28px rgba(47, 53, 43, 0.08)',
      },
    },
  },
}
```

---

## 31. Do and Do Not Rules

### Do

- Use sage green as the primary UI color.
- Use ivory, cream, and beige as dominant backgrounds.
- Use serif headings for elegance.
- Use thin-line botanical icons.
- Use high-quality floral product photography.
- Keep cards clean with soft borders.
- Use generous whitespace.
- Keep CTAs clear and repeated throughout the page.
- Use subtle hover effects.
- Maintain consistent image ratios.

### Do Not

- Do not use bright neon colors.
- Do not use harsh black text everywhere.
- Do not use heavy shadows.
- Do not make buttons overly large or rounded like pills everywhere.
- Do not use playful cartoon icons.
- Do not use cluttered backgrounds.
- Do not use inconsistent product image sizes.
- Do not overuse blush pink as the main brand color.
- Do not make typography too bold or corporate.
- Do not make the page feel like a generic marketplace.

---

## 32. Recommended Section Copy Style

The copy should be warm, elegant, and concise.

### Tone

- Romantic but not cheesy.
- Premium but not arrogant.
- Simple and emotionally clear.
- Helpful and gift-focused.

### Example Copy Patterns

Hero:

> Handcrafted bouquets, flower boards, gifts & hampers delivered with love. Same-day delivery across major cities.

Category intro:

> Discover fresh blooms, preserved flowers, thoughtful hampers, and handcrafted arrangements for every meaningful occasion.

Custom bouquet:

> Tell us your vision and we’ll craft a bouquet that perfectly expresses your feelings.

Final CTA:

> From everyday smiles to life’s biggest celebrations, we’re here to deliver happiness.

---

## 33. Final Visual Direction Summary

The SageBloom design system is a premium florist e-commerce aesthetic built around soft sage green, warm ivory, elegant serif typography, delicate floral imagery, and refined card-based layouts. The interface should feel clean, romantic, curated, and easy to shop. Every component should support the feeling of handcrafted quality and meaningful gifting.

The most important visual rules are:

1. Keep the palette soft: sage, ivory, cream, beige, blush.
2. Use elegant serif headings and readable sans-serif body text.
3. Use soft rounded cards with thin warm borders.
4. Let floral imagery carry the visual richness.
5. Keep shadows minimal and premium.
6. Use consistent spacing and image ratios.
7. Repeat clear CTAs without making the page feel aggressive.
8. Maintain a calm, romantic, and premium florist atmosphere from top to footer.
