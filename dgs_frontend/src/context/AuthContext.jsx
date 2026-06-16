import { createContext, useContext, useState } from 'react'
import { login as apiLogin } from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('bo_token') || null)
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('bo_user')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function login(email, password) {
    setLoading(true)
    setError(null)
    try {
      const data = await apiLogin({ email, password })
      const tok = data.token || data.accessToken
      setToken(tok)
      setUser(data.user || { email })
      localStorage.setItem('bo_token', tok)
      localStorage.setItem('bo_user', JSON.stringify(data.user || { email }))
      return true
    } catch {
      setError('Forkert e-mail eller adgangskode.')
      return false
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    setToken(null)
    setUser(null)
    localStorage.removeItem('bo_token')
    localStorage.removeItem('bo_user')
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
