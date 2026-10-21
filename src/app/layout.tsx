import type { Metadata } from 'next'
import { Montserrat, Dancing_Script } from 'next/font/google'
import './globals.css'

/**
 * Body / UI face — closely matches the "BY NIKHITA JAIN" lettering in the logo.
 */
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

/**
 * Script face for headings (.font-script).
 */
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Etheerrn — Indo Western & Western Couture',
  description: 'Handcrafted indo-western and western clothing, made in our own studio.',
  keywords: 'Etheerrn, indo western, western wear, farshi sets, lehengas, custom orders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${dancingScript.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
