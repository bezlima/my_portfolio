import './globals.css'
import Providers from './provider/themeProvider'

export const metadata = {
    title: 'Oi, sou o Lucas Lima',
    description: 'Desenvolvedor Front-End. TypeScript, JavaScript, Next, React, Tailwind, Html, CSS, SASS ...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <>
                <body>
                    <Providers>{children}</Providers>
                </body>
            </>
        </html>
    )
}
