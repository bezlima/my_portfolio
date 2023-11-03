interface IMediumCard {
    title: string
    description: string
    date?: string
    introduction: string
}

export default function MediumCard({ title, description, date, introduction }: IMediumCard) {
    return (
        <section
            className={`
            w-[450px] h-[300px] 
            bg-neutral-200
            group
            rounded-xl 
            p-4 
            cursor-pointer 
            hover:outline hover:outline-teal-600 hover:outline-offset-0
            relative
        `}
        >
            <span className="flex flex-col gap-0">
                <h2 className="text-lg font-bold tracking-wide uppercase group-hover:text-teal-600">{title}</h2>
                {date && <p className="tracking-wide font-semibold text-sm -mt-4 uppercase">{date}</p>}
                <p className="tracking-wide font-semibold text-sm -mt-2 uppercase">{introduction}</p>
            </span>
            <p className="tracking-wide font-semibold text-base mt-8 text-justify">{description}</p>
        </section>
    )
}
