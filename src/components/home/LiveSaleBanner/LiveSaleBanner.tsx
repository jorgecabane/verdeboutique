import { getNextLiveSale } from '@/infrastructure/mock/live-sales'
import { CountdownFlip } from '@/components/animations/CountdownFlip/CountdownFlip'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './LiveSaleBanner.module.css'

function formatDate(dateStr: string): string {
  const date = new Date(`${dateStr}T12:00:00`)
  return date.toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
}

export function LiveSaleBanner() {
  const sale = getNextLiveSale()

  if (!sale) return null

  return (
    <section className={styles.banner}>
      <ScrollReveal>
        <div className={styles.content}>
          <p className="label-text">PRÓXIMO LIVE SALE</p>
          <p className={styles.date}>{formatDate(sale.date)}</p>
          <p className={styles.meta}>
            {sale.time} · {sale.platform}
          </p>
          <CountdownFlip targetDate={sale.date} targetTime={sale.time} />
        </div>
      </ScrollReveal>
    </section>
  )
}
