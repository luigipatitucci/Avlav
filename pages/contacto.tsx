import Head from 'next/head'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import styles from '../styles/Pages.module.css'

function ContactSection() {
  const router = useRouter()
  const selectedService = router.query.servicio as string | undefined
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactGrid}>
          {/* Left Column - Content */}
          <div className={styles.contactLeft}>
            <h1 className={`${styles.contactHeadline} ${styles.raisedTitle}`}>
              CONSTRUYAMOS ALGO <span className={styles.magentaAccent}>SIGNIFICATIVO</span>
            </h1>
            
            <p className={styles.contactText}>
              Contanos sobre tu proyecto. Te ayudaremos a definir el camino correcto, con claridad y propósito.
            </p>

            <div className={styles.contactProcess}>
              <div className={styles.processItem}>
                <div className={styles.processBullet}></div>
                <p className={styles.processText}>Respondemos en 24 horas</p>
              </div>
              <div className={styles.processItem}>
                <div className={styles.processBullet}></div>
                <p className={styles.processText}>Revisamos tu desafío y objetivos</p>
              </div>
              <div className={styles.processItem}>
                <div className={styles.processBullet}></div>
                <p className={styles.processText}>Proponemos un siguiente paso claro</p>
              </div>
            </div>

            <p className={styles.contactLocation}>
              Con base en Buenos Aires, trabajando con clientes en todo el mundo.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className={styles.contactRight}>
            {selectedService && (
              <div className={styles.selectedService}>
                Servicio seleccionado: <strong>{selectedService}</strong>
              </div>
            )}
            <ContactForm initialService={selectedService} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contacto() {
  return (
    <Layout>
      <Head>
        <title>Contacto - AVLAV</title>
        <meta name="description" content="Construyamos algo significativo. Contanos sobre tu proyecto." />
      </Head>

      <main className={styles.contactMain}>
        <ContactSection />
      </main>
    </Layout>
  )
}
