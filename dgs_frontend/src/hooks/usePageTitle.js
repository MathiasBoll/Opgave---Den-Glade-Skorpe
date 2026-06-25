// Custom hook der sætter document.title dynamisk pr. side.
// Format: "<title> — Den Glade Skorpe" — bruges til korrekt SEO og fane-tekst.
// Cleanup-funktionen nulstiller titlen når komponenten unmountes.
import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Den Glade Skorpe` : 'Den Glade Skorpe'
    return () => {
      document.title = 'Den Glade Skorpe'
    }
  }, [title])
}
