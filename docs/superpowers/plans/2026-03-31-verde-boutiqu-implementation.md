# Mi Verde Boutiqu — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a visual demo e-commerce for Mi Verde Boutiqu — a Chilean boutique plant shop — with all pages navigable, hardcoded data, botanical animations, and Modern Greenhouse aesthetic.

**Architecture:** Next.js 15 App Router with hexagonal architecture (domain/ports/adapters). CSS Modules with design tokens for styling. Framer Motion + CSS for animations. Mock adapters with hardcoded data for demo. Mobile-first responsive design.

**Tech Stack:** Next.js 15, TypeScript, CSS Modules, CSS Variables, Framer Motion, Lucide Icons, Vercel

---

## File Structure

```
src/
├── core/
│   └── domain/
│       ├── plant.ts                    # Plant entity, Rarity enum, Category type
│       ├── cart.ts                     # CartItem, Cart value objects
│       └── blog.ts                     # BlogPost, BlogCategory
│
├── infrastructure/
│   └── mock/
│       ├── plants.ts                   # 10 hardcoded plants with full data
│       ├── blog-posts.ts              # 4 hardcoded blog posts
│       ├── categories.ts             # Plant categories
│       └── live-sales.ts             # Live sale events
│
├── dto/
│   └── mappers.ts                     # Domain ↔ view mappers
│
├── app/
│   ├── layout.tsx                     # Root layout: fonts, metadata, Header, Footer
│   ├── page.tsx                       # Homepage
│   ├── globals.css                    # Reset, tokens, base styles
│   ├── (shop)/
│   │   ├── catalogo/
│   │   │   ├── page.tsx              # Product listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Product detail
│   │   ├── carrito/
│   │   │   └── page.tsx              # Cart page
│   │   └── checkout/
│   │       └── page.tsx              # Checkout flow
│   ├── live-sales/
│   │   └── page.tsx                  # Live sales
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx              # Blog post
│   ├── nosotros/
│   │   └── page.tsx                  # About
│   ├── privacidad/
│   │   └── page.tsx                  # Privacy policy
│   └── terminos/
│       └── page.tsx                  # Terms & conditions
│
├── components/
│   ├── ui/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   ├── Badge/
│   │   │   ├── Badge.tsx
│   │   │   └── Badge.module.css
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   └── Input.module.css
│   │   └── Container/
│   │       ├── Container.tsx
│   │       └── Container.module.css
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── Header.module.css
│   │   │   ├── MobileMenu.tsx
│   │   │   └── MobileMenu.module.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   ├── product/
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.tsx
│   │   │   └── ProductCard.module.css
│   │   ├── ProductGrid/
│   │   │   ├── ProductGrid.tsx
│   │   │   └── ProductGrid.module.css
│   │   ├── ProductDetail/
│   │   │   ├── ProductDetail.tsx
│   │   │   └── ProductDetail.module.css
│   │   └── ProductCarousel/
│   │       ├── ProductCarousel.tsx
│   │       └── ProductCarousel.module.css
│   ├── cart/
│   │   ├── CartDrawer/
│   │   │   ├── CartDrawer.tsx
│   │   │   └── CartDrawer.module.css
│   │   ├── CartItem/
│   │   │   ├── CartItem.tsx
│   │   │   └── CartItem.module.css
│   │   └── CartSummary/
│   │       ├── CartSummary.tsx
│   │       └── CartSummary.module.css
│   ├── blog/
│   │   ├── BlogCard/
│   │   │   ├── BlogCard.tsx
│   │   │   └── BlogCard.module.css
│   │   └── BlogPost/
│   │       ├── BlogPost.tsx
│   │       └── BlogPost.module.css
│   ├── home/
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.module.css
│   │   ├── FeaturedPlants/
│   │   │   ├── FeaturedPlants.tsx
│   │   │   └── FeaturedPlants.module.css
│   │   ├── LiveSaleBanner/
│   │   │   ├── LiveSaleBanner.tsx
│   │   │   └── LiveSaleBanner.module.css
│   │   ├── Categories/
│   │   │   ├── Categories.tsx
│   │   │   └── Categories.module.css
│   │   ├── AboutTeaser/
│   │   │   ├── AboutTeaser.tsx
│   │   │   └── AboutTeaser.module.css
│   │   ├── BlogPreview/
│   │   │   ├── BlogPreview.tsx
│   │   │   └── BlogPreview.module.css
│   │   └── InstagramFeed/
│   │       ├── InstagramFeed.tsx
│   │       └── InstagramFeed.module.css
│   └── animations/
│       ├── ScrollReveal/
│       │   └── ScrollReveal.tsx
│       ├── StaggerChildren/
│       │   └── StaggerChildren.tsx
│       ├── CrystallinumLeaf/
│       │   ├── CrystallinumLeaf.tsx
│       │   ├── CrystallinumLeaf.module.css
│       │   └── leaf.svg               # Traced SVG (pending clean photo)
│       └── CountdownFlip/
│           ├── CountdownFlip.tsx
│           └── CountdownFlip.module.css
│
├── hooks/
│   ├── useCart.ts                     # Cart state with localStorage
│   └── useCountdown.ts               # Countdown timer logic
│
├── lib/
│   ├── formatPrice.ts                # CLP formatting
│   └── cn.ts                         # className merge utility
│
└── assets/
    └── leaf-trace/                    # Crystallinum SVG source files
```

---

## Task 1: Project Scaffolding + Design Tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `.gitignore`
- Create: `src/app/layout.tsx`
- Create: `src/app/globals.css`
- Create: `src/app/page.tsx`
- Create: `src/lib/cn.ts`

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/cabane/Documents/dev/personal/miverdeboutiqu
npx create-next-app@latest . --typescript --app --src-dir --tailwind=false --eslint --import-alias="@/*" --use-npm
```

Select defaults. This creates the base Next.js 15 project.

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react
npm install -D @types/node
```

- [ ] **Step 3: Create className utility**

Create `src/lib/cn.ts`:

```typescript
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
```

- [ ] **Step 4: Write design tokens in globals.css**

Replace `src/app/globals.css` with:

```css
/* Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Colors — Modern Greenhouse */
  --color-bg-primary: #0D1209;
  --color-bg-secondary: #0F160F;
  --color-bg-card: #1B2E1B;
  --color-bg-card-hover: #2A4A2A;
  --color-accent-gold: #C4A265;
  --color-accent-green: #7A9B5A;
  --color-text-primary: #E8F0D8;
  --color-text-secondary: #7A9B5A;
  --color-text-muted: #4A5A3A;
  --color-border: rgba(196, 162, 101, 0.15);
  --color-border-subtle: rgba(196, 162, 101, 0.08);
  --color-vein-silver: #D0DCC0;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Typography */
  --text-xs: 0.625rem;
  --text-sm: 0.75rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 2rem;
  --text-4xl: 2.5rem;

  /* Font families (loaded in layout.tsx) */
  --font-heading: 'Cormorant', Georgia, serif;
  --font-body: 'Montserrat', system-ui, sans-serif;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions — Emil Kowalski */
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 400ms;

  /* Z-index */
  --z-base: 0;
  --z-card: 10;
  --z-nav: 50;
  --z-drawer: 60;
  --z-modal: 100;
  --z-toast: 150;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-size: var(--text-base);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button {
  cursor: pointer;
  font-family: inherit;
  border: none;
  background: none;
  color: inherit;
}

/* Focus visible */
:focus-visible {
  outline: 2px solid var(--color-accent-gold);
  outline-offset: 2px;
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Letter spacing utility for labels */
.label-text {
  font-size: var(--text-xs);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-accent-gold);
  font-family: var(--font-body);
  font-weight: 500;
}
```

- [ ] **Step 5: Set up root layout with fonts**

Replace `src/app/layout.tsx` with:

```tsx
import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mi Verde Boutiqu — Plantas de Colección',
    template: '%s | Mi Verde Boutiqu',
  },
  description:
    'Tienda virtual chilena especializada en plantas de colección. Anthuriums, Philodendros y especies exóticas seleccionadas con cuidado. Envíos a todo Chile.',
  keywords: [
    'plantas de colección',
    'anthurium',
    'philodendron',
    'plantas exóticas',
    'plantas raras Chile',
    'tienda plantas online',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Mi Verde Boutiqu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

- [ ] **Step 6: Create placeholder homepage**

Replace `src/app/page.tsx` with:

```tsx
export default function HomePage() {
  return (
    <main>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <p
          style={{
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.3em',
            color: 'var(--color-accent-gold)',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}
        >
          Plantas de Colección
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-4xl)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
          }}
        >
          Mi Verde Boutiqu
        </h1>
        <div
          style={{
            width: '40px',
            height: '1px',
            background: 'var(--color-accent-gold)',
            margin: '1.5rem auto',
          }}
        />
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
            letterSpacing: '0.15em',
          }}
        >
          Próximamente
        </p>
      </div>
    </main>
  )
}
```

- [ ] **Step 7: Verify dev server works**

```bash
npm run dev
```

Open http://localhost:3000 — should see "Mi Verde Boutiqu" centered on dark background with Cormorant font and gold accents.

- [ ] **Step 8: Initialize git and commit**

```bash
git init
echo "node_modules/\n.next/\n.superpowers/\ndesign-system/" >> .gitignore
git add -A
git commit -m "feat: scaffold Next.js 15 project with design tokens and Modern Greenhouse theme"
```

---

## Task 2: Domain Entities + Mock Data

**Files:**
- Create: `src/core/domain/plant.ts`
- Create: `src/core/domain/cart.ts`
- Create: `src/core/domain/blog.ts`
- Create: `src/infrastructure/mock/plants.ts`
- Create: `src/infrastructure/mock/categories.ts`
- Create: `src/infrastructure/mock/blog-posts.ts`
- Create: `src/infrastructure/mock/live-sales.ts`
- Create: `src/lib/formatPrice.ts`

- [ ] **Step 1: Define Plant domain entities**

Create `src/core/domain/plant.ts`:

```typescript
export enum Rarity {
  Common = 'Común',
  Rare = 'Raro',
  UltraRare = 'Ultra Raro',
  Legendary = 'Legendario',
}

export type PlantCategory = 'anthuriums' | 'philodendros' | 'monstera' | 'exoticas'

export interface CareGuide {
  light: string
  water: string
  humidity: string
  temperature: string
}

export interface Plant {
  id: string
  slug: string
  name: string
  species: string
  category: PlantCategory
  price: number
  rarity: Rarity
  description: string
  careGuide: CareGuide
  images: string[]
  featured: boolean
  inStock: boolean
}

export interface Category {
  id: PlantCategory
  name: string
  description: string
  plantCount: number
}
```

- [ ] **Step 2: Define Cart domain entities**

Create `src/core/domain/cart.ts`:

```typescript
export interface CartItem {
  plantId: string
  slug: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
}

export function calculateCart(items: CartItem[]): Cart {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 80000 ? 0 : 5990
  return {
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
  }
}
```

- [ ] **Step 3: Define Blog domain entities**

Create `src/core/domain/blog.ts`:

```typescript
export type BlogCategory = 'cuidados' | 'guias' | 'novedades' | 'tips'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  publishedAt: string
  readTime: number
  image: string
}

export interface LiveSaleEvent {
  id: string
  title: string
  date: string
  time: string
  platform: 'instagram' | 'tiktok'
  description: string
  upcoming: boolean
}
```

- [ ] **Step 4: Create formatPrice utility**

Create `src/lib/formatPrice.ts`:

```typescript
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
```

- [ ] **Step 5: Create mock plant data**

Create `src/infrastructure/mock/plants.ts`:

```typescript
import { Plant, Rarity } from '@/core/domain/plant'

export const mockPlants: Plant[] = [
  {
    id: '1',
    slug: 'anthurium-veitchii-narrow',
    name: 'Anthurium Veitchii Narrow',
    species: 'Anthurium veitchii',
    category: 'anthuriums',
    price: 89990,
    rarity: Rarity.UltraRare,
    description:
      'Conocido como el "King Anthurium", esta variedad narrow presenta hojas corrugadas que pueden alcanzar hasta 1 metro de largo. Su textura ondulada y venación pronunciada lo convierten en una de las piezas más codiciadas por coleccionistas.',
    careGuide: {
      light: 'Luz indirecta brillante. Evitar sol directo.',
      water: 'Riego cuando el sustrato esté seco al tacto. No encharcar.',
      humidity: '70-80%. Ideal con humidificador.',
      temperature: '18-28°C. No tolera bajo 15°C.',
    },
    images: ['/images/plants/veitchii-1.jpg', '/images/plants/veitchii-2.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '2',
    slug: 'anthurium-crystallinum',
    name: 'Anthurium Crystallinum',
    species: 'Anthurium crystallinum',
    category: 'anthuriums',
    price: 45990,
    rarity: Rarity.Rare,
    description:
      'La joya de las aroideas. Sus hojas aterciopeladas de verde profundo con venación plateada cristalina son inconfundibles. Cada hoja nueva es una obra de arte de la naturaleza.',
    careGuide: {
      light: 'Luz indirecta media a brillante.',
      water: 'Mantener sustrato ligeramente húmedo. Buen drenaje esencial.',
      humidity: '70-85%. Necesita alta humedad.',
      temperature: '18-26°C. Sensible al frío.',
    },
    images: ['/images/plants/crystallinum-1.jpg', '/images/plants/crystallinum-2.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '3',
    slug: 'philodendron-lupinum',
    name: 'Philodendron Lupinum',
    species: 'Philodendron lupinum',
    category: 'philodendros',
    price: 125000,
    rarity: Rarity.Legendary,
    description:
      'Extremadamente raro en cultivo. Comienza como una pequeña planta con hojas aterciopeladas y se transforma en un trepador con hojas grandes y rugosas. Una verdadera metamorfosis botánica.',
    careGuide: {
      light: 'Luz indirecta media. Tolera poca luz.',
      water: 'Riego moderado. Dejar secar entre riegos.',
      humidity: '75-90%. Ambiente de invernadero ideal.',
      temperature: '20-28°C. Tropical estricto.',
    },
    images: ['/images/plants/lupinum-1.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '4',
    slug: 'philodendron-gloriosum',
    name: 'Philodendron Gloriosum',
    species: 'Philodendron gloriosum',
    category: 'philodendros',
    price: 55000,
    rarity: Rarity.Rare,
    description:
      'Un rastrero terrestre con hojas enormes de textura aterciopelada y venación blanca prominente. Crece a lo largo del suelo, desplegando hojas cada vez más grandes.',
    careGuide: {
      light: 'Luz indirecta media a brillante.',
      water: 'Sustrato húmedo pero no empapado.',
      humidity: '60-80%. Adaptable.',
      temperature: '18-28°C.',
    },
    images: ['/images/plants/gloriosum-1.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '5',
    slug: 'monstera-albo-variegata',
    name: 'Monstera Albo Variegata',
    species: 'Monstera deliciosa var. borsigiana albo',
    category: 'monstera',
    price: 180000,
    rarity: Rarity.UltraRare,
    description:
      'La reina de las plantas variegadas. Cada hoja es única con patrones de blanco puro sobre verde profundo. Una pieza de museo viviente que evoluciona con cada nueva hoja.',
    careGuide: {
      light: 'Luz indirecta brillante. Las zonas blancas necesitan más luz.',
      water: 'Riego cuando el sustrato esté seco. Las raíces son sensibles.',
      humidity: '60-70%. Tolera ambientes normales.',
      temperature: '18-27°C.',
    },
    images: ['/images/plants/albo-1.jpg'],
    featured: true,
    inStock: false,
  },
  {
    id: '6',
    slug: 'monstera-thai-constellation',
    name: 'Monstera Thai Constellation',
    species: 'Monstera deliciosa Thai Constellation',
    category: 'monstera',
    price: 95000,
    rarity: Rarity.Rare,
    description:
      'Variegación estable en crema y verde, como una constelación de estrellas en cada hoja. A diferencia de la Albo, su variegación es genéticamente estable.',
    careGuide: {
      light: 'Luz indirecta brillante.',
      water: 'Riego moderado. Buen drenaje.',
      humidity: '60-70%.',
      temperature: '18-27°C.',
    },
    images: ['/images/plants/thai-1.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '7',
    slug: 'anthurium-clarinervium',
    name: 'Anthurium Clarinervium',
    species: 'Anthurium clarinervium',
    category: 'anthuriums',
    price: 35990,
    rarity: Rarity.Common,
    description:
      'La puerta de entrada al mundo de los Anthuriums de colección. Hojas acorazonadas gruesas con venación blanca sobre verde oscuro. Resistente y gratificante.',
    careGuide: {
      light: 'Luz indirecta media a brillante.',
      water: 'Dejar secar entre riegos. Sustrato aireado.',
      humidity: '50-70%. El más tolerante de la familia.',
      temperature: '16-28°C.',
    },
    images: ['/images/plants/clarinervium-1.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '8',
    slug: 'philodendron-melanochrysum',
    name: 'Philodendron Melanochrysum',
    species: 'Philodendron melanochrysum',
    category: 'philodendros',
    price: 68000,
    rarity: Rarity.Rare,
    description:
      'El "Gold de Negro". Hojas alargadas de textura cristalina que brillan con reflejos dorados bajo la luz. Un trepador majestuoso que produce hojas cada vez más grandes.',
    careGuide: {
      light: 'Luz indirecta media a brillante.',
      water: 'Mantener húmedo. No dejar secar completamente.',
      humidity: '70-80%. Necesita buena humedad.',
      temperature: '18-28°C.',
    },
    images: ['/images/plants/melanochrysum-1.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '9',
    slug: 'anthurium-warocqueanum',
    name: 'Anthurium Warocqueanum',
    species: 'Anthurium warocqueanum',
    category: 'anthuriums',
    price: 145000,
    rarity: Rarity.UltraRare,
    description:
      'La "Queen Anthurium". Hojas pendulares que pueden superar el metro de largo con venación plateada sobre verde oscuro aterciopelado. La contraparte femenina del King Veitchii.',
    careGuide: {
      light: 'Luz indirecta brillante.',
      water: 'Sustrato constantemente húmedo pero nunca encharcado.',
      humidity: '80-90%. Requiere invernadero o vitrina.',
      temperature: '18-26°C. Muy sensible al frío.',
    },
    images: ['/images/plants/warocqueanum-1.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '10',
    slug: 'alocasia-dragon-scale',
    name: 'Alocasia Dragon Scale',
    species: 'Alocasia baginda Dragon Scale',
    category: 'exoticas',
    price: 42000,
    rarity: Rarity.Rare,
    description:
      'Hojas gruesas con textura de escamas de dragón. Verde plateado con venación oscura profundamente marcada. Compacta y escultórica.',
    careGuide: {
      light: 'Luz indirecta media. Evitar sol directo.',
      water: 'Riego cuando el sustrato esté casi seco. Cuidado con exceso.',
      humidity: '60-80%.',
      temperature: '18-27°C. Puede entrar en dormancia en frío.',
    },
    images: ['/images/plants/dragon-scale-1.jpg'],
    featured: false,
    inStock: true,
  },
]

export function getPlantBySlug(slug: string): Plant | undefined {
  return mockPlants.find((p) => p.slug === slug)
}

export function getPlantsByCategory(category: string): Plant[] {
  return mockPlants.filter((p) => p.category === category)
}

export function getFeaturedPlants(): Plant[] {
  return mockPlants.filter((p) => p.featured)
}
```

- [ ] **Step 6: Create mock categories**

Create `src/infrastructure/mock/categories.ts`:

```typescript
import { Category } from '@/core/domain/plant'

export const mockCategories: Category[] = [
  {
    id: 'anthuriums',
    name: 'Anthuriums',
    description: 'Los reyes y reinas de las aroideas',
    plantCount: 4,
  },
  {
    id: 'philodendros',
    name: 'Philodendros',
    description: 'Trepadores y rastreros exóticos',
    plantCount: 3,
  },
  {
    id: 'monstera',
    name: 'Monstera',
    description: 'Variegadas y espectaculares',
    plantCount: 2,
  },
  {
    id: 'exoticas',
    name: 'Exóticas',
    description: 'Especies únicas y coleccionables',
    plantCount: 1,
  },
]
```

- [ ] **Step 7: Create mock blog posts**

Create `src/infrastructure/mock/blog-posts.ts`:

```typescript
import { BlogPost } from '@/core/domain/blog'

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'como-cuidar-anthurium-veitchii',
    title: 'Cómo cuidar tu Anthurium Veitchii',
    excerpt:
      'El King Anthurium es una planta exigente pero gratificante. Aprende los secretos para mantenerlo sano y con hojas espectaculares.',
    content: `El Anthurium Veitchii, conocido como el "King Anthurium", es una de las plantas más impresionantes que puedes tener en tu colección. Sus hojas corrugadas pueden alcanzar más de un metro de largo, creando un espectáculo visual sin igual.

## Luz

La clave está en la luz indirecta brillante. Piensa en el dosel de un bosque tropical: luz filtrada, nunca directa. Una ventana orientada al este o una cortina que filtre la luz del sur son ideales.

## Riego

El error más común es el exceso de riego. El sustrato debe estar aireado — una mezcla de corteza de orquídea, perlita y musgo sphagnum funciona perfectamente. Riega cuando el sustrato esté seco al tacto en los primeros centímetros.

## Humedad

Aquí es donde muchos fallan. El Veitchii necesita entre 70-80% de humedad. Un humidificador es prácticamente obligatorio en Chile, especialmente en invierno con la calefacción encendida.

## Temperatura

Mantén entre 18-28°C. Nunca bajo 15°C. Los cambios bruscos de temperatura son su peor enemigo.`,
    category: 'cuidados',
    publishedAt: '2026-03-15',
    readTime: 5,
    image: '/images/blog/veitchii-care.jpg',
  },
  {
    id: '2',
    slug: 'aroideas-guia-definitiva-principiantes',
    title: 'Aroideas: la guía definitiva para principiantes',
    excerpt:
      'Todo lo que necesitas saber antes de comenzar tu colección de plantas tropicales. Desde elegir tu primera planta hasta crear el ambiente perfecto.',
    content: `Las aroideas (familia Araceae) incluyen algunos de los géneros más populares entre coleccionistas: Anthurium, Philodendron, Monstera, Alocasia y Syngonium. Si estás empezando, esta guía te ayudará a dar tus primeros pasos con confianza.

## ¿Por qué aroideas?

Son plantas increíblemente diversas. Desde el diminuto Anthurium clarinervium hasta el monumental Philodendron gloriosum, hay una aroidea para cada espacio y nivel de experiencia.

## Tu primera planta

Recomendamos empezar con un Anthurium Clarinervium o un Philodendron Brasil. Son tolerantes, hermosos y te enseñarán los fundamentos del cuidado de plantas tropicales.

## El sustrato perfecto

Olvídate de la tierra de jardín. Las aroideas necesitan un sustrato chunky y aireado. La receta básica: 40% corteza de orquídea, 30% perlita, 20% musgo sphagnum, 10% carbón activado.

## Errores comunes

1. Exceso de riego (el asesino #1)
2. Luz insuficiente
3. Macetas demasiado grandes
4. Sustrato muy compacto`,
    category: 'guias',
    publishedAt: '2026-03-01',
    readTime: 8,
    image: '/images/blog/aroideas-guide.jpg',
  },
  {
    id: '3',
    slug: '5-errores-comunes-plantas-tropicales',
    title: '5 errores comunes al cuidar plantas tropicales',
    excerpt:
      'Evita estos errores que todos cometemos al principio. Tu colección te lo agradecerá.',
    content: `Después de años ayudando a coleccionistas, estos son los 5 errores que vemos una y otra vez.

## 1. Regar por calendario

No riegues "cada 3 días". Riega cuando la planta lo necesite. Mete el dedo en el sustrato — si está húmedo, espera.

## 2. Ignorar la humedad

Chile es seco. Muy seco para plantas tropicales. Un higrómetro barato y un humidificador cambiarán tu vida plantera.

## 3. Sol directo

"Necesita mucha luz" no significa sol directo. El sol de mediodía quema las hojas en minutos. Luz indirecta brillante es la clave.

## 4. Maceta gigante

Una maceta demasiado grande retiene demasiada humedad alrededor de raíces pequeñas. Sube de tamaño gradualmente, 2-3 cm más de diámetro.

## 5. No revisar plagas

Revisa tus plantas semanalmente. Trips, ácaros y cochinillas se instalan rápido si no los detectas a tiempo.`,
    category: 'tips',
    publishedAt: '2026-02-20',
    readTime: 4,
    image: '/images/blog/common-mistakes.jpg',
  },
  {
    id: '4',
    slug: 'que-hace-especial-philodendron-lupinum',
    title: '¿Qué hace especial a un Philodendron Lupinum?',
    excerpt:
      'Descubre por qué esta especie es una de las más buscadas del mundo y cómo llegó a nuestra colección.',
    content: `El Philodendron Lupinum es una de esas plantas que desafía la imaginación. Es tan rara que muchos coleccionistas experimentados nunca han visto una en persona.

## La metamorfosis

Lo más fascinante del Lupinum es su transformación. Las hojas juveniles son pequeñas, aterciopeladas y casi negras. A medida que la planta madura y trepa, las hojas se vuelven enormes, rugosas y de un verde brillante.

## Rareza extrema

Es endémica de una pequeña región de Sudamérica. Su hábitat natural es tan específico que cualquier ejemplar en cultivo es un tesoro botánico.

## En nuestra colección

Cada Lupinum que ofrecemos ha sido propagado pacientemente durante meses. No vendemos plantas débiles o recién enraizadas — cada una está establecida y lista para prosperar en tu hogar.`,
    category: 'novedades',
    publishedAt: '2026-02-10',
    readTime: 5,
    image: '/images/blog/lupinum-special.jpg',
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return mockBlogPosts.find((p) => p.slug === slug)
}
```

- [ ] **Step 8: Create mock live sales data**

Create `src/infrastructure/mock/live-sales.ts`:

```typescript
import { LiveSaleEvent } from '@/core/domain/blog'

export const mockLiveSales: LiveSaleEvent[] = [
  {
    id: '1',
    title: 'Remate de Anthuriums',
    date: '2026-04-04',
    time: '20:00',
    platform: 'instagram',
    description:
      'Remate especial de Anthuriums de colección. Veitchii, Crystallinum, Warocqueanum y más. Precios especiales solo en vivo.',
    upcoming: true,
  },
  {
    id: '2',
    title: 'Live Sale Philodendros',
    date: '2026-04-11',
    time: '20:00',
    platform: 'instagram',
    description:
      'Selección especial de Philodendros raros. Melanochrysum, Gloriosum y sorpresas.',
    upcoming: true,
  },
  {
    id: '3',
    title: 'Remate de Fin de Verano',
    date: '2026-03-21',
    time: '19:30',
    platform: 'tiktok',
    description: 'Último remate de la temporada de verano. Todas las categorías.',
    upcoming: false,
  },
]

export function getUpcomingLiveSales(): LiveSaleEvent[] {
  return mockLiveSales.filter((e) => e.upcoming)
}

export function getNextLiveSale(): LiveSaleEvent | undefined {
  return mockLiveSales.find((e) => e.upcoming)
}
```

- [ ] **Step 9: Commit**

```bash
git add src/core src/infrastructure src/lib/formatPrice.ts
git commit -m "feat: add domain entities and mock data for plants, blog, live sales"
```

---

## Task 3: UI Primitives (Button, Badge, Input, Container)

**Files:**
- Create: `src/components/ui/Button/Button.tsx`, `Button.module.css`
- Create: `src/components/ui/Badge/Badge.tsx`, `Badge.module.css`
- Create: `src/components/ui/Input/Input.tsx`, `Input.module.css`
- Create: `src/components/ui/Container/Container.tsx`, `Container.module.css`

- [ ] **Step 1: Create Button component**

Create `src/components/ui/Button/Button.module.css`:

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid transparent;
  cursor: pointer;
  transition: transform var(--duration-fast) var(--ease-out),
    background-color var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.button:active {
  transform: scale(0.97);
}

/* Sizes */
.small {
  font-size: var(--text-xs);
  padding: var(--space-sm) var(--space-md);
}

.medium {
  font-size: var(--text-sm);
  padding: var(--space-md) var(--space-lg);
}

.large {
  font-size: var(--text-base);
  padding: var(--space-md) var(--space-xl);
}

/* Variants */
.primary {
  background-color: var(--color-accent-gold);
  color: var(--color-bg-primary);
}

.primary:hover {
  background-color: #d4b275;
}

.outline {
  background: transparent;
  border-color: var(--color-accent-green);
  color: var(--color-accent-green);
}

.outline:hover {
  border-color: var(--color-text-primary);
  color: var(--color-text-primary);
}

.ghost {
  background: transparent;
  color: var(--color-text-secondary);
}

.ghost:hover {
  color: var(--color-text-primary);
}

@media (hover: hover) and (pointer: fine) {
  .button:hover {
    transform: translateY(-1px);
  }
  .button:active {
    transform: scale(0.97);
  }
}
```

Create `src/components/ui/Button/Button.tsx`:

```tsx
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
}

export function Button({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Create Badge component**

Create `src/components/ui/Badge/Badge.module.css`:

```css
.badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
}

.common {
  background: rgba(122, 155, 90, 0.15);
  color: var(--color-accent-green);
}

.rare {
  background: rgba(196, 162, 101, 0.15);
  color: var(--color-accent-gold);
}

.ultraRare {
  background: rgba(196, 162, 101, 0.25);
  color: #d4b275;
}

.legendary {
  background: linear-gradient(135deg, rgba(196, 162, 101, 0.3), rgba(208, 220, 192, 0.2));
  color: var(--color-vein-silver);
}
```

Create `src/components/ui/Badge/Badge.tsx`:

```tsx
import { Rarity } from '@/core/domain/plant'
import { cn } from '@/lib/cn'
import styles from './Badge.module.css'

const rarityToStyle: Record<Rarity, string> = {
  [Rarity.Common]: styles.common,
  [Rarity.Rare]: styles.rare,
  [Rarity.UltraRare]: styles.ultraRare,
  [Rarity.Legendary]: styles.legendary,
}

interface BadgeProps {
  rarity: Rarity
  className?: string
}

export function Badge({ rarity, className }: BadgeProps) {
  return (
    <span className={cn(styles.badge, rarityToStyle[rarity], className)}>
      {rarity}
    </span>
  )
}
```

- [ ] **Step 3: Create Input component**

Create `src/components/ui/Input/Input.module.css`:

```css
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.input {
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text-primary);
  background: rgba(27, 46, 27, 0.5);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-md);
  transition: border-color var(--duration-normal) var(--ease-out);
}

.input::placeholder {
  color: var(--color-text-muted);
}

.input:focus {
  outline: none;
  border-color: var(--color-accent-gold);
}
```

Create `src/components/ui/Input/Input.tsx`:

```tsx
import { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={cn(styles.wrapper, className)}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input id={inputId} className={styles.input} {...props} />
    </div>
  )
}
```

- [ ] **Step 4: Create Container component**

Create `src/components/ui/Container/Container.module.css`:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 640px) {
  .container {
    padding: 0 var(--space-lg);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-xl);
  }
}
```

Create `src/components/ui/Container/Container.tsx`:

```tsx
import { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import styles from './Container.module.css'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn(styles.container, className)}>{children}</div>
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ui
git commit -m "feat: add UI primitives — Button, Badge, Input, Container"
```

---

## Task 4: Layout — Header + Footer

**Files:**
- Create: `src/components/layout/Header/Header.tsx`, `Header.module.css`
- Create: `src/components/layout/Header/MobileMenu.tsx`, `MobileMenu.module.css`
- Create: `src/components/layout/Footer/Footer.tsx`, `Footer.module.css`
- Modify: `src/app/layout.tsx` — add Header and Footer

- [ ] **Step 1: Create Header**

Create `src/components/layout/Header/Header.module.css`:

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-nav);
  background: rgba(13, 18, 9, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  max-width: 1200px;
  margin: 0 auto;
}

.menuButton {
  font-size: var(--text-xs);
  letter-spacing: 0.2em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  padding: var(--space-sm);
  transition: color var(--duration-normal) var(--ease-out);
}

.menuButton:hover {
  color: var(--color-text-primary);
}

.logo {
  text-align: center;
  text-decoration: none;
}

.logoSub {
  font-family: var(--font-body);
  font-size: 7px;
  letter-spacing: 0.25em;
  color: var(--color-accent-green);
  text-transform: uppercase;
}

.logoMain {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  font-weight: 400;
  color: var(--color-text-primary);
  letter-spacing: 0.05em;
}

.cartButton {
  font-size: var(--text-xs);
  letter-spacing: 0.2em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  padding: var(--space-sm);
  transition: color var(--duration-normal) var(--ease-out);
}

.cartButton:hover {
  color: var(--color-text-primary);
}
```

Create `src/components/layout/Header/Header.tsx`:

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            Menú
          </button>

          <Link href="/" className={styles.logo}>
            <div className={styles.logoSub}>Mi Verde</div>
            <div className={styles.logoMain}>Boutiqu</div>
          </Link>

          <Link href="/carrito" className={styles.cartButton}>
            Cart(0)
          </Link>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
```

- [ ] **Step 2: Create MobileMenu**

Create `src/components/layout/Header/MobileMenu.module.css`:

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: var(--z-modal);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-slow) var(--ease-out);
}

.overlay[data-open='true'] {
  opacity: 1;
  pointer-events: auto;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  max-width: 85vw;
  background: var(--color-bg-primary);
  z-index: var(--z-modal);
  padding: var(--space-2xl) var(--space-lg);
  transform: translateX(-100%);
  transition: transform var(--duration-slow) var(--ease-out);
  border-right: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.menu[data-open='true'] {
  transform: translateX(0);
}

.closeButton {
  font-size: var(--text-xs);
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  align-self: flex-end;
  padding: var(--space-sm);
}

.nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.navLink {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-style: italic;
  color: var(--color-text-primary);
  transition: color var(--duration-normal) var(--ease-out);
}

.navLink:hover {
  color: var(--color-accent-gold);
}

.divider {
  width: 30px;
  height: 1px;
  background: var(--color-border);
}

.subLink {
  font-size: var(--text-sm);
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  transition: color var(--duration-normal) var(--ease-out);
}

.subLink:hover {
  color: var(--color-accent-green);
}
```

Create `src/components/layout/Header/MobileMenu.tsx`:

```tsx
import Link from 'next/link'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={styles.overlay}
        data-open={open}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={styles.menu} data-open={open} aria-label="Menú principal">
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar menú">
          Cerrar
        </button>

        <div className={styles.nav}>
          <Link href="/catalogo" className={styles.navLink} onClick={onClose}>
            Catálogo
          </Link>
          <Link href="/live-sales" className={styles.navLink} onClick={onClose}>
            Live Sales
          </Link>
          <Link href="/blog" className={styles.navLink} onClick={onClose}>
            Blog
          </Link>
          <Link href="/nosotros" className={styles.navLink} onClick={onClose}>
            Nosotros
          </Link>
        </div>

        <div className={styles.divider} />

        <div className={styles.nav}>
          <Link href="/privacidad" className={styles.subLink} onClick={onClose}>
            Privacidad
          </Link>
          <Link href="/terminos" className={styles.subLink} onClick={onClose}>
            Términos
          </Link>
        </div>
      </nav>
    </>
  )
}
```

- [ ] **Step 3: Create Footer**

Create `src/components/layout/Footer/Footer.module.css`:

```css
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-2xl) var(--space-md) var(--space-3xl);
  text-align: center;
}

.logo {
  margin-bottom: var(--space-lg);
}

.logoSub {
  font-family: var(--font-body);
  font-size: 7px;
  letter-spacing: 0.25em;
  color: var(--color-accent-green);
  text-transform: uppercase;
}

.logoMain {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-text-primary);
}

.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.link {
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  transition: color var(--duration-normal) var(--ease-out);
}

.link:hover {
  color: var(--color-accent-green);
}

.legal {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.social {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.socialLink {
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  transition: color var(--duration-normal) var(--ease-out);
}

.socialLink:hover {
  color: var(--color-text-primary);
}

.copy {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
```

Create `src/components/layout/Footer/Footer.tsx`:

```tsx
import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <div className={styles.logoSub}>Mi Verde</div>
        <div className={styles.logoMain}>Boutiqu</div>
      </div>

      <div className={styles.links}>
        <Link href="/catalogo" className={styles.link}>Catálogo</Link>
        <Link href="/live-sales" className={styles.link}>Live Sales</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/nosotros" className={styles.link}>Nosotros</Link>
      </div>

      <div className={styles.legal}>
        <Link href="/privacidad" className={styles.link}>Privacidad</Link>
        <Link href="/terminos" className={styles.link}>Términos</Link>
      </div>

      <div className={styles.social}>
        <a
          href="https://www.instagram.com/verde_boutiqu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@verde_boutiqu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          TikTok
        </a>
      </div>

      <p className={styles.copy}>
        © 2026 Mi Verde Boutiqu. Envíos a todo Chile.
      </p>
    </footer>
  )
}
```

- [ ] **Step 4: Wire Header and Footer into root layout**

Update `src/app/layout.tsx` — add imports and wrap children:

```tsx
import type { Metadata } from 'next'
import { Cormorant, Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mi Verde Boutiqu — Plantas de Colección',
    template: '%s | Mi Verde Boutiqu',
  },
  description:
    'Tienda virtual chilena especializada en plantas de colección. Anthuriums, Philodendros y especies exóticas seleccionadas con cuidado. Envíos a todo Chile.',
  keywords: [
    'plantas de colección',
    'anthurium',
    'philodendron',
    'plantas exóticas',
    'plantas raras Chile',
    'tienda plantas online',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Mi Verde Boutiqu',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: '60px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 5: Verify in browser**

```bash
npm run dev
```

Check: Header with glass blur, logo centered, menu button, cart. Footer with links and social. Mobile menu slides from left.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout src/app/layout.tsx
git commit -m "feat: add Header with mobile menu and Footer"
```

---

## Task 5: Animation Components (ScrollReveal, StaggerChildren, CountdownFlip)

**Files:**
- Create: `src/components/animations/ScrollReveal/ScrollReveal.tsx`
- Create: `src/components/animations/StaggerChildren/StaggerChildren.tsx`
- Create: `src/components/animations/CountdownFlip/CountdownFlip.tsx`, `CountdownFlip.module.css`
- Create: `src/hooks/useCountdown.ts`

- [ ] **Step 1: Create ScrollReveal**

Create `src/components/animations/ScrollReveal/ScrollReveal.tsx`:

```tsx
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={
        isInView
          ? { opacity: 1, transform: 'translateY(0px)' }
          : { opacity: 0, transform: 'translateY(20px)' }
      }
      transition={{
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Create StaggerChildren**

Create `src/components/animations/StaggerChildren/StaggerChildren.tsx`:

```tsx
'use client'

import { ReactNode, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, transform: 'translateY(16px)' },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.06,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create useCountdown hook**

Create `src/hooks/useCountdown.ts`:

```typescript
'use client'

import { useState, useEffect } from 'react'

interface CountdownResult {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

export function useCountdown(targetDate: string, targetTime: string): CountdownResult {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const target = new Date(`${targetDate}T${targetTime}:00`)
  const diff = target.getTime() - now.getTime()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false,
  }
}
```

- [ ] **Step 4: Create CountdownFlip**

Create `src/components/animations/CountdownFlip/CountdownFlip.module.css`:

```css
.countdown {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
}

.unit {
  text-align: center;
}

.number {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-style: italic;
  color: var(--color-accent-gold);
  line-height: 1;
  min-width: 2ch;
  display: inline-block;
}

.label {
  font-size: 7px;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-top: var(--space-xs);
}

.separator {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
  align-self: flex-start;
  padding-top: 4px;
}
```

Create `src/components/animations/CountdownFlip/CountdownFlip.tsx`:

```tsx
'use client'

import { useCountdown } from '@/hooks/useCountdown'
import styles from './CountdownFlip.module.css'

interface CountdownFlipProps {
  targetDate: string
  targetTime: string
}

export function CountdownFlip({ targetDate, targetTime }: CountdownFlipProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    targetDate,
    targetTime
  )

  if (isExpired) {
    return (
      <div className={styles.countdown}>
        <span className={styles.number} style={{ color: 'var(--color-accent-green)' }}>
          ¡En vivo ahora!
        </span>
      </div>
    )
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(days)}</div>
        <div className={styles.label}>Días</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(hours)}</div>
        <div className={styles.label}>Hrs</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(minutes)}</div>
        <div className={styles.label}>Min</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(seconds)}</div>
        <div className={styles.label}>Seg</div>
      </div>
    </div>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add src/components/animations src/hooks
git commit -m "feat: add animation components — ScrollReveal, StaggerChildren, CountdownFlip"
```

---

## Task 6: Product Components (ProductCard, ProductCarousel, ProductGrid)

**Files:**
- Create: `src/components/product/ProductCard/ProductCard.tsx`, `ProductCard.module.css`
- Create: `src/components/product/ProductCarousel/ProductCarousel.tsx`, `ProductCarousel.module.css`
- Create: `src/components/product/ProductGrid/ProductGrid.tsx`, `ProductGrid.module.css`

- [ ] **Step 1: Create ProductCard**

Create `src/components/product/ProductCard/ProductCard.module.css`:

```css
.card {
  display: block;
  background: var(--color-bg-card);
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--color-border-subtle);
  cursor: pointer;
  transition: transform var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.card:active {
  transform: scale(0.97);
}

.imageWrap {
  aspect-ratio: 3 / 4;
  background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-card-hover));
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.imagePlaceholder {
  width: 60%;
  height: 60%;
  border: 1px dashed var(--color-text-muted);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

.badge {
  position: absolute;
  top: var(--space-sm);
  left: var(--space-sm);
}

.outOfStock {
  position: absolute;
  inset: 0;
  background: rgba(13, 18, 9, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-sm);
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.info {
  padding: var(--space-md);
}

.category {
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--color-accent-green);
  text-transform: uppercase;
  margin-bottom: var(--space-xs);
}

.name {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
  line-height: 1.3;
}

.price {
  font-size: var(--text-base);
  color: var(--color-accent-gold);
  font-weight: 500;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: scale(1.02);
    border-color: var(--color-border);
  }
  .card:active {
    transform: scale(0.97);
  }
}
```

Create `src/components/product/ProductCard/ProductCard.tsx`:

```tsx
import Link from 'next/link'
import { Plant } from '@/core/domain/plant'
import { Badge } from '@/components/ui/Badge/Badge'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  plant: Plant
}

export function ProductCard({ plant }: ProductCardProps) {
  return (
    <Link href={`/catalogo/${plant.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <div className={styles.imagePlaceholder}>{plant.species}</div>
        <div className={styles.badge}>
          <Badge rarity={plant.rarity} />
        </div>
        {!plant.inStock && <div className={styles.outOfStock}>Agotado</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.category}>{plant.category}</div>
        <h3 className={styles.name}>{plant.name}</h3>
        <div className={styles.price}>{formatPrice(plant.price)}</div>
      </div>
    </Link>
  )
}
```

- [ ] **Step 2: Create ProductCarousel**

Create `src/components/product/ProductCarousel/ProductCarousel.module.css`:

```css
.wrapper {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 var(--space-md);
  display: flex;
  gap: var(--space-md);
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.item {
  min-width: 220px;
  max-width: 260px;
  scroll-snap-align: start;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .item {
    min-width: 260px;
    max-width: 300px;
  }
}
```

Create `src/components/product/ProductCarousel/ProductCarousel.tsx`:

```tsx
import { Plant } from '@/core/domain/plant'
import { ProductCard } from '@/components/product/ProductCard/ProductCard'
import styles from './ProductCarousel.module.css'

interface ProductCarouselProps {
  plants: Plant[]
}

export function ProductCarousel({ plants }: ProductCarouselProps) {
  return (
    <div className={styles.wrapper}>
      {plants.map((plant) => (
        <div key={plant.id} className={styles.item}>
          <ProductCard plant={plant} />
        </div>
      ))}
    </div>
  )
}
```

- [ ] **Step 3: Create ProductGrid**

Create `src/components/product/ProductGrid/ProductGrid.module.css`:

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Create `src/components/product/ProductGrid/ProductGrid.tsx`:

```tsx
import { Plant } from '@/core/domain/plant'
import { ProductCard } from '@/components/product/ProductCard/ProductCard'
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/animations/StaggerChildren/StaggerChildren'
import styles from './ProductGrid.module.css'

interface ProductGridProps {
  plants: Plant[]
}

export function ProductGrid({ plants }: ProductGridProps) {
  return (
    <StaggerChildren className={styles.grid}>
      {plants.map((plant) => (
        <StaggerItem key={plant.id}>
          <ProductCard plant={plant} />
        </StaggerItem>
      ))}
    </StaggerChildren>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/components/product
git commit -m "feat: add product components — ProductCard, ProductCarousel, ProductGrid"
```

---

## Task 7: Homepage Sections

**Files:**
- Create: all `src/components/home/*/` components
- Modify: `src/app/page.tsx` — compose homepage

- [ ] **Step 1: Create Hero**

Create `src/components/home/Hero/Hero.module.css`:

```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-3xl) var(--space-lg);
  position: relative;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, #1B2E1B 50%, var(--color-bg-primary) 100%);
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.3em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-style: italic;
  font-weight: 400;
  color: var(--color-text-primary);
  line-height: 1.2;
  margin-bottom: var(--space-sm);
}

.titleAccent {
  color: var(--color-accent-gold);
}

.divider {
  width: 40px;
  height: 1px;
  background: var(--color-accent-gold);
  margin: var(--space-lg) auto;
}

.cta {
  margin-top: var(--space-sm);
}

.scrollHint {
  position: absolute;
  bottom: var(--space-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.scrollText {
  font-size: 7px;
  letter-spacing: 0.2em;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.scrollLine {
  width: 1px;
  height: 20px;
  background: linear-gradient(180deg, var(--color-text-muted), transparent);
}

@media (min-width: 640px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  .title {
    font-size: 3.5rem;
  }
}
```

Create `src/components/home/Hero/Hero.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button/Button'
import styles from './Hero.module.css'

const lineVariants = {
  hidden: { opacity: 0, clipPath: 'inset(100% 0 0 0)' },
  visible: (i: number) => ({
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
      delay: 0.3 + i * 0.05,
    },
  }),
}

export function Hero() {
  return (
    <section className={styles.hero}>
      <motion.p
        className={styles.label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Plantas de Colección
      </motion.p>

      <motion.h1 className={styles.title} custom={0} variants={lineVariants} initial="hidden" animate="visible">
        Naturaleza
      </motion.h1>
      <motion.h1 className={styles.title} custom={1} variants={lineVariants} initial="hidden" animate="visible">
        en su forma
      </motion.h1>
      <motion.h1 className={`${styles.title} ${styles.titleAccent}`} custom={2} variants={lineVariants} initial="hidden" animate="visible">
        más pura
      </motion.h1>

      <motion.div
        className={styles.divider}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.8 }}
      />

      <motion.div
        className={styles.cta}
        initial={{ opacity: 0, transform: 'translateY(10px)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        transition={{ duration: 0.4, delay: 1.0 }}
      >
        <Link href="/catalogo">
          <Button variant="outline" size="medium">
            Explorar Colección
          </Button>
        </Link>
      </motion.div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create remaining home sections**

Create `src/components/home/FeaturedPlants/FeaturedPlants.module.css`:

```css
.section {
  padding: var(--space-xl) 0;
  background: var(--color-bg-secondary);
}

.header {
  padding: 0 var(--space-md) var(--space-lg);
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-sm);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-text-primary);
  font-weight: 400;
}
```

Create `src/components/home/FeaturedPlants/FeaturedPlants.tsx`:

```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { ProductCarousel } from '@/components/product/ProductCarousel/ProductCarousel'
import { getFeaturedPlants } from '@/infrastructure/mock/plants'
import styles from './FeaturedPlants.module.css'

export function FeaturedPlants() {
  const plants = getFeaturedPlants()

  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.header}>
          <p className={styles.label}>Destacados</p>
          <h2 className={styles.title}>Selección del mes</h2>
        </div>
      </ScrollReveal>
      <ProductCarousel plants={plants} />
    </section>
  )
}
```

Create `src/components/home/LiveSaleBanner/LiveSaleBanner.module.css`:

```css
.section {
  padding: var(--space-xl) var(--space-md);
  background: linear-gradient(135deg, #1a1a0f, #2a2a15);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  text-align: center;
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-md);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-style: italic;
  color: var(--color-text-primary);
  font-weight: 400;
  margin-bottom: var(--space-xs);
}

.subtitle {
  font-size: var(--text-sm);
  color: var(--color-accent-green);
  margin-bottom: var(--space-lg);
}
```

Create `src/components/home/LiveSaleBanner/LiveSaleBanner.tsx`:

```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { CountdownFlip } from '@/components/animations/CountdownFlip/CountdownFlip'
import { getNextLiveSale } from '@/infrastructure/mock/live-sales'
import styles from './LiveSaleBanner.module.css'

export function LiveSaleBanner() {
  const nextSale = getNextLiveSale()
  if (!nextSale) return null

  const dateFormatted = new Date(nextSale.date + 'T00:00:00').toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <section className={styles.section}>
      <ScrollReveal>
        <p className={styles.label}>Próximo Live Sale</p>
        <h2 className={styles.title} style={{ textTransform: 'capitalize' }}>
          {dateFormatted}
        </h2>
        <p className={styles.subtitle}>
          {nextSale.time} hrs — {nextSale.platform === 'instagram' ? 'Instagram' : 'TikTok'} Live
        </p>
        <CountdownFlip targetDate={nextSale.date} targetTime={nextSale.time} />
      </ScrollReveal>
    </section>
  )
}
```

Create `src/components/home/Categories/Categories.module.css`:

```css
.section {
  padding: var(--space-xl) var(--space-md);
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.card {
  display: block;
  background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-card-hover));
  padding: var(--space-lg) var(--space-md);
  border-radius: var(--radius-sm);
  text-align: center;
  border: 1px solid var(--color-border-subtle);
  transition: transform var(--duration-normal) var(--ease-out),
    border-color var(--duration-normal) var(--ease-out);
}

.cardName {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-text-primary);
}

.cardCount {
  font-size: var(--text-xs);
  color: var(--color-accent-green);
  margin-top: var(--space-xs);
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: scale(1.02);
    border-color: var(--color-border);
  }
}
```

Create `src/components/home/Categories/Categories.tsx`:

```tsx
import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/animations/StaggerChildren/StaggerChildren'
import { mockCategories } from '@/infrastructure/mock/categories'
import styles from './Categories.module.css'

export function Categories() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <p className={styles.label}>Categorías</p>
      </ScrollReveal>
      <StaggerChildren className={styles.grid}>
        {mockCategories.map((cat) => (
          <StaggerItem key={cat.id}>
            <Link href={`/catalogo?categoria=${cat.id}`} className={styles.card}>
              <div className={styles.cardName}>{cat.name}</div>
              <div className={styles.cardCount}>{cat.plantCount} especies</div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  )
}
```

Create `src/components/home/AboutTeaser/AboutTeaser.module.css`:

```css
.section {
  padding: var(--space-xl) var(--space-md);
  background: var(--color-bg-secondary);
  text-align: center;
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-md);
}

.quote {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-text-primary);
  line-height: 1.5;
  max-width: 500px;
  margin: 0 auto var(--space-lg);
  font-weight: 400;
}

.link {
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  color: var(--color-accent-green);
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-accent-green);
  padding-bottom: 2px;
  transition: color var(--duration-normal) var(--ease-out);
}

.link:hover {
  color: var(--color-text-primary);
}
```

Create `src/components/home/AboutTeaser/AboutTeaser.tsx`:

```tsx
import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './AboutTeaser.module.css'

export function AboutTeaser() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <p className={styles.label}>Nuestra Historia</p>
        <p className={styles.quote}>
          Cada planta es seleccionada con el cuidado de quien entiende que la naturaleza es
          arte.
        </p>
        <Link href="/nosotros" className={styles.link}>
          Conócenos
        </Link>
      </ScrollReveal>
    </section>
  )
}
```

Create `src/components/home/BlogPreview/BlogPreview.module.css`:

```css
.section {
  padding: var(--space-xl) var(--space-md);
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-lg);
}

.list {
  display: flex;
  flex-direction: column;
}

.item {
  display: block;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--space-md) 0;
  transition: padding-left var(--duration-normal) var(--ease-out);
}

.item:hover {
  padding-left: var(--space-sm);
}

.itemCategory {
  font-size: var(--text-xs);
  color: var(--color-accent-green);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-xs);
}

.itemTitle {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-text-primary);
  font-weight: 400;
}
```

Create `src/components/home/BlogPreview/BlogPreview.tsx`:

```tsx
import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { mockBlogPosts } from '@/infrastructure/mock/blog-posts'
import styles from './BlogPreview.module.css'

export function BlogPreview() {
  const posts = mockBlogPosts.slice(0, 3)

  return (
    <section className={styles.section}>
      <ScrollReveal>
        <p className={styles.label}>Blog</p>
      </ScrollReveal>
      <div className={styles.list}>
        {posts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.05}>
            <Link href={`/blog/${post.slug}`} className={styles.item}>
              <div className={styles.itemCategory}>{post.category}</div>
              <h3 className={styles.itemTitle}>{post.title}</h3>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
```

Create `src/components/home/InstagramFeed/InstagramFeed.module.css`:

```css
.section {
  padding: var(--space-xl) var(--space-md);
  background: var(--color-bg-secondary);
  text-align: center;
}

.label {
  font-size: var(--text-xs);
  letter-spacing: 0.25em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-sm);
}

.handle {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-style: italic;
  color: var(--color-text-primary);
  margin-bottom: var(--space-lg);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xs);
  max-width: 500px;
  margin: 0 auto;
}

.cell {
  aspect-ratio: 1;
  background: var(--color-bg-card);
  border-radius: 2px;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.cell:nth-child(odd) {
  background: var(--color-bg-card-hover);
}

.cell:hover {
  opacity: 0.8;
}
```

Create `src/components/home/InstagramFeed/InstagramFeed.tsx`:

```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './InstagramFeed.module.css'

export function InstagramFeed() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <p className={styles.label}>Instagram</p>
        <p className={styles.handle}>@verde_boutiqu</p>
        <a
          href="https://www.instagram.com/verde_boutiqu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.grid}
          aria-label="Ver Instagram de Mi Verde Boutiqu"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.cell} />
          ))}
        </a>
      </ScrollReveal>
    </section>
  )
}
```

- [ ] **Step 3: Compose homepage**

Replace `src/app/page.tsx`:

```tsx
import { Hero } from '@/components/home/Hero/Hero'
import { FeaturedPlants } from '@/components/home/FeaturedPlants/FeaturedPlants'
import { LiveSaleBanner } from '@/components/home/LiveSaleBanner/LiveSaleBanner'
import { Categories } from '@/components/home/Categories/Categories'
import { AboutTeaser } from '@/components/home/AboutTeaser/AboutTeaser'
import { BlogPreview } from '@/components/home/BlogPreview/BlogPreview'
import { InstagramFeed } from '@/components/home/InstagramFeed/InstagramFeed'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPlants />
      <LiveSaleBanner />
      <Categories />
      <AboutTeaser />
      <BlogPreview />
      <InstagramFeed />
    </>
  )
}
```

- [ ] **Step 4: Verify homepage**

```bash
npm run dev
```

Check: All sections render, scroll reveals trigger, countdown ticks, cards are scrollable horizontally.

- [ ] **Step 5: Commit**

```bash
git add src/components/home src/app/page.tsx
git commit -m "feat: build complete homepage with all sections and animations"
```

---

## Task 8: Catálogo Page

**Files:**
- Create: `src/app/(shop)/catalogo/page.tsx`
- Create: `src/app/(shop)/catalogo/[slug]/page.tsx`
- Create: `src/components/product/ProductDetail/ProductDetail.tsx`, `ProductDetail.module.css`

- [ ] **Step 1: Create catálogo listing page**

Create `src/app/(shop)/catalogo/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ProductGrid } from '@/components/product/ProductGrid/ProductGrid'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { mockPlants } from '@/infrastructure/mock/plants'

export const metadata: Metadata = {
  title: 'Catálogo',
  description:
    'Explora nuestra colección de plantas raras y exóticas. Anthuriums, Philodendros, Monsteras y más.',
}

export default function CatalogoPage() {
  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <ScrollReveal>
          <p className="label-text" style={{ marginBottom: 'var(--space-sm)' }}>
            Colección
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--text-3xl)',
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            Nuestras plantas
          </h1>
        </ScrollReveal>
        <ProductGrid plants={mockPlants} />
      </section>
    </Container>
  )
}
```

- [ ] **Step 2: Create ProductDetail component**

Create `src/components/product/ProductDetail/ProductDetail.module.css`:

```css
.detail {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  padding: var(--space-xl) 0;
}

.imageArea {
  aspect-ratio: 3 / 4;
  background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-card-hover));
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.imagePlaceholder {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

.info {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.category {
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  color: var(--color-accent-green);
  text-transform: uppercase;
}

.name {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-style: italic;
  font-weight: 400;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.price {
  font-size: var(--text-2xl);
  color: var(--color-accent-gold);
  font-weight: 500;
}

.description {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

.careSection {
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-lg);
}

.careTitle {
  font-size: var(--text-xs);
  letter-spacing: 0.2em;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-bottom: var(--space-md);
}

.careGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-md);
}

.careItem {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.careLabel {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.careValue {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  line-height: 1.5;
}

@media (min-width: 768px) {
  .detail {
    grid-template-columns: 1fr 1fr;
  }
}
```

Create `src/components/product/ProductDetail/ProductDetail.tsx`:

```tsx
import { Plant } from '@/core/domain/plant'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ProductDetail.module.css'

interface ProductDetailProps {
  plant: Plant
}

export function ProductDetail({ plant }: ProductDetailProps) {
  return (
    <div className={styles.detail}>
      <div className={styles.imageArea}>
        <span className={styles.imagePlaceholder}>{plant.species}</span>
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.category}>{plant.category}</p>
          <h1 className={styles.name}>{plant.name}</h1>
          <Badge rarity={plant.rarity} />
        </div>

        <p className={styles.price}>{formatPrice(plant.price)}</p>
        <p className={styles.description}>{plant.description}</p>

        <Button variant="primary" size="large" disabled={!plant.inStock}>
          {plant.inStock ? 'Agregar al carrito' : 'Agotado'}
        </Button>

        <div className={styles.careSection}>
          <h2 className={styles.careTitle}>Guía de cuidados</h2>
          <div className={styles.careGrid}>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Luz</span>
              <span className={styles.careValue}>{plant.careGuide.light}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Riego</span>
              <span className={styles.careValue}>{plant.careGuide.water}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Humedad</span>
              <span className={styles.careValue}>{plant.careGuide.humidity}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Temperatura</span>
              <span className={styles.careValue}>{plant.careGuide.temperature}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create product detail page**

Create `src/app/(shop)/catalogo/[slug]/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container/Container'
import { ProductDetail } from '@/components/product/ProductDetail/ProductDetail'
import { getPlantBySlug, mockPlants } from '@/infrastructure/mock/plants'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return mockPlants.map((plant) => ({ slug: plant.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) return {}
  return {
    title: plant.name,
    description: plant.description,
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params
  const plant = getPlantBySlug(slug)
  if (!plant) notFound()

  return (
    <Container>
      <ProductDetail plant={plant} />
    </Container>
  )
}
```

- [ ] **Step 4: Verify**

```bash
npm run dev
```

Navigate to /catalogo — grid of plants. Click a plant — detail page with image area, info, care guide.

- [ ] **Step 5: Commit**

```bash
git add src/app/\(shop\) src/components/product/ProductDetail
git commit -m "feat: add catálogo listing and product detail pages"
```

---

## Task 9: Cart (useCart hook + CartDrawer + Cart page)

**Files:**
- Create: `src/hooks/useCart.ts`
- Create: `src/components/cart/CartDrawer/CartDrawer.tsx`, `CartDrawer.module.css`
- Create: `src/components/cart/CartItem/CartItem.tsx`, `CartItem.module.css`
- Create: `src/components/cart/CartSummary/CartSummary.tsx`, `CartSummary.module.css`
- Create: `src/app/(shop)/carrito/page.tsx`
- Modify: `src/app/layout.tsx` — add CartProvider context

- [ ] **Step 1: Create useCart hook with context**

Create `src/hooks/useCart.ts`:

```tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import { CartItem, calculateCart, Cart } from '@/core/domain/cart'

interface CartContextType {
  cart: Cart
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (plantId: string) => void
  updateQuantity: (plantId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('verde-boutiqu-cart')
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        // ignore corrupted data
      }
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem('verde-boutiqu-cart', JSON.stringify(items))
    }
  }, [items, hydrated])

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.plantId === item.plantId)
      if (existing) {
        return prev.map((i) =>
          i.plantId === item.plantId ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsDrawerOpen(true)
  }, [])

  const removeItem = useCallback((plantId: string) => {
    setItems((prev) => prev.filter((i) => i.plantId !== plantId))
  }, [])

  const updateQuantity = useCallback((plantId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.plantId !== plantId))
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.plantId === plantId ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const cart = calculateCart(items)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
```

- [ ] **Step 2: Create CartItem component**

Create `src/components/cart/CartItem/CartItem.module.css`:

```css
.item {
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md) 0;
  border-bottom: 1px solid var(--color-border-subtle);
}

.image {
  width: 64px;
  height: 80px;
  background: var(--color-bg-card);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.name {
  font-family: var(--font-heading);
  font-size: var(--text-base);
  font-style: italic;
  color: var(--color-text-primary);
}

.price {
  font-size: var(--text-sm);
  color: var(--color-accent-gold);
}

.controls {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.qtyButton {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  transition: border-color var(--duration-normal) var(--ease-out);
}

.qtyButton:hover {
  border-color: var(--color-accent-gold);
  color: var(--color-text-primary);
}

.qty {
  font-size: var(--text-sm);
  color: var(--color-text-primary);
  min-width: 1.5ch;
  text-align: center;
}

.remove {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  margin-top: var(--space-xs);
  transition: color var(--duration-normal) var(--ease-out);
}

.remove:hover {
  color: #c44;
}
```

Create `src/components/cart/CartItem/CartItem.tsx`:

```tsx
'use client'

import { CartItem as CartItemType } from '@/core/domain/cart'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'
import styles from './CartItem.module.css'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className={styles.item}>
      <div className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.name}>{item.name}</h3>
        <p className={styles.price}>{formatPrice(item.price)}</p>
        <div className={styles.controls}>
          <button
            className={styles.qtyButton}
            onClick={() => updateQuantity(item.plantId, item.quantity - 1)}
            aria-label="Disminuir cantidad"
          >
            −
          </button>
          <span className={styles.qty}>{item.quantity}</span>
          <button
            className={styles.qtyButton}
            onClick={() => updateQuantity(item.plantId, item.quantity + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>
        <button className={styles.remove} onClick={() => removeItem(item.plantId)}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Create CartSummary and CartDrawer**

Create `src/components/cart/CartSummary/CartSummary.module.css`:

```css
.summary {
  padding: var(--space-md) 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.row {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.total {
  display: flex;
  justify-content: space-between;
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  font-weight: 500;
  border-top: 1px solid var(--color-border);
  padding-top: var(--space-md);
  margin-top: var(--space-sm);
}

.freeShipping {
  font-size: var(--text-xs);
  color: var(--color-accent-green);
}
```

Create `src/components/cart/CartSummary/CartSummary.tsx`:

```tsx
'use client'

import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'
import styles from './CartSummary.module.css'

export function CartSummary() {
  const { cart } = useCart()

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span>Subtotal</span>
        <span>{formatPrice(cart.subtotal)}</span>
      </div>
      <div className={styles.row}>
        <span>Envío</span>
        <span>
          {cart.shipping === 0 ? (
            <span className={styles.freeShipping}>Gratis</span>
          ) : (
            formatPrice(cart.shipping)
          )}
        </span>
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>{formatPrice(cart.total)}</span>
      </div>
    </div>
  )
}
```

Create `src/components/cart/CartDrawer/CartDrawer.module.css`:

```css
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: var(--z-drawer);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-slow) var(--ease-out);
}

.overlay[data-open='true'] {
  opacity: 1;
  pointer-events: auto;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 380px;
  max-width: 90vw;
  background: var(--color-bg-primary);
  z-index: var(--z-drawer);
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.drawer[data-open='true'] {
  transform: translateX(0);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-lg);
  border-bottom: 1px solid var(--color-border-subtle);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-text-primary);
}

.close {
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.items {
  flex: 1;
  overflow-y: auto;
  padding: 0 var(--space-lg);
}

.empty {
  text-align: center;
  padding: var(--space-2xl) 0;
  color: var(--color-text-muted);
  font-style: italic;
}

.footer {
  padding: var(--space-lg);
  border-top: 1px solid var(--color-border-subtle);
}
```

Create `src/components/cart/CartDrawer/CartDrawer.tsx`:

```tsx
'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/components/cart/CartItem/CartItem'
import { CartSummary } from '@/components/cart/CartSummary/CartSummary'
import { Button } from '@/components/ui/Button/Button'
import styles from './CartDrawer.module.css'

export function CartDrawer() {
  const { cart, isDrawerOpen, closeDrawer } = useCart()

  return (
    <>
      <div
        className={styles.overlay}
        data-open={isDrawerOpen}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <aside className={styles.drawer} data-open={isDrawerOpen} aria-label="Carrito">
        <div className={styles.header}>
          <h2 className={styles.title}>Carrito</h2>
          <button className={styles.close} onClick={closeDrawer} aria-label="Cerrar carrito">
            Cerrar
          </button>
        </div>

        <div className={styles.items}>
          {cart.items.length === 0 ? (
            <p className={styles.empty}>Tu carrito está vacío</p>
          ) : (
            cart.items.map((item) => <CartItem key={item.plantId} item={item} />)
          )}
        </div>

        {cart.items.length > 0 && (
          <div className={styles.footer}>
            <CartSummary />
            <Link href="/checkout" onClick={closeDrawer} style={{ display: 'block', marginTop: 'var(--space-md)' }}>
              <Button variant="primary" size="large" style={{ width: '100%' }}>
                Ir al Checkout
              </Button>
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
```

- [ ] **Step 4: Add CartProvider and CartDrawer to layout**

Update `src/app/layout.tsx` — wrap body content with CartProvider and add CartDrawer:

Add import at top:
```tsx
import { CartProvider } from '@/hooks/useCart'
import { CartDrawer } from '@/components/cart/CartDrawer/CartDrawer'
```

Update body:
```tsx
<body>
  <CartProvider>
    <Header />
    <main style={{ paddingTop: '60px' }}>{children}</main>
    <Footer />
    <CartDrawer />
  </CartProvider>
</body>
```

- [ ] **Step 5: Update Header cart count**

Update `src/components/layout/Header/Header.tsx` — add useCart for count:

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import styles from './Header.module.css'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount, openDrawer } = useCart()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
          >
            Menú
          </button>

          <Link href="/" className={styles.logo}>
            <div className={styles.logoSub}>Mi Verde</div>
            <div className={styles.logoMain}>Boutiqu</div>
          </Link>

          <button className={styles.cartButton} onClick={openDrawer} aria-label="Abrir carrito">
            Cart({itemCount})
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
```

- [ ] **Step 6: Wire "Add to cart" button on ProductDetail**

Update `src/components/product/ProductDetail/ProductDetail.tsx` — make it a client component with useCart:

Add `'use client'` at top, import useCart, and update the button:

```tsx
'use client'

import { Plant } from '@/core/domain/plant'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ProductDetail.module.css'

interface ProductDetailProps {
  plant: Plant
}

export function ProductDetail({ plant }: ProductDetailProps) {
  const { addItem } = useCart()

  const handleAdd = () => {
    addItem({
      plantId: plant.id,
      slug: plant.slug,
      name: plant.name,
      price: plant.price,
      image: plant.images[0] ?? '',
    })
  }

  return (
    <div className={styles.detail}>
      <div className={styles.imageArea}>
        <span className={styles.imagePlaceholder}>{plant.species}</span>
      </div>

      <div className={styles.info}>
        <div>
          <p className={styles.category}>{plant.category}</p>
          <h1 className={styles.name}>{plant.name}</h1>
          <Badge rarity={plant.rarity} />
        </div>

        <p className={styles.price}>{formatPrice(plant.price)}</p>
        <p className={styles.description}>{plant.description}</p>

        <Button
          variant="primary"
          size="large"
          disabled={!plant.inStock}
          onClick={handleAdd}
        >
          {plant.inStock ? 'Agregar al carrito' : 'Agotado'}
        </Button>

        <div className={styles.careSection}>
          <h2 className={styles.careTitle}>Guía de cuidados</h2>
          <div className={styles.careGrid}>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Luz</span>
              <span className={styles.careValue}>{plant.careGuide.light}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Riego</span>
              <span className={styles.careValue}>{plant.careGuide.water}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Humedad</span>
              <span className={styles.careValue}>{plant.careGuide.humidity}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Temperatura</span>
              <span className={styles.careValue}>{plant.careGuide.temperature}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

- [ ] **Step 7: Create cart page**

Create `src/app/(shop)/carrito/page.tsx`:

```tsx
'use client'

import { Container } from '@/components/ui/Container/Container'
import { CartItem } from '@/components/cart/CartItem/CartItem'
import { CartSummary } from '@/components/cart/CartSummary/CartSummary'
import { Button } from '@/components/ui/Button/Button'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'

export default function CarritoPage() {
  const { cart } = useCart()

  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--text-3xl)',
            fontStyle: 'italic',
            fontWeight: 400,
            marginBottom: 'var(--space-xl)',
          }}
        >
          Carrito
        </h1>

        {cart.items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
            <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 'var(--space-lg)' }}>
              Tu carrito está vacío
            </p>
            <Link href="/catalogo">
              <Button variant="outline">Explorar Colección</Button>
            </Link>
          </div>
        ) : (
          <div style={{ maxWidth: '600px' }}>
            {cart.items.map((item) => (
              <CartItem key={item.plantId} item={item} />
            ))}
            <CartSummary />
            <Link href="/checkout" style={{ display: 'block', marginTop: 'var(--space-lg)' }}>
              <Button variant="primary" size="large" style={{ width: '100%' }}>
                Ir al Checkout
              </Button>
            </Link>
          </div>
        )}
      </section>
    </Container>
  )
}
```

- [ ] **Step 8: Commit**

```bash
git add src/hooks/useCart.ts src/components/cart src/app/\(shop\)/carrito src/app/layout.tsx src/components/layout/Header/Header.tsx src/components/product/ProductDetail/ProductDetail.tsx
git commit -m "feat: add cart system — useCart hook, CartDrawer, CartItem, cart page"
```

---

## Task 10: Remaining Pages (Blog, Live Sales, About, Checkout, Legal)

**Files:**
- Create: `src/app/blog/page.tsx`, `src/app/blog/[slug]/page.tsx`
- Create: `src/components/blog/BlogCard/BlogCard.tsx`, `BlogCard.module.css`
- Create: `src/app/live-sales/page.tsx`
- Create: `src/app/nosotros/page.tsx`
- Create: `src/app/(shop)/checkout/page.tsx`
- Create: `src/app/privacidad/page.tsx`, `src/app/terminos/page.tsx`

- [ ] **Step 1: Create BlogCard component**

Create `src/components/blog/BlogCard/BlogCard.module.css`:

```css
.card {
  display: block;
  border-top: 1px solid var(--color-border-subtle);
  padding: var(--space-lg) 0;
  transition: padding-left var(--duration-normal) var(--ease-out);
}

.card:hover {
  padding-left: var(--space-sm);
}

.meta {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-sm);
}

.category {
  font-size: var(--text-xs);
  letter-spacing: 0.1em;
  color: var(--color-accent-green);
  text-transform: uppercase;
}

.date {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.title {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-style: italic;
  color: var(--color-text-primary);
  font-weight: 400;
  margin-bottom: var(--space-sm);
}

.excerpt {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}
```

Create `src/components/blog/BlogCard/BlogCard.tsx`:

```tsx
import Link from 'next/link'
import { BlogPost } from '@/core/domain/blog'
import styles from './BlogCard.module.css'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const dateFormatted = new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.date}>{dateFormatted} · {post.readTime} min</span>
      </div>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </Link>
  )
}
```

- [ ] **Step 2: Create Blog pages**

Create `src/app/blog/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { BlogCard } from '@/components/blog/BlogCard/BlogCard'
import { mockBlogPosts } from '@/infrastructure/mock/blog-posts'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guías de cuidado, tips y novedades sobre plantas de colección.',
}

export default function BlogPage() {
  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <ScrollReveal>
          <p className="label-text" style={{ marginBottom: 'var(--space-sm)' }}>Blog</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, marginBottom: 'var(--space-xl)' }}>
            Aprende con nosotros
          </h1>
        </ScrollReveal>
        {mockBlogPosts.map((post, i) => (
          <ScrollReveal key={post.id} delay={i * 0.05}>
            <BlogCard post={post} />
          </ScrollReveal>
        ))}
      </section>
    </Container>
  )
}
```

Create `src/app/blog/[slug]/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container/Container'
import { getBlogPostBySlug, mockBlogPosts } from '@/infrastructure/mock/blog-posts'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return mockBlogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const dateFormatted = new Date(post.publishedAt + 'T00:00:00').toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <Container>
      <article style={{ padding: 'var(--space-xl) 0', maxWidth: '700px' }}>
        <p className="label-text" style={{ marginBottom: 'var(--space-sm)' }}>{post.category}</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.3, marginBottom: 'var(--space-md)' }}>
          {post.title}
        </h1>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-xl)' }}>
          {dateFormatted} · {post.readTime} min de lectura
        </p>
        <div
          style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}
          dangerouslySetInnerHTML={{
            __html: post.content
              .split('\n\n')
              .map((p) => {
                if (p.startsWith('## ')) return `<h2 style="font-family:var(--font-heading);font-size:var(--text-xl);font-style:italic;color:var(--color-text-primary);margin:var(--space-xl) 0 var(--space-md);font-weight:400;">${p.slice(3)}</h2>`
                if (p.startsWith('1. ') || p.startsWith('2. ')) return `<p style="margin-bottom:var(--space-sm)">${p}</p>`
                return `<p style="margin-bottom:var(--space-md)">${p}</p>`
              })
              .join(''),
          }}
        />
      </article>
    </Container>
  )
}
```

- [ ] **Step 3: Create Live Sales page**

Create `src/app/live-sales/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { CountdownFlip } from '@/components/animations/CountdownFlip/CountdownFlip'
import { mockLiveSales } from '@/infrastructure/mock/live-sales'

export const metadata: Metadata = {
  title: 'Live Sales',
  description: 'Ventas en vivo de plantas de colección por Instagram y TikTok.',
}

export default function LiveSalesPage() {
  const upcoming = mockLiveSales.filter((e) => e.upcoming)
  const past = mockLiveSales.filter((e) => !e.upcoming)

  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0' }}>
        <ScrollReveal>
          <p className="label-text" style={{ marginBottom: 'var(--space-sm)' }}>En Vivo</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, marginBottom: 'var(--space-xl)' }}>
            Live Sales
          </h1>
        </ScrollReveal>

        {upcoming.map((event) => (
          <ScrollReveal key={event.id}>
            <div style={{ padding: 'var(--space-xl)', background: 'linear-gradient(135deg, #1a1a0f, #2a2a15)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
              <p className="label-text" style={{ marginBottom: 'var(--space-md)' }}>Próximo</p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontStyle: 'italic', fontWeight: 400, marginBottom: 'var(--space-sm)' }}>
                {event.title}
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-accent-green)', marginBottom: 'var(--space-md)' }}>
                {event.time} hrs — {event.platform === 'instagram' ? 'Instagram' : 'TikTok'} Live
              </p>
              <CountdownFlip targetDate={event.date} targetTime={event.time} />
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', marginTop: 'var(--space-lg)', maxWidth: '500px', margin: 'var(--space-lg) auto 0', lineHeight: 1.6 }}>
                {event.description}
              </p>
            </div>
          </ScrollReveal>
        ))}

        {past.length > 0 && (
          <ScrollReveal>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', fontWeight: 400, marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
              Eventos anteriores
            </h2>
            {past.map((event) => (
              <div key={event.id} style={{ padding: 'var(--space-md) 0', borderTop: '1px solid var(--color-border-subtle)' }}>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{event.date}</p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>{event.title}</p>
              </div>
            ))}
          </ScrollReveal>
        )}
      </section>
    </Container>
  )
}
```

- [ ] **Step 4: Create About page**

Create `src/app/nosotros/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce la historia detrás de Mi Verde Boutiqu.',
}

export default function NosotrosPage() {
  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0', maxWidth: '700px' }}>
        <ScrollReveal>
          <p className="label-text" style={{ marginBottom: 'var(--space-sm)' }}>Nuestra Historia</p>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, lineHeight: 1.3, marginBottom: 'var(--space-xl)' }}>
            Donde la pasión se encuentra con la naturaleza
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
            Mi Verde Boutiqu nació en 2022 de una obsesión compartida por las plantas más extraordinarias del mundo. Lo que comenzó como una pequeña colección personal se transformó en una misión: acercar las especies más raras y hermosas a los hogares chilenos.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>
            Selección con cuidado
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
            Cada planta que ofrecemos ha sido cuidadosamente seleccionada y cultivada. No vendemos plantas recién importadas o débiles — cada ejemplar está establecido, sano y listo para prosperar en tu hogar. Trabajamos directamente con cultivadores especializados en aroideas tropicales.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>
            Comunidad
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
            Más que una tienda, somos una comunidad de amantes de las plantas. A través de nuestros Live Sales en Instagram y TikTok, compartimos conocimientos, resolvemos dudas y celebramos juntos cada nueva hoja. Porque cuidar plantas es mejor cuando se hace en compañía.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, marginBottom: 'var(--space-md)' }}>
            Envíos a todo Chile
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Empacamos cada planta con el mismo cuidado con el que la cultivamos. Nuestro sistema de embalaje protege cada hoja durante el transporte, asegurando que tu nueva planta llegue en perfectas condiciones a cualquier rincón de Chile.
          </p>
        </ScrollReveal>
      </section>
    </Container>
  )
}
```

- [ ] **Step 5: Create Checkout page (visual mock)**

Create `src/app/(shop)/checkout/page.tsx`:

```tsx
'use client'

import { Container } from '@/components/ui/Container/Container'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { CartSummary } from '@/components/cart/CartSummary/CartSummary'
import { useCart } from '@/hooks/useCart'

export default function CheckoutPage() {
  const { cart } = useCart()

  return (
    <Container>
      <section style={{ padding: 'var(--space-xl) 0', maxWidth: '600px' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, marginBottom: 'var(--space-xl)' }}>
          Checkout
        </h1>

        {cart.items.length === 0 ? (
          <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            No hay productos en el carrito.
          </p>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div>
              <p className="label-text" style={{ marginBottom: 'var(--space-md)' }}>Datos personales</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Input label="Nombre completo" placeholder="María González" />
                <Input label="Email" type="email" placeholder="maria@ejemplo.cl" />
                <Input label="Teléfono" type="tel" placeholder="+56 9 1234 5678" />
              </div>
            </div>

            <div>
              <p className="label-text" style={{ marginBottom: 'var(--space-md)' }}>Dirección de envío</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Input label="Dirección" placeholder="Av. Providencia 1234" />
                <Input label="Comuna" placeholder="Providencia" />
                <Input label="Ciudad" placeholder="Santiago" />
                <Input label="Región" placeholder="Región Metropolitana" />
              </div>
            </div>

            <CartSummary />

            <Button variant="primary" size="large" type="submit" style={{ width: '100%' }}>
              Pagar con Mercado Pago
            </Button>

            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Demo — el pago no se procesará
            </p>
          </form>
        )}
      </section>
    </Container>
  )
}
```

- [ ] **Step 6: Create Legal pages**

Create `src/app/privacidad/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
}

export default function PrivacidadPage() {
  return (
    <Container>
      <article style={{ padding: 'var(--space-xl) 0', maxWidth: '700px', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xl)' }}>
          Política de Privacidad
        </h1>

        <p style={{ marginBottom: 'var(--space-md)' }}>Última actualización: Marzo 2026</p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          1. Información que recopilamos
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Recopilamos información personal que nos proporcionas directamente al realizar una compra: nombre, email, teléfono y dirección de envío. También recopilamos datos de navegación anónimos para mejorar nuestro servicio.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          2. Uso de la información
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Utilizamos tu información exclusivamente para procesar pedidos, enviar confirmaciones, coordinar envíos y mejorar nuestro servicio. Nunca vendemos ni compartimos tus datos con terceros para fines publicitarios.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          3. Protección de datos
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Cumplimos con la Ley 19.628 sobre protección de la vida privada de Chile. Tus datos personales son almacenados de forma segura y encriptada. Los datos de pago son procesados directamente por Mercado Pago y nunca pasan por nuestros servidores.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          4. Contacto
        </h2>
        <p>
          Para consultas sobre privacidad, escríbenos a contacto@miverdeboutiqu.cl o por Instagram @verde_boutiqu.
        </p>
      </article>
    </Container>
  )
}
```

Create `src/app/terminos/page.tsx`:

```tsx
import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
}

export default function TerminosPage() {
  return (
    <Container>
      <article style={{ padding: 'var(--space-xl) 0', maxWidth: '700px', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontStyle: 'italic', fontWeight: 400, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xl)' }}>
          Términos y Condiciones
        </h1>

        <p style={{ marginBottom: 'var(--space-md)' }}>Última actualización: Marzo 2026</p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          1. Productos
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Todos nuestros productos son plantas vivas. Las fotos son referenciales — cada planta es única y puede variar en tamaño, forma y coloración respecto a la imagen publicada. Nos comprometemos a enviar plantas sanas y en las mejores condiciones posibles.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          2. Envíos
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Realizamos envíos a todo Chile. Santiago: 2-3 días hábiles. Regiones: 5-7 días hábiles. Envío gratuito en compras sobre $80.000 CLP. Las plantas se empaquetan con materiales especiales para protegerlas durante el transporte.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          3. Devoluciones
        </h2>
        <p style={{ marginBottom: 'var(--space-md)' }}>
          Si tu planta llega dañada por el transporte, envíanos fotos dentro de las primeras 24 horas de recepción a contacto@miverdeboutiqu.cl. Evaluaremos cada caso y ofreceremos reemplazo o reembolso. No aceptamos devoluciones por cambios naturales de la planta después de la entrega.
        </p>

        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontStyle: 'italic', color: 'var(--color-accent-gold)', fontWeight: 400, margin: 'var(--space-xl) 0 var(--space-md)' }}>
          4. Pagos
        </h2>
        <p>
          Aceptamos pagos a través de Mercado Pago (tarjetas de crédito, débito y transferencia). Todos los precios están en pesos chilenos (CLP) e incluyen IVA.
        </p>
      </article>
    </Container>
  )
}
```

- [ ] **Step 7: Verify all pages**

```bash
npm run dev
```

Navigate to: /, /catalogo, /catalogo/anthurium-crystallinum, /carrito, /checkout, /live-sales, /blog, /blog/como-cuidar-anthurium-veitchii, /nosotros, /privacidad, /terminos. All should render.

- [ ] **Step 8: Commit**

```bash
git add src/app src/components/blog
git commit -m "feat: add all remaining pages — blog, live sales, about, checkout, legal"
```

---

## Task 11: Final Polish + Build Verification

**Files:**
- Modify: `src/app/globals.css` — any final adjustments
- No new files

- [ ] **Step 1: Run build to check for errors**

```bash
npm run build
```

Fix any TypeScript or build errors that appear.

- [ ] **Step 2: Run linter**

```bash
npm run lint
```

Fix any lint warnings/errors.

- [ ] **Step 3: Test responsive at key breakpoints**

Open http://localhost:3000 and test at:
- 375px (mobile)
- 640px (tablet)
- 1024px (desktop)
- 1440px (wide)

Check: No horizontal scroll, text readable, cards stack properly, nav works, cart drawer opens.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: fix build errors and polish responsive design"
```

- [ ] **Step 5: Verify production build runs**

```bash
npm run build && npm run start
```

Open http://localhost:3000 — full demo should work.

---

## Pending (Not in this plan)

- **Crystallinum SVG animation** — Waiting for clean isolated photo from user. Will be Task 12 when photo is available.
- **Sanity CMS integration** — Replace mock data with Sanity
- **Mercado Pago** — Real payment flow
- **Google OAuth** — NextAuth.js setup
- **Resend** — Transactional emails
- **Plant photos** — Replace placeholder images with real photos
