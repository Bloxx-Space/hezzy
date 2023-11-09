import './globals.css'
import { Inter } from 'next/font/google'

import Head from "next/head"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ROC STAR STUDIO',
  description: 'home.',
  openGraph: {
    images: 'https://realmtest.sfo3.digitaloceanspaces.com/ROC/rocback-min.jpg',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
