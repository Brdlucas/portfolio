"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';

export default function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        // Les données à envoyer
        const formContact = {
            firstname,
            lastname,
            email,
            company
        };

        // Envoi les données avec fetch dans un try catch pour les erreurs
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formContact),
            });

            if (!response.ok) throw new Error('Api non connecté');


            const contactData = await response.json();
            console.log('Succès:', contactData);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };


    return (
        <div className='h-screen'>
            <Header />
            <form onSubmit={handleSubmit} className='mt-5 m-auto w-[50%] max-md:w-[90%]'>
                <div className='grid grid-cols-1 gap-10 m-auto text-center drop-shadow-2xl rounded-[15px] pt-16 pb-16 border-[3px] border-gray-300'>
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Prénom" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Nom" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <button type="submit" className='max-lg:w-[50%] drop-shadow-2xl rounded-[30px] bg-purple-800 text-white w-[20%] hover:transf h-[70px] m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Envoyer</button>

                </div>
            </form>
        </div>
    );
}
