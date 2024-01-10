import type { Metadata } from 'next'

import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export const metadata: Metadata = {
  title: 'Handicap Action Integration',
  description: ' faire découvrir aux personnes à mobilité réduite la force intérieure qui est cachée en eux',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
    </html>
  )
}
