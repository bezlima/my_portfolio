'use client'

import Image from 'next/image'
import ToggleTheme from '../../components/toogle'
import MenuHook from './hook'
import { font2d } from '@/app/styles/fonts'

export default function Menu() {
    const { esterEgg, increment } = MenuHook()

    return (
        <div className="bg-white w-full dark:bg-black drop-shadow-md flex items-center justify-between py-6 px-10">
            <div className="flex items-center gap-2">
                <Image
                    src={esterEgg === 10 ? '/pixelcangaceiro.gif' : '/pixel.png'}
                    alt="Profile pic"
                    width={80}
                    height={80}
                    priority
                    onClick={increment}
                />
                <h2 className={`text-md font-bold text-brown ${font2d.className}`}>Lucas Lima</h2>
            </div>
            <div>
                <ul className=" flex items-center gap-5 text-black dark:text-white">
                    <a href="#about">
                        <li
                            className={`cursor-pointer font-bold text-base hidden lg:block hover:text-brown ${font2d.className}`}
                        >
                            Sobre
                        </li>
                    </a>
                    <a href="#techs">
                        <li
                            className={`cursor-pointer font-bold text-base hidden lg:block hover:text-brown ${font2d.className}`}
                        >
                            Educação
                        </li>
                    </a>
                    <a href="#work">
                        <li
                            className={`cursor-pointer font-bold text-base hidden lg:block hover:text-brown ${font2d.className}`}
                        >
                            Experiência
                        </li>
                    </a>
                    <a href="#projects">
                        <li
                            className={`cursor-pointer font-bold text-base hidden lg:block hover:text-brown ${font2d.className}`}
                        >
                            Projetos
                        </li>
                    </a>
                    <ToggleTheme />
                </ul>
            </div>
        </div>
    )
}
