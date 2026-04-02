# Mi Verde Boutiqu — E-commerce Design Spec

## Overview

E-commerce demo for **Mi Verde Boutiqu** (@verde_boutiqu), a Chilean boutique plant shop specializing in rare collector plants (Anthuriums, Philodendrons, exotic aroids). Price range: CLP $30,000 - $200,000+. Currently sells only via Instagram/TikTok live sales.

**Goal:** Visual demo (data hardcodeada) to showcase and potentially sell as a full e-commerce platform. Must communicate exclusivity, artisanal care, and botanical passion.

**Scope:** Demo visual pura — all pages navigable with hardcoded data, animations, complete design. No real auth, payments, or CMS integration yet.

---

## Brand Identity

### Aesthetic: Modern Greenhouse

Dark botanical luxury with brass/gold accents. The feeling of entering a private conservatory — glass, greenery, warm metallic light.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#0D1209` | Main background |
| `--color-bg-secondary` | `#0F160F` | Alternate sections |
| `--color-bg-card` | `#1B2E1B` | Cards, elevated surfaces |
| `--color-bg-card-hover` | `#2A4A2A` | Card hover state |
| `--color-accent-gold` | `#C4A265` | CTAs, labels, highlights |
| `--color-accent-green` | `#7A9B5A` | Secondary accent, links |
| `--color-text-primary` | `#E8F0D8` | Main text |
| `--color-text-secondary` | `#7A9B5A` | Muted text |
| `--color-text-muted` | `#4A5A3A` | Tertiary text |
| `--color-border` | `rgba(196,162,101,0.15)` | Subtle borders |
| `--color-vein-silver` | `#D0DCC0` | Crystallinum SVG veins |

### Typography

- **Headings:** Cormorant (serif, italic for display)
- **Body:** Montserrat (sans-serif, light/regular weights)
- **Google Fonts:** `Cormorant:wght@400;500;600;700` + `Montserrat:wght@300;400;500;600`

### Design Tokens (CSS Variables)

```css
:root {
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Typography */
  --text-xs: 10px;
  --text-sm: 12px;
  --text-base: 14px;
  --text-lg: 16px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 40px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions (Emil Kowalski principles) */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 400ms;

  /* Z-index scale */
  --z-base: 0;
  --z-card: 10;
  --z-nav: 50;
  --z-modal: 100;
  --z-toast: 150;
}
```

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router, TypeScript) | SSR/SSG for SEO, Vercel-native |
| Styling | CSS Modules + CSS Variables | Design tokens, scoped styles, no runtime cost |
| Animations | Framer Motion + CSS animations | Springs for gestures, CSS for performance |
| CMS (future) | Sanity v3 | Free tier, best Next.js integration |
| Auth (future) | NextAuth.js + Google OAuth | Standard, extensible |
| Payments (future) | Mercado Pago SDK | Chile standard |
| Email (future) | Resend | Modern, developer-friendly |
| Hosting | Vercel | Zero-config Next.js deploy |
| Analytics (future) | Vercel Analytics | Built-in, privacy-focused |

---

## Architecture: Hexagonal

```
src/
├── core/                      # Pure domain (no external deps)
│   ├── domain/                # Entities, value objects
│   │   ├── plant.ts           # Plant, PlantVariety, Rarity
│   │   ├── order.ts           # Order, OrderStatus
│   │   ├── cart.ts            # CartItem, Cart
│   │   └── user.ts            # User, AuthProvider
│   ├── ports/                 # Interfaces (contracts)
│   │   ├── product-repository.ts
│   │   ├── order-repository.ts
│   │   ├── payment-gateway.ts
│   │   ├── auth-provider.ts
│   │   └── email-service.ts
│   └── use-cases/             # Business logic
│       ├── get-products.ts
│       ├── add-to-cart.ts
│       ├── process-checkout.ts
│       └── get-live-sales.ts
│
├── infrastructure/            # Adapters (implementations)
│   ├── sanity/                # Sanity client, queries, mappers
│   ├── mercadopago/           # Payment adapter
│   ├── resend/                # Email adapter
│   └── mock/                  # Mock adapters for demo
│       ├── mock-product-repository.ts
│       └── mock-data.ts       # Hardcoded plants, categories, blog posts
│
├── dto/                       # Data Transfer Objects
│   ├── product-dto.ts         # API ↔ Domain mappers
│   ├── cart-dto.ts
│   └── order-dto.ts
│
├── app/                       # Next.js App Router
│   ├── layout.tsx             # Root layout (fonts, metadata, nav)
│   ├── page.tsx               # Homepage
│   ├── (shop)/
│   │   ├── catalogo/
│   │   │   ├── page.tsx       # Product listing with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Product detail
│   │   ├── carrito/
│   │   │   └── page.tsx       # Cart
│   │   └── checkout/
│   │       └── page.tsx       # Checkout flow
│   ├── live-sales/
│   │   └── page.tsx           # Live sales calendar
│   ├── blog/
│   │   ├── page.tsx           # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx       # Blog post
│   ├── nosotros/
│   │   └── page.tsx           # About
│   ├── cuenta/
│   │   └── page.tsx           # Account (future)
│   ├── privacidad/
│   │   └── page.tsx           # Privacy policy
│   ├── terminos/
│   │   └── page.tsx           # Terms & conditions
│   └── api/                   # Route handlers (future)
│       ├── auth/
│       ├── checkout/
│       └── webhooks/
│
├── components/                # UI Components
│   ├── ui/                    # Primitives
│   │   ├── Button/
│   │   ├── Badge/
│   │   ├── Input/
│   │   ├── Card/
│   │   └── Skeleton/
│   ├── layout/
│   │   ├── Header/            # Nav with hamburger, logo, cart
│   │   ├── Footer/            # Links, legals, social
│   │   └── Container/
│   ├── product/
│   │   ├── ProductCard/       # Plant card (image, name, price, rarity)
│   │   ├── ProductGrid/       # Filterable grid
│   │   ├── ProductDetail/     # Full product view
│   │   └── ProductCarousel/   # Horizontal scroll featured
│   ├── cart/
│   │   ├── CartDrawer/        # Slide-out cart
│   │   ├── CartItem/
│   │   └── CartSummary/
│   ├── blog/
│   │   ├── BlogCard/
│   │   └── BlogPost/
│   ├── home/
│   │   ├── Hero/              # Hero section with animation
│   │   ├── FeaturedPlants/    # Horizontal scroll
│   │   ├── LiveSaleBanner/    # Countdown timer
│   │   ├── Categories/        # 2x2 grid
│   │   ├── AboutTeaser/
│   │   ├── BlogPreview/
│   │   └── InstagramFeed/
│   └── animations/
│       ├── CrystallinumLeaf/  # SVG leaf traced from photo
│       ├── ScrollReveal/      # IntersectionObserver wrapper
│       ├── StaggerChildren/   # Staggered entrance
│       └── CountdownFlip/     # Flip animation for numbers
│
├── hooks/                     # Custom React hooks
│   ├── useCart.ts             # Cart state (localStorage)
│   ├── useScrollProgress.ts  # Scroll position for animations
│   └── useInView.ts          # IntersectionObserver hook
│
├── lib/                       # Utilities
│   ├── formatPrice.ts         # CLP formatting
│   ├── cn.ts                  # className utility
│   └── constants.ts           # Site-wide constants
│
├── styles/                    # Global styles
│   ├── globals.css            # Reset, tokens, base styles
│   ├── fonts.css              # Font imports
│   └── animations.css         # Shared keyframes
│
└── assets/                    # Static assets
    ├── leaf-trace/            # Crystallinum SVG + source files
    ├── icons/                 # SVG icons (Lucide)
    └── images/                # Plant photos (hardcoded demo)
```

---

## Pages

### Homepage

1. **Header/Nav** — Logo centrado (MI VERDE / Boutiqu italic), hamburger menu izq, cart icon der
2. **Hero** — Full-screen, texto con stagger animation + SVG Crystallinum leaf drawing in background
   - "Naturaleza en su forma más pura"
   - CTA: "EXPLORAR COLECCIÓN"
3. **Botanical Animation** — Crystallinum SVG traced from real photo, clip-path reveal on scroll
   - Text: "Cada hoja cuenta una historia"
4. **Plantas Destacadas** — Horizontal scroll snap, cards con hover scale(1.02) + stagger 60ms
5. **Live Sale Banner** — Countdown con flip animation, fecha próximo live, link a IG
6. **Categorías** — Grid 2x2 (Anthuriums, Philodendros, Monstera, Exóticas)
7. **Sobre Nosotros** — Teaser con frase + link a /nosotros
8. **Blog Preview** — 2-3 últimos posts (SEO)
9. **Instagram Feed** — Grid 3x2 de fotos
10. **Footer** — Links, legales (privacidad, términos), info envío, redes sociales

### Catálogo (/catalogo)

- Grid responsive (1 col mobile, 2 tablet, 3 desktop)
- Filtros: categoría, rango de precio, rareza, disponibilidad
- Sort: precio, nombre, más reciente
- Cards con: imagen, categoría badge, nombre, precio, indicador de rareza
- Animación: stagger en carga, scroll reveal por fila

### Detalle de Planta (/catalogo/[slug])

- Galería de fotos (swipe mobile, thumbnails desktop)
- Nombre, categoría, precio prominente
- Badge de rareza (Común, Raro, Ultra Raro, Legendario)
- Descripción
- Guía de cuidados (luz, agua, humedad, temperatura)
- Botón agregar al carrito
- Plantas relacionadas

### Live Sales (/live-sales)

- Próximo live sale con countdown
- Calendario de eventos futuros
- Links a Instagram/TikTok
- Historial de lives pasados
- Explicación del formato de venta en vivo

### Carrito (/carrito)

- Slide-out drawer (CartDrawer) + página completa
- Items con foto, nombre, precio, cantidad, subtotal
- Resumen con subtotal, envío estimado, total
- CTA a checkout

### Checkout (/checkout)

- Datos personales (nombre, email, teléfono)
- Dirección de envío (regiones de Chile)
- Cálculo de envío (Santiago vs regiones)
- Resumen del pedido
- Botón de pago (mock en demo, Mercado Pago futuro)

### Blog (/blog)

- Listing con cards: imagen, categoría, título, fecha, excerpt
- SEO: structured data, meta tags por post
- Categorías: Cuidados, Guías, Novedades, Tips
- Posts hardcodeados para demo

### Nosotros (/nosotros)

- Historia de la marca
- Filosofía de selección de plantas
- Proceso de cuidado
- Foto(s) del equipo/espacio

### Mi Cuenta (/cuenta) — Future

- Login con Google OAuth
- Mis pedidos
- Favoritos
- Datos personales

### Legal

- **/privacidad** — Política de privacidad (GDPR-like, ley chilena 19.628)
- **/terminos** — Términos y condiciones de compra, envío, devoluciones

---

## Animations (Emil Kowalski Principles)

### Global Rules

- **Ease-out custom** for all UI: `cubic-bezier(0.23, 1, 0.32, 1)`
- **Duration:** UI interactions <300ms, reveal animations 400ms
- **No animation on keyboard actions**
- **prefers-reduced-motion:** Fade 200ms, no movement
- **Touch hover gate:** `@media (hover: hover) and (pointer: fine)`

### Specific Animations

| Element | Animation | Technique | Duration |
|---------|-----------|-----------|----------|
| Hero text | Stagger reveal (bottom to top) | clip-path + stagger 50ms | 400ms per line |
| Crystallinum leaf | Scroll-driven reveal | clip-path: inset(Y% 0 0 0) mapped to scroll | Scroll-bound |
| Section entrance | Fade up | translateY(20px) + opacity, IntersectionObserver | 400ms |
| Product cards | Stagger entrance | translateY + opacity, stagger 60ms | 300ms |
| Product card hover | Scale up | transform: scale(1.02) | 200ms ease-out |
| Button press | Scale down | transform: scale(0.97) on :active | 160ms |
| Countdown numbers | Flip | translateY + blur during transition | 300ms |
| Live sale border | Pulse glow | box-shadow animation | 2s infinite |
| Cart drawer | Slide right | translateX(100%) → 0 | 300ms ease-out |
| Page transitions | Fade | opacity + translateY(8px) | 200ms |
| Nav menu (mobile) | Slide down | clip-path or translateY | 250ms |

### Crystallinum SVG Animation (Detailed)

- **Source:** Real Anthurium Crystallinum photo traced with potrace to SVG
- **Technique:** clip-path: inset(Y% 0 0 0) mapped to scroll progress
- **Scroll mapping:** IntersectionObserver with threshold steps, or CSS scroll-driven animations (animation-timeline: view())
- **Sequence:** Leaf reveals from bottom to top as user scrolls through the section
- **Text reveal:** "Cada hoja cuenta una historia" appears after leaf is ~80% revealed, with clip-path from bottom
- **Reduced motion fallback:** Static leaf + text with 200ms fade

**Pending:** Re-trace from clean isolated photo (user to provide when at desktop)

---

## SEO Strategy

- **SSR/SSG** for all public pages
- **Metadata API** for per-page title, description, Open Graph
- **Structured data** (JSON-LD): Product, BlogPosting, Organization, BreadcrumbList
- **Sitemap** auto-generated via next-sitemap
- **Semantic HTML** throughout
- **Blog** with care guides, species info, tips (long-tail keywords)
- **Alt text** on all images
- **Performance:** Core Web Vitals optimized (LCP, CLS, INP)

---

## Mock Data

### Plants (8-12 for demo)

Categories: Anthuriums, Philodendros, Monstera, Exóticas

Example entries:
- Anthurium Veitchii Narrow — $89.990 — Ultra Raro
- Anthurium Crystallinum — $45.990 — Raro
- Philodendron Lupinum — $125.000 — Legendario
- Philodendron Gloriosum — $55.000 — Raro
- Monstera Albo Variegata — $180.000 — Ultra Raro
- Monstera Thai Constellation — $95.000 — Raro
- Anthurium Clarinervium — $35.990 — Común
- Philodendron Melanochrysum — $68.000 — Raro

### Blog Posts (3-4 for demo)

- "Cómo cuidar tu Anthurium Veitchii"
- "Aroideas: la guía definitiva para principiantes"
- "5 errores comunes al cuidar plantas tropicales"
- "¿Qué hace especial a un Philodendron Lupinum?"

### Live Sales

- Próximo: Viernes 4 Abril, 20:00 hrs, Instagram Live
- Pasado: 2 eventos previos con fotos

---

## Future Integrations (Documented, Not Implemented)

### Mercado Pago
- Checkout Pro (redirect flow)
- Webhook for payment confirmation
- Support for installments ("cuotas sin interés")

### Google OAuth (NextAuth.js)
- Login/register with Google
- Session management
- Protected routes (/cuenta)

### Sanity CMS
- Product schema (name, slug, price, images, category, rarity, care guide, stock)
- Blog post schema (title, slug, content, category, author, publishedAt)
- Category schema
- Live sale event schema
- GROQ queries
- next-sanity integration with preview mode

### Resend
- Order confirmation email
- Shipping notification
- Live sale reminder

### Vercel Analytics
- Page views, Web Vitals
- Custom events (add to cart, checkout, live sale click)

---

## Responsive Breakpoints

| Breakpoint | Width | Columns |
|-----------|-------|---------|
| Mobile | < 640px | 1 (2 for categories) |
| Tablet | 640-1024px | 2 |
| Desktop | 1024-1440px | 3 |
| Wide | > 1440px | 3-4, max-width container |

Mobile-first approach: base styles are mobile, media queries add complexity.

---

## Accessibility

- WCAG 2.2 Level AA target
- 4.5:1 text contrast (light text on dark bg verified)
- Focus visible: 2px outline with --color-accent-gold
- Keyboard navigation: Tab, Enter, Space, Escape
- Semantic HTML: nav, main, section, article, aside
- Alt text on all images
- aria-labels on icon-only buttons
- prefers-reduced-motion respected
- Min font: 14px for interactive elements
- No color-only information
