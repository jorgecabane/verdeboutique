'use client'

import { createContext, useContext, useState, useEffect, ReactNode, createElement } from 'react'
import { CartItem, Cart, calculateCart } from '@/core/domain/cart'

interface CartContextType {
  cart: Cart
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (plantId: string) => void
  updateQuantity: (plantId: string, quantity: number) => void
  clearCart: () => void
  itemCount: number
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextType | null>(null)

const STORAGE_KEY = 'verde-boutiqu-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage after mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed)
        }
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  // Persist to localStorage after hydration
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items, hydrated])

  function addItem(item: Omit<CartItem, 'quantity'>) {
    setItems((prev) => {
      const existing = prev.find((i) => i.plantId === item.plantId)
      if (existing) {
        return prev.map((i) =>
          i.plantId === item.plantId ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setIsDrawerOpen(true)
  }

  function removeItem(plantId: string) {
    setItems((prev) => prev.filter((i) => i.plantId !== plantId))
  }

  function updateQuantity(plantId: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(plantId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.plantId === plantId ? { ...i, quantity } : i))
    )
  }

  function clearCart() {
    setItems([])
  }

  const cart = calculateCart(items)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return createElement(
    CartContext.Provider,
    {
      value: {
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      },
    },
    children
  )
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
