import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import { postOrder } from '../services/api'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Basket.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

export default function Basket() {
  usePageTitle('Din Kurv')
  const { items, removeItem, clearBasket, total } = useBasket()
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [ordered, setOrdered] = useState(false)

  async function handleOrder(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await postOrder({
        dishes: items.map((i) => ({ dish: i._id, amount: i.quantity, size: i.selectedSize })),
        comment,
        totalPrice: total,
      })
      setOrdered(true)
    } catch {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span>★ Den ★</span>
          <span>Glade</span>
          <span>Skorpe</span>
        </h1>
      </section>

      <div className={styles.container}>
        <h2 className={styles.pageTitle}>Bestilling</h2>
        {items.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🛒</span>
            <p className={styles.emptyCount}>0 varer i kurven</p>
            <Link to="/" className={styles.backBtn}>Se menuen</Link>
          </div>
        ) : (
          <>
            <div className={styles.orderList}>
              {items.map((item) => {
                const imgSrc = item.image
                  ? item.image.startsWith('http') ? item.image : `${BASE_URL}/${item.image}`
                  : null
                const price = (item.selectedPrice ?? item.price?.normal ?? 0) * item.quantity
                const extras = item.selectedExtras?.filter(Boolean) ?? []
                const sizeName = item.selectedSize === 'family' ? 'Familie' : 'Almindelig'

                return (
                  <div key={item.basketKey} className={styles.item}>
                    <div className={styles.itemImg}>
                      {imgSrc
                        ? <img src={imgSrc} alt={item.title} className={styles.itemImgEl} />
                        : <span>🍕</span>
                      }
                    </div>
                    <div className={styles.itemInfo}>
                      <p className={styles.itemTitle}>{item.quantity} × {item.title}</p>
                      {extras.length > 0 && <p className={styles.itemMeta}>Ekstra: {extras.join(', ')}</p>}
                      <p className={styles.itemMeta}>Størrelse: {sizeName}</p>
                      <p className={styles.itemMeta}>Pris: {price},-</p>
                      <button className={styles.removeBtn} onClick={() => removeItem(item.basketKey)}>Fjern</button>
                    </div>
                  </div>
                )
              })}
            </div>

            <p className={styles.total}>I alt: <strong>{total},-</strong></p>
            <button className={styles.clearBtn} onClick={clearBasket}>Ryd kurv</button>

            <form className={styles.form} onSubmit={handleOrder}>
              <label className={styles.label} htmlFor="comment">Kommentarer til ordren</label>
              <textarea
                id="comment"
                className={styles.textarea}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={3}
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.orderBtn} disabled={submitting}>
                {submitting ? 'Sender…' : 'Afgiv ordre'}
              </button>
            </form>
          </>
        )}
      </div>

      {ordered && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => { setOrdered(false); clearBasket() }}>×</button>
            <p className={styles.modalText}>Tak for din bestilling!</p>
          </div>
        </div>
      )}
    </main>
  )
}