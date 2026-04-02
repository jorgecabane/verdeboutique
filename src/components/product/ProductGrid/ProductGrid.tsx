import { Plant } from '@/core/domain/plant'
import { ProductCard } from '@/components/product/ProductCard/ProductCard'
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren/StaggerChildren'
import styles from './ProductGrid.module.css'

interface ProductGridProps { plants: Plant[] }

export function ProductGrid({ plants }: ProductGridProps) {
  return (
    <StaggerChildren className={styles.grid}>
      {plants.map((plant) => (
        <StaggerItem key={plant.id}>
          <ProductCard plant={plant} />
        </StaggerItem>
      ))}
    </StaggerChildren>
  )
}
