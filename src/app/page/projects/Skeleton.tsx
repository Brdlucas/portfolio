import React from 'react'


export default function Skeleton() {
    return (
        <div className='md:pl-[50px] mt-5 max-md:pt-10 grid grid-cols-3 gap-20 max-md:gap-10 max-md:grid-cols-1 max-md:text-center mb-5 max-lg:grid-cols-2'>
            {
                [...Array(6)].map((_, index) => (
                    <div key={index} className="animate-pulse block m-auto drop-shadow-2xl bg-gray-100 shd w-[80%] h-full rounded-[25px] hover:rounded-[15px] hover:scale-110 duration-400 transition ease-in-out delay-150">
                        <div className='relative h-[100px] border-b-4 border-gray-300'>
                            <div className="rounded-t-[20px] bg-gray-300 w-full h-full" />
                        </div>
                        <div className='md:pl-5 pt-2'>
                            <div className='font-semibold text-[20px] w-[200px] bg-gray-300 h-[50px] mb-5'></div>
                            <div className='font-semibold w-[200px] bg-gray-300 h-[60px]'></div>
                            <div className='m-auto mt-3 block w-[55%] h-[60px] mb-3 bg-gray-300 rounded-[20px]'></div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
