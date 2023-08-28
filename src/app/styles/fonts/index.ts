import { Inter, Press_Start_2P, Roboto } from 'next/font/google'

const font2d = Press_Start_2P({
    subsets: ['latin'],
    weight: '400',
})

const office = Roboto({
    subsets: ['latin'],
    weight: '400',
})

const inter = Inter({ subsets: ['latin'] })

export { font2d, inter, office }
