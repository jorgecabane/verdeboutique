'use client'

import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'
import styles from './CartSummary.module.css'

export function CartSummary() {
  const { cart } = useCart()

  return (
    <div className={styles.summary}>
      <div className={styles.row}>
        <span className={styles.label}>Subtotal</span>
        <span className={styles.value}>{formatPrice(cart.subtotal)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.label}>Envío</span>
        <span className={cart.shipping === 0 ? styles.free : styles.value}>
          {cart.shipping === 0 ? 'Gratis' : formatPrice(cart.shipping)}
        </span>
      </div>
      <div className={styles.total}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>{formatPrice(cart.total)}</span>
      </div>
    </div>
  )
}
