import { useState, useEffect } from 'react'
import { getDishes, getCategories } from '../services/api'
import DishCard from '../components/DishCard'
import styles from './Home.module.css'

export default function Home() {
  const [dishes, setDishes] = useState([])
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    Promise.all([getDishes(), getCategories()])
      .then(([dishData, catData]) => {
        setDishes(dishData)
        setCategories(catData)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const filtered = activeCategory
    ? dishes.filter((d) => d.category?._id === activeCategory || d.category === activeCategory)
    : dishes

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter menu…</p></main>
  if (error) return <main className={styles.main}><p className={styles.status}>Fejl: {error}</p></main>

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Vores Menu</h1>
        <p className={styles.heroSub}>Frisklavet med kærlighed — vælg din favorit</p>
      </section>

      <div className={styles.container}>
        {/* Category filter */}
        <div className={styles.filterRow}>
          <button
            className={`${styles.filterBtn} ${activeCategory === null ? styles.active : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            Alle
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              className={`${styles.filterBtn} ${activeCategory === cat._id ? styles.active : ''}`}
              onClick={() => setActiveCategory(cat._id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dish grid */}
        <div className={styles.grid}>
          {filtered.map((dish) => (
            <DishCard key={dish._id} dish={dish} />
          ))}
        </div>
      </div>
    </main>
  )
}
