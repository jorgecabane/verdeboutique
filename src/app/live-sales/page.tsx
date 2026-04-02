import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container/Container'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import { CountdownFlip } from '@/components/animations/CountdownFlip/CountdownFlip'
import { mockLiveSales } from '@/infrastructure/mock/live-sales'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Live Sales',
}

export default function LiveSalesPage() {
  const upcoming = mockLiveSales.filter((e) => e.upcoming)
  const past = mockLiveSales.filter((e) => !e.upcoming)

  return (
    <Container>
      <ScrollReveal>
        <div className={styles.header}>
          <p className="label-text">Eventos</p>
          <h1 className={styles.title}>Live Sales</h1>
          <p className={styles.subtitle}>
            Remates en vivo por Instagram y TikTok. Precios especiales, plantas únicas.
          </p>
        </div>
      </ScrollReveal>

      {upcoming.length > 0 && (
        <section className={styles.section}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Próximos eventos</h2>
          </ScrollReveal>
          <div className={styles.grid}>
            {upcoming.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.1}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.platform}>{event.platform}</span>
                    <span className={styles.eventDate}>{event.date} · {event.time}</span>
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                  <div className={styles.countdown}>
                    <CountdownFlip targetDate={event.date} targetTime={event.time} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className={styles.section}>
          <ScrollReveal>
            <h2 className={styles.sectionTitle}>Eventos pasados</h2>
          </ScrollReveal>
          <div className={styles.pastList}>
            {past.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 0.1}>
                <div className={styles.pastCard}>
                  <div className={styles.pastMeta}>
                    <span className={styles.platform}>{event.platform}</span>
                    <span className={styles.eventDate}>{event.date}</span>
                  </div>
                  <h3 className={styles.pastTitle}>{event.title}</h3>
                  <p className={styles.eventDesc}>{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </Container>
  )
}
