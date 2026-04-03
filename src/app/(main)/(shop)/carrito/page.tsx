'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/components/cart/CartItem/CartItem'
import { CartSummary } from '@/components/cart/CartSummary/CartSummary'
import { Button } from '@/components/ui/Button/Button'
import { Container } from '@/components/ui/Container/Container'
import styles from './page.module.css'

export default function CarritoPage() {
  const { cart } = useCart()

  return (
    <Container>
      <div className={styles.page}>
        <h1 className={styles.title}>Tu carrito</h1>
        {cart.items.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>Tu carrito está vacío</p>
            <Link href="/catalogo">
              <Button variant="outline">Explorar catálogo</Button>
            </Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.items}>
              {cart.items.map((item) => (
                <CartItem key={item.plantId} item={item} />
              ))}
            </div>
            <div className={styles.sidebar}>
              <CartSummary />
              <Link href="/checkout" className={styles.checkoutLink}>
                <Button size="large" style={{ width: '100%' }}>
                  Ir al Checkout
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}
