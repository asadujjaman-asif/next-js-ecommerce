import Link from 'next/link';
import React from 'react'
import { Raleway } from 'next/font/google';
import { FiFacebook,FiTwitter,FiYoutube,FiLinkedin   } from "react-icons/fi";
const pacifico = Raleway({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  });

const Header = () =>{
  return (
    <>
        <header className="bg-white">
            <div className={`container mx-auto ${pacifico.className}`}>
                <div className="bg-gray-200">
                    <div className='py-2 px-6 flex items-center justify-between'>
                        <div className={`hidden w-full text-gray-600 md:flex md:items-center ${pacifico.className}`}>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><FiFacebook /></a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><FiTwitter /></a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><FiYoutube /></a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><FiLinkedin /></a>
                            <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#"><FiTwitter /></a>
                        </div>
                        <div className="w-full text-slate-500 flex ">
                            <a href="" className='border-r-2 border-slate-400 px-1'>2 Years OF Warranty</a>
                            <a href="" className='border-r-2 border-slate-400 px-1'>info@neelghuri.com</a>
                            <a href="" className='border-r-2 border-slate-400 px-1'>Offer</a>
                            <a href="" className='px-1'>New Arrival</a>
                        </div>
                        <div className="flex items-center justify-end w-full">
                            <Link href="/login" className="text-slate-500 border-2 border-slate-200 py-1 px-2 rounded-md cursor-pointer ">
                                Login
                            </Link>
                            <Link href="/create-account" className="text-slate-500 border-2 border-slate-200 py-1 px-2 rounded-md cursor-pointer ml-1">
                                Create an account
                            </Link>
                            <button className="text-slate-500 border-2 border-slate-200 py-1 px-2 rounded-md cursor-pointer ml-1">
                                <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </button>

                            <div className="flex sm:hidden">
                                <button  type="button" className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="sm:flex justify-between sm:items-center px-6 ">
                    <div className={`hidden  text-gray-600 md:flex md:items-center ${pacifico.className}`}>
                        <span className='text-blue-400'>NEEL</span>
                        <span className="mx-1 text-sm">GHURI</span>
                    </div>
                    <div className="relative py-2 w-1/3">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <input className="pl-10 py-2  w-full rounded-md border-2 border-gray-400 focus:border-gray-400 focus:ring focus:ring-gray-200 focus:ring-opacity-50" type="text" placeholder="Search" />
                    </div>
                    <div className="flex flex-col sm:flex-row">
                        <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">Home</Link>
                        <Link className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/shop">Shop</Link>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Categories</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">Contact</a>
                        <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">About</a>
                    </div>
                </nav>
            </div>
        </header>
    </>
  )
}
export default Header;