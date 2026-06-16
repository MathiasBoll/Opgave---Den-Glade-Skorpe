import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getDish } from '../services/api'
import { useBasket } from '../context/BasketContext'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './DishDetail.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

export default function DishDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useBasket()
  const [dish, setDish] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(false)
  const [selectedSize, setSelectedSize] = useState('normal')
  const [selectedExtras, setSelectedExtras] = useState([])

  usePageTitle(dish?.title)

  useEffect(() => {
    getDish(id)
      .then((data) => {
        setDish(data)
        setSelectedSize('normal')
        // Default all ingredients checked (extras included)
        const ings = data.ingredients?.map((i) => (typeof i === 'string' ? i : i.name)) ?? []
        setSelectedExtras(ings)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  const selectedPrice = dish
    ? selectedSize === 'family' && dish.price?.family
      ? dish.price.family
      : dish.price?.normal
    : 0

  function toggleExtra(name) {
    setSelectedExtras((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    )
  }

  function handleAdd() {
    addItem({
      ...dish,
      selectedSize,
      selectedPrice,
      selectedExtras,
      basketKey: `${dish._id}-${selectedSize}`,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter ret…</p></main>
  if (error || !dish) return <main className={styles.main}><p className={styles.status}>Retten blev ikke fundet.</p></main>

  const imgSrc = dish.image ? `${BASE_URL}/${dish.image}` : null
  const hasFamily = !!dish.price?.family
  const ingredients = dish.ingredients?.map((i) => (typeof i === 'string' ? i : i.name)) ?? []

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
              <img src={imgSrc} alt={dish.title} className={styles.img} />
            ) : (
              <div className={styles.placeholder}>🍕</div>
            )}
          </div>

          {/* Info */}
          <div className={styles.info}>
            {dish.category?.name && (
              <span className={styles.category}>{dish.category.name}</span>
            )}
            <h1 className={styles.title}>{dish.title}</h1>
            <p className={styles.desc}>{dish.description}</p>

            {ingredients.length > 0 && (
              <div className={styles.ingredients}>
                <h2 className={styles.ingTitle}>Tilpas ingredienser</h2>
                <ul className={styles.ingList}>
                  {ingredients.map((name) => {
                    const checked = selectedExtras.includes(name)
                    return (
                      <li key={name}>
                        <button
                          type="button"
                          className={`${styles.ingItem} ${checked ? '' : styles.ingItemOff}`}
                          onClick={() => toggleExtra(name)}
                          title={checked ? 'Fjern ingrediens' : 'Tilføj ingrediens'}
                        >
                          {checked ? '✓ ' : '✕ '}{name}
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {hasFamily && (
              <div className={styles.sizeRow}>
                <button
                  className={`${styles.sizeBtn} ${selectedSize === 'normal' ? styles.sizeActive : ''}`}
                  onClick={() => setSelectedSize('normal')}
                >
                  Normal — {dish.price.normal} kr.
                </button>
                <button
                  className={`${styles.sizeBtn} ${selectedSize === 'family' ? styles.sizeActive : ''}`}
                  onClick={() => setSelectedSize('family')}
                >
                  Familie — {dish.price.family} kr.
                </button>
              </div>
            )}

            <div className={styles.buyRow}>
              <span className={styles.price}>{selectedPrice} kr.</span>
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
