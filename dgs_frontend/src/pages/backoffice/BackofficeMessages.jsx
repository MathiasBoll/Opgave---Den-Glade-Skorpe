import { useState, useEffect } from 'react'
import { getMessages } from '../../services/api'
import styles from './Backoffice.module.css'

export default function BackofficeMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessages()
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
