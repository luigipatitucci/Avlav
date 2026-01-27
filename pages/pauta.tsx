import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../styles/Pages.module.css'
import PautaSection from '../components/PautaSection'

function WhyPauta() {
  return (
    <section className={styles.pautaBenefits}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Por Qué Invertir en Pauta Digital?</h2>
      <div className={styles.pautaBenefitsGrid}>
        <div className={styles.pautaBenefitCard}>
          <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>📊 ROI Comprobado</h4>
          <p style={{ color: 'var(--color-text-light)' }}>Nuestras campañas generan un promedio de 3-5x retorno en inversión dentro de los primeros 90 días.</p>
        </div>
        <div className={styles.pautaBenefitCard}>
          <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>🎯 Targeting Preciso</h4>
          <p style={{ color: 'var(--color-text-light)' }}>Llegamos a tu audiencia exacta con el mensaje correcto en el momento adecuado.</p>
        </div>
        <div className={styles.pautaBenefitCard}>
          <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>📱 Multi-Canal</h4>
          <p style={{ color: 'var(--color-text-light)' }}>Coordinamos publicidad en Instagram, Facebook, TikTok, Google y más en una estrategia unificada.</p>
        </div>
        <div className={styles.pautaBenefitCard}>
          <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>⚡ Optimización Constante</h4>
          <p style={{ color: 'var(--color-text-light)' }}>Ajustamos diariamente para maximizar resultados y reducir costos por conversión.</p>
        </div>
      </div>
    </section>
  )
}

export default function Pauta() {
  return (
    <Layout>
      <Hero 
        title="Pauta Publicitaria Digital"
        subtitle="Llega a más clientes con estrategias de publicidad digital comprobadas"
        ctaText="Ver Planes"
        ctaHref="#planes"
        variant="pauta"
      />
      <main className={`${styles.main} ${styles.pautaMain}`}>
        <PautaSection />
        <WhyPauta />
      </main>
    </Layout>
  )
}
