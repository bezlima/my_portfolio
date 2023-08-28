import { ReactNode } from 'react'

export default function SmCard({ children, abbr }: { children: ReactNode; abbr: string }) {
    return (
        <abbr className="no-underline" title={abbr}>
            <div
                className="
                flex 
                items-center 
                justify-center
                h-20
                w-20
                p-2
                hover:scale-105
                rounded-3xl
                cursor-pointer
                dark:bg-white
            "
            >
                {children}
            </div>
        </abbr>
    )
}
