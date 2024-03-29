import type { Metadata } from 'next'
import { Italianno, Prata, Dosis } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italianno',
  display: 'swap',
})

const prata = Prata({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-prata',
  display: 'swap',
})

const dosis = Dosis({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dosis',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Helena WebSite',
  description: 'Historiadora',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${italianno.variable} ${prata.variable} ${dosis.variable}`}
      >
        <Header />
        <main className="h-svh max-h-full flex-col items-center ">
          {children}
        </main>
      </body>
    </html>
  )
}
