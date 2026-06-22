import { useState, useEffect } from 'react'
import { getDishes, getCategories } from '../services/api'
import DishCard from '../components/DishCard'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Home.module.css'

export default function Home() {
  usePageTitle('Vores Menu')
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
    ? dishes.filter((d) => {
        const cat = d.category
        if (!cat) return false
        if (typeof cat === 'string') return cat === activeCategory
        return cat._id === activeCategory || cat.name === activeCategory
      })
    : dishes

  function getRepresentativeImage(catName) {
    const dish = dishes.find((d) => {
      const c = d.category
      return typeof c === 'string' ? c === catName : c?.name === catName
    })
    return dish?.image || null
  }

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter menu…</p></main>
  if (error) return <main className={styles.main}><p className={styles.status}>Fejl: {error}</p></main>

  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Vores Menu</h1>
        <p className={styles.heroSub}>Frisklavet med kærlighed — vælg din favorit</p>
      </section>

      {/* Welcome */}
      <section className={styles.welcome}>
        <div className={styles.welcomeInner}>
          <h2 className={styles.welcomeTitle}>Velkommen til Den Glade Skorpe!</h2>
          <p className={styles.welcomeText}>
            Hos os handler det om den perfekte pizza med den sprødeste skorpe. Vi bruger kun de bedste råvarer til både klassiske favoritter og spændende specialiteter som "Parma Drama" og "Rabbit Royale". Uanset om du er til en lille, personlig pizza eller en stor familiedeling, så finder du det hos os. Kom forbi og nyd en pizza lavet med kærlighed, eller bestil den, hent den og nyd den derhjemme!
          </p>
        </div>
      </section>

      {/* Category selector */}
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Vælg kategori</h2>
          <div className={styles.catGrid}>
            {categories.map((cat) => {
              const imgSrc = getRepresentativeImage(cat.name)
              return (
                <button
                  key={cat._id}
                  className={`${styles.catCard} ${activeCategory === cat.name ? styles.catActive : ''}`}
                  onClick={() => setActiveCategory(activeCategory === cat.name ? null : cat.name)}
                >
                  <div className={styles.catImgWrap}>
                    {imgSrc
                      ? <img src={imgSrc} alt={cat.name} className={styles.catImg} />
                      : <span className={styles.catPlaceholder}>🍕</span>
                    }
                  </div>
                  <span className={styles.catName}>{cat.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Dish grid */}
      <section className={styles.dishSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {activeCategory ? activeCategory : 'Alle vores pizzaer'}
          </h2>
          <div className={styles.grid}>
            {filtered.length === 0 && (
              <p className={styles.emptyMsg}>Ingen retter i denne kategori.</p>
            )}
            {filtered.map((dish) => (
              <DishCard key={dish._id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
