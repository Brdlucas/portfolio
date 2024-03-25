"use client"
import Image from "next/image"
import Link from "next/link.js";
import Header from '@/app/components/header';
import Language from '../../components/language.js'

export default function About() {
    return (
        <div className="w-[70%] m-auto h-full ">
            <Header />
            <section className="text-justify pt-5">
                <p>Lorem ipsum dolor sit amet, conssectetur adipisicing elit. Sapiente vero autem, magni ab perspiciatis tempore corporis expedita nisi neque totam. Similique facilis, quam harum optio labore quisquam dolorem provident voluptatem.
                    Odit vitae, praesentium molestias minima ratione quam quaerat voluptatum incidunt amet ipsum suscipit ab veritatis, et debitis? Nesciunt hic quae natus, ipsum architecto praesentium at blanditiis voluptas sint similique cumque.
                    Architecto harum doloremque cum natus accusantium facilis pariatur odit quod. In repudiandae ipsa iusto magnam aut? Possimus quod beatae alias consequuntur dolorum debitis repellendus odio voluptatem quasi dolores, recusandae illum?
                    Consectetur earum recusandae perspiciatis, illum sapiente sequi distinctio provident deleniti voluptatum exercitationem laborum iure hic reiciendis magnam tempora ipsam. Architecto dolorum aut quae veritatis reprehenderit qui perspiciatis ullam earum recusandae.
                    Facere totam maxime magnam, quibusdam assumenda placeat. Vitae odit mollitia corporis non consectetur distinctio, ex dolorum itaque, dicta ab tempore porro nisi enim blanditiis quasi, doloremque ut veniam in fuga.
                    Adipisci maiores nulla temporibus harum iste quod recusandae et voluptates quas, sint, mollitia quis, cum sapiente ipsa facere! Asperiores soluta ducimus debitis explicabo assumenda libero odio tenetur iste sequi voluptates?
                    Sapiente sint repellendus ex? Deleniti perferendis nostrum earum at molestias inventore doloremque? Necessitatibus, qui at. Eius quasi itaque fugit veniam iure ut voluptatem totam, labore aperiam, in perspiciatis consectetur illum!
                    Beatae eum dicta ex consequatur aut veritatis voluptas alias magni, illo sequi necessitatibus libero nobis! Sint odio ullam accusantium labore et! Esse quibusdam unde iste nulla assumenda maxime, recusandae odit?</p>
            </section>
            <section>
                <h1 className="border-b-2 border-purple-600 pt-5 text-[30px] font-semibold uppercase">Langage : </h1>
                <h2 className="text-[30px] text-center bg-gray-50 w-[20%] m-auto font-semibold mt-5 uppercase">FrontEnd</h2>
                <div className="grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto bg-gray-50 mt-2 border ">
                    {
                        Language.map((language) => {
                            if (language.type == "frontend") {
                                return (
                                    <div key={language.id} className="">
                                        <div className="group bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Link href={language.link || "/"} className="opacity-0 duration-300 group-hover:opacity-75 text-center bg-gray-700 text-white p-1 rounded">{language.alt}</Link>
                                            </div>
                                            <Image className="m-auto" src={language.src} alt={language.alt} width={language.width} height={language.height} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <h2 className="text-[30px] text-center bg-gray-50 w-[20%] m-auto font-semibold mt-5 uppercase">css</h2>
                <div className="grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto bg-gray-50 mt-5 border">
                    {
                        Language.map((language) => {
                            if (language.type == "css") {
                                return (
                                    <div key={language.id} className="">
                                        <div className="group bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Link href={language.link || "/"} className="opacity-0 duration-300 group-hover:opacity-75 text-center bg-gray-700 text-white p-1 rounded">{language.alt}</Link>
                                            </div>
                                            <Image className="m-auto" src={language.src} alt={language.alt} width={language.width} height={language.height} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
                <h2 className="text-[30px] text-center bg-gray-50 w-[20%] m-auto font-semibold mt-5 uppercase">Backend</h2>
                <div className="grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto bg-gray-50 mt-5 mb-3 border">
                    {
                        Language.map((language) => {
                            if (language.type == "backend") {
                                return (
                                    <div key={language.id} className="">
                                        <div className="group bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Link href={language.link || "/"} className="opacity-0 duration-300 group-hover:opacity-75 text-center bg-gray-700 text-white p-1 rounded">{language.alt}</Link>
                                            </div>
                                            <Image className="m-auto" src={language.src} alt={language.alt} width={language.width} height={language.height} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <h2 className="text-[30px] text-center bg-gray-50 w-[20%] m-auto font-semibold mt-5 uppercase">Database</h2>
                <div className="grid gap-5 grid-flow-cols grid-cols-5 p-3 m-auto bg-gray-50 mt-5 mb-3 border">
                    {
                        Language.map((language) => {
                            if (language.type == "database") {
                                return (
                                    <div key={language.id} className="">
                                        <div className="group bg-gray-100 hover:bg-gray-300 hover:cursor-pointer w-[130px] p-2 m-auto rounded-[5px] hover:scale-105 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Link href={language.link || "/"} className="opacity-0 duration-300 group-hover:opacity-75 text-center bg-gray-700 text-white p-1 rounded">{language.alt}</Link>
                                            </div>
                                            <Image className="m-auto" src={language.src} alt={language.alt} width={language.width} height={language.height} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </section >
        </div >
    )
}