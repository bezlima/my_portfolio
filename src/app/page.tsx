import JobsSection from './elements/jobsSections'
import LangSection from './elements/langsSections'
import TechSection from './elements/techs'
import { inter } from './styles/fonts'

export default function Home() {
    return (
        <div className={inter.className}>
            <LangSection />
            <TechSection />
            <JobsSection />
        </div>
    )
}
