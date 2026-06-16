import { NavLink, Outlet } from 'react-router-dom'
import styles from './Backoffice.module.css'

export default function Backoffice() {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <span className={styles.logo}>Backoffice</span>
          <NavLink
            to="/backoffice/employees"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Medarbejdere
          </NavLink>
          <NavLink
            to="/backoffice/messages"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Beskeder
          </NavLink>
          <NavLink
            to="/backoffice/orders"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Ordrer
          </NavLink>
          <NavLink
            to="/backoffice/dishes"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Retter
          </NavLink>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
