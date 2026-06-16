import { useState, useEffect } from 'react'
import { getOrders } from '../../services/api'
import styles from './Backoffice.module.css'

export default function BackofficeOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p className={styles.status}>Henter ordrer…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Ordrer</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Navn</th>
              <th>Retter</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr><td colSpan={3} className={styles.noData}>Ingen ordrer endnu</td></tr>
            )}
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.comment || '—'}</td>
                <td>
                  {order.dishes?.map((d, i) => (
                    <span key={i} className={styles.dishTag}>
                      {d.dish?.title || d.dish} × {d.amount}
                    </span>
                  ))}
                </td>
                <td>{order.totalPrice} kr.</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
