import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'HHE EQUIPMENT | Premium Commercial Kitchen Equipment',
  description: 'Innovative Equipment. Exceptional Performance. Premium commercial kitchen equipment for hotels, restaurants, and industrial facilities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins bg-background text-text`}>
        {children}
      </body>
    </html>
  )
}
