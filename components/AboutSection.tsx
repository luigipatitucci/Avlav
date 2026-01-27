import styles from '../styles/Pages.module.css'
import EquipoCard from './EquipoCard'

export default function AboutSection() {
  const teamMembers = [
    {
      id: 'team-1',
      name: 'Hugo',
      role: 'Co-fundador & Dirección Estratégica',
      image: '/branding/fotos-equipo/HUGO.png'
    },
    {
      id: 'team-2',
      name: 'Lucas',
      role: 'Co-fundador & Desarrollo',
      image: '/branding/fotos-equipo/LUCAS.png'
    }
  ]

  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutIntro}>
            <div className={styles.aboutIntroLeft}>
              <h2 className={styles.aboutTitle}>QUIÉNES SOMOS</h2>
            </div>
            <div className={styles.aboutIntroRight}>
              <p className={styles.aboutParagraph}>
                Somos una cooperativa de trabajo conformada por un equipo multidisciplinario, donde cada integrante aporta su experiencia y se desarrolla profesionalmente en su área. Nuestra diversidad de saberes nos permite explorar, crear y producir con una mirada integral, potenciando el trabajo colectivo y la calidad de los proyectos.
              </p>
              <p className={styles.aboutParagraph}>
                Nos adaptamos a las particularidades de cada desafío con creatividad y originalidad, lo que nos permite definir los objetivos en conjunto y desarrollarlos con cada cliente, revisándolos y acompañando su transformación en el tiempo, sosteniendo y ajustando el proceso de manera dinámica.
              </p>
            </div>
          </div>
          
          <div className={styles.aboutTeamGrid}>
            {teamMembers.map((member) => (
              <EquipoCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.workContainer}>
          <div className={styles.workIntro}>
            <div className={styles.workIntroLeft}>
              <h2 className={styles.workTitle}>CÓMO TRABAJAMOS</h2>
            </div>
            <div className={styles.workIntroRight}>
              <p className={styles.workParagraph}>
                Trabajamos de manera horizontal y colaborativa, porque entendemos que las mejores ideas surgen del intercambio y la construcción colectiva. Somos una comunidad dinámica y flexible, que se adapta a cada contexto y desafío, fortaleciendo redes que potencian nuestro hacer.
              </p>
              <p className={styles.workParagraph}>
                En ese camino, construimos relaciones sólidas y sostenidas en el tiempo, basadas en la confianza, el crecimiento conjunto y la mejora continua. Creemos profundamente que el trabajo compartido y progresivo es el camino para alcanzar resultados auténticos y duraderos.
              </p>
            </div>
          </div>

          <div className={styles.principlesList}>
            <article className={styles.principleItem}>
              <div className={styles.principleNumber}>01</div>
              <h4 className={styles.principleTitle}>Trabajo colaborativo</h4>
              <p className={styles.principleDesc}>Las mejores ideas surgen del intercambio y la construcción colectiva.</p>
            </article>
            <article className={styles.principleItem}>
              <div className={styles.principleNumber}>02</div>
              <h4 className={styles.principleTitle}>Diversidad de saberes</h4>
              <p className={styles.principleDesc}>Un equipo multidisciplinario que aporta experiencia en cada área.</p>
            </article>
            <article className={styles.principleItem}>
              <div className={styles.principleNumber}>03</div>
              <h4 className={styles.principleTitle}>Relaciones sostenidas</h4>
              <p className={styles.principleDesc}>Confianza, crecimiento conjunto y mejora continua en el tiempo.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
