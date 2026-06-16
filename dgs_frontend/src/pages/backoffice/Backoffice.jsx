import { Link, Outlet } from 'react-router-dom'

export default function Backoffice() {
  return (
    <div>
      <nav style={{ background: 'var(--color-dark)', padding: '1rem' }}>
        <Link to="/backoffice/employees" style={{ color: 'var(--color-white)', marginRight: '1rem' }}>
          Medarbejdere
        </Link>
        <Link to="/backoffice/messages" style={{ color: 'var(--color-white)', marginRight: '1rem' }}>
          Beskeder
        </Link>
        <Link to="/backoffice/orders" style={{ color: 'var(--color-white)', marginRight: '1rem' }}>
          Ordrer
        </Link>
        <Link to="/backoffice/dishes" style={{ color: 'var(--color-white)' }}>
          Retter
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
