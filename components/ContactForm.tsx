import { useState, useEffect } from 'react'
import styles from '../styles/Pages.module.css'

type ContactFormProps = {
  initialService?: string
}

export default function ContactForm({ initialService }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (initialService) {
      setProject(initialService)
    }
  }, [initialService])

  const validate = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor completá todos los campos requeridos.')
      return false
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Por favor ingresá un email válido.')
      return false
    }

    setError(null)
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)
    setStatus('idle')
    setError(null)

    try {
      const response = await fetch("https://avlav-contact-api.vercel.app/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    email,
    project,
    message
  })
})

const data = await response.json()

if (!response.ok) {
  throw new Error(data?.error || "Error sending message")
}

      setStatus('success')
      setName('')
      setEmail('')
      setProject(initialService || '')
      setMessage('')

      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (err: unknown) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.formWrapper}>
      {status === 'success' && (
        <div className={styles.formSuccess}>
          Mensaje enviado exitosamente. Nos pondremos en contacto pronto.
        </div>
      )}

      {status === 'error' && error && (
        <div className={styles.formError}>
          {error}
        </div>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="project">
            Proyecto
          </label>
          <input
            id="project"
            type="text"
            className={styles.formInput}
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="¿Qué estás construyendo?"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            className={styles.formTextarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Contanos sobre tu proyecto..."
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.formSubmit}
          disabled={loading}
        >
          {loading ? 'ENVIANDO...' : 'INICIAR LA CONVERSACIÓN'}
        </button>
      </form>
    </div>
  )
}