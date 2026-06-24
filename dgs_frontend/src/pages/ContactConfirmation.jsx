import { Link } from 'react-router-dom'
import styles from './ContactConfirmation.module.css'

export default function ContactConfirmation() {
  return (
    <main className={styles.main}>
      <Link to="/" className={styles.closeBtn} aria-label="Luk">×</Link>
      <h1 className={styles.title}>Tak for din besked!</h1>
      <p className={styles.text}>Vi vender tilbage hurtigst muligt.</p>
    </main>
  )
}
