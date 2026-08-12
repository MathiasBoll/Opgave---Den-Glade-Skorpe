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
  const [success, setSuccess] = useState(null)
  const [showArchived, setShowArchived] = useState(false)
  const [dateFilter, setDateFilter] = useState('')

  function load() {
    setLoading(true)
    getOrders()
      .then(setOrders)
      .catch(() => setError('Kunne ikke hente ordrer.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  useEffect(() => {
    if (!success) return
    const timer = setTimeout(() => setSuccess(null), 3000)
    return () => clearTimeout(timer)
  }, [success])

  async function handleStatusChange(order, shipped) {
    try {
      await updateOrder(order._id, shipped)
      setSuccess(shipped ? 'Ordre markeret som afsendt.' : 'Ordre markeret som modtaget.')
      load()
    } catch {
      setError('Kunne ikke opdatere status.')
    }
  }

  async function handleArchiveToggle(order) {
    try {
      await archiveOrder(order._id, !order.archived)
      setSuccess(order.archived ? 'Ordre genskabt.' : 'Ordre arkiveret.')
      load()
    } catch {
      setError('Kunne ikke arkivere ordren.')
    }
  }

  async function handleDelete(id) {
    try {
      await deleteOrder(id)
      setDeleteConfirm(null)
      setSuccess('Ordre slettet.')
      load()
    } catch {
      setError('Kunne ikke slette ordren.')
      setDeleteConfirm(null)
    }
  }

  // Lokal dato-nøgle (YYYY-MM-DD) — undgår at UTC-konvertering flytter ordren til forkert dag.
  function dayKey(dateValue) {
    const d = new Date(dateValue)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${y}-${m}-${day}`
  }

  function formatDay(key) {
    const [y, m, d] = key.split('-').map(Number)
    return new Date(y, m - 1, d).toLocaleDateString('da-DK', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  }

  function formatTime(dateValue) {
    return new Date(dateValue).toLocaleTimeString('da-DK', { hour: '2-digit', minute: '2-digit' })
  }

  function groupByDay(list) {
    const groups = new Map()
    for (const order of list) {
      const key = dayKey(order.created)
      if (!groups.has(key)) groups.set(key, [])
      groups.get(key).push(order)
    }
    return [...groups.entries()]
      .sort((a, b) => (a[0] < b[0] ? 1 : -1))
      .map(([key, dayOrders]) => ({
        key,
        orders: dayOrders.sort((a, b) => new Date(b.created) - new Date(a.created)),
        count: dayOrders.length,
        revenue: dayOrders.reduce((sum, o) => sum + (o.totalPrice || 0), 0),
      }))
  }

  if (loading) return <p className={styles.status}>Henter ordrer…</p>

  const visibleOrders = orders.filter((o) => !o.archived)
  const archivedOrders = orders.filter((o) => o.archived)
  const archivedCount = archivedOrders.length
  const archivedFiltered = dateFilter ? archivedOrders.filter((o) => dayKey(o.created) === dateFilter) : archivedOrders
  const archiveGroups = groupByDay(archivedFiltered)
  const archiveTotalRevenue = archivedOrders.reduce((sum, o) => sum + (o.totalPrice || 0), 0)

  return (
    <section>
      <div className={styles.pageHead}>
        <h2 className={styles.pageTitle}>🧾 Ordrer</h2>
        <p className={styles.pageSubtitle}>Overblik over indkomne ordrer og status.</p>
      </div>
      {error && <p className={empStyles.errorMsg}>{error}</p>}
      {success && <p className={empStyles.successMsg}>{success}</p>}

      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', marginBottom: '1rem' }}>
        <input
          type="checkbox"
          checked={showArchived}
          onChange={(e) => setShowArchived(e.target.checked)}
        />
        Vis arkiv ({archivedCount})
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
              <th>Dato</th>
              <th>Retter</th>
              <th>Kommentar</th>
              <th>Total</th>
              <th>Status</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {visibleOrders.length === 0 && (
              <tr><td colSpan={7} className={styles.noData}>Ingen ordrer endnu</td></tr>
            )}
            {visibleOrders.map((order) => (
              <tr key={order._id}>
                <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#666' }}>
                  {order._id.slice(-6)}
                </td>
                <td style={{ whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                  {formatTime(order.created)}<br />{dayKey(order.created)}
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
                      Arkiver
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

      {showArchived && (
        <div className={empStyles.inlineFormSection} style={{ marginTop: '2rem' }}>
          <h3 className={empStyles.inlineFormTitle}>📦 Arkiv</h3>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', marginBottom: '1.25rem' }}>
            <label className={empStyles.label} style={{ flexDirection: 'row', alignItems: 'center', gap: '0.5rem' }}>
              Vælg dag:
              <input
                type="date"
                className={empStyles.input}
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                style={{ width: 'auto' }}
              />
            </label>
            {dateFilter && (
              <button type="button" className={empStyles.cancelBtn} onClick={() => setDateFilter('')}>
                Ryd dato
              </button>
            )}
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#666', marginLeft: 'auto' }}>
              I alt arkiveret: <strong>{archivedCount}</strong> ordrer · <strong>{archiveTotalRevenue} kr.</strong>
            </p>
          </div>

          {archiveGroups.length === 0 && (
            <p style={{ fontFamily: 'var(--font-body)', color: '#888' }}>
              {dateFilter ? 'Ingen arkiverede ordrer denne dag.' : 'Ingen arkiverede ordrer endnu.'}
            </p>
          )}

          {archiveGroups.map((group) => (
            <div key={group.key} style={{ marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', borderBottom: '2px solid var(--color-dark)', paddingBottom: '0.4rem', marginBottom: '0.6rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', letterSpacing: '0.02em', textTransform: 'capitalize' }}>
                  🗓️ {formatDay(group.key)}
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: '#555' }}>
                  <strong>{group.count}</strong> {group.count === 1 ? 'ordre' : 'ordrer'} · <strong>{group.revenue} kr.</strong> i alt
                </p>
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tid</th>
                      <th>Retter</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Handlinger</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.orders.map((order) => (
                      <tr key={order._id}>
                        <td style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#666' }}>
                          {order._id.slice(-6)}
                        </td>
                        <td style={{ whiteSpace: 'nowrap' }}>{formatTime(order.created)}</td>
                        <td style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>
                          {order.dishes?.map((d, i) => (
                            <div key={i}>{d.amount} × {d.dish?.title || d.dish}</div>
                          ))}
                        </td>
                        <td style={{ whiteSpace: 'nowrap' }}>{order.totalPrice} kr.</td>
                        <td>{order.shipped ? 'Afsendt' : 'Modtaget'}</td>
                        <td>
                          <div className={empStyles.rowActions}>
                            <button className={empStyles.editBtn} onClick={() => handleArchiveToggle(order)}>
                              Genskab
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
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
