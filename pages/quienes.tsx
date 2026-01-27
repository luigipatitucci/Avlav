import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../styles/Pages.module.css'

function OurStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <p className={styles.storyParagraph}>
              AVLAV nació de la visión de reunir a profesionales talentosos en un modelo de trabajo colaborativo y democrático.
            </p>
            <p className={styles.storyParagraph}>
              Somos una cooperativa de trabajo que entiende que el éxito de nuestros clientes es nuestro éxito.
            </p>
            <p className={styles.storyParagraph}>
              Desde nuestros primeros proyectos, hemos mantenido un compromiso con la calidad, la innovación y la transparencia.
            </p>
          </div>
          <div className={styles.storyImage}>
            <img src="/branding/imagenes/pexels-eduschadesoares-8583023.jpg" alt="Equipo AVLAV trabajando" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Founders() {
  const founders = [
    {
      id: 'founder-1',
      name: 'Hugo',
      role: 'Co-fundador & Dirección Estratégica',
      image: '/branding/fotos-equipo/HUGO.png'
    },
    {
      id: 'founder-2',
      name: 'Lucas',
      role: 'Co-fundador & Desarrollo',
      image: '/branding/fotos-equipo/LUCAS.png'
    }
  ]

  return (
    <section className={styles.foundersSection}>
      <div className={styles.foundersContainer}>
        <h2 className={styles.foundersTitle}>EQUIPO FUNDADOR</h2>
        <div className={styles.foundersGrid}>
          {founders.map((founder) => (
            <div key={founder.id} className={styles.founderCard}>
              <div className={styles.founderImage}>
                <img src={founder.image} alt={founder.name} />
              </div>
              <h3 className={styles.founderName}>{founder.name}</h3>
              <p className={styles.founderRole}>{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowWeWork() {
  const principles = [
    {
      number: '01',
      title: 'Trabajo colaborativo',
      desc: 'Las mejores ideas surgen del intercambio y la construcción colectiva.'
    },
    {
      number: '02',
      title: 'Diversidad de saberes',
      desc: 'Un equipo multidisciplinario que aporta experiencia en cada área.'
    },
    {
      number: '03',
      title: 'Relaciones sostenidas',
      desc: 'Confianza, crecimiento conjunto y mejora continua en el tiempo.'
    }
  ]

  return (
    <section className={styles.workSection}>
      <div className={styles.workDivider}></div>
      <div className={styles.workContainer}>
        <div className={styles.workLayout}>
          <div className={styles.workLeft}>
            <h2 className={styles.workSectionTitle}>CÓMO TRABAJAMOS</h2>
          </div>
          <div className={styles.workRight}>
            <div className={styles.workList}>
              {principles.map((principle) => (
                <div key={principle.number} className={styles.workItem}>
                  <div className={styles.workNumber}>{principle.number}</div>
                  <div className={styles.workContent}>
                    <h3 className={styles.workItemTitle}>{principle.title}</h3>
                    <p className={styles.workItemDesc}>{principle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.workDivider}></div>
    </section>
  )
}

function Values() {
  const values = [
    { name: 'Colaboración', statement: 'Trabajamos juntos con nuestros clientes como un equipo único.' },
    { name: 'Innovación', statement: 'Buscamos constantemente nuevas soluciones y metodologías.' },
    { name: 'Resultados', statement: 'Nos medimos por el impacto que generamos para tu negocio.' },
    { name: 'Transparencia', statement: 'Comunicación clara. Sin sorpresas desagradables.' },
    { name: 'Sostenibilidad', statement: 'Crecimiento responsable. Prácticas éticas.' }
  ]

  return (
    <section className={styles.valuesSection}>
      <div className={styles.valuesContainer}>
        <div className={styles.valuesLayout}>
          <div className={styles.valuesLeft}>
            <h2 className={styles.valuesTitle}>NUESTROS VALORES</h2>
          </div>
          <div className={styles.valuesRight}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueItem}>
                <h3 className={styles.valueName}>{value.name}</h3>
                <p className={styles.valueStatement}>{value.statement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Quienes() {
  return (
    <Layout>
      <Head>
        <title>Quiénes Somos - AVLAV</title>
        <meta name="description" content="Una cooperativa creativa que diseña, construye y potencia experiencias digitales con impacto" />
      </Head>

      <main className={styles.quienesMain}>
        <Hero 
          title="QUIÉNES SOMOS" 
          subtitle="Una cooperativa creativa que diseña, construye y potencia experiencias digitales con impacto" 
          ctaText="Trabajemos juntos" 
          ctaHref="/contacto" 
          variant="quienes"
        />
        <OurStory />
        <Founders />
        <HowWeWork />
        <Values />
      </main>
    </Layout>
  )
}
