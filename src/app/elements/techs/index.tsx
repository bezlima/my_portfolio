import TechCard from '@/app/components/techCard'
import Title from '@/app/components/title'
import techs from '../../data/techs.json'

interface IItems {
    name: string
    url: string
    width: number
    height: number
}

export default function TechSection() {
    return (
        <section className="h-auto ml-20 flex flex-col gap-2">
            <Title icon={'/code-icon.svg'} iconSize={[25, 25]} alt={'foo'}>
                Tecnologias
            </Title>
            <span className="mt-4 flex w-full overflow-auto h-full gap-3">
                {techs &&
                    techs.map((item: IItems, index: number) => {
                        return (
                            <TechCard
                                key={index}
                                title={item.name}
                                width={item.width}
                                height={item.height}
                                path={item.url}
                            />
                        )
                    })}
            </span>
        </section>
    )
}
