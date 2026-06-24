import { Link } from 'react-router-dom'
import styles from './OrderConfirmation.module.css'

export default function OrderConfirmation() {
  return (
    <main className={styles.main}>
      <Link to="/" className={styles.closeBtn} aria-label="Luk">×</Link>
      <h1 className={styles.title}>Tak for din bestilling!</h1>
      <p className={styles.text}>Vi er i gang med at tilberede din mad. Vi ses snart!</p>
    </main>
  )
}
