'use client'
import Header from "@/app/components/header"

export default function Portfolio() {
    return (
    <body>
        <Header/>
        <div>
            <div>
                <textarea name="search-textarea" cols="10" rows="1" placeholder='Rechercher' className="flex w-[50%] m-auto bg-gray-100 text-center font-semibold "  ></textarea>
            </div>
            <section className="Front-End">
                <h1 className="text-[30px] w-[95%] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase" >Front-End</h1>
            </section>
            <section className="Back-End">
                <h2 className="text-[30px] w-[95%] m-auto border-b-4 border-gray-300 text-purple-500 font-bold uppercase">Back-End</h2>
            </section>
        </div>
    </body>
    )
}
