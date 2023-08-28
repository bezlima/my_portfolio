import { font2d, office } from '@/app/styles/fonts'

export default function Works() {
    const companies = [
        {
            name: 'B2K TECH',
            period: 'Ago 2022 - Atual',
            description: 'Empresa que desenvolve soluções tecnológicas voltadas ao agronegócio',
        },
        {
            name: 'TURIER TECH',
            period: 'Ago 2022 - Jan 2023',
            description: 'Empresa que desenvolve soluções tecnológicas voltadas a saúde',
        },
    ]

    return (
        <div className="h-full my-20">
            <h2 className={`text-brown text-md font-bold mb-5 text-center ${font2d.className}`}>EXPERIÊNCIA</h2>
            <div id="work" className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-evenly py-10 relative w-3/4">
                    <div className="h-full 2xl:w-1 bg-brown rounded-md absolute left-1/2 transform -translate-x-1/2 "></div>
                    {companies.map((company, index) => (
                        <div
                            key={`companies${index}`}
                            className={`flex items-center w-full mb-10 ${
                                index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            }`}
                        >
                            <div
                                className={`border-2 border-brown dark:border-white rounded-lg w-[600px] p-6 sm:mr-6 sm:ml-6  ${
                                    index % 2 === 0 ? 'lg:ml-2' : 'lg:mr-2'
                                }`}
                            >
                                <h3 className={`text-lg text-brown font-semibold  ${office.className}`}>
                                    {company.name}
                                </h3>
                                <p className={`text-xs text-neutral-600 dark:text-white ${office.className}`}>
                                    {company.period}
                                </p>
                                <p className={`text-neutral-700 dark:text-white mt-3 ${office.className}`}>
                                    {company.description}
                                </p>
                            </div>
                            <div
                                className={`lg:w-2 lg:h-2 bg-brown dark:bg-white rounded-full ${
                                    index % 2 === 0 ? 'ml-4' : 'mr-4'
                                }`}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
