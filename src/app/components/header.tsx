'use client'

import Link from 'next/link';
import ThemeSwitches from './ThemeSwitch';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='max-2xl:h-[120px] 2xl:h-[100px] max-md:h-[150px]'>
      <nav className='max-2xl:text-center max-2xl:p-[10px] font-bold 2xl:absolute max-lg:w-[70%] m-auto max-2xl:w-[50%]  md:flex md:flex-row 2xl:w-[30%] md:right-[250px] md:mt-8 items-center md:place-content-around'>
        {pathname === '/' ? null : <Link href={'/'} className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto'>Home</Link>}
        <Link href='/page/contact' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto'>Contact</Link>
        <Link href='/page/about' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto'>About</Link>
        <Link href='/page/projects' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto'>Projects</Link>
        <ThemeSwitches />
      </nav>
    </header>
  )
}

export default Header;
