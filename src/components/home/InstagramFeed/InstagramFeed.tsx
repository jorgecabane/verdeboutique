import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './InstagramFeed.module.css'

const PLACEHOLDER_COUNT = 6

export function InstagramFeed() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.header}>
          <p className="label-text">INSTAGRAM</p>
          <p className={styles.handle}>@verde_boutiqu</p>
        </div>
        <Link
          href="https://instagram.com/verde_boutiqu"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.gridLink}
          aria-label="Ver perfil de Instagram @verde_boutiqu"
        >
          <div className={styles.grid}>
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className={styles.cell}
                data-alt={i % 2 === 1}
              />
            ))}
          </div>
        </Link>
      </ScrollReveal>
    </section>
  )
}
