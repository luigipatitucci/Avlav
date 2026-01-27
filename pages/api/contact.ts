import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { ok: true } | { ok: false; error: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' })
  }

  // Here you would normally persist the data, send an email, or queue a job.
  // For now we just log it (server-side) and return success.
  // Be careful with logging sensitive info in production.
  // eslint-disable-next-line no-console
  console.log('Contact form submission:', { name, email, message })

  return res.status(200).json({ ok: true })
}
