import Link from 'next/link'
import { useState } from 'react'
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

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/">
            <img 
              src="/branding/identidad-visual/logo avlav.png" 
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
          <Link href="/quienes" className={linkClass('/quienes')}>QUIENES SOMOS</Link>
          <Link href="/contacto" className={linkClass('/contacto')}>CONTACTO</Link>
          <Link href="/pauta" className={linkClass('/pauta', true)}>PAUTA PUBLICITARIA</Link>
        </nav>
      </div>
    </header>
  )
}
