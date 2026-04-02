'use client'

import { useState } from 'react'
import { Plant } from '@/core/domain/plant'
import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import { formatPrice } from '@/lib/formatPrice'
import { useCart } from '@/hooks/useCart'
import styles from './ProductDetail.module.css'

interface ProductDetailProps {
  plant: Plant
}

export function ProductDetail({ plant }: ProductDetailProps) {
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)

  function handleAdd() {
    addItem({
      plantId: plant.id,
      slug: plant.slug,
      name: plant.name,
      price: plant.price,
      image: plant.images[0] ?? '',
    })
  }

  return (
    <div className={styles.detail}>
      <div className={styles.imageArea}>
        <img src={plant.images[activeImage]} alt={plant.name} className={styles.image} />
        {plant.images.length > 1 && (
          <div className={styles.thumbnails}>
            {plant.images.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === activeImage ? styles.thumbActive : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt={`${plant.name} ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{plant.category}</p>
        <h1 className={styles.name}>{plant.name}</h1>
        <Badge rarity={plant.rarity} />
        <p className={styles.price}>{formatPrice(plant.price)}</p>
        <p className={styles.description}>{plant.description}</p>
        <Button
          onClick={handleAdd}
          disabled={!plant.inStock}
          size="large"
        >
          {plant.inStock ? 'Agregar al carrito' : 'Sin stock'}
        </Button>
        <div className={styles.careSection}>
          <p className={styles.careTitle}>Guía de cuidados</p>
          <div className={styles.careGrid}>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Luz</span>
              <span className={styles.careValue}>{plant.careGuide.light}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Agua</span>
              <span className={styles.careValue}>{plant.careGuide.water}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Humedad</span>
              <span className={styles.careValue}>{plant.careGuide.humidity}</span>
            </div>
            <div className={styles.careItem}>
              <span className={styles.careLabel}>Temperatura</span>
              <span className={styles.careValue}>{plant.careGuide.temperature}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
