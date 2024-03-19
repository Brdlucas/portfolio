"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';

export default function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    const [succes, setSucces] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSucces(false);
        setEmailError(false)

        const ValidEmail = (email: any) => email.includes('@');
        const ValidText = (text: any) => /^[a-zA-Z]+$/.test(text);

        const FormValid = (email: any, lastname: any, firstname: any, company: any) => {
            return ValidEmail(email) && ValidText(lastname) && ValidText(firstname) && ValidText(company);
        }


        if (FormValid(email, firstname, lastname, company)) {
            const formContact = {
                firstname,
                lastname,
                email,
                company
            };

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
                setSucces(true);

                setFirstname('');
                setLastname('');
                setEmail('');
                setCompany('');

            } catch (error) {
                console.error('Erreur:', error);
                setSucces(false)
            }
        } else {
            setEmailError(true)
        }

    };




    return (
        <div className='h-screen'>
            <Header />
            <form onSubmit={handleSubmit} className='mt-5 m-auto w-[50%] max-md:w-[90%]'>
                <div className='grid grid-cols-1 gap-10 m-auto text-center drop-shadow-2xl rounded-[15px] pt-16 pb-16 border-[3px] border-gray-300'>
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Prénom" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Nom" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    {emailError && <p className='bg-red-700 text-white border-red-900 w-[350px] m-auto rounded-[15px]'>des caractères ou l&apos;email n&apos;est pas valide.</p>}
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} required />
                    <button type="submit" className='max-lg:w-[50%] drop-shadow-2xl rounded-[30px] bg-purple-800 text-white w-[20%] hover:transf h-[70px] m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Envoyer</button>
                </div>
            </form>
            {succes && <p className="bg-gray-100 rounded-[30px] w-96 m-auto text-green-600 text-center mt-4">Votre message a été envoyé avec succès !</p>}
        </div>
    );
}
