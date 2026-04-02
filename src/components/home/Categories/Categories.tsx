import Link from 'next/link'
import { mockCategories } from '@/infrastructure/mock/categories'
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren/StaggerChildren'
import styles from './Categories.module.css'

export function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className="label-text">CATEGORÍAS</p>
      </div>
      <StaggerChildren className={styles.grid}>
        {mockCategories.map((category) => (
          <StaggerItem key={category.id}>
            <Link href={`/catalogo?categoria=${category.id}`} className={styles.card}>
              <h3 className={styles.cardName}>{category.name}</h3>
              <p className={styles.cardCount}>{category.plantCount} especies</p>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </section>
  )
}
