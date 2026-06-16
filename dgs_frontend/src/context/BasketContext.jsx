import { createContext, useContext, useState } from 'react'

const BasketContext = createContext(null)

export function BasketProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(dish) {
    setItems((prev) => {
      const existing = prev.find((i) => i._id === dish._id)
      if (existing) {
        return prev.map((i) =>
          i._id === dish._id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...dish, quantity: 1 }]
    })
  }

  function removeItem(dishId) {
    setItems((prev) => prev.filter((i) => i._id !== dishId))
  }

  function updateQuantity(dishId, quantity) {
    if (quantity <= 0) {
      removeItem(dishId)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i._id === dishId ? { ...i, quantity } : i))
    )
  }

  function clearBasket() {
    setItems([])
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
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
