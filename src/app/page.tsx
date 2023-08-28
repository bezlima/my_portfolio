import About from './elements/about'
import Techs from './elements/techs'
import Works from './elements/works'
import Project from './elements/myprojects'
import Menu from './elements/menu'
import { inter } from './styles/fonts'
import Footer from './elements/footer'

export default function Home() {
    return (
        <div className={inter.className}>
            <div className="h-90">
                <Menu />
                <About />
                <Techs />
                <Works />
                <Project />
                <Footer />
            </div>
        </div>
    )
}
