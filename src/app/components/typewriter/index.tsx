'use client'

import { useEffect, useState } from 'react'
import { font2d } from '@/app/styles/fonts'

export default function Typewriter({ text }: { text: string }) {
    const [charIndex, setCharIndex] = useState<number>(1)
    const [forward, setForward] = useState<boolean>(true)

    useEffect(() => {
        const interval = setInterval(() => {
            if (forward) {
                setCharIndex((prevIndex) => prevIndex + 1)
            } else {
                setCharIndex((prevIndex) => prevIndex - 1)
            }
        }, 350)
        return () => clearInterval(interval)
    }, [charIndex, forward])

    useEffect(() => {
        if (charIndex === text.length + 1) {
            setForward(false)
        } else if (charIndex === 1) {
            setForward(true)
        }
    }, [charIndex, text.length])

    return (
        <div className="relative">
            <span className={`${font2d.className} text-lg`}>{text.substring(0, charIndex)}</span>
            <span className="animate-ping duration-[5ms] text-lg">|</span>
        </div>
    )
}
