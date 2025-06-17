import React from 'react';
import { Raleway  } from 'next/font/google'

const pacifico = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });
const PageLayout=({children}:Readonly<{
    children:React.ReactNode
}>)=>{
   return(
    <>
        <div className={`container mx-auto px-6 bg-gray-50 pt-1 pb-10 ${pacifico.className}`}>
            <div className="flex flex-col md:flex-row w-full gap-4 mt-8">
                <div className="w-full md:w-[20%]  rounded-md">
                    <section className='bg-white text-black rounded-md border-2 border-gray-100'>
                        <p className='p-4 font-bold border-b-1 border-gray-200'>Price Range</p>
                        <div className='p-5 relative mt-5'>
                            <input type="range" min={0} max={100} value={0} className='absolute top-0 w-full h-1 bg-transparent appearance-none pointer-events-none'/>
                            <input type="range" id="maxRange" min={0} max={100} value={80} className="absolute top-0 w-full h-1 bg-transparent appearance-none pointer-events-none"/>
                        </div>
                        <div className='p-5 flex gap-6 justify-between w-full'>
                            <input type="text" value={1000}  className='items-center w-full border-1 border-gray-400 py-1 outline-none'/>
                            <input type="text" value={120500} className='items-center-safe w-full border-1 border-gray-400 py-1  focus:outline-none'/>
                        </div>
                    </section>
                    <section className='bg-white text-black rounded-md mt-10 border-2 border-gray-100'>
                        <p className='p-4 font-bold border-b-1 border-gray-200'>Brands</p>
                        <div className='p-5 relative list-none gap-5'>
                            <li><a>Lenevo</a></li>
                            <li><a>Asus</a></li>
                            <li><a>HP</a></li>
                            <li><a>DELL</a></li>
                            <li><a>Appel</a></li>
                        </div>
                    </section>
                    <section className='bg-white text-black rounded-md mt-10 border-2 border-gray-100'>
                        <p className='p-4 font-bold border-b-1 border-gray-200'>Category</p>
                        <div className='p-5 relative list-none gap-5'>
                            <li><a>Lenevo</a></li>
                            <li><a>Asus</a></li>
                            <li><a>HP</a></li>
                            <li><a>DELL</a></li>
                            <li><a>Appel</a></li>
                        </div>
                    </section>
                </div>
                <div className="w-full md:w-[80%] bg-white p-4 rounded-md border-2 border-gray-100">
                    {children}
                </div>
            </div>
        </div>
         
    </>
   )
}
export default PageLayout;