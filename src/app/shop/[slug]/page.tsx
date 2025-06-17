import React from 'react'
import { Exo_2,Raleway  } from 'next/font/google'
const exo2  =Exo_2({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // যা দরকার
    display: 'swap',
  })
const pacifico = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });

const Shop=()=>{
  return (
    <>
       <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400 `}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400`}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400`}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400 `}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400 `}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400`}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400`}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"}}>
                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </button>
                </div>
                <div className={`p-5 text-gray-400 `}>
                    <p className='font-bold text-md text-gray-400'>Essence Mascara Lash Princess</p>
                    <p className='mt-2 text-md text-gray-400 font-lato font-semibold'>
                        Category:Beauty
                    </p>
                    <p className='mt-4 text-md text-gray-400 text-justify font-lato'>
                    he Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                    </p>
                    <div className="flex gap-2 mt-4">
                        <p className="font-bold p-2 text-lg">25$</p>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Add to compare</button>
                        <button className='border-1 border-gray-300 py-1 px-2 rounded-md'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Shop;
