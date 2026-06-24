import { useState, useEffect } from 'react'
import { getOrders, updateOrder, deleteOrder } from '../../services/api'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

export default function BackofficeOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [error, setError] = useState(null)

  function load() {
    setLoading(true)
    getOrders()
      .then(setOrders)
      .catch(() => setError('Kunne ikke hente ordrer.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  async function handleStatusChange(order, shipped) {
    try {
      await updateOrder(order._id, shipped)
      load()
    } catch {
      setError('Kunne ikke opdatere status.')
    }
  }

  async function handleDelete(id) {
    try {
      await deleteOrder(id)
      setDeleteConfirm(null)
      load()
    } catch {
      setError('Kunne ikke slette ordren.')
      setDeleteConfirm(null)
    }
  }

  if (loading) return <p className={styles.status}>Henter ordrer…</p>

  return (
    <section>
      <h2 className={styles.pageTitle}>Ordrer</h2>
      {error && <p className={empStyles.errorMsg}>{error}</p>}

      {deleteConfirm && (
        <div className={empStyles.confirmBox}>
          <p>Er du sikker på at du vil slette denne ordre?</p>
          <div className={empStyles.confirmActions}>
            <button className={empStyles.deleteConfirmBtn} onClick={() => handleDelete(deleteConfirm)}>
              Ja, slet
            </button>
            <button className={empStyles.cancelBtn} onClick={() => setDeleteConfirm(null)}>
              Annuller
            </button>
          </div>
        </div>
      )}

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Retter</th>
              <th>Kommentar</th>
              <th>Total</th>
              <th>Status</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 && (
              <tr><td colSpan={6} className={styles.noData}>Ingen ordrer endnu</td></tr>
            )}
            {orders.map((order) => (
              <tr key={order._id}>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#666' }}>
                  {order._id.slice(-6)}
                </td>
                <td>
                  {order.dishes?.map((d, i) => (
                    <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                      {d.amount} × {d.dish?.title || d.dish}
                      {d.size && <span style={{ color: '#888' }}> ({d.size === 'family' ? 'Familie' : 'Alm.'})</span>}
                    </div>
                  ))}
                </td>
                <td style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', maxWidth: '160px' }}>
                  {order.comment || '—'}
                </td>
                <td style={{ whiteSpace: 'nowrap' }}>{order.totalPrice} kr.</td>
                <td>
                  <select
                    className={empStyles.statusSelect}
                    value={order.shipped ? 'shipped' : 'received'}
                    onChange={(e) => handleStatusChange(order, e.target.value === 'shipped')}
                  >
                    <option value="received">Modtaget</option>
                    <option value="shipped">Afsendt</option>
                  </select>
                </td>
                <td>
                  <div className={empStyles.rowActions}>
                    <button className={empStyles.deleteBtn} onClick={() => setDeleteConfirm(order._id)}>
                      Slet
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
