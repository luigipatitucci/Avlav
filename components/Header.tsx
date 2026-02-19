import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const linkClass = (href: string, isCta = false) => {
    const active = router.pathname === href
    return [
      styles.link || '',
      active ? styles.active : '',
      isCta ? styles.cta : ''
    ].filter(Boolean).join(' ')
  }

  // Lock body scroll when menu is open (mobile only)
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (open) {
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Lock scroll
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.classList.add('menuOpen')
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.classList.remove('menuOpen')
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.classList.remove('menuOpen')
    }
  }, [open])

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => setOpen(false)
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">
            <img 
              src="/branding/identidad-visual/logo-avlav-blanco.png" 
              alt="AVLAV"
              className={styles.logo}
            />
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          <Link href="/servicios" className={linkClass('/servicios')}>SERVICIOS</Link>
          <Link href="/pauta" className={linkClass('/pauta', true)}>PAUTA PUBLICITARIA</Link>
          <Link href="/quienes" className={linkClass('/quienes')}>QUIENES SOMOS</Link>
          <Link href="/contacto" className={linkClass('/contacto')}>CONTACTO</Link>
        </nav>
      </div>
    </header>
  )
}
