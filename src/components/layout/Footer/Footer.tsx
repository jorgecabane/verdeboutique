import Link from 'next/link'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoSub}>Mi Verde</div>
        <div className={styles.logoMain}>Boutique</div>
      </Link>

      <div className={styles.links}>
        <Link href="/catalogo" className={styles.link}>Catálogo</Link>
        <Link href="/live-sales" className={styles.link}>Live Sales</Link>
        <Link href="/blog" className={styles.link}>Blog</Link>
        <Link href="/nosotros" className={styles.link}>Nosotros</Link>
      </div>

      <div className={styles.legalLinks}>
        <Link href="/privacidad" className={styles.link}>Privacidad</Link>
        <Link href="/terminos" className={styles.link}>Términos</Link>
      </div>

      <div className={styles.socialLinks}>
        <a
          href="https://www.instagram.com/verde_boutiqu"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.tiktok.com/@verde_boutiqu"
          className={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </div>

      <p className={styles.copyright}>
        © 2026 Mi Verde Boutique. Envíos a todo Chile.
      </p>
    </footer>
  )
}
