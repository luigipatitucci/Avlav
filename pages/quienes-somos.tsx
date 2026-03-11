import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styles from '../styles/Pages.module.css'
import DiagonalDivider from '../components/DiagonalDivider'

function OurStory() {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyDiagonal} />
      <div className={styles.storyContainer}>
        <div className={styles.storyGrid}>
          <div className={`${styles.storyLeft} ${styles.raisedHeader} ${styles.raisedHeaderMagenta}`}>
            <h2 className={`${styles.storyTitle} ${styles.raisedTitle}`}>NUESTRA HISTORIA</h2>
          </div>
          <div className={styles.storyRight}>
            <p className={styles.storyParagraph}>
              AVLAV nació con la idea de reunir profesionales con experiencia en un modelo de trabajo colaborativo y eficiente.
            </p>
            <p className={styles.storyParagraph}>
              Somos una cooperativa que entiende que el crecimiento de nuestros clientes es también el nuestro. Por eso trabajamos con compromiso, responsabilidad y una mirada estratégica en cada proyecto.
            </p>
            <p className={styles.storyParagraph}>
              Desde el inicio, sostenemos tres pilares: calidad en la ejecución, innovación en las soluciones y transparencia en cada etapa del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamSections() {
  const sections = [
    {
      title: 'Comunicación y estrategia digital',
      people: [
        {
          id: 'team-lara',
          name: 'Lara Rodríguez',
          role: 'Lic. en Comunicación · Estrategia Digital',
          image: '/branding/fotos-equipo/LARA RODRIGUEZ.png'
        },
        {
          id: 'team-sebastian',
          name: 'Sebastián Patitucci',
          role: 'Publicidad Digital',
          image: '/branding/fotos-equipo/SEBASTIÁN PATITUCCI.jpg'
        }
      ]
    },
    {
      title: 'Realización audiovisual y diseño gráfico',
      people: [
        {
          id: 'team-lucila',
          name: 'Lucila Patitucci',
          role: 'Diseño de Imagen y Sonido',
          image: '/branding/fotos-equipo/LUCILA PATITUCCI_EDICIÓN AUDIOVISUAL.jpg'
        },
        {
          id: 'team-romina',
          name: 'Romina Sastre',
          role: 'Diseño de Imagen y Sonido',
          image: '/branding/fotos-equipo/ROMINA SASTRE.jpg'
        },
        {
          id: 'team-camila',
          name: 'Camila Pittaluga',
          role: 'Diseño de Imagen y Sonido',
          image: '/branding/fotos-equipo/CAMILA PITTALUGA.png'
        },
        {
          id: 'team-mercedes',
          name: 'Mercedes Somoza',
          role: 'Diseño Gráfico',
          image: '/branding/fotos-equipo/MERCEDES SOMOZA FLORES_DISEÑO GRÁFICO.jpg'
        },
        {
          id: 'team-pablo',
          name: 'Pablo Patitucci',
          role: 'Diseño Gráfico',
          image: '/branding/fotos-equipo/PABLO PATITUCCI.png'
        }
      ]
    },
    {
      title: 'Cultura y Producción de eventos',
      people: [
        {
          id: 'team-nahuel',
          name: 'Nahuel Veksler',
          role: 'Música y DJ',
          image: '/branding/fotos-equipo/HUGO VEKSLER_DISEÑO DE SONIDO.jpg'
        },
        {
          id: 'team-carlos-hector',
          name: 'Carlos Héctor Juárez',
          role: 'Producción de Eventos · Técnica de Iluminación y Sonido',
          image: '/branding/fotos-equipo/CARLOS JUÁREZ.jpg'
        },
        {
          id: 'team-lucas',
          name: 'Lucas Candia',
          role: 'Gestión Cultural · Artes Escénicas',
          image: '/branding/fotos-equipo/LUCAS CANDIA.png'
        }
      ]
    }
  ]

  return (
    <section className={styles.teamSectionsSection}>
      <div className={styles.teamSectionsContainer}>
        {sections.map((section, idx) => (
          <div key={section.title} className={styles.teamSectionBlock}>
            {idx > 0 ? <div className={styles.teamSectionDivider} /> : null}
            <div className={styles.teamSectionLayout}>
              <div className={`${styles.teamSectionLeft} ${styles.raisedHeader} ${styles.raisedHeaderMagenta}`}>
                <h2 className={`${styles.teamSectionTitle} ${styles.raisedTitle}`}>{section.title}</h2>
              </div>
              <div className={styles.teamSectionRight}>
                <div className={styles.teamSectionGrid}>
                  {section.people.map((person) => (
                    <article key={person.id} className={styles.teamSectionPerson}>
                      <div className={styles.teamPhoto}>
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={300}
                          height={300}
                          className={styles.teamPhotoImage}
                        />
                      </div>
                      <h3 className={styles.teamName}>{person.name}</h3>
                      <p className={styles.teamRole}>{person.role}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
          <div className={`${styles.workLeft} ${styles.raisedHeader}`}>
            <h2 className={`${styles.workSectionTitle} ${styles.raisedTitle}`}>CÓMO TRABAJAMOS</h2>
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
          <div className={`${styles.valuesLeft} ${styles.raisedHeader}`}>
            <h2 className={`${styles.valuesTitle} ${styles.raisedTitle}`}>NUESTROS VALORES</h2>
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
          variant="quienes-somos"
        />
        <DiagonalDivider />
        <OurStory />
        <DiagonalDivider />
        <TeamSections />
        <DiagonalDivider />
        <HowWeWork />
        <DiagonalDivider />
        <Values />
      </main>
    </Layout>
  )
}
