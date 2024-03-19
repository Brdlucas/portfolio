"use client"
import Image from 'next/image';
import Header from "@/app/components/header";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Portfolio() {


    const fetchProjects = async () => {
        const res = await fetch("/api/projects");
        const projects = await res.json();
        return projects;
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then((projects) => {
            setProjects(projects);
        });
    }, []);

    return (
        <div>
            <Header />
            <div>
                <div>
                    <textarea name="search-textarea" placeholder='Rechercher' className="mt-5 flex pt-5t m-auto bg-gray-100 text-center font-semibold resize-none w-[70%]" />
                </div>
                <section className="m-auto w-[95%] pt-10">
                    <h1 className="pl-1 text-[30px] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">Projet</h1>
                    <div className='md:pl-[50px] mt-5 max-md:pt-10 grid grid-cols-3 gap-20 max-md:gap-10 max-md:grid-cols-1 max-md:text-center mb-5 max-lg:grid-cols-2'>
                        {
                            projects.map((project: any) => {
                                return (
                                    <div key={project._id} className="block m-auto drop-shadow-2xl bg-gray-100 shd w-[80%] h-full rounded-[25px] hover:rounded-[15px] hover:scale-110 duration-400 transition ease-in-out delay-150">
                                        <div className='relative h-[100px] border-b-4 border-gray-800'>
                                            <Image
                                                src={project.image}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="rounded-t-[20px]"
                                                alt="Photo de Profile"
                                                property='Lucas Bourdon'
                                                sizes='5x5'
                                                priority
                                            />
                                        </div>
                                        <div className='md:pl-5 pt-2'>
                                            <p className=' font-semibold text-[20px] text-black'>{project.title}</p>
                                            <p className='mt-2 h-[full] min-h-[90px] text-black'>{project.description}</p>
                                            <Link target='_blank' href={project.link} className='m-auto mb-3 mt-3 block w-[55%] text-center font-semibold text-[15px] text-white rounded-[20px] p-5 bg-purple-500 hover:bg-indigo-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300'>Voir {project.title}</Link>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}