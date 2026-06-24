import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useBasket } from '../context/BasketContext'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', label: 'Forside', end: true },
  { to: '/employees', label: 'Personalet' },
  { to: '/contact', label: 'Kontakt' },
]

export default function Header() {
  const { count } = useBasket()
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={close}>
          <img src="/logo.png" alt="Den Glade Skorpe" className={styles.logoImg} />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navActive : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link to="/basket" className={styles.basketLink}>
            <span className={styles.basketIconWrap}>
              <img src="/logo.png" alt="Kurv" className={styles.basketIcon} />
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </span>
          </Link>
        </nav>

        {/* Burger button (mobile) */}
        <button
          className={styles.burgerBtn}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Luk menu' : 'Åbn menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-hidden={!open}
        aria-modal={open}
        role="dialog"
      >
        <button className={styles.closeBtn} onClick={close} aria-label="Luk menu">✕</button>
        <nav className={styles.drawerNav}>
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.drawerLink} ${isActive ? styles.drawerActive : ''}`
              }
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/basket" className={styles.drawerLink} onClick={close}>
            Kurv {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}

