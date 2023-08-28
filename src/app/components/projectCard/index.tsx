'use client'

import { office } from '@/app/styles/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
    url,
    title,
    description,
    techs,
    www,
}: {
    url: string
    title: string
    description: string
    techs: string
    www?: string
}) {
    return (
        <div
            className="
            flex
            flex-col
            sm:w-96
            mx-4
            sm:mx-0
            min-h-[275px]
            rounded-3xl 
            p-4
            justify-between
            border-2
            border-brown
            dark:border-white
        "
        >
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <Image
                            alt="paste"
                            src="/pasta.svg"
                            width="50"
                            height="50"
                            style={{
                                filter: 'invert(34%) sepia(4%) saturate(4934%) hue-rotate(329deg) brightness(40%) contrast(78%)',
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        {www && (
                            <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                                <Link href={www} target="_blank">
                                    <Image alt="paste" src="/globe-bold.svg" width="50" height="50" />
                                </Link>
                            </div>
                        )}
                        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
                            <Link href={url} target="_blank">
                                <Image
                                    alt="paste"
                                    src="/github.svg"
                                    width="50"
                                    height="50"
                                    style={{
                                        filter: 'invert(34%) sepia(12%) saturate(1225%) hue-rotate(330deg) brightness(99%) contrast(90%)',
                                    }}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-col">
                    <h2 className={`text-brown text-md font-bold dark:text-white mb-3 ${office.className}`}>{title}</h2>
                    <p className={`text-brown text-sm dark:text-white break-all ${office.className}`}>{description}</p>
                </div>
            </div>
            <p className={`text-brown text-sm dark:text-white mt-3  ${office.className}`}>{techs}</p>
        </div>
    )
}
