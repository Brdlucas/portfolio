"use client"

import Image from 'next/image';
import Header from './components/header.tsx';
import Profile from '../../public/img/_DSC5091.jpg';
import Link from 'next/link';




export default function Home() {
  return (
    <main className='max-2xl:h-[1000px]'>
      <Header/>
      <section className='max-2xl:h-[65%] max-2xl:pt-5 pt-5'>
        <h1 className=' max-2xl:leading-[40px] pt-[5px] tracking-tighter text-[35px] max-2xl:m-auto mt-16 text-center max-2xl:w-[75%] md:left-[240px] md:w-[30%] 2xl:absolute font-bold'>Développeur web et <a className='text-purple-500'>web mobile</a></h1>
        <div className='2xl:absolute max-2xl:mt-5 max-2xl:w-[260px] max-2xl:h-[260px] max-2xl:m-auto md:right-72 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full md:w-[510px] md:h-[510px] pt-1'>
        <div className='rounded-full md:h-[500px] md:w-[500px] max-2xl:h-[250px] m-auto max-2xl:w-[250px] relative'>
        <Image
          src={Profile}
          fill
          style={{objectFit:"cover"}}
          className="rounded-full"
          alt="Photo de Profile"
          property='Lucas Bourdon'
          sizes='36x36'
          />
        </div>
        <strong className='block text-center mt-[15px] w-[75%] m-auto max-2xl:text-[25px] md:text-[30px]'>Lucas Bourdon</strong>
          </div>
        <div className=' h-[40%] 2xl:absolute md:left-[240px] max-2xl:mt-5 2xl:mt-48 2xl:w-[35%]'>
        <h2 className='max-2xl:mt-16 max-2xl:m-auto md:text-2xl text-justify tracking-tighter max-2xl:w-[75%] max-3xl:w-[90%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ipsum voluptates, totam sequi maxime a ut. Voluptatibus voluptatem ea, ad eligendi, ab quod eum possimus magnam repellat fugiat fuga?</h2>
        <Link shallow href="/page/projects" className='2xl:absolute max-2xl:block m-auto max-2xl:w-[30%] max-md:w-[70%] max-md:mt-5 max-2xl:mt-10 2xl:mt-16 2xl:w-[35%] text-center text-2xl text-white p-5 bg-gradient-to-r from-violet-500 to-fuchsia-500'>Mes créations</Link>
        </div>
      </section>
    </main>
  );
}
