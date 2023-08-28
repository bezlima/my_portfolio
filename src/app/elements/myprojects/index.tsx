import { font2d } from '@/app/styles/fonts'
import ProjectCard from '../../components/projectCard'

export default function Project() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center h-full my-20">
            <h2 className={`text-brown  text-md font-bold text-center mb-5 ${font2d.className}`}>PROJETOS</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <ProjectCard
                    url={'https://github.com/bezlima/my-maps'}
                    www="https://my-maps-bezlima.vercel.app/"
                    title={'my-maps'}
                    description={
                        'O projeto é uma aplicação web interativa que permite ao usuário ver e interagir com um mapa, tendo como base Open Street Map e React-leaflet.'
                    }
                    techs={'NextJs, ReactJs, TypeScript & React-Leaflet'}
                />
                <ProjectCard
                    url={'https://github.com/bezlima/draw-black-board'}
                    title={'draw-black-board'}
                    description={
                        'O projeto é uma aplicação web interativa que permite ao usuário desenhar. O canvas é uma área de desenho em branco onde o usuário pode criar arte digital.'
                    }
                    techs={'NextJs, ReactJs & TypeScript'}
                />
                <ProjectCard
                    url={'https://github.com/bezlima/native_navigation'}
                    title={'native_navigation'}
                    description={
                        'Projeto criado para aprender estrutura de navegação no React-Native. As estruturas de navegação utilizadas foram: Drawer, Tab e Stack.'
                    }
                    techs={'React-Native, JavaScript'}
                />
                <ProjectCard
                    url={'https://github.com/bezlima/cooking_blog'}
                    title={'cooking_blog'}
                    description={
                        'É um sistema back-end criado com o objetivo aprender os princípios de construção de um sistema um back-end. A ideia baseia-se em um blog de culinária, onde há 3 níveis de usuário sendo eles: administração, publicadores e leitores.'
                    }
                    techs={'NodeJs, Express & TypeScript'}
                />
                <ProjectCard
                    url={'https://github.com/bezlima/temperature'}
                    title={'temperature'}
                    description={
                        'Aplicativo de visualização de temperatura em tempo real, utilizando a API do openweathermap com imagens da API do unsplash, aplicativo criado com Next, React e tailwind'
                    }
                    techs={'NextJs, ReactJs, Tailwind & TypeScript'}
                />
                <ProjectCard
                    url={'https://github.com/bezlima/CalculadoraImc'}
                    title={'CalculadoraImc'}
                    description={
                        'Estudos de conceitos básicos em JavaScript, esse foi um dos primeiros projetos que desenvolvi com JavaScript'
                    }
                    techs={'HTML5, CSS3 e JavaScript'}
                />
            </div>
        </div>
    )
}