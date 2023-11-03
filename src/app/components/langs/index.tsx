interface ILangs {
    tracking: string
    name: [string, string]
    abbr: string
    color: string
}

export default function Langs({ tracking, name, abbr, color }: ILangs) {
    return (
        <div className={`flex items-center justify-center`}>
            <p className={`text-[350px] ${tracking} text-white font-semibold uppercase`}>{abbr}</p>
            <figure
                className={`
                flex flex-col items-center justify-between
                w-[200px] h-[300px]
                rounded-xl
                ${color}
                cursor-pointer
            `}
            >
                <div />
                <span className="flex flex-col">
                    <p className="font-semibold text-white text-xl"> {name[0]} </p>
                    <p className="font-semibold text-white text-xl -mt-10"> {name[1]} </p>
                </span>
                <p className="w-full pr-4 font-semibold text-white text-lg text-right uppercase"> {abbr} </p>
            </figure>
        </div>
    )
}
