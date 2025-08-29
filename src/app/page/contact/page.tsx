"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

export default function Contact() {
    const isTheme = useTheme();

    const CopyElement = (valueCopy: string, isEmail: boolean) => {

        navigator.clipboard.writeText(valueCopy);

        // valeur null par défaut
        let copyValue = null;
        let copyText = null;

        // email
        const divEmail = document.getElementById('divEmail');
        const textEmail = document.getElementById('textEmail');

        // téléphone
        const divPhone = document.getElementById('divPhone');
        const textPhone = document.getElementById('textPhone');

        isEmail ? copyValue = divEmail : copyValue = divPhone;
        isEmail ? copyText = textEmail : copyText = textPhone;

        // ajoute les changements de couleurs
        copyValue && (copyValue.className += ' bg-[#00abe4]');
        copyText && (copyText.className += ' text-white');

        // enlève après 200 milliseconds
        setTimeout(() => {
            copyValue && copyValue.classList.remove('bg-[#00abe4]');
            copyText && copyText.classList.remove('text-white');
        }, 300)
    }

    return (
        <div className='h-full m-auto flex align-middle justify-center flex-col gap-16 '>
            <div className='w-10/12 m-auto max-lg:w-[90%] p-5 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] rounded-4xl'>
                <h1 className=' text-5xl text-center max-sm:text-4xl font-semibold'>Mes informations</h1>
                <div className='flex justify-center gap-5 my-5'>
                    <div id='divEmail' onClick={() => CopyElement("lb.lucasbourdon@gmail.Com", true)} className='cursor-pointer hover:scale-105 transition duration-300 w-120 text-center place-content-center h-32 rounded-2xl px-2 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)]'>
                        <strong id='textEmail' className='text-3xl text-[#00abe4]'>lb.lucasbourdon@gmail.com</strong>
                    </div>
                    <div id='divPhone' onClick={() => CopyElement("07 68 21 11 49", false)} className='cursor-pointer hover:scale-105 transition duration-300 w-120 text-center  place-content-center h-32 rounded-2xl px-2 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)]'>
                        <strong id='textPhone' className='text-3xl text-[#00abe4]'>07 68 21 11 49</strong>
                    </div>
                </div>

            </div>
            <div className='w-10/12 m-auto max-lg:w-[90%] p-3 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] rounded-4xl'>
                <h1 className=' text-5xl max-sm:text-4xl font-semibold text-center'>Mes réseaux</h1>
                <div className='flex m-5 gap-5 max-sm:flex-col  max-sm:justify-center justify-around'>
                    <Link target="_blank" href={''} className=' shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] mx-auto max-w-100 hover:scale-102 transition duration-300 rounded-2xl h-fit'>
                        <img src="/img/about/github.webp" alt="" width={512} className='h-40 object-contain rounded-2x px-5' />
                    </Link>
                    <Link target="_blank" href={'https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage'} className=' mx-auto max-w-100 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] hover:scale-102 transition duration-300 rounded-2xl h-fit'>
                        <img src="/img/about/indeed.webp" alt="" width={512} className='h-40 object-contain rounded-2xl px-5' />
                    </Link>
                    <Link target="_blank" href={'https://www.linkedin.com/in/lucas-bourdon-97ba91240/'} className='mx-auto max-w-100 shadow-[-1px_4px_14px_7px_rgba(0,_0,_0,_0.1)] hover:scale-102 transition duration-300  rounded-2xl h-fit'>
                        <img src="/img/about/linkedin.webp" alt="" width={512} className='h-40 rounded-2xl object-contain px-2 ' />
                    </Link>
                </div>
            </div>
        </div >
    );
}
