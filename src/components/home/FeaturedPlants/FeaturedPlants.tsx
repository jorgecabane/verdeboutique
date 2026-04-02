'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { formatPrice } from '@/lib/formatPrice'
import { getFeaturedPlants } from '@/infrastructure/mock/plants'
import { ScrollReveal } from '@/components/animations/ScrollReveal/ScrollReveal'
import styles from './FeaturedPlants.module.css'

export function FeaturedPlants() {
  const plants = getFeaturedPlants()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <ScrollReveal>
          <p className={styles.label}>Destacados</p>
          <h2 className={styles.headerTitle}>Selección del mes</h2>
        </ScrollReveal>
      </div>

      <div className={styles.showcase}>
        <div className={styles.stickyImage}>
          {plants.map((plant, i) => (
            <img
              key={plant.id}
              src={plant.images[0]}
              alt={plant.name}
              className={styles.stickyImg}
              style={{ opacity: i === activeIndex ? 1 : 0, transition: 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)' }}
            />
          ))}
        </div>

        <div className={styles.plantList}>
          {plants.map((plant, i) => (
            <PlantSlide key={plant.id} plant={plant} index={i} onVisible={() => setActiveIndex(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlantSlide({ plant, index, onVisible }: {
  plant: ReturnType<typeof getFeaturedPlants>[number]
  index: number
  onVisible: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -40])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.3 && v < 0.7) onVisible()
  })

  return (
    <div ref={ref} className={styles.plantItem}>
      <div className={styles.mobileImage}>
        <img src={plant.images[0]} alt={plant.name} className={styles.mobileImg} />
      </div>
      <motion.div className={styles.plantInfo} style={{ opacity, y }}>
        <p className={styles.plantCategory}>{plant.category}</p>
        <h3 className={styles.plantName}>{plant.name}</h3>
        <Badge rarity={plant.rarity} />
        <p className={styles.plantPrice}>{formatPrice(plant.price)}</p>
        <p className={styles.plantDescription}>{plant.description}</p>
        <Link href={`/catalogo/${plant.slug}`} className={styles.plantCta}>
          <Button variant="outline" size="small">Ver detalle</Button>
        </Link>
      </motion.div>
    </div>
  )
}
