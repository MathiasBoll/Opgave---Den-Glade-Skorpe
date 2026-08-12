import { useState, useEffect } from 'react'
import { getMessages, updateMessage, deleteMessage } from '../../services/api'
import ConfirmModal from '../../components/ConfirmModal'
import styles from './Backoffice.module.css'
import empStyles from './BackofficeEmployees.module.css'

export default function BackofficeMessages() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [openMsg, setOpenMsg] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  function load() {
    setLoading(true)
    getMessages()
      .then(setMessages)
      .catch(() => setError('Kunne ikke hente beskeder.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  useEffect(() => {
    if (!success) return
    const timer = setTimeout(() => setSuccess(null), 3000)
    return () => clearTimeout(timer)
  }, [success])

  async function handleToggleStatus(msg) {
    const next = msg.status === 'read' ? 'unread' : 'read'
    try {
      await updateMessage(msg._id, next)
      setSuccess(next === 'read' ? 'Besked markeret som læst.' : 'Besked markeret som ulæst.')
      load()
    } catch {
      setError('Kunne ikke opdatere status.')
    }
  }

  async function handleDelete(id) {
    try {
      await deleteMessage(id)
      setDeleteConfirm(null)
      setSuccess('Besked slettet.')
      load()
    } catch {
      setError('Kunne ikke slette beskeden.')
      setDeleteConfirm(null)
    }
  }

  if (loading) return <p className={styles.status}>Henter beskeder…</p>

  return (
    <section>
      <div className={styles.pageHead}>
        <h2 className={styles.pageTitle}>✉️ Beskeder</h2>
        <p className={styles.pageSubtitle}>Beskeder indsendt via kontaktformularen.</p>
      </div>
      {error && <p className={empStyles.errorMsg}>{error}</p>}
      {success && <p className={empStyles.successMsg}>{success}</p>}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <ConfirmModal
          title="Slet besked"
          message="Er du sikker på at du vil slette denne besked?"
          onConfirm={() => handleDelete(deleteConfirm)}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Navn</th>
              <th>Emne</th>
              <th>Status</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && (
              <tr><td colSpan={4} className={styles.noData}>Ingen beskeder endnu</td></tr>
            )}
            {messages.map((msg) => (
              <tr key={msg._id} style={{ opacity: msg.status === 'read' ? 0.6 : 1 }}>
                <td>{msg.name}</td>
                <td>{msg.subject}</td>
                <td>
                  <span className={msg.status === 'read' ? empStyles.statusRead : empStyles.statusUnread}>
                    {msg.status === 'read' ? 'Læst' : 'Ulæst'}
                  </span>
                </td>
                <td>
                  <div className={empStyles.rowActions}>
                    <button className={empStyles.editBtn} onClick={() => setOpenMsg(msg)}>
                      Åbn
                    </button>
                    <button className={empStyles.deleteBtn} onClick={() => setDeleteConfirm(msg._id)}>
                      Slet
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Message detail modal */}
      {openMsg && (
        <div className={empStyles.msgModalOverlay} onClick={() => setOpenMsg(null)}>
          <div className={empStyles.msgModal} onClick={(e) => e.stopPropagation()}>
            <button className={empStyles.msgModalClose} onClick={() => setOpenMsg(null)}>✕</button>
            <h3 className={empStyles.msgModalTitle}>{openMsg.subject}</h3>
            <p className={empStyles.msgModalMeta}>Fra: <strong>{openMsg.name}</strong></p>
            <p className={empStyles.msgModalBody}>{openMsg.description}</p>
            <div className={empStyles.formActions} style={{ marginTop: '1rem' }}>
              <button
                className={empStyles.saveBtn}
                onClick={() => { handleToggleStatus(openMsg); setOpenMsg(null) }}
              >
                Markér som {openMsg.status === 'read' ? 'ulæst' : 'læst'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
