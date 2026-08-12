import { useState, useEffect } from 'react'
import { getOrders, updateOrder, deleteOrder, archiveOrder } from '../../services/api'
import ConfirmModal from '../../components/ConfirmModal'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

export default function BackofficeOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [error, setError] = useState(null)
  const [showArchived, setShowArchived] = useState(false)

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

  async function handleArchiveToggle(order) {
    try {
      await archiveOrder(order._id, !order.archived)
      load()
    } catch {
      setError('Kunne ikke arkivere ordren.')
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

  const visibleOrders = orders.filter((o) => showArchived || !o.archived)
  const archivedCount = orders.filter((o) => o.archived).length

  return (
    <section>
      <h2 className={styles.pageTitle}>Ordrer</h2>
      {error && <p className={empStyles.errorMsg}>{error}</p>}

      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: '1rem' }}>
        <input
          type="checkbox"
          checked={showArchived}
          onChange={(e) => setShowArchived(e.target.checked)}
        />
        Vis arkiverede ordrer ({archivedCount})
      </label>

      {deleteConfirm && (
        <ConfirmModal
          title="Slet ordre"
          message="Er du sikker på at du vil slette denne ordre?"
          onConfirm={() => handleDelete(deleteConfirm)}
          onCancel={() => setDeleteConfirm(null)}
        />
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
            {visibleOrders.length === 0 && (
              <tr><td colSpan={6} className={styles.noData}>Ingen ordrer endnu</td></tr>
            )}
            {visibleOrders.map((order) => (
              <tr key={order._id} style={order.archived ? { opacity: 0.55 } : undefined}>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#666' }}>
                  {order._id.slice(-6)}
                </td>
                <td>
                  {order.dishes?.map((d, i) => (
                    <div key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '0.4rem' }}>
                      {d.amount} × {d.dish?.title || d.dish}
                      {d.size && <span style={{ color: '#888' }}> ({d.size === 'family' ? 'Familie' : 'Alm.'})</span>}
                      {d.extraIngredients?.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem', marginTop: '0.25rem' }}>
                          {d.extraIngredients.map((ing) => (
                            <span
                              key={ing}
                              style={{
                                display: 'inline-block',
                                background: 'var(--color-accent)',
                                color: '#fff',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                padding: '0.1rem 0.55rem',
                                borderRadius: '999px',
                              }}
                            >
                              + {ing}
                            </span>
                          ))}
                        </div>
                      )}
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
                    <button className={empStyles.deleteBtn} onClick={() => handleArchiveToggle(order)}>
                      {order.archived ? 'Genskab' : 'Arkiver'}
                    </button>
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
