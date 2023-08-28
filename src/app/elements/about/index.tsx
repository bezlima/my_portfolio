import Image from 'next/image'
import ProfileGif from '../../../../public/pixelgif.gif'
import Link from 'next/link'
import Typewriter from '../../components/typewriter'
import { office } from '@/app/styles/fonts'

export default function About() {
    return (
        <div id="about" className="flex flex-col lg:flex-row items-center justify-center h-full my-20">
            <div className="w-2/4 items-center justify-evenly">
                <div className="text-center">
                    <p className={`text-black text-md sm:text-lg font-bold dark:text-white ${office.className}`}>
                        Oi, eu sou o
                    </p>
                    <h2 className="text-brown text-xl font-bold">
                        <Typewriter text="Lucas Lima" />
                    </h2>
                    <p className={`text-black text-md sm:text-lg font-bold dark:text-white ${office.className}`}>
                        Desenvolvedor front-end
                    </p>
                    <p className={`text-black text-sm sm:text-base dark:text-white ${office.className}`}>
                        Contato: lucas.lima.psico@hotmail.com
                    </p>
                </div>
                <div className="flex items-center justify-center gap-10 mt-6">
                    <Link href={'https://github.com/bezlima'} target="_blank">
                        <Image
                            src="/github.svg"
                            alt="icon github"
                            width={50}
                            height={50}
                            style={{
                                filter: 'invert(31%) sepia(29%) saturate(548%) hue-rotate(330deg) brightness(104%) contrast(88%)',
                            }}
                        />
                    </Link>
                    <a href="../../cv/lucasLimacv.pdf" download={'currículo_Lucas_Lima.pdf'}>
                        <Image src="/file-arrow-down-bold.svg" alt="icon currículo" width={50} height={50} />
                    </a>
                    <Link href={'https://www.linkedin.com/in/lucas-bezerra-de-lima-64310b237/'} target="_blank">
                        <Image
                            src="/linkedin.svg"
                            alt="icon LinkedIn"
                            width={50}
                            height={50}
                            style={{
                                filter: 'invert(31%) sepia(29%) saturate(548%) hue-rotate(330deg) brightness(104%) contrast(88%)',
                            }}
                        />
                    </Link>
                </div>
            </div>
            <div>
                <Image src={ProfileGif} alt="Profile gif" className="w-[500px] -scale-x-100" />
            </div>
        </div>
    )
}
