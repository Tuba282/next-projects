'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Footer from '../footer/footer'

function About() {
  const route = useRouter()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center justify-items-center gap-5">
      <h1 onClick={()=>route.push('/about')} className='text-3xl font-semibold  bg-green-500 cursor-pointer px-2 text-white '>ABOUT PAGE :</h1>
      <h1 onClick={()=>route.push('/')} className='text-3xl font-semibold  bg-green-500 cursor-pointer px-2 text-white '>Home </h1>
      <h1 onClick={()=>route.push('/contact')} className='text-3xl font-semibold  bg-green-500 cursor-pointer px-2 text-white '>Contact </h1>
      </div>
      <br /><br /><br />
      <Footer />
    </div>
  )
}

export default About
