import { createContext, useContext, useState, useEffect } from 'react'

const BasketContext = createContext(null)

const STORAGE_KEY = 'dgs_basket'

function loadBasket() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function BasketProvider({ children }) {
  const [items, setItems] = useState(loadBasket)

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function addItem(dish) {
    setItems((prev) => {
      const existing = prev.find((i) => i.basketKey === dish.basketKey)
      if (existing) {
        return prev.map((i) =>
          i.basketKey === dish.basketKey ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...dish, quantity: 1 }]
    })
  }

  function removeItem(basketKey) {
    setItems((prev) => prev.filter((i) => i.basketKey !== basketKey))
  }

  function updateQuantity(basketKey, quantity) {
    if (quantity <= 0) {
      removeItem(basketKey)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.basketKey === basketKey ? { ...i, quantity } : i))
    )
  }

  function clearBasket() {
    setItems([])
  }

  const total = items.reduce(
    (sum, item) => sum + (item.selectedPrice ?? item.price?.normal ?? 0) * item.quantity,
    0
  )

  const count = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BasketContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearBasket, total, count }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export function useBasket() {
  const ctx = useContext(BasketContext)
  if (!ctx) throw new Error('useBasket must be used within BasketProvider')
  return ctx
}
