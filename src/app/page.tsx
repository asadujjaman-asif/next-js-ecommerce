'use client';
import Image from "next/image";
import React, { useRef } from 'react';
import { RiArrowRightSLine ,RiArrowDropLeftLine  } from "react-icons/ri";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>
        <div className="container bg-white mx-auto px-6">
            
            <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"}}>
                <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:flex mt-8 md:-mx-4">
                <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"}}>
                    <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Back Pack</h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"}}>
                    <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
                        <div className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Games</h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                                <span>Shop Now</span>
                                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-16">
                <h3 className="text-gray-600 text-2xl font-medium">Offer Products</h3>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                        }}
                    spaceBetween={50}
                    slidesPerView={4}
                    className="w-full"
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 mb-5">
                    
                        <SwiperSlide>
                        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden border-1 border-gray-200">
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                    
                </div>
                </Swiper>
                        <div className="custom-prev bg-gray-200 hover:bg-gray-300 absolute top-1/2 left-2 z-10 cursor-pointer text-gray-600 rounded-full hover:text-gray-700 -translate-y-1/2">
                            <RiArrowDropLeftLine   size={28} />
                        </div>
                        <div className="custom-next bg-gray-200 hover:bg-gray-300 absolute top-1/2 right-2 z-10 cursor-pointer text-gray-600 rounded-full hover:text-gray-700 -translate-y-1/2">
                            <RiArrowRightSLine size={24}/>
                        </div>
            </div>
            <div className="mt-16">
                <h3 className="text-gray-600 text-2xl font-medium">Best Sale</h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                        <div className="flex items-end justify-end h-56 w-full bg-cover" style={{backgroundImage: "url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"}}>
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
                </div>
            </div>
        </div>
    </>
  );
}
