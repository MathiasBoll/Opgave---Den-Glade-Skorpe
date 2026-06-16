import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Backoffice.module.css'

export default function Backoffice() {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/backoffice/login', { replace: true })
  }

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
          <div className={styles.userArea}>
            {user?.email && <span className={styles.userEmail}>{user.email}</span>}
            <button className={styles.logoutBtn} onClick={handleLogout}>Log ud</button>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
