// Rutebeskytter-komponent: tjekker om et gyldigt JWT-token findes i AuthContext.
// Mangler token — omdiriger til /backoffice/login uden at efterlade browser-historik.
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequireAuth({ children }) {
  const { token } = useAuth()
  if (!token) {
    return <Navigate to="/backoffice/login" replace />
  }
  return children
}
