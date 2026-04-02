'use client'

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
        <div className={styles.subNav}>
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
