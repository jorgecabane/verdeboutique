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
        data-open={isDrawerOpen ? 'true' : 'false'}
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div
        className={styles.drawer}
        data-open={isDrawerOpen ? 'true' : 'false'}
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal="true"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Carrito</h2>
          <button className={styles.closeBtn} onClick={closeDrawer} aria-label="Cerrar carrito">
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
            <Link href="/checkout" className={styles.checkoutLink} onClick={closeDrawer}>
              <Button size="large" style={{ width: '100%' }}>
                Ir al Checkout
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
