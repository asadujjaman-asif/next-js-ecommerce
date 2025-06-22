import React from "react";
const PriceRange: React.FC = () =>{
    return (
        <>
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
        </>
    )
}
export default PriceRange;