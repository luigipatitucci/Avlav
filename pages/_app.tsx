import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // Keep pages/_app for backward compatibility; App Router uses /app
  return <Component {...pageProps} />
}
