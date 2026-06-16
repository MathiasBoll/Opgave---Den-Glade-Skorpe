import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Den Glade Skorpe` : 'Den Glade Skorpe'
    return () => {
      document.title = 'Den Glade Skorpe'
    }
  }, [title])
}
