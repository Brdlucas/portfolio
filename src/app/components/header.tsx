'use client'

import Link from 'next/link';
import ThemeSwitches from './ThemeSwitch';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { X, } from 'lucide-react';
const Header = () => {

  const [openMenuResponsive, setOpenMenuResponsive] = useState(false);
  const [showMenuAccount, setShowMenuAccount] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openSearch, setOpenSearch] = useState(false)

  const pathname = usePathname();


  useEffect(() => {
    if (openMenuResponsive || openSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenuResponsive, openSearch]);


  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowMenuAccount(true);
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMenuAccount(false);
    }, 200);
  };

  return (
    <header className=' max-2xl:h-16 2xl:h-[100px] ' >
      <nav className='max-lg:hidden max-2xl:text-center max-2xl:p-[10px] font-bold 2xl:absolute max-lg:w-[70%] m-auto max-2xl:w-[50%]  flex md:flex-row 2xl:w-[30%] md:right-[250px] lg:mt-8 items-center md:place-content-around'>
        {pathname === '/' ? null : <Link href={'/'} className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto hover:text-[#00ABE4]'>Acceuil</Link>}
        <Link href='/page/contact' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto hover:text-[#00ABE4]'>me contacter</Link>
        <Link href='/page/about' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto hover:text-[#00ABE4]'>a propos</Link>
        <Link href='/page/projects' className='block max-2xl:mb-[10px] max-2xl:w-[50%] max-2xl:m-auto hover:text-[#00ABE4]'>mes projets</Link>
        <ThemeSwitches />
      </nav>

      <div className="flex flex-col gap-1 p-1.5 min-lg:hidden" onClick={() => setOpenMenuResponsive(true)}>
        <span className="w-8 h-1.5 bg-[#1E375A]"></span>
        <span className="w-8 h-1.5 bg-[#1E375A]"></span>
        <span className="w-8 h-1.5 bg-[#1E375A]"></span>
      </div>
      {
        openMenuResponsive && (
          <>
            <div
              className="lg:hidden absolute inset-0 bg-black/50 backdrop-brightness-50 z-40"
              onClick={() => setOpenMenuResponsive(false)}
            ></div>


            <nav className={`${!openMenuResponsive ? "hidden" : "w-[30%] min-lg:hidden  absolute z-50 top-0 bg-gradient-to-tr from-violet-300 to-[#00ABE4]  h-screen max-sm:w-9/12 text-white gap-8 flex flex-col "}`}>
              <span className="absolute right-0 text-center px-3 pt-1" onClick={() => setOpenMenuResponsive(false)}><X /></span>
              <div className="flex items-center flex-col gap-8 text-white mt-20">
                <Link href="/" className=" text-[#00ABE4] w-35 rounded-[16px] p-3  bg-white hover:bg-white hover:text-black text-center" onClick={() => setOpenMenuResponsive(false)}>Accueil</Link>
                <Link href="/page/contact" className=" text-[#00ABE4] w-35 rounded-[16px] p-3  bg-white hover:bg-white hover:text-black text-center" onClick={() => setOpenMenuResponsive(false)}>Contact</Link>
                <Link href="/page/about" className=" text-[#00ABE4] w-35 rounded-[16px] p-3  bg-white hover:bg-white hover:text-black text-center" onClick={() => setOpenMenuResponsive(false)}>A propos</Link>
              </div>
            </nav>
          </>
        )
      }

    </header>
  )
}

export default Header;
