import Image from 'next/image'
import SmCard from '../../components/smCard'
import { font2d } from '@/app/styles/fonts'

export default function Techs() {
    return (
        <div id="techs" className="flex flex-col gap-12 items-center justify-center h-full my-20">
            <div className="flex flex-col items-center">
                <h2 className={`text-brown text-md font-bold mb-5 ${font2d.className}`}>LINGUAGENS</h2>
                <div className="flex items-center gap-11">
                    <SmCard abbr={'JavaScript'}>
                        <Image src={'./JS.svg'} alt="JavaScript" width={80} height={80} />
                    </SmCard>
                    <SmCard abbr={'TypeScript'}>
                        <Image src={'./typescript.svg'} alt="TypeScript" width={80} height={80} />
                    </SmCard>
                </div>
            </div>
            <div className="flex flex-col">
                <h2 className={`text-brown text-md font-bold mb-5 ${font2d.className} text-center`}>TECHS</h2>
                <div className="flex items-center justify-center flex-row flex-wrap gap-3">
                    <SmCard abbr={'Nextjs'}>
                        <Image src={'./Nextjs.svg'} alt="Nextjs" width={80} height={80} />
                    </SmCard>
                    <SmCard abbr={'ReactJs'}>
                        <Image src={'./React.svg'} alt="ReactJs" width={60} height={60} />
                    </SmCard>
                    <SmCard abbr={'Tailwind'}>
                        <Image src={'./tailwind.svg'} alt="Tailwind" width={80} height={80} />
                    </SmCard>
                    <SmCard abbr={'Sass'}>
                        <Image src={'./sass.svg'} alt="Sass" width={80} height={80} />
                    </SmCard>
                    <SmCard abbr={'Css3'}>
                        <Image src={'./css3.svg'} alt="Css3" width={50} height={50} />
                    </SmCard>
                    <SmCard abbr={'HTML5'}>
                        <Image src={'./html5.svg'} alt="HTML5" width={50} height={50} />
                    </SmCard>
                    <SmCard abbr={'Scrum'}>
                        <Image src={'./scrum.svg'} alt="Scrum" width={80} height={80} />
                    </SmCard>
                    <SmCard abbr={'GitHub'}>
                        <Image src={'./github.svg'} alt="GitHub" width={60} height={60} />
                    </SmCard>
                    <SmCard abbr={'Figma'}>
                        <Image src={'./figma.svg'} alt="Figma" width={60} height={60} />
                    </SmCard>
                    <SmCard abbr={'Adobe Illustrator'}>
                        <Image src={'./illustrator.svg'} alt="Adobe Illustrator" width={60} height={60} />
                    </SmCard>
                    <SmCard abbr={'Adobe Photoshop'}>
                        <Image src={'./psd.svg'} alt="Adobe Photoshop" width={60} height={60} />
                    </SmCard>
                    {/* 
                            style-component
                            redux
                            react-rook-form
                            api
                        */}
                </div>
            </div>
        </div>
    )
}
