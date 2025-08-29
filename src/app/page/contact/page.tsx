"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function Contact() {
    const isTheme = useTheme();

    return (
        <div className='h-full m-auto flex align-middle justify-center '>
            <div className='w-10/12 m-auto max-lg:w-[90%] p-5 border-2 border-gray-200 shadow-2xl rounded-4xl'>
                <h1 className=' text-[30px] font-semibold'>Mes informations</h1>
                <div className='m-auto max-md:w-[100%] w-[50%] text-center mt-3 text-[20px] font-semibold flex justify-center gap-14 '>
                    <p className=' text-3xl'>lb.lucasbourdon@gmail.com</p>
                    <p className=' text-3xl'>07.68.21.11.49</p>
                </div>
                <div className='flex gap-5 my-5'>
                    <Link target="_blank" href={''} className=' shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] hover:scale-102 transition duration-300 rounded-2xl h-fit'>
                        <img src="/img/github.png" alt="" width={512} className='h-40 object-contain rounded-2x px-5' />
                    </Link>
                    <Link target="_blank" href={'https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage'} className=' shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] hover:scale-102 transition duration-300 rounded-2xl h-fit'>
                        <img src="/img/indeed.png" alt="" width={512} className='h-40 object-contain rounded-2xl px-5' />
                    </Link>
                    <Link target="_blank" href={'https://www.linkedin.com/in/lucas-bourdon-97ba91240/'} className='shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] hover:scale-102 transition duration-300  rounded-2xl h-fit'>
                        <img src="/img/linkedin.png" alt="" width={512} className='h-40 rounded-2xl object-contain px-2 ' />
                    </Link>

                </div>
            </div>
        </div >
    );
}
