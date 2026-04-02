export type BlogCategory = 'cuidados' | 'guias' | 'novedades' | 'tips'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: BlogCategory
  publishedAt: string
  readTime: number
  image: string
}

export interface LiveSaleEvent {
  id: string
  title: string
  date: string
  time: string
  platform: 'instagram' | 'tiktok'
  description: string
  upcoming: boolean
}
