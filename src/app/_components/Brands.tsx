import React from "react";
const Brands: React.FC = () =>{
    return (
        <>
            <section className='bg-white text-black rounded-md mt-10 border-2 border-gray-100'>
                <p className='p-4 font-bold border-b-1 border-gray-200'>Brands</p>
                <div className='p-5 relative list-none gap-5'>
                    <li><input type="checkbox"  className='border-1 border-gray-100'/> Lenevo</li>
                    <li><input type="checkbox"  className='border-1 border-gray-100'/> Asus</li>
                    <li><input type="checkbox"  className='border-1 border-gray-100'/> HP</li>
                    <li><input type="checkbox"  className='border-1 border-gray-100'/> DELL</li>
                    <li><input type="checkbox"  className='border-1 border-gray-100'/> Appel</li>
                </div>
            </section>
        </>
    )
}
export default Brands;