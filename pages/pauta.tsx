import Layout from '../components/Layout'
import styles from '../styles/Pages.module.css'
import PautaSection from '../components/PautaSection'
import DiagonalDivider from '../components/DiagonalDivider'

function WhyPauta() {
  const reasons = [
    {
      label: 'ROI COMPROBADO',
      text: 'Nuestras campañas generan un promedio de 3-5x retorno en inversión dentro de los primeros 90 días.'
    },
    {
      label: 'TARGETING PRECISO',
      text: 'Llegamos a tu audiencia exacta con el mensaje correcto en el momento adecuado.'
    },
    {
      label: 'MULTI-CANAL',
      text: 'Coordinamos publicidad en Instagram, Facebook, TikTok, Google y más en una estrategia unificada.'
    },
    {
      label: 'OPTIMIZACIÓN CONSTANTE',
      text: 'Ajustamos diariamente para maximizar resultados y reducir costos por conversión.'
    }
  ]

  return (
    <section className={styles.pautaReasonsSection}>
      <div className={styles.pautaReasonsContainer}>
        <div className={styles.pautaReasonsLayout}>
          <div className={`${styles.pautaReasonsLeft} ${styles.raisedHeader}`}>
            <span className={styles.pautaReasonsKicker}>PUBLICIDAD DIGITAL</span>
            <h2 className={`${styles.pautaReasonsTitle} ${styles.raisedTitle}`}>
              ¿POR QUÉ INVERTIR EN PAUTA DIGITAL?
            </h2>
          </div>
          <div className={styles.pautaReasonsRight}>
            <div className={styles.pautaReasonsGrid}>
              {reasons.map((reason) => (
                <article key={reason.label} className={styles.pautaReasonItem}>
                  <h3 className={styles.pautaReasonLabel}>{reason.label}</h3>
                  <p className={styles.pautaReasonText}>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Pauta() {
  return (
    <Layout>
      <main className={styles.pautaMain}>
        <PautaSection headingLevel={1} />
        <DiagonalDivider />
        <WhyPauta />
      </main>
    </Layout>
  )
}
