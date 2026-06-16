import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import { postOrder } from '../services/api'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Basket.module.css'

export default function Basket() {
  usePageTitle('Din Kurv')
  const { items, removeItem, updateQuantity, clearBasket, total } = useBasket()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  if (items.length === 0) {
    return (
      <main className={styles.main}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛒</span>
          <h1 className={styles.emptyTitle}>Din kurv er tom</h1>
          <Link to="/" className={styles.backBtn}>Se menuen</Link>
        </div>
      </main>
    )
  }

  async function handleOrder(e) {
    e.preventDefault()
    if (!name.trim()) return
    setSubmitting(true)
    setError(null)
    try {
      await postOrder({
        dishes: items.map((i) => ({ dish: i._id, amount: i.quantity, size: i.selectedSize })),
        comment: name,
        totalPrice: total,
      })
      clearBasket()
      navigate('/order-confirmation')
    } catch {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Din kurv</h1>

        <div className={styles.layout}>
          {/* Item list */}
          <div className={styles.items}>
            {items.map((item) => (
              <div key={item.basketKey} className={styles.item}>
                <div className={styles.itemMeta}>
                  <div className={styles.itemName}>
                    {item.title}
                    {item.selectedSize === 'family' && (
                      <span className={styles.sizeTag}>Familie</span>
                    )}
                  </div>
                  {item.selectedExtras?.length > 0 && (
                    <div className={styles.extrasRow}>
                      {item.selectedExtras.map((e) => (
                        <span key={e} className={styles.extraTag}>{e}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.itemControls}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.basketKey, item.quantity - 1)}
                    aria-label="Færre"
                  >−</button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.basketKey, item.quantity + 1)}
                    aria-label="Flere"
                  >+</button>
                </div>
                <div className={styles.itemPrice}>{(item.selectedPrice ?? item.price?.normal ?? 0) * item.quantity} kr.</div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.basketKey)}
                  aria-label={`Fjern ${item.title}`}
                >✕</button>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Bestilling</h2>
            <p className={styles.summaryTotal}>I alt: <strong>{total} kr.</strong></p>

            <form className={styles.orderForm} onSubmit={handleOrder}>
              <label className={styles.label} htmlFor="orderName">Dit navn</label>
              <input
                id="orderName"
                type="text"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.orderBtn} disabled={submitting}>
                {submitting ? 'Sender…' : 'Afgiv bestilling'}
              </button>
            </form>
          </aside>
        </div>
      </div>
    </main>
  )
}
