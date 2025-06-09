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
const  Page=()=>{
  return (
    <>
        <div className={`bg-gray-100 items-center justify-center flex py-10 relative ${exo2.className}`}>
            <div className='w-2/5 text-gray-500 border-1 border-gray-200 p-8 rounded-md shadow-amber-50 bg-white'>
                <h1 className='text-2xl font-bold font-stretch-semi-expanded'>Login to your account</h1>
                <p  className='text-sm font-stretch-semi-expanded'>You can sign in to your account using email or username</p>
                <div className='py-2'>
                    <label className='text-sm font-stretch-semi-expanded'>Email or User ID</label>
                    <input type="text" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Email or User ID...'/>
                </div>
                <div className='py-2'>
                    <label className='text-sm font-stretch-semi-expanded'>Password</label>
                    <input type="password" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Password'/>
                </div>
                <div className='flex justify-between py-4 text-sm font-stretch-semi-expanded'>
                    <div className='flex gap-1'>
                        <input type='checkbox' />
                        <label>Keep me Logged in</label>
                    </div>
                    <a className='text-blue-400 cursor-pointer'>Forgot Password</a>
                </div>
                <div className='py-2'>
                    <button 
                    className='cursor-pointer justify-center items-center flex bg-blue-400 w-full text-white py-3 rounded-md font-stretch-semi-expanded hover:bg-blue-500'>
                        Login Account</button>
                </div>
                <div className='flex gap-1 justify-center text-sm'>
                    <p>Don't have any account? </p>
                    <a className='text-blue-400 cursor-pointer'>Create Account</a>
                </div>
                
            </div>
        </div>
    </>
  )
}
export default Page;