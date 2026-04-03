import { Header } from '@/components/layout/Header/Header'
import { Footer } from '@/components/layout/Footer/Footer'
import { CartProvider } from '@/hooks/useCart'
import { CartDrawer } from '@/components/cart/CartDrawer/CartDrawer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <main style={{ paddingTop: '60px' }}>{children}</main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
