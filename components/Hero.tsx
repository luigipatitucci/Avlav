import Link from 'next/link'
import styles from '../styles/Pages.module.css'

type Props = {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  variant?: 'home' | 'servicios' | 'quienes' | 'contacto' | 'pauta'
}

export default function Hero({ 
  title = 'Conectamos marcas con personas', 
  subtitle = 'Soluciones digitales pensadas para tu negocio', 
  ctaText = 'Comienza hoy', 
  ctaHref = '/servicios',
  variant = 'home'
}: Props) {
  const variantClass =
    variant === 'servicios' ? styles.heroServicios :
    variant === 'quienes' ? styles.heroQuienes :
    variant === 'contacto' ? styles.heroContacto :
    variant === 'pauta' ? styles.heroPauta :
    ''
  return (
    <section className={`${styles.hero} ${variantClass}`}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.lead}>{subtitle}</p>
          <Link href={ctaHref} className={styles.ctaButton}>{ctaText}</Link>
        </div>
        <div className={styles.heroAccent}></div>
      </div>
    </section>
  )
}

