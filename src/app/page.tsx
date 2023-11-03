import JobsSection from './elements/jobsSections'
import LangSection from './elements/langsSections'
import BackEndSection from './elements/projectsSections/backend'
import FrontEndSection from './elements/projectsSections/frontend'
import MobileSection from './elements/projectsSections/mobile'
import TechSection from './elements/techs'
import { inter } from './styles/fonts'

export default function Home() {
    return (
        <div className={inter.className}>
            <LangSection />
            <TechSection />
            <JobsSection />
            <FrontEndSection />
            <BackEndSection />
            <MobileSection />
        </div>
    )
}
