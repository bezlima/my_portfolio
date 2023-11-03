import Image from 'next/image'
import CodeVector from '../codeVector'

interface ITechCard {
    title: string
    width: number
    height: number
    path: string
}

export default function TechCard({ title, width, height, path }: ITechCard) {
    return (
        <figure
            className={`
            flex flex-col items-center justify-between
            w-[200px] h-[300px]
            rounded-xl
            bg-black
            cursor-pointer
            hover:outline
            hover:outline-teal-600
            hover:outline-offset-0
            group
            relative
            overflow-hidden
            border
            border-zinc-900
            flex-shrink-0
        `}
        >
            <span />
            <Image src={path} width={width} height={height} alt={title} className="z-10 " />
            <figcaption
                className={`
                    font-bold
                    text-white
                    text-md
                    group-hover:text-teal-600
                    z-10
                    w-full
                    text-start
                    pl-4
                    uppercase
                `}
            >
                {title}
            </figcaption>
            <CodeVector className={`absolute transform shake-slow z-0`} />
        </figure>
    )
}
