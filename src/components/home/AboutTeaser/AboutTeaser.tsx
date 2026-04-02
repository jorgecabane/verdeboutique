import Link from 'next/link'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './AboutTeaser.module.css'

export function AboutTeaser() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.content}>
          <p className="label-text">NUESTRA HISTORIA</p>
          <blockquote className={styles.quote}>
            Cada planta es seleccionada con el cuidado de quien entiende que la naturaleza es arte.
          </blockquote>
          <Link href="/nosotros" className={styles.link}>
            Conócenos
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
