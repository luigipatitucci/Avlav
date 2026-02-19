import { useRef, useEffect, useState } from 'react'
import styles from '../styles/Pages.module.css'
import EquipoCard from './EquipoCard'

export default function AboutSection() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const teamMembers = [
    {
      id: 'team-1',
      name: 'Sebastián Patitucci',
      role: 'Publicidad Digital',
      image: '/branding/fotos-equipo/SEBASTIÁN PATITUCCI.jpg',
    },
    {
      id: 'team-5',
      name: 'Lara Rodríguez',
      role: 'Lic. en Comunicación · Estrategia Digital',
      image: '/branding/fotos-equipo/LARA RODRIGUEZ.png',
    },
    {
      id: 'team-3',
      name: 'Lucas Candia',
      role: 'Gestión Cultural · Artes Escénicas',
      image: '/branding/fotos-equipo/LUCAS CANDIA.png',
    },
    {
      id: 'team-7',
      name: 'Mercedes Somoza',
      role: 'Diseño gráfico',
      image: '/branding/fotos-equipo/MERCEDES SOMOZA FLORES_DISEÑO GRÁFICO.jpg',
    },
    {
      id: 'team-4',
      name: 'Pablo Patitucci',
      role: 'Diseño Gráfico',
      image: '/branding/fotos-equipo/PABLO PATITUCCI.png',
    },
    {
      id: 'team-8',
      name: 'Romina Sastre',
      role: 'Diseño de Imagen y Sonido',
      image: '/branding/fotos-equipo/ROMINA SASTRE.jpg',
    },
    {
      id: 'team-6',
      name: 'Lucila Patitucci',
      role: 'Diseño de Imagen y Sonido',
      image: '/branding/fotos-equipo/LUCILA PATITUCCI_EDICIÓN AUDIOVISUAL.jpg',
    },
    {
      id: 'team-10',
      name: 'Camila Pittaluga',
      role: 'Diseño de Imagen y Sonido',
      image: '/branding/fotos-equipo/CAMILA PITTALUGA.png',
    },
    {
      id: 'team-2',
      name: 'Hugo Veksler',
      role: 'Música y DJ',
      image: '/branding/fotos-equipo/HUGO VEKSLER_DISEÑO DE SONIDO.jpg',
    },
    {
      id: 'team-9',
      name: 'Carlos Juárez',
      role: 'Producción de Eventos · Técnica de Iluminación y Sonido',
      image: '/branding/fotos-equipo/CARLOS JUÁREZ.jpg',
    },
  ]

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Scroll-driven horizontal slider (desktop only) - FIXED end release
  useEffect(() => {
    if (isMobile) return
    if (!sceneRef.current || !stripRef.current) return

    const sceneEl = sceneRef.current
    const stripEl = stripRef.current

    let ticking = false
    let maxTranslate = 0
    let sceneHeight = 0
    let sectionTop = 0

    const startOffset = 160
    const endOffset = 260 // ✅ buffer para que no “libere” antes de tiempo

    const computeDimensions = () => {
      const viewportHeight = window.innerHeight
      const stripWidth = stripEl.scrollWidth
      const trackWidth = sceneEl.clientWidth

      // overflow horizontal
      maxTranslate = Math.max(0, stripWidth - trackWidth)

      // ✅ sumamos endOffset para asegurar que el sticky se suelte al final real
      sceneHeight = startOffset + maxTranslate + endOffset + viewportHeight
      sceneEl.style.height = `${sceneHeight}px`

      sectionTop = sceneEl.getBoundingClientRect().top + window.scrollY
    }

    const applyScroll = () => {
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      const denom = sceneHeight - viewportHeight - startOffset - endOffset
      const raw = denom > 0 ? (scrollY - sectionTop - startOffset) / denom : 0
      const progress = Math.max(0, Math.min(1, raw))

      const translateX = -progress * maxTranslate
      stripEl.style.transform = `translate3d(${translateX}px, 0, 0)`
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        applyScroll()
        ticking = false
      })
    }

    const handleResize = () => {
      computeDimensions()
      applyScroll()
    }

    // ✅ recalcular cuando cargan imágenes (evita desfasajes del scrollWidth)
    const attachImageLoadListeners = () => {
      const imgs = stripEl.querySelectorAll('img')
      imgs.forEach((img) => {
        if (!img.complete) {
          img.addEventListener(
            'load',
            () => {
              computeDimensions()
              applyScroll()
            },
            { once: true }
          )
        }
      })
    }

    // ✅ opcional pero muy robusto: si el contenido cambia de tamaño por fonts/layout
    const ro = new ResizeObserver(() => {
      computeDimensions()
      applyScroll()
    })
    ro.observe(stripEl)

    computeDimensions()
    attachImageLoadListeners()
    applyScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      ro.disconnect()
    }
  }, [isMobile])

  return (
    <>
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutIntro}>
            <div className={`${styles.aboutIntroLeft} ${styles.raisedHeader} ${styles.raisedHeaderMagenta}`}>
              <h2 className={`${styles.aboutTitle} ${styles.raisedTitle}`}>QUIÉNES SOMOS</h2>
            </div>
            <div className={styles.aboutIntroRight}>
              <p className={styles.aboutParagraph}>
                Somos una cooperativa de trabajo conformada por un equipo multidisciplinario, donde cada integrante aporta su
                experiencia y se desarrolla profesionalmente en su área. Nuestra diversidad de saberes nos permite explorar,
                crear y producir con una mirada integral, potenciando el trabajo colectivo y la calidad de los proyectos.
              </p>
              <p className={styles.aboutParagraph}>
                Nos adaptamos a las particularidades de cada desafío con creatividad y originalidad, lo que nos permite definir
                los objetivos en conjunto y desarrollarlos con cada cliente, revisándolos y acompañando su transformación en el
                tiempo, sosteniendo y ajustando el proceso de manera dinámica.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll-pinned horizontal photo slider (desktop) / Grid (mobile) */}
        <div
          ref={sceneRef}
          className={`${styles.aboutScrollScene} ${isMobile ? styles.aboutScrollSceneMobile : ''}`}
        >
          <div className={styles.aboutStickyContainer}>
            <div className={styles.aboutPhotoStrip}>
              <div ref={stripRef} className={styles.aboutPhotoStripInner}>
                {teamMembers.map((member) => (
                  <EquipoCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <div className={styles.workContainer}>
          <div className={styles.workIntro}>
            <div className={`${styles.workIntroLeft} ${styles.raisedHeader} ${styles.raisedHeaderMagenta}`}>
              <h2 className={`${styles.workTitle} ${styles.raisedTitle}`}>CÓMO TRABAJAMOS</h2>
            </div>
            <div className={styles.workIntroRight}>
              <p className={styles.workParagraph}>
                Trabajamos de manera horizontal y colaborativa, porque entendemos que las mejores ideas surgen del intercambio y
                la construcción colectiva. Somos una comunidad dinámica y flexible, que se adapta a cada contexto y desafío,
                fortaleciendo redes que potencian nuestro hacer.
              </p>
              <p className={styles.workParagraph}>
                En ese camino, construimos relaciones sólidas y sostenidas en el tiempo, basadas en la confianza, el crecimiento
                conjunto y la mejora continua. Creemos profundamente que el trabajo compartido y progresivo es el camino para
                alcanzar resultados auténticos y duraderos.
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
