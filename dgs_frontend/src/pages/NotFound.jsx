import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 — Siden findes ikke</h1>
      <p>
        <Link to="/">Gå til forsiden</Link>
      </p>
    </main>
  )
}
