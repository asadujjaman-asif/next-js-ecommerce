import React from 'react';
import { Raleway  } from 'next/font/google'
import PriceRange from '../_components/PriceRange';
import Brands from '../_components/Brands';
import SubCategory from '../_components/SubCategory';

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
                        <PriceRange />
                    </section>
                    <Brands />
                    <SubCategory />
                    
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