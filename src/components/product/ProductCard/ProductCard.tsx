import Link from 'next/link'
import { Plant } from '@/core/domain/plant'
import { Badge } from '@/components/ui/Badge/Badge'
import { formatPrice } from '@/lib/formatPrice'
import styles from './ProductCard.module.css'

interface ProductCardProps { plant: Plant }

export function ProductCard({ plant }: ProductCardProps) {
  return (
    <Link href={`/catalogo/${plant.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={plant.images[0]}
          alt={plant.name}
          className={styles.image}
        />
        <div className={styles.badge}><Badge rarity={plant.rarity} /></div>
        {!plant.inStock && <div className={styles.outOfStock}>Agotado</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.category}>{plant.category}</div>
        <h3 className={styles.name}>{plant.name}</h3>
        <div className={styles.price}>{formatPrice(plant.price)}</div>
      </div>
    </Link>
  )
}
