'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Pages.module.css'

type ServiceDetail = {
  whatWeDo: string[]
  deliverables: string[]
  timeline: string[]
}

type Service = { 
  id: string
  title: string
  desc: string
  details: ServiceDetail
}

const services: Service[] = [
  { 
    id: 's1', 
    title: 'Marketing Digital', 
    desc: 'Estrategia integrada que potencia tu presencia online con análisis y creatividad.',
    details: {
      whatWeDo: ['Análisis de audiencia y mercado', 'Estrategia de contenido multicanal', 'Optimización de conversión'],
      deliverables: ['Plan estratégico mensual', 'Reportes de performance', 'Recomendaciones de mejora'],
      timeline: ['Diagnóstico: 1 semana', 'Estrategia: 2 semanas', 'Implementación: continua']
    }
  },
  { 
    id: 's2', 
    title: 'Community Management', 
    desc: 'Gestión profesional de redes sociales y fortalecimiento de identidad digital.',
    details: {
      whatWeDo: ['Gestión de redes sociales', 'Creación de contenido', 'Interacción con comunidad'],
      deliverables: ['Calendario de contenido', 'Publicaciones diarias', 'Reportes mensuales'],
      timeline: ['Onboarding: 1 semana', 'Planificación: 1 semana', 'Gestión: continua']
    }
  },
  { 
    id: 's3', 
    title: 'Pauta Publicitaria', 
    desc: 'Campañas en Meta, Google y YouTube que aumentan alcance y conversión.',
    details: {
      whatWeDo: ['Diseño de campañas', 'Segmentación de audiencia', 'Optimización continua'],
      deliverables: ['Setup de campañas', 'Creatividades', 'Dashboard de resultados'],
      timeline: ['Setup: 1 semana', 'Prueba: 2 semanas', 'Optimización: continua']
    }
  },
  {
    id: 's4',
    title: 'Email Marketing',
    desc: 'Diseño y automatización de newsletters y campañas promocionales efectivas.',
    details: {
      whatWeDo: ['Diseño de campañas', 'Segmentación de base', 'Automatización de flujos'],
      deliverables: ['Templates personalizados', 'Flujos automatizados', 'Análisis de métricas'],
      timeline: ['Setup: 1 semana', 'Primera campaña: 1 semana', 'Optimización: continua']
    }
  },
  {
    id: 's5',
    title: 'SEO / SEM',
    desc: 'Optimización orgánica y paga para mejorar posicionamiento en buscadores.',
    details: {
      whatWeDo: ['Auditoría técnica', 'Optimización on-page', 'Estrategia de palabras clave'],
      deliverables: ['Informe de auditoría', 'Plan de optimización', 'Reportes mensuales'],
      timeline: ['Auditoría: 2 semanas', 'Implementación: 4 semanas', 'Monitoreo: continuo']
    }
  },
  {
    id: 's6',
    title: 'Analítica Digital',
    desc: 'Monitoreo de métricas y análisis de datos para identificar oportunidades.',
    details: {
      whatWeDo: ['Configuración de analytics', 'Dashboards personalizados', 'Análisis de comportamiento'],
      deliverables: ['Setup de herramientas', 'Dashboards interactivos', 'Reportes insights'],
      timeline: ['Setup: 1 semana', 'Dashboards: 2 semanas', 'Reportes: mensuales']
    }
  },
  {
    id: 's7',
    title: 'Estrategia Digital',
    desc: 'Definición de objetivos, públicos y calendario para presencia coherente.',
    details: {
      whatWeDo: ['Análisis competitivo', 'Definición de objetivos', 'Roadmap de contenido'],
      deliverables: ['Plan estratégico', 'Calendario editorial', 'Guía de tono y voz'],
      timeline: ['Diagnóstico: 1 semana', 'Estrategia: 3 semanas', 'Implementación: continua']
    }
  },
  {
    id: 's8',
    title: 'Edición de Video',
    desc: 'Creación audiovisual con impacto para promocionales y contenido digital.',
    details: {
      whatWeDo: ['Edición profesional', 'Motion graphics', 'Corrección de color'],
      deliverables: ['Videos editados', 'Assets optimizados', 'Variantes para redes'],
      timeline: ['Briefing: 3 días', 'Edición: 1-2 semanas', 'Revisiones: 3 días']
    }
  },
  {
    id: 's9',
    title: 'Producción en Vivo',
    desc: 'Producción técnica para eventos y streamings con calidad profesional.',
    details: {
      whatWeDo: ['Producción técnica', 'Streaming multicanal', 'Postproducción'],
      deliverables: ['Setup técnico', 'Transmisión en vivo', 'Grabación editada'],
      timeline: ['Preproducción: 1 semana', 'Evento: día acordado', 'Postproducción: 1 semana']
    }
  },
  {
    id: 's10',
    title: 'Diseño Gráfico',
    desc: 'Identidades visuales y piezas gráficas con diseño profesional y coherente.',
    details: {
      whatWeDo: ['Diseño de identidad', 'Piezas gráficas', 'Material digital y print'],
      deliverables: ['Manual de marca', 'Assets digitales', 'Templates editables'],
      timeline: ['Briefing: 3 días', 'Propuestas: 1 semana', 'Ajustes: 1 semana']
    }
  },
  {
    id: 's11',
    title: 'Desarrollo Web',
    desc: 'Sitios web funcionales, seguros y accesibles con experiencia clara.',
    details: {
      whatWeDo: ['Diseño UI/UX', 'Desarrollo frontend/backend', 'Testing y optimización'],
      deliverables: ['Sitio web responsive', 'CMS configurado', 'Documentación técnica'],
      timeline: ['Diseño: 2 semanas', 'Desarrollo: 4-6 semanas', 'Testing: 1 semana']
    }
  }
]

export default function ServicesGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderLeft}>
            <h2 className={styles.servicesSectionTitle}>SERVICIOS</h2>
            <p className={styles.servicesSubheading}>Soluciones digitales integrales para el crecimiento de tu marca</p>
          </div>
          <Link href="/contacto" className={styles.servicesHeaderCta}>Solicitar consultoría</Link>
        </div>
        
        <div className={styles.servicesList}>
          {services.map((service) => (
            <article key={service.id} className={styles.serviceRow}>
              <button 
                className={styles.serviceRowButton}
                onClick={() => toggleService(service.id)}
                aria-expanded={expandedId === service.id}
              >
                <div className={styles.serviceRowContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                </div>
                <span className={styles.serviceIndicator}>→</span>
              </button>
              
              {expandedId === service.id && (
                <div className={styles.serviceDetails}>
                  <div className={styles.serviceDetailsGrid}>
                    <div className={styles.serviceDetailsColumn}>
                      <h4 className={styles.serviceDetailsHeading}>Qué hacemos</h4>
                      <ul className={styles.serviceDetailsList}>
                        {service.details.whatWeDo.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceDetailsColumn}>
                      <h4 className={styles.serviceDetailsHeading}>Entregables</h4>
                      <ul className={styles.serviceDetailsList}>
                        {service.details.deliverables.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.serviceDetailsColumn}>
                      <h4 className={styles.serviceDetailsHeading}>Tiempos</h4>
                      <ul className={styles.serviceDetailsList}>
                        {service.details.timeline.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
