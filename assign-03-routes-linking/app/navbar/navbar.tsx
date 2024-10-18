// import Link from 'next/link'
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Navbar() {
    const goto = useRouter();
    return (
        <div>
            <nav>
                <ul >
                    <button  onClick={() => goto.push('/about')}>ABOUT</button>
                    <button  onClick={() => goto.push('/contact')}>CONTACT</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
