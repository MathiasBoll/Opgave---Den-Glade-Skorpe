import { useState, useEffect } from 'react'
import { getDishes } from '../../services/api'
import styles from './Backoffice.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

export default function BackofficeDishes() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDishes()
      .then(setDishes)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className={styles.status}>Henter retter…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Retter</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Billede</th>
              <th>Navn</th>
              <th>Kategori</th>
              <th>Pris</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => {
              const imgSrc = dish.image ? `${BASE_URL}/${dish.image}` : null
              return (
                <tr key={dish._id}>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={dish.title} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>🍕</span>
                    }
                  </td>
                  <td>{dish.title}</td>
                  <td>{dish.category?.name || '—'}</td>
                  <td>{dish.price?.normal} kr.</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
