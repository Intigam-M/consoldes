import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/global.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Consoldes',
    description: 'Generated by create next app',
  }

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main> {children} </main>
                <Footer />
            </body>
        </html>
    )
}
