interface ICodeVector {
    className?: string
}

export default function CodeVector({ className }: ICodeVector) {
    const colors = [
        '#2F3C4725',
        '#2F069A25',
        '#9B7AF025',
        '#A75A4625',
        '#4B1A0D25',
        '#0D4B4025',
        '#678D8625',
        '#BEB90C25',
        '#B3B28425',
        '#BD162A25',
        '#FFB2BB25',
    ]

    const validWidthClasses = [
        'w-1/12',
        'w-2/12',
        'w-3/12',
        'w-4/12',
        // 'w-5/12',
        // 'w-6/12',
        // 'w-7/12',
        // 'w-8/12',
        // 'w-9/12',
        // 'w-10/12',
        // 'w-11/12',
    ]

    const getRandomWidthClass = () => validWidthClasses[Math.floor(Math.random() * validWidthClasses.length)]

    return (
        <div className={`h-[300px] w-[400px] ${className}`}>
            <div className="space-y-2">
                {[...Array(15).keys()].map((index) => (
                    <span className="flex gap-2" key={index}>
                        <div
                            style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
                            className={`h-3 ${getRandomWidthClass()} rounded-sm`}
                        ></div>
                        <div
                            style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
                            className={` h-3 ${getRandomWidthClass()} rounded-sm`}
                        ></div>
                        <div
                            style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}
                            className={` h-3 ${getRandomWidthClass()} rounded-sm`}
                        ></div>
                    </span>
                ))}
            </div>
        </div>
    )
}
