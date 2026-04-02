import { LiveSaleEvent } from '@/core/domain/blog'

export const mockLiveSales: LiveSaleEvent[] = [
  {
    id: '1',
    title: 'Remate de Anthuriums',
    date: '2026-04-04',
    time: '20:00',
    platform: 'instagram',
    description:
      'Remate especial de Anthuriums de colección. Veitchii, Crystallinum, Warocqueanum y más. Precios especiales solo en vivo.',
    upcoming: true,
  },
  {
    id: '2',
    title: 'Live Sale Philodendros',
    date: '2026-04-11',
    time: '20:00',
    platform: 'instagram',
    description: 'Selección especial de Philodendros raros. Melanochrysum, Gloriosum y sorpresas.',
    upcoming: true,
  },
  {
    id: '3',
    title: 'Remate de Fin de Verano',
    date: '2026-03-21',
    time: '19:30',
    platform: 'tiktok',
    description: 'Último remate de la temporada de verano. Todas las categorías.',
    upcoming: false,
  },
]

export function getUpcomingLiveSales(): LiveSaleEvent[] {
  return mockLiveSales.filter((e) => e.upcoming)
}

export function getNextLiveSale(): LiveSaleEvent | undefined {
  return mockLiveSales.find((e) => e.upcoming)
}
