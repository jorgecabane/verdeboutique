export interface CartItem {
  plantId: string
  slug: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
}

export function calculateCart(items: CartItem[]): Cart {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 80000 ? 0 : 5990
  return {
    items,
    subtotal,
    shipping,
    total: subtotal + shipping,
  }
}
