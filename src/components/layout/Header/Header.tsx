'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
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
            <div className={styles.logoMain}>Boutique</div>
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
