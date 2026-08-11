import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
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
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

  function close() {
    setOpen(false)
  }

  // Headeren er fixed og ligger ovenpå sidens indhold. Så længe den mørke hero
  // (billede med sort overlay) er synlig bag headeren, skal nav/burger være hvid.
  // Når heroen er scrollet væk og lysere indhold (cream-baggrund) ligger bag
  // headeren i stedet, skifter vi til mørk tekst så den stadig kan læses.
  useEffect(() => {
    let intersectionObserver
    let mutationObserver

    function attachHeroObserver(heroEl) {
      const headerHeight = headerRef.current?.offsetHeight ?? 80
      intersectionObserver = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
      )
      intersectionObserver.observe(heroEl)
    }

    const heroEl = document.querySelector('main [class*="hero" i]')
    if (heroEl) {
      attachHeroObserver(heroEl)
    } else {
      // Siden viser stadig en loading-tilstand, så heroen findes ikke i DOM'en
      // endnu. Vent på at den dukker op, når data er hentet færdig.
      setScrolled(false)
      mutationObserver = new MutationObserver(() => {
        const el = document.querySelector('main [class*="hero" i]')
        if (el) {
          mutationObserver.disconnect()
          attachHeroObserver(el)
        }
      })
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    return () => {
      intersectionObserver?.disconnect()
      mutationObserver?.disconnect()
    }
  }, [location.pathname])

  return (
    <header ref={headerRef} className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={close}>
          <img src="/logo.png" alt="Den Glade Skorpe" className={styles.logoImg} />
        </Link>

        <div className={styles.actions}>
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
          </nav>

          {/* Basket icon: shown at every breakpoint, next to the burger button on mobile */}
          <Link to="/basket" className={styles.basketLink} onClick={close}>
            <span className={styles.basketIconWrap}>
              <img src="/logo.png" alt="Kurv" className={styles.basketIcon} />
              {count > 0 && <span className={styles.badge}>{count}</span>}
            </span>
          </Link>

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

