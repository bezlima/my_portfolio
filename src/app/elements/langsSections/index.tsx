import Langs from '@/app/components/langs'
import Title from '@/app/components/title'

export default function LangSection() {
    return (
        <section className="h-auto ml-20 flex flex-col gap-2">
            <Title icon={'/code-icon.svg'} iconSize={[25, 25]} alt={'foo'}>
                linguagens
            </Title>
            <span className="mt-4 flex flex-wrap gap-3">
                <Langs tracking={'tracking-[-0.30em]'} name={['Type', 'Script']} abbr={'TS'} color={'bg-[#1C67C6]'} />
                <Langs tracking={'tracking-[-0.22em]'} name={['Java', 'Script']} abbr={'JS'} color={'bg-[#FAE93E]'} />
            </span>
        </section>
    )
}
