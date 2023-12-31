import './globals.css'
import { Inter } from 'next/font/google'
import Gtag from "./components/Gtag"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'G HEZZY',
  description: 'home.',
  openGraph: {
    images: 'https://realmtest.sfo3.digitaloceanspaces.com/hezzy/hezzycover-min.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Gtag />

        {children}</body>
    </html>
  )
}
