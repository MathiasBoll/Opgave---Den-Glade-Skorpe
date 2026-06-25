// Global kurv-kontekst der holder kurv-state og synkroniserer med localStorage.
// Alle komponenter der skal læse eller ændre kurven bruger useBasket()-hook'et.
import { createContext, useContext, useState, useEffect } from 'react'

const BasketContext = createContext(null)

// localStorage-nøgle der bruges til at gemme og hente kurven på tværs af sideindlæsninger
const STORAGE_KEY = 'dgs_basket'

// Læser kurven fra localStorage når appen starter. Returnerer tomt array ved fejl.
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

  // Gemmer kurven i localStorage hver gang items ændres
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  // Tilføjer en ret til kurven. basketKey kombinerer ret-id og størrelse
  // så Normal og Familie af samme ret er to separate kurvelinjer.
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

  // Fjerner en kurvelinje helt baseret på basketKey
  function removeItem(basketKey) {
    setItems((prev) => prev.filter((i) => i.basketKey !== basketKey))
  }

  // Sætter antal for en kurvelinje. Quantity 0 eller derunder sletter linjen automatisk.
  function updateQuantity(basketKey, quantity) {
    if (quantity <= 0) {
      removeItem(basketKey)
      return
    }
    setItems((prev) =>
      prev.map((i) => (i.basketKey === basketKey ? { ...i, quantity } : i))
    )
  }

  // Bruges efter afgivet ordre for at nulstille kurven
  function clearBasket() {
    setItems([])
  }

  // Samlet pris for alle kurvelinjer (antal * enhedspris)
  const total = items.reduce(
    (sum, item) => sum + (item.selectedPrice ?? item.price?.normal ?? 0) * item.quantity,
    0
  )

  // Samlet antal varer — vises som badge på kurv-ikonet i Header
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
