import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postMessage } from '../services/api'
import styles from './Contact.module.css'

export default function Contact() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', subject: '', description: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await postMessage(form)
      navigate('/contact/tak')
    } catch (err) {
      setError('Noget gik galt. Prøv igen.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Kontakt Os</h1>
        <p className={styles.heroSub}>Vi svarer hurtigst muligt</p>
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
            <label className={styles.label} htmlFor="description">Besked</label>
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
            {submitting ? 'Sender…' : 'Send besked'}
          </button>
        </form>
      </div>
    </main>
  )
}
