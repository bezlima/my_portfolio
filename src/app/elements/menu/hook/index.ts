'use client'

import { useEffect, useState } from 'react'

export default function MenuHook() {
    const [esterEgg, setEsterEgg] = useState<number>(0)

    const increment = () => {
        setEsterEgg(esterEgg + 1)
    }

    useEffect(() => {
        if (esterEgg === 11) {
            setEsterEgg(1)
        }
    }, [esterEgg])

    return { esterEgg, increment }
}
