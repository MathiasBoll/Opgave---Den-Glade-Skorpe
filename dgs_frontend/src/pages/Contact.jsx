import { useState } from 'react'
import { postMessage } from '../services/api'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Contact.module.css'

export default function Contact() {
  usePageTitle('Kontakt Os')
  const [form, setForm] = useState({ name: '', subject: '', description: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await postMessage(form)
      setSubmitted(true)
    } catch (err) {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Har du spørgsmål eller ønsker du at bestille din favoritpizza?</h1>
        <p className={styles.heroSub}>Udfyld formularen herunder, så vender vi så hurtigt tilbage til dig. Vi glæder os til at høre fra dig!</p>
      </section>

      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">Navn</label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Emne</label>
            <input
              id="subject"
              name="subject"
              type="text"
              className={styles.input}
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="description">Beskrivelse</label>
            <textarea
              id="description"
              name="description"
              className={styles.textarea}
              value={form.description}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.submitBtn} disabled={submitting}>
            {submitting ? 'Sender…' : 'Send'}
          </button>
        </form>
      </div>

      {/* Thank-you modal */}
      {submitted && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setSubmitted(false)}>×</button>
            <p className={styles.modalText}>Tak for din besked, {form.name || 'dig'}!</p>
            <p className={styles.modalSub}>Vi vender tilbage hurtigst muligt</p>
          </div>
        </div>
      )}
    </main>
  )
}
