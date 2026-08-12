import { useState, useEffect } from 'react'
import { getMessages, updateMessage, updateMessageEmail, deleteMessage } from '../../services/api'
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
  const [emailDraft, setEmailDraft] = useState('')

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

  // Ældre beskeder blev indsendt før email-feltet fandtes — giver admin mulighed for at eftertilføje den, så der kan svares.
  async function handleSaveEmail(msg) {
    if (!emailDraft.trim()) return
    try {
      const updated = await updateMessageEmail(msg._id, emailDraft.trim())
      setSuccess('Email tilføjet.')
      setOpenMsg(updated)
      setEmailDraft('')
      load()
    } catch {
      setError('Kunne ikke gemme emailen.')
    }
  }

  function formatDate(value) {
    if (!value) return '—'
    return new Date(value).toLocaleDateString('da-DK', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  }

  function replyMailto(msg) {
    const subject = encodeURIComponent(`Re: ${msg.subject}`)
    const body = encodeURIComponent(`Hej ${msg.name},\n\n\n\n---\nDu skrev:\n${msg.description}`)
    return `mailto:${msg.email}?subject=${subject}&body=${body}`
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
              <th>Email</th>
              <th>Emne</th>
              <th>Modtaget</th>
              <th>Status</th>
              <th>Handlinger</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 && (
              <tr><td colSpan={6} className={styles.noData}>Ingen beskeder endnu</td></tr>
            )}
            {messages.map((msg) => (
              <tr key={msg._id} style={{ opacity: msg.status === 'read' ? 0.6 : 1 }}>
                <td>{msg.name}</td>
                <td>{msg.email || '—'}</td>
                <td>{msg.subject}</td>
                <td>{formatDate(msg.created)}</td>
                <td>
                  <span className={msg.status === 'read' ? empStyles.statusRead : empStyles.statusUnread}>
                    {msg.status === 'read' ? 'Læst' : 'Ulæst'}
                  </span>
                </td>
                <td>
                  <div className={empStyles.rowActions}>
                    <button className={empStyles.editBtn} onClick={() => { setOpenMsg(msg); setEmailDraft('') }}>
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
            <p className={empStyles.msgModalMeta}>
              Fra: <strong>{openMsg.name}</strong>
              {openMsg.email && <> &middot; <a href={`mailto:${openMsg.email}`}>{openMsg.email}</a></>}
              <br />
              Modtaget: {formatDate(openMsg.created)}
            </p>
            <p className={empStyles.msgModalBody}>{openMsg.description}</p>

            {!openMsg.email && (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.75rem' }}>
                <input
                  type="email"
                  className={empStyles.input}
                  placeholder="Tilføj afsenders email for at kunne svare"
                  value={emailDraft}
                  onChange={(e) => setEmailDraft(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button className={empStyles.saveBtn} onClick={() => handleSaveEmail(openMsg)}>
                  Gem email
                </button>
              </div>
            )}

            <div className={empStyles.formActions} style={{ marginTop: '1rem' }}>
              {openMsg.email && (
                <a className={empStyles.saveBtn} href={replyMailto(openMsg)}>
                  Svar via e-mail
                </a>
              )}
              <button
                className={empStyles.cancelBtn}
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
