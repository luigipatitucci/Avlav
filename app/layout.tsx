import '../styles/globals.css'

export const metadata = {
  title: 'Mi Sitio - Next.js',
  description: 'Sitio con Next.js App Router, TypeScript y CSS Modules'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
