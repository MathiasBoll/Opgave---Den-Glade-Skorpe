import { useState, useEffect } from 'react'
import { getEmployees } from '../services/api'
import styles from './Employees.module.css'

const BASE_URL = 'http://localhost:3042'

export default function Employees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getEmployees()
      .then(setEmployees)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <main className={styles.main}><p className={styles.status}>Henter personale…</p></main>
  if (error) return <main className={styles.main}><p className={styles.status}>Fejl: {error}</p></main>

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Mød Holdet</h1>
        <p className={styles.heroSub}>De mennesker der gør Den Glade Skorpe til det den er</p>
      </section>

      <div className={styles.container}>
        <div className={styles.grid}>
          {employees.map((emp) => {
            const imgSrc = emp.image ? `${BASE_URL}/${emp.image}` : null
            return (
              <article key={emp._id} className={styles.card}>
                <div className={styles.imgWrap}>
                  {imgSrc ? (
                    <img src={imgSrc} alt={emp.name} className={styles.img} />
                  ) : (
                    <div className={styles.placeholder}>👤</div>
                  )}
                </div>
                <div className={styles.body}>
                  <h2 className={styles.name}>{emp.name}</h2>
                  {emp.title && <p className={styles.title}>{emp.title}</p>}
                  {emp.description && <p className={styles.desc}>{emp.description}</p>}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
