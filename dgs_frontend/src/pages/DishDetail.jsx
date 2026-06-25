// Retteside: viser én ret med størrelsesvælger, ingredienspanel og "Læg i kurv".
// Henter ret og alle ingredienser parallelt med Promise.all for hurtigere load.
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getDish, getIngredients } from '../services/api'
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
  const [allIngredients, setAllIngredients] = useState([])
  const [extrasOpen, setExtrasOpen] = useState(false)

  usePageTitle(dish?.title)

  // Henter ret og ALLE ingredienser parallelt (Promise.all).
  // Base-ingredienser præ-vælges i selectedExtras så brugeren kan fravælge.
  // allIngredients indeholder alle 29 ingredienser — brugeren kan også tilføje nye.
  useEffect(() => {
    Promise.all([getDish(id), getIngredients()])
      .then(([data, ingData]) => {
        setDish(data)
        setSelectedSize('normal')
        const baseNames = data.ingredients?.map((i) => (typeof i === 'string' ? i : i.name)) ?? []
        setSelectedExtras(baseNames)
        const allNames = (ingData ?? []).map((i) => (typeof i === 'string' ? i : i.name))
        setAllIngredients(allNames)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  // Beregner prisen ud fra valgt størrelse.
  // Family-pris bruges kun hvis retten har en family-pris defineret.
  const selectedPrice = dish
    ? selectedSize === 'family' && dish.price?.family
      ? dish.price.family
      : dish.price?.normal
    : 0

  // Slår en ingrediens til/fra i selectedExtras-arrayet
  function toggleExtra(name) {
    setSelectedExtras((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    )
  }

  // Bygger kurv-objektet og tilføjer det til BasketContext.
  // basketKey kombinerer ret-id og størrelse så Normal og Familie er separate linjer.
  function handleAdd() {
    addItem({
      ...dish,
      selectedSize,
      selectedPrice,
      selectedExtras,
      basketKey: `${dish._id}-${selectedSize}`,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 5000)
  }

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter ret…</p></main>
  if (error || !dish) return <main className={styles.main}><p className={styles.status}>Retten blev ikke fundet.</p></main>

  const imgSrc = dish.image ? (dish.image.startsWith('http') ? dish.image : `${BASE_URL}/${dish.image}`) : null
  const hasFamily = !!dish.price?.family
  const ingredients = dish.ingredients?.map((i) => (typeof i === 'string' ? i : i.name)) ?? []

  return (
    <main className={styles.main}>
      {/* Full pizza bg hero — brand merges with dish name: "Den Glade [Dish Name]" */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          <span>★ Den ★</span>
          <span>Glade</span>
          <span>{dish.title}</span>
        </h1>
      </section>

      {/* Circular dish image sits on cream bg, below the hero */}
      <div className={styles.dishImgSection}>
        <div className={styles.imgWrap}>
          {imgSrc ? (
            <img src={imgSrc} alt={dish.title} className={styles.img} />
          ) : (
            <div className={styles.placeholder}>🍕</div>
          )}
        </div>
      </div>

      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          ← Tilbage
        </button>

        <h1 className={styles.title}>{dish.title}</h1>

        {/* Base ingredients */}
        {ingredients.length > 0 && (
          <ul className={styles.ingList}>
            {ingredients.map((name) => (
              <li key={name} className={styles.ingItem}>{name}</li>
            ))}
          </ul>
        )}

        {/* Size selector */}
        <div className={styles.sizeRow}>
          <span className={styles.sizeLabel}>Størrelse</span>
          <div className={styles.sizePills}>
            <button
              type="button"
              className={`${styles.sizePill} ${selectedSize === 'normal' ? styles.sizePillActive : ''}`}
              onClick={() => setSelectedSize('normal')}
            >
              Almindelig
            </button>
            {hasFamily && (
              <button
                type="button"
                className={`${styles.sizePill} ${selectedSize === 'family' ? styles.sizePillActive : ''}`}
                onClick={() => setSelectedSize('family')}
              >
                Familie
              </button>
            )}
          </div>
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <span className={styles.priceLabel}>Pris</span>
          <span className={styles.price}>{selectedPrice},-</span>
        </div>

        {/* Add to basket */}
        <button
          className={`${styles.addBtn} ${added ? styles.added : ''}`}
          onClick={handleAdd}
        >
          {added ? '✓ Tilføjet!' : `Tilføj ${dish.title} til kurven`}
        </button>
        {added && (
          <Link to="/basket" className={styles.goToBasket}>
            Gå til kurv →
          </Link>
        )}

        {/* Extras toggle — shows ALL available ingredients */}
        {allIngredients.length > 0 && (
          <div className={styles.extras}>
            <button
              className={styles.extrasToggle}
              onClick={() => setExtrasOpen((o) => !o)}
            >
              Tilføj ingredienser {extrasOpen ? '▲' : '▼'}
            </button>
            {extrasOpen && (
              <ul className={styles.extrasList}>
                {allIngredients.map((name) => {
                  const checked = selectedExtras.includes(name)
                  const isBase = ingredients.includes(name)
                  return (
                    <li key={name}>
                      <button
                        type="button"
                        className={`${styles.extraItem} ${checked ? styles.extraOn : isBase ? styles.extraOff : styles.extraAvailable}`}
                        onClick={() => toggleExtra(name)}
                      >
                        {checked ? '✓ ' : ''}{name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
