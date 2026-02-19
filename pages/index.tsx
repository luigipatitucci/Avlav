import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import PautaSection from '../components/PautaSection'
import AboutSection from '../components/AboutSection'
import DiagonalDivider from '../components/DiagonalDivider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AVLAV - Soluciones Digitales Integradas</title>
        <meta name="description" content="Somos una cooperativa de trabajo especializada en marketing digital, producción audiovisual, diseño gráfico y desarrollo web." />
      </Head>
      <main className={styles.main}>
          <Hero 
            title="Conectamos marcas con personas" 
            subtitle="Soluciones integrales para comunicar, producir y hacer que las ideas sucedan." 
            ctaText="Conocer servicios" 
            ctaHref="/servicios" 
          />
          
          <DiagonalDivider />
          
          <section className={styles.homeSection}>
            <div className={styles.homeContentWrap}>
              <ServicesGrid />
            </div>
          </section>
          
          <DiagonalDivider />
          
          <section className={styles.manifestoSection}>
            <div className={styles.manifestoContainer}>
              <div className={styles.manifestoGrid}>
                <div className={styles.manifestoLeft}>
                  <span className={styles.manifestoEyebrow}>MANIFIESTO</span>
                  <h2 className={`${styles.manifestoTitle} ${styles.raisedTitle}`}>
                    CONSTRUIMOS MARCAS QUE <span className={styles.magentaAccent}>CONECTAN</span>
                  </h2>
                </div>
                <div className={styles.manifestoRight}>
                  <p className={styles.manifestoText}>
                    Cada proyecto es una oportunidad para crear experiencias memorables.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <DiagonalDivider />
          
          <section className={styles.homeSection}>
            <div className={styles.homeContentWrap}>
              <AboutSection />
            </div>
          </section>
          
          <section className={styles.resultsSection}>
            <DiagonalDivider />
            <div className={styles.resultsContainer}>
              
              <div className={styles.resultsContent}>
                <h2 className={`${styles.resultsTitle} ${styles.raisedTitle}`}>
                  <span className={styles.magentaAccent}>RESULTADOS</span> QUE IMPULSAN TU NEGOCIO
                </h2>
                <p className={styles.resultsSubtitle}>
                  No solo creamos contenido, generamos estrategias que convierten.
                </p>
                <div className={styles.resultsProof}>
                  <span className={styles.resultsProofItem}>Estrategia</span>
                  <span className={styles.resultsProofDivider}>·</span>
                  <span className={styles.resultsProofItem}>Creatividad</span>
                  <span className={styles.resultsProofDivider}>·</span>
                  <span className={styles.resultsProofItem}>Optimización</span>
                </div>
              </div>
            </div>
          </section>
          
          <DiagonalDivider />
          
          <section className={styles.homeSection}>
            <div className={styles.homeContentWrap}>
              <PautaSection />
            </div>
          </section>
          <section className={styles.ctaSection}>
            <DiagonalDivider />
            <div className={styles.ctaContainer}>
              <div className={styles.ctaContent}>
                <h2 className={`${styles.ctaTitle} ${styles.raisedTitle}`}>¿LISTO PARA POTENCIAR TU MARCA?</h2>
                <p className={styles.ctaSubtitle}>
                  Hablemos de tu proyecto. Te acompañamos desde la idea hasta los resultados.
                </p>
                <Link href="/contacto" className={styles.ctaButton}>CONTACTANOS</Link>
                <div className={styles.ctaProcess}>
                  <span className={styles.ctaProcessItem}>Brief</span>
                  <span className={styles.ctaProcessDivider}>·</span>
                  <span className={styles.ctaProcessItem}>Propuesta</span>
                  <span className={styles.ctaProcessDivider}>·</span>
                  <span className={styles.ctaProcessItem}>Implementación</span>
                </div>
              </div>
            </div>
          </section>
        </main>
    </Layout>
  )
}
