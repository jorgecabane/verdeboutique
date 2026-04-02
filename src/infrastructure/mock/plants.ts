import { Plant, Rarity } from '@/core/domain/plant'

export const mockPlants: Plant[] = [
  {
    id: '1',
    slug: 'anthurium-veitchii-narrow',
    name: 'Anthurium Veitchii Narrow',
    species: 'Anthurium veitchii',
    category: 'anthuriums',
    price: 89990,
    rarity: Rarity.UltraRare,
    description:
      'El Anthurium Veitchii Narrow es conocido como el "Rey de los Anthuriums" por sus impresionantes hojas largas y corrugadas que pueden alcanzar más de un metro de longitud. Su forma estrecha lo hace especialmente codiciado entre los coleccionistas de aroideas. Es una joya para cualquier colección seria de plantas tropicales.',
    careGuide: {
      light: 'Luz indirecta brillante, evitar sol directo',
      water: 'Riego cuando el sustrato esté casi seco, cada 7-10 días',
      humidity: 'Alta humedad, mínimo 70%',
      temperature: '18-28°C, evitar corrientes de aire frío',
    },
    images: ['/images/plants/veitchii.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '2',
    slug: 'anthurium-crystallinum',
    name: 'Anthurium Crystallinum',
    species: 'Anthurium crystallinum',
    category: 'anthuriums',
    price: 45990,
    rarity: Rarity.Rare,
    description:
      'El Anthurium Crystallinum deslumbra con sus hojas aterciopeladas de color verde oscuro y sus nervaduras plateadas cristalinas que parecen labradas en la hoja. Es una de las especies más elegantes del género y muy buscada por su textura única. Perfecta para interiores con buena humedad.',
    careGuide: {
      light: 'Luz indirecta media a brillante',
      water: 'Riego regular, mantener sustrato húmedo pero no encharcado',
      humidity: 'Alta humedad, entre 65-80%',
      temperature: '18-26°C',
    },
    images: ['/images/plants/crystallinum.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '3',
    slug: 'philodendron-lupinum',
    name: 'Philodendron Lupinum',
    species: 'Philodendron lupinum',
    category: 'philodendros',
    price: 125000,
    rarity: Rarity.Legendary,
    description:
      'El Philodendron Lupinum es una de las especies más raras y deseadas del mundo de las aroideas, conocida por sus hojas jóvenes de color rojizo-naranja que maduran a un verde intenso con textura aterciopelada. Su rareza en el mercado lo convierte en una pieza de colección de altísimo valor. Poseer un Lupinum es el sueño de todo coleccionista serio.',
    careGuide: {
      light: 'Luz indirecta brillante, tolera poca luz',
      water: 'Riego moderado, dejar secar ligeramente entre riegos',
      humidity: 'Alta humedad, sobre 70%',
      temperature: '20-30°C',
    },
    images: ['/images/plants/lupinum.jpg'],
    featured: true,
    inStock: true,
  },
  {
    id: '4',
    slug: 'philodendron-gloriosum',
    name: 'Philodendron Gloriosum',
    species: 'Philodendron gloriosum',
    category: 'philodendros',
    price: 55000,
    rarity: Rarity.Rare,
    description:
      'El Philodendron Gloriosum es un rastrero terrestre de crecimiento lento con hojas en forma de corazón de color verde aterciopelado y espectaculares nervaduras blancas o rosadas. Su nombre lo dice todo: es verdaderamente glorioso. Una planta que impone presencia en cualquier espacio.',
    careGuide: {
      light: 'Luz indirecta media, evitar sol directo',
      water: 'Riego regular, sustrato siempre ligeramente húmedo',
      humidity: '60-80% de humedad',
      temperature: '18-27°C',
    },
    images: ['/images/plants/gloriosum.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '5',
    slug: 'monstera-albo-variegata',
    name: 'Monstera Albo Variegata',
    species: 'Monstera deliciosa var. borsigiana albo variegata',
    category: 'monstera',
    price: 180000,
    rarity: Rarity.UltraRare,
    description:
      'La Monstera Albo Variegata es la reina de las plantas de moda, con sus icónicas manchas blancas en las hojas que crean un contraste dramático con el verde profundo. Cada hoja es única e irrepetible, lo que la convierte en una obra de arte viva. Su variegación es inestable y aleatoria, haciendo cada ejemplar absolutamente exclusivo.',
    careGuide: {
      light: 'Luz indirecta brillante, esencial para mantener la variegación',
      water: 'Riego cuando los primeros 5cm de sustrato estén secos',
      humidity: '60-80%',
      temperature: '18-30°C, sensible al frío',
    },
    images: ['/images/plants/albo.jpg'],
    featured: true,
    inStock: false,
  },
  {
    id: '6',
    slug: 'monstera-thai-constellation',
    name: 'Monstera Thai Constellation',
    species: 'Monstera deliciosa Thai Constellation',
    category: 'monstera',
    price: 95000,
    rarity: Rarity.Rare,
    description:
      'La Monstera Thai Constellation es una cultivar estable con espectacular variegación en forma de constelación: pequeñas manchas y salpicaduras crema sobre fondo verde oscuro. A diferencia de la Albo, su variegación es genéticamente estable y se mantiene en todas las hojas. Una planta de gran impacto visual y relativa facilidad de cultivo.',
    careGuide: {
      light: 'Luz indirecta brillante a media',
      water: 'Riego moderado, cada 7-10 días en verano',
      humidity: '60-70%',
      temperature: '18-28°C',
    },
    images: ['/images/plants/thai.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '7',
    slug: 'anthurium-clarinervium',
    name: 'Anthurium Clarinervium',
    species: 'Anthurium clarinervium',
    category: 'anthuriums',
    price: 35990,
    rarity: Rarity.Common,
    description:
      'El Anthurium Clarinervium es una excelente opción de entrada al mundo de los anthuriums, con hojas gruesas y coriáceas en forma de corazón adornadas con nervaduras blancas bien marcadas. Es una especie relativamente resistente y adaptable que no requiere cuidados extremos. Ideal para quienes comienzan su colección de aroideas.',
    careGuide: {
      light: 'Luz indirecta media a brillante',
      water: 'Riego cuando el sustrato esté seco al tacto',
      humidity: '50-70%',
      temperature: '15-28°C',
    },
    images: ['/images/plants/clarinervium.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '8',
    slug: 'philodendron-melanochrysum',
    name: 'Philodendron Melanochrysum',
    species: 'Philodendron melanochrysum',
    category: 'philodendros',
    price: 68000,
    rarity: Rarity.Rare,
    description:
      'El Philodendron Melanochrysum, también conocido como "Black Gold Philodendron", tiene hojas largas y aterciopeladas de color verde casi negro con nervaduras doradas que brillan a la luz. Es un trepador vigoroso que se beneficia enormemente de un soporte para lucir sus hojas al máximo. Una planta de presencia majestuosa para espacios amplios.',
    careGuide: {
      light: 'Luz indirecta media a brillante',
      water: 'Riego regular, evitar encharcamiento',
      humidity: '65-80%',
      temperature: '18-28°C',
    },
    images: ['/images/plants/melanochrysum.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '9',
    slug: 'anthurium-warocqueanum',
    name: 'Anthurium Warocqueanum',
    species: 'Anthurium warocqueanum',
    category: 'anthuriums',
    price: 145000,
    rarity: Rarity.UltraRare,
    description:
      'El Anthurium Warocqueanum, conocido como la "Reina de los Anthuriums", produce hojas pendulares de hasta 1,5 metros de largo con una textura aterciopelada verde oscura y nervaduras plateadas impresionantes. Es una de las plantas más espectaculares del género y requiere condiciones de cultivo muy específicas. Solo para coleccionistas dedicados.',
    careGuide: {
      light: 'Luz indirecta brillante, sin sol directo',
      water: 'Riego cuando el sustrato esté casi seco, agua de calidad',
      humidity: 'Mínimo 75%, idealmente 80-90%',
      temperature: '18-26°C, muy sensible al frío',
    },
    images: ['/images/plants/warocqueanum.jpg'],
    featured: false,
    inStock: true,
  },
  {
    id: '10',
    slug: 'alocasia-dragon-scale',
    name: 'Alocasia Dragon Scale',
    species: 'Alocasia baginda Dragon Scale',
    category: 'exoticas',
    price: 42000,
    rarity: Rarity.Rare,
    description:
      'La Alocasia Dragon Scale es una joya del mundo de las plantas exóticas, con hojas que imitan la textura de las escamas de un dragón en tonos verde plateado con nervaduras oscuras muy pronunciadas. Su cara inferior es de un burdeos intenso que contrasta maravillosamente con el haz. Una planta compacta pero de enorme impacto visual.',
    careGuide: {
      light: 'Luz indirecta media a brillante',
      water: 'Riego moderado, muy sensible al exceso de agua',
      humidity: '60-80%',
      temperature: '18-28°C',
    },
    images: ['/images/plants/dragon-scale.jpg'],
    featured: false,
    inStock: true,
  },
]

export function getPlantBySlug(slug: string): Plant | undefined {
  return mockPlants.find((p) => p.slug === slug)
}

export function getPlantsByCategory(category: string): Plant[] {
  return mockPlants.filter((p) => p.category === category)
}

export function getFeaturedPlants(): Plant[] {
  return mockPlants.filter((p) => p.featured)
}
