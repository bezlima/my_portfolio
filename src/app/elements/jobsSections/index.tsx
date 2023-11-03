import MediumCard from '@/app/components/mdCard'
import Title from '@/app/components/title'
import jobs from '../../data/jobs.json'

interface IJobsSection {
    company: string
    date: string
    description: string
    introduction: string
}

export default function JobsSection() {
    return (
        <section className="h-auto ml-20 flex flex-col gap-2">
            <Title icon={'/flask-icon.svg'} iconSize={[25, 25]} alt={'foo'}>
                experiência
            </Title>
            <span className="mt-4 flex flex-wrap gap-3">
                {jobs &&
                    jobs.map((item: IJobsSection, index: number) => {
                        return (
                            <MediumCard
                                key={index}
                                title={item.company}
                                date={item.date}
                                description={item.description}
                                introduction={item.description}
                            />
                        )
                    })}
            </span>
        </section>
    )
}
