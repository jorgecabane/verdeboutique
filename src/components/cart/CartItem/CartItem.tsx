'use client'

import { CartItem as CartItemType } from '@/core/domain/cart'
import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'
import styles from './CartItem.module.css'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className={styles.item}>
      <div className={styles.image}>{item.name.split(' ')[0]}</div>
      <div className={styles.body}>
        <p className={styles.name}>{item.name}</p>
        <p className={styles.price}>{formatPrice(item.price)}</p>
        <div className={styles.controls}>
          <button
            className={styles.qtyBtn}
            onClick={() => updateQuantity(item.plantId, item.quantity - 1)}
            aria-label="Disminuir cantidad"
          >
            −
          </button>
          <span className={styles.qty}>{item.quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => updateQuantity(item.plantId, item.quantity + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
          <button
            className={styles.removeBtn}
            onClick={() => removeItem(item.plantId)}
            aria-label="Eliminar del carrito"
          >
            Quitar
          </button>
        </div>
      </div>
    </div>
  )
}
