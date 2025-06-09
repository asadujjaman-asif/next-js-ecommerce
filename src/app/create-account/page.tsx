import React from 'react'
import { Exo_2  } from 'next/font/google'
const exo2  =Exo_2({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // যা দরকার
  display: 'swap',
})

const  CreateAccount=()=>{
  return (
    <>
        <div className={`bg-gray-100 items-center justify-center flex py-10 relative ${exo2.className}`}>
            <div className='w-2/5 text-gray-500 border-1 border-gray-200 p-8 rounded-md shadow-amber-50 bg-white'>
                <h1 className='text-2xl font-bold'>Create an Account</h1>
                <p  className={`text-sm ${exo2.className}`}>
                  You can create account using email or username and the registration is fully free
                </p>
                <div className='py-2'>
                    <label className='text-sm'>Username</label>
                    <input type="text" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Username*'/>
                </div>
                <div className='py-2'>
                    <label className='text-sm'>E-Mail Address</label>
                    <input type="email" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='E-Mail Address*'/>
                </div>
                <div className='py-2'>
                    <label className='text-sm'>Mobile</label>
                    <input type="number" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Mobile'/>
                </div>
                <div className='py-2'>
                    <label className='text-sm'>Password</label>
                    <input type="password" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Password'/>
                </div>
                <div className='py-2'>
                    <label className='text-sm'>Confirm Password</label>
                    <input type="password" className='focus:outline-none focus:ring-0 focus:border-blue-200 border-1 border-gray-200 w-full px-2 py-3 text-sm rounded-md' placeholder='Confirm Password'/>
                </div>
                <div className='flex gap-1 py-4 text-sm'>
                    <div className='flex gap-1'>
                        <input type='checkbox' />
                        <label> I agree with</label>
                    </div>
                    <a className='text-blue-400 cursor-pointer text-sm'>Privacy Policy</a>
                    <a className='text-blue-400 cursor-pointer text-sm'>Terms and Service</a>
                </div>
                <div className='py-2'>
                    <button 
                    className='cursor-pointer justify-center items-center flex bg-blue-400 w-full text-white py-3 rounded-md font-stretch-semi-expanded hover:bg-blue-500'>
                        Login Account</button>
                </div>
                <div className='flex gap-1 justify-center text-sm'>
                    <p>Already have an account? </p>
                    <a className='text-blue-400 cursor-pointer'>Login Account</a>
                </div>
                
            </div>
        </div>
    </>
  )
}
export default CreateAccount;