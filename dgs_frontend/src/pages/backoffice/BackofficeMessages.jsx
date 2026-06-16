import { useState, useEffect } from 'react'
import styles from './Backoffice.module.css'

const BASE_URL = 'http://localhost:3042'

export default function BackofficeMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BASE_URL}/messages`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token') || ''}` },
    })
      .then((r) => r.json())
      .then(setMessages)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className={styles.status}>Henter beskeder…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Beskeder</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Navn</th>
              <th>E-mail</th>
              <th>Besked</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && (
              <tr><td colSpan={3} className={styles.noData}>Ingen beskeder endnu</td></tr>
            )}
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td className={styles.msgCell}>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
