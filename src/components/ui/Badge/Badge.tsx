import { Rarity } from '@/core/domain/plant'
import { cn } from '@/lib/cn'
import styles from './Badge.module.css'

const rarityToStyle: Record<Rarity, string> = {
  [Rarity.Common]: styles.common,
  [Rarity.Rare]: styles.rare,
  [Rarity.UltraRare]: styles.ultraRare,
  [Rarity.Legendary]: styles.legendary,
}

interface BadgeProps {
  rarity: Rarity
  className?: string
}

export function Badge({ rarity, className }: BadgeProps) {
  return <span className={cn(styles.badge, rarityToStyle[rarity], className)}>{rarity}</span>
}
