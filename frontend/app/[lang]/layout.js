import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/global.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Consoldes',
    description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {
    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1"> {children} </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
