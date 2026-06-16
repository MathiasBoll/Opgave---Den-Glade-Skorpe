import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './NotFound.module.css'

export default function NotFound() {
  usePageTitle('404 — Siden findes ikke')

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <span className={styles.icon}>🍕</span>
        <h1 className={styles.code}>404</h1>
        <p className={styles.title}>Siden findes ikke</p>
        <p className={styles.text}>Vi kunne ikke finde siden du ledte efter.</p>
        <Link to="/" className={styles.homeBtn}>Gå til forsiden</Link>
      </div>
    </main>
  )
}
