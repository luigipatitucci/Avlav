import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>AVLAV</Link>
          <p className={styles.tag}>Soluciones digitales que convierten</p>
          
          <div className={styles.social}>
            <a 
              href="https://www.facebook.com/Avlavcooperativa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook de AVLAV"
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/laboratorio.audiovisual.coop/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram de AVLAV"
              className={styles.socialLink}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="0" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>SECCIONES</h4>
            <ul className={styles.linksList}>
              <li><Link href="/servicios" className={styles.link}>Servicios</Link></li>
              <li><Link href="/quienes-somos" className={styles.link}>Quienes Somos</Link></li>
              <li><Link href="/contacto" className={styles.link}>Contacto</Link></li>
              <li><Link href="/pauta" className={styles.link}>Pauta Publicitaria</Link></li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>CONTACTO</h4>
            <address className={styles.address}>
              <a href="mailto:avlavcooperativa@gmail.com" className={styles.link}>avlavcooperativa@gmail.com</a>
              <p className={styles.addressText}>Tel: +54 3704594480</p>
            </address>
          </div>
        </div>

        <div className={styles.newsletter}>
          <h4 className={styles.newsletterTitle}>NEWSLETTER</h4>
          <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <input 
              aria-label="Tu email" 
              placeholder="Tu email" 
              className={styles.input}
            />
            <button type="submit" className={styles.button}>Suscribirme</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <small className={styles.copyright}>© {new Date().getFullYear()} AVLAV. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
