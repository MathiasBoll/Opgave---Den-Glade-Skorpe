import { Link } from 'react-router-dom'
import styles from './ContactConfirmation.module.css'

export default function ContactConfirmation() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <span className={styles.icon}>✉️</span>
        <h1 className={styles.title}>Tak for din besked!</h1>
        <p className={styles.text}>Vi vender tilbage hurtigst muligt.</p>
        <Link to="/" className={styles.homeBtn}>Gå til forsiden</Link>
      </div>
    </main>
  )
}
