export enum Rarity {
  Common = 'Común',
  Rare = 'Raro',
  UltraRare = 'Ultra Raro',
  Legendary = 'Legendario',
}

export type PlantCategory = 'anthuriums' | 'philodendros' | 'monstera' | 'exoticas'

export interface CareGuide {
  light: string
  water: string
  humidity: string
  temperature: string
}

export interface Plant {
  id: string
  slug: string
  name: string
  species: string
  category: PlantCategory
  price: number
  rarity: Rarity
  description: string
  careGuide: CareGuide
  images: string[]
  featured: boolean
  inStock: boolean
}

export interface Category {
  id: PlantCategory
  name: string
  description: string
  plantCount: number
}
