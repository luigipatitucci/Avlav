import { useState } from 'react'
import styles from '../styles/Pages.module.css'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle')
  const [error, setError] = useState<string | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject: project, message })
      })
      const body = await res.json()
      if (!res.ok) throw new Error(body?.error || 'Error del servidor')
      setStatus('success')
      setName('')
      setEmail('')
      setProject('')
      setMessage('')
      setTimeout(() => setStatus('idle'), 5000)
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
      {status === 'error' && (
        <div className={styles.formError}>
          {error}
        </div>
      )}

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Nombre</label>
          <input
            type="text"
            className={styles.formInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input
            type="email"
            className={styles.formInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Proyecto</label>
          <input
            type="text"
            className={styles.formInput}
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="¿Qué estás construyendo?"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Mensaje</label>
          <textarea
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

