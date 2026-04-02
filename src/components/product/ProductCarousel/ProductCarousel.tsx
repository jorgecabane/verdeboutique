import { Plant } from '@/core/domain/plant'
import { ProductCard } from '@/components/product/ProductCard/ProductCard'
import styles from './ProductCarousel.module.css'

interface ProductCarouselProps { plants: Plant[] }

export function ProductCarousel({ plants }: ProductCarouselProps) {
  return (
    <div className={styles.wrapper}>
      {plants.map((plant) => (
        <div key={plant.id} className={styles.item}>
          <ProductCard plant={plant} />
        </div>
      ))}
    </div>
  )
}
