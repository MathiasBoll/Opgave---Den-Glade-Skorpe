// Global toast-kontekst: viser midlertidige bekræftelsesbeskeder (fx "tilføjet til kurven").
// Bruges så feedback ikke kun afhænger af at man lægger mærke til kurv-badge'et.
import { createContext, useContext, useState, useCallback, useRef } from 'react'
import styles from './Toast.module.css'

const ToastContext = createContext(null)

let nextId = 1

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  const timers = useRef(new Map())

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    clearTimeout(timers.current.get(id))
    timers.current.delete(id)
  }, [])

  const showToast = useCallback((message, { duration = 3000 } = {}) => {
    const id = nextId++
    setToasts((prev) => [...prev, { id, message }])
    const timer = setTimeout(() => removeToast(id), duration)
    timers.current.set(id, timer)
  }, [removeToast])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.stack} role="status" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={styles.toast} onClick={() => removeToast(t.id)}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
