'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import Moon from '../../../public/svg/Moon.svg'
import Sun from '../../../public/svg/sun.svg'

export default function ThemeSwitch() {
    const [chargement, setChargement] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setChargement(true), [])

    if (!chargement) return (
        <Image
            src={Moon}
            width={36}
            height={36}
            sizes="36x36"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
            className='hover:cursor-pointer max-md:absolute max-md:left-[10px] max-md:top-[10px]'
        />
    )

    if (resolvedTheme === 'dark') {
        return <Image src={Sun} width={36} height={36} sizes='36x36' alt='LightMode' onClick={() => setTheme('light')} className='hover:cursor-pointer max-md:absolute max-md:left-[10px] max-md:top-[10px]' />
    }

    if (resolvedTheme === 'light') {
        return <Image onClick={() => setTheme('dark')} src={Moon} width={36} height={36} sizes='36x36' alt='DarkMode' className='hover:cursor-pointer max-md:absolute max-md:left-[10px] max-md:top-[10px]' />
    }

}