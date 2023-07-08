import './globals.css'
import { Manrope } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap' 

})




export const metadata = {
  title: 'Autophily',
  description: 'Created by Mattscript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
