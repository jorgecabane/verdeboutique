import type { Metadata } from 'next'
import { Playfair_Display, EB_Garamond } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { CartProvider } from '@/hooks/useCart'
import { CartDrawer } from '@/components/cart/CartDrawer/CartDrawer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'Mi Verde Boutique — Plantas de Colección',
    template: '%s | Mi Verde Boutique',
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
    siteName: 'Mi Verde Boutique',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${garamond.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main style={{ paddingTop: '60px' }}>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
