import { font2d } from '@/app/styles/fonts'

export default function Footer() {
    return (
        <div className=" w-full bg-white dark:bg-black drop-shadow-md flex items-center justify-center py-6 px-10 -scale-100">
            <p className={`-scale-100 text-center font-bold text-base text-brown dark:text-white ${font2d.className}`}>
                Feito com NextJs e Tailwind
            </p>
        </div>
    )
}
