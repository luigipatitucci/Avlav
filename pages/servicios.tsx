import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import styles from '../styles/Pages.module.css'

export default function Servicios() {
  return (
    <Layout>
      <Head>
        <title>Servicios - AVLAV</title>
        <meta name="description" content="Conocé todos nuestros servicios de marketing digital, diseño gráfico, desarrollo web, producción audiovisual y más." />
      </Head>

      <main className={`${styles.main} ${styles.servicesMain}`}>
        <Hero 
          title="Nuestros Servicios" 
          subtitle="Soluciones digitales completas para potenciar tu marca" 
          ctaText="Contactanos" 
          ctaHref="/contacto" 
          variant="servicios"
        />
        <ServicesGrid />
      </main>
    </Layout>
  )
}
