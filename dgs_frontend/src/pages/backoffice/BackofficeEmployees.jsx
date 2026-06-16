import { useState, useEffect } from 'react'
import { getEmployees } from '../../services/api'
import styles from './Backoffice.module.css'

const BASE_URL = 'http://localhost:3042'

export default function BackofficeEmployees() {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getEmployees()
      .then(setEmployees)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className={styles.status}>Henter medarbejdere…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Medarbejdere</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Foto</th>
              <th>Navn</th>
              <th>Titel</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              const imgSrc = emp.image ? `${BASE_URL}/${emp.image}` : null
              return (
                <tr key={emp._id}>
                  <td>
                    {imgSrc
                      ? <img src={imgSrc} alt={emp.name} className={styles.thumb} />
                      : <span className={styles.thumbFallback}>👤</span>
                    }
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.title || '—'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
