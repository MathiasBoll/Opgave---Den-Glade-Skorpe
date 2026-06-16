import { Link } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import styles from './Header.module.css'

export default function Header() {
  const { count } = useBasket()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          Den Glade Skorpe
        </Link>
        <nav className={styles.nav}>
          <Link to="/">Menu</Link>
          <Link to="/employees">Personalet</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/basket" className={styles.basketLink}>
            Kurv {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
