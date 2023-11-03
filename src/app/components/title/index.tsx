import Image from 'next/image'
import { ReactNode } from 'react'

interface ITitle {
    children: ReactNode
    icon: string
    iconSize: [number, number]
    alt: string
}

export default function Title({ children, icon, iconSize, alt }: ITitle) {
    return (
        <span className="flex gap-2 items-center">
            <Image src={icon} alt={alt} width={iconSize[0]} height={iconSize[1]} />
            <h2 className="text-white font-semibold tracking-widest uppercase select-none"> {children} </h2>
        </span>
    )
}
