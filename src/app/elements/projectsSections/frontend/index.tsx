import MediumCard from '@/app/components/mdCard'
import Title from '@/app/components/title'
import projects from '../../../data/projects.json'

interface IProject {
    title: string
    description: string
    introduction: string
}

export default function FrontEndSection() {
    return (
        <section className="h-auto ml-20 flex flex-col gap-2">
            <Title icon={'/git.svg'} iconSize={[25, 25]} alt={'foo'}>
                projetos front-end
            </Title>
            <span className="mt-4 flex flex-wrap gap-3">
                {projects[0].frontend &&
                    projects[0].frontend.map((item: IProject, index: number) => {
                        return (
                            <MediumCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                introduction={item.introduction}
                            />
                        )
                    })}
            </span>
        </section>
    )
}
