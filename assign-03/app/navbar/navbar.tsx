// import Link from 'next/link'
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const goto = useRouter();
    return (
        <div>
            <nav>
                <ul className='flex justify-evenly items-center gap-5'>
                    <button className='text-3xl font-semibold  bg-red-500 px-2 text-white ' onClick={() => goto.push('/about')}>ABOUT</button>
                    <button className='text-3xl font-semibold  bg-red-500 px-2 text-white ' onClick={() => goto.push('/contact')}>CONTACT</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
