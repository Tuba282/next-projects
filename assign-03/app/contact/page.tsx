'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Footer from '../footer/footer'

function Contact() {
    const navigateTo = useRouter()
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-items-center gap-6">
            <h1 onClick={()=>navigateTo.push('/contact')} className='text-3xl font-semibold  bg-gray-500 cursor-pointer px-2 text-white '>CONTACT PAGE :</h1>
            <h1 onClick={()=>navigateTo.push('/')} className='text-3xl font-semibold  bg-gray-500 cursor-pointer px-2 text-white '>Home </h1>
            <h1 onClick={()=>navigateTo.push('/about')} className='text-3xl font-semibold  bg-gray-500 cursor-pointer px-2 text-white '>About </h1>
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default Contact
