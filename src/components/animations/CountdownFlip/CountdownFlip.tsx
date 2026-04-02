'use client'

import { useState, useEffect } from 'react'
import { useCountdown } from '@/hooks/useCountdown'
import styles from './CountdownFlip.module.css'

interface CountdownFlipProps {
  targetDate: string
  targetTime: string
}

export function CountdownFlip({ targetDate, targetTime }: CountdownFlipProps) {
  const [mounted, setMounted] = useState(false)
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate, targetTime)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Render placeholder with same structure to avoid layout shift
  if (!mounted) {
    return (
      <div className={styles.countdown}>
        <div className={styles.unit}>
          <div className={styles.number}>--</div>
          <div className={styles.label}>Días</div>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.unit}>
          <div className={styles.number}>--</div>
          <div className={styles.label}>Hrs</div>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.unit}>
          <div className={styles.number}>--</div>
          <div className={styles.label}>Min</div>
        </div>
        <div className={styles.separator}>:</div>
        <div className={styles.unit}>
          <div className={styles.number}>--</div>
          <div className={styles.label}>Seg</div>
        </div>
      </div>
    )
  }

  if (isExpired) {
    return (
      <div className={styles.countdown}>
        <span className={styles.number} style={{ color: 'var(--color-accent-green)' }}>
          ¡En vivo ahora!
        </span>
      </div>
    )
  }

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(days)}</div>
        <div className={styles.label}>Días</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(hours)}</div>
        <div className={styles.label}>Hrs</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(minutes)}</div>
        <div className={styles.label}>Min</div>
      </div>
      <div className={styles.separator}>:</div>
      <div className={styles.unit}>
        <div className={styles.number}>{pad(seconds)}</div>
        <div className={styles.label}>Seg</div>
      </div>
    </div>
  )
}
