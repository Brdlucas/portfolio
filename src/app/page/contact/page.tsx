"use client"
import Header from '@/app/components/header';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [job, setJob] = useState('');

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
                company,
                description,
                job
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

                setJob('');
                setEmail('');
                setCompany('');
                setLastname('');
                setFirstname('');
                setDescription('');

            } catch (error) {
                console.error('Erreur:', error);
                setSucces(false)
            }
        } else {
            setEmailError(true)
        }

    };

    return (
        <div className='h-full m-auto'>
            <Header />
            <div className=' pt-3 w-[50%] m-auto'>
                <h1 className=' text-[30px] border-b-2 border-purple-600'>Mes informations</h1>
                <div className='m-auto w-[50%] text-center mt-3 text-[20px] font-semibold'>
                    <p>email : lb.lucasbourdon@gmail.com</p>
                    <p>téléphone : 07.68.21.11.49</p>
                </div>
                <p className='border-b-2 border-purple-600 text-[30px] m-auto mt-5'>S&apos;enregistrer</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-5 m-auto w-[50%] max-md:w-[90%]'>
                <div className='grid grid-cols-1 gap-10 m-auto text-center drop-shadow-2xl rounded-[15px] pt-16 pb-6 border-[3px] border-gray-300'>
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Prénom" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Nom" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                    {emailError && <p className='bg-red-700 text-white border-red-900 w-[350px] m-auto rounded-[15px]'>des caractères ou l&apos;email n&apos;est pas valide.</p>}
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} required />
                    <input className='w-[70%] text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500  m-auto h-[50px] focus:rounded-[15px] pl-3 hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' type="text" placeholder="Poste" value={job} onChange={(e) => setJob(e.target.value)} required />
                    <textarea className='w-[70%] resize-none pl-3 text-black hover:border-[3px] hover:border-purple-500 bg-white outline-purple-500 m-auto h-[150px] focus:rounded-[15px] hover:cursor-pointer hover:rounded-[15px] hover:scale-110 duration-400' placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <button type="submit" className='max-lg:w-[50%] drop-shadow-2xl rounded-[30px] bg-purple-800 text-white w-[20%] h-[70px] m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>Envoyer</button>
                </div>
            </form>
            {succes && <p className="bg-gray-100 rounded-[30px] w-96 m-auto text-green-600 text-center mt-4">Votre message a été envoyé avec succès !</p>}
            <div className='mt-3 mb-5'>
                <h2 className='w-[50%] m-auto text-[30px] border-b-2 border-purple-600 mt-10 upp'>Autre</h2>
                <div className='w-[30%] mt-3 m-auto flex justify-between'>
                    <Link target="_blank" href={'https://www.linkedin.com/in/lucas-bourdon-97ba91240/'} className='w-[50xp]'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
                            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                        </svg>
                    </Link>
                    <Link target="_blank" href={'https://lucasbourdoncv.000webhostapp.com/'}>
                        <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 9L15 15L17 9M10 15C9.06812 15 8.60218 15 8.23463 14.8478C7.74458 14.6448 7.35523 14.2554 7.15224 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 7.15224 10.2346C7.35523 9.74458 7.74458 9.35523 8.23463 9.15224C8.60218 9 9.06812 9 10 9M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link target="_blank" href={'https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage'}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 32 32">
                            <path d="M 18.5 2 C 10.75 2 6 11.25 6 16 C 6 16 9.25 4 19 4 C 22.625 4 25 6 25 6 C 25 6 24 2 18.5 2 z M 17.5 7 A 3.5 3.5 0 1 0 17.5 14 A 3.5 3.5 0 1 0 17.5 7 z M 20 16 C 20 16 19 17 15 17 L 15 27.5 C 15 28.881 16.119 30 17.5 30 C 18.881 30 20 28.881 20 27.5 L 20 16 z"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
