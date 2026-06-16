import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getDish } from '../services/api'
import { useBasket } from '../context/BasketContext'
import styles from './DishDetail.module.css'

const BASE_URL = 'http://localhost:3042'

export default function DishDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useBasket()
  const [dish, setDish] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    getDish(id)
      .then(setDish)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  function handleAdd() {
    addItem(dish)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter ret…</p></main>
  if (error || !dish) return <main className={styles.main}><p className={styles.status}>Retten blev ikke fundet.</p></main>

  const imgSrc = dish.image ? `${BASE_URL}/${dish.image}` : null

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Tilbage
        </button>

        <div className={styles.layout}>
          {/* Image */}
          <div className={styles.imgWrap}>
            {imgSrc ? (
              <img src={imgSrc} alt={dish.name} className={styles.img} />
            ) : (
              <div className={styles.placeholder}>🍕</div>
            )}
          </div>

          {/* Info */}
          <div className={styles.info}>
            {dish.category?.name && (
              <span className={styles.category}>{dish.category.name}</span>
            )}
            <h1 className={styles.title}>{dish.name}</h1>
            <p className={styles.desc}>{dish.description}</p>

            {dish.ingredients?.length > 0 && (
              <div className={styles.ingredients}>
                <h2 className={styles.ingTitle}>Ingredienser</h2>
                <ul className={styles.ingList}>
                  {dish.ingredients.map((ing) => (
                    <li key={ing._id || ing} className={styles.ingItem}>
                      {ing.name || ing}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.buyRow}>
              <span className={styles.price}>{dish.price} kr.</span>
              <button
                className={`${styles.addBtn} ${added ? styles.added : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Tilføjet!' : 'Læg i kurv'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
