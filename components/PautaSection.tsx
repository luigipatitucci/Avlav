import Link from 'next/link'
import styles from '../styles/Pages.module.css'

export default function PautaSection() {
  return (
    <section className={styles.pautaEditorial}>
      <div className={styles.pautaContainer}>
        <div className={styles.pautaGrid}>
          <div className={styles.pautaLeft}>
            <div className={styles.pautaHeader}>
              <span className={styles.pautaEyebrow}>PUBLICIDAD DIGITAL</span>
              <h2 className={styles.pautaTitle}>PAUTA PUBLICITARIA Y ADS</h2>
            </div>
            <div className={styles.pautaCtas}>
              <Link href="/contacto" className={styles.pautaCtaPrimary}>
                SOLICITAR CONSULTORÍA GRATUITA
              </Link>
              <Link href="/servicios" className={styles.pautaCtaSecondary}>
                Ver Todos los Servicios →
              </Link>
            </div>
          </div>
          
          <div className={styles.pautaRight}>
            <p className={styles.pautaLead}>
              Diseñamos estrategias personalizadas para alcanzar a tu audiencia objetivo, aumentando alcance, visibilidad y conversión. Planificamos, gestionamos y optimizamos campañas en Meta, Google, YouTube y otras plataformas. Acompañamos todo el proceso: desde la idea hasta el análisis de resultados.
            </p>
            <div className={styles.pautaValues}>
              <div className={styles.pautaValue}>
                <span className={styles.pautaValueLabel}>Meta / Google / YouTube</span>
              </div>
              <div className={styles.pautaValue}>
                <span className={styles.pautaValueLabel}>Estrategia + Creatividad</span>
              </div>
              <div className={styles.pautaValue}>
                <span className={styles.pautaValueLabel}>Optimización continua</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
