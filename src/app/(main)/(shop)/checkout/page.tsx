'use client'

import Link from 'next/link'
import { useCart } from '@/hooks/useCart'
import { CartSummary } from '@/components/cart/CartSummary/CartSummary'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { Container } from '@/components/ui/Container/Container'
import styles from './page.module.css'

export default function CheckoutPage() {
  const { cart } = useCart()

  if (cart.items.length === 0) {
    return (
      <Container>
        <div className={styles.empty}>
          <p className={styles.emptyText}>No tienes productos en el carrito</p>
          <Link href="/catalogo">
            <Button variant="outline">Explorar catálogo</Button>
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className={styles.page}>
        <h1 className={styles.title}>Checkout</h1>
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Datos personales</legend>
              <Input label="Nombre completo" type="text" required autoComplete="name" />
              <Input label="Email" type="email" required autoComplete="email" />
              <Input label="Teléfono" type="tel" autoComplete="tel" />
            </fieldset>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Dirección de envío</legend>
              <Input label="Dirección" type="text" required autoComplete="street-address" />
              <Input label="Comuna" type="text" required />
              <Input label="Ciudad" type="text" required autoComplete="address-level2" />
              <Input label="Región" type="text" required autoComplete="address-level1" />
            </fieldset>
          </form>
          <div className={styles.sidebar}>
            <div className={styles.summaryBox}>
              <p className={styles.summaryTitle}>Resumen del pedido</p>
              <CartSummary />
            </div>
            <Button size="large" style={{ width: '100%' }}>
              Pagar con Mercado Pago
            </Button>
            <p className={styles.disclaimer}>
              Demo — el pago no se procesará
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
