import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>AVLAV</Link>
          <p className={styles.tag}>Soluciones digitales que convierten</p>
        </div>

        <div className={styles.links}>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>SECCIONES</h4>
            <ul className={styles.linksList}>
              <li><Link href="/servicios" className={styles.link}>Servicios</Link></li>
              <li><Link href="/quienes" className={styles.link}>Quienes Somos</Link></li>
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
