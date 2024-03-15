"use client"
import Image from 'next/image';
import Header from "@/app/components/header"
import Profile from '/public/img/_DSC5091.jpg';
import { useEffect, useState } from 'react';

export default function Portfolio() {

    const fetchProjects = async () => {
        const res = await fetch("http://localhost:3000/api/projects");
        const projects = await res.json();
        return projects;
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then((projects) => {
            setProjects(projects);
        });
    }, []);

    console.log(projects[0])

    return (
        <div>
            <Header />
            <div>
                <div>
                    <textarea name="search-textarea" placeholder='Rechercher' className="flex w-[50%] m-auto bg-gray-100 text-center font-semibold resize-none " />
                </div>
                <section className="m-auto w-[95%]">
                    <h1 className="text-[30px] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">Front-End</h1>
                    {
                        projects.map((project: any) => {
                            return (
                                <div key={project._id} className='pl-[50px] flex  gap-x-20 flex-wrap mb-5'>
                                    <div className="mt-5 bg-gray-200 drop-shadow-2xl shd w-[20%] max-xl:w-[25%] max-md:w-[35%] h-[300px] rounded-[25px]">
                                        <div className='relative h-[100px] border-b-4 border-gray-800'>
                                            <Image
                                                src={project.image}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className="rounded-t-[30px]"
                                                alt="Photo de Profile"
                                                property='Lucas Bourdon'
                                                sizes='5x5'
                                            />
                                        </div>
                                        <div className='pl-5 pt-2'>
                                            <p className=' font-semibold text-[20px]'>{project.title}</p>
                                            <p className='mt-5'>{project.description}</p>
                                            <p className='mt-5'>{project.link}</p>
                                            <p className='mt-5'>{project.image}</p>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </section>
                <section className="m-auto w-[95%]">
                    <h2 className="text-[30px] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">Back-End</h2>
                    <div className='pl-[50px] flex  gap-x-20 flex-wrap mb-5'>
                        <div className="mt-5 bg-gray-200 drop-shadow-2xl shd w-[20%] max-xl:w-[25%] max-md:w-[35%] h-[300px] rounded-[25px]">
                            <div className='relative h-[100px] border-b-4 border-gray-800'>
                                <Image
                                    src={Profile}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="rounded-t-[30px]"
                                    alt="Photo de Profile"
                                    property='Lucas Bourdon'
                                    sizes='5x5'
                                />
                            </div>
                            <div className='pl-5 pt-2'>
                                <p className=' font-semibold text-[20px]'>title</p>
                                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p className='mt-5'>url</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}