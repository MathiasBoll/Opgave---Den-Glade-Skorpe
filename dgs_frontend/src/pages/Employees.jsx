import { useState, useEffect } from 'react'
import { getEmployees } from '../services/api'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Employees.module.css'

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3042'

export default function Employees() {
  usePageTitle('Mød Holdet')
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
        <h1 className={styles.heroTitle}>
          <span>★ Den ★</span>
          <span>Glade</span>
          <span>Skorpe</span>
        </h1>
      </section>

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <h2 className={styles.introTitle}>Personalet hos Den Glade Skorpe</h2>
          <p className={styles.introText}>
            Pizzaria Den Glade Skorpe har et dedikeret og venligt personale, der altid går den ekstra mil for at sikre, at kunderne får den bedste oplevelse. Teamet består af erfarne pizzabagere, der med passion tilbereder lækre pizzaer med friske råvarer. Derudover står det servicemindede serveringspersonale klar til at byde kunderne velkommen og sikre, at deres besøg er hyggeligt og uforglemmeligt.
          </p>
        </div>
      </section>

      <div className={styles.container}>
        <div className={styles.grid}>
          {employees.length === 0 && (
            <p className={styles.empty}>Ingen medarbejdere fundet.</p>
          )}
          {employees.map((emp) => {
            const imgSrc = emp.image ? (emp.image.startsWith('http') ? emp.image : `${BASE_URL}/${emp.image}`) : null
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
                  {emp.position && <p className={styles.title}>{emp.position}</p>}
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
