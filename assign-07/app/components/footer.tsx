import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/app/assets/logo.png"

function Footer() {
    const now = new Date().getFullYear()
    return (
        <footer className="text-gray-600 bg-[var(--red)] body-font" style={{ borderRadius: "0px 0px 5px 5px" }}>
            <div className="space w-full h-30">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href={'/'}>
                    <div id="logo" >
                        <Image src={Logo} width={250} height={50} alt='logo'></Image>
                    </div>
                </Link>
                <p className="text-sm text-[var(--yellow)] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 text-center sm:text-left sm:mt-0 mt-4">Copyright © {now} All rights Reserved |
                    Made by Tuba Jan
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-[var(--red)] p-2  hover:scale-x-150 hover:scale-y-150 transition-all ease-linear rounded-full bg-[var(--yellow)]">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-[var(--red)] hover:scale-x-150 hover:scale-y-150 transition-all ease-linear  p-2 rounded-full bg-[var(--yellow)]">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-[var(--red)] hover:scale-x-150 hover:scale-y-150 transition-all ease-linear  p-2 rounded-full bg-[var(--yellow)]">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a className="ml-3 text-[var(--red)] hover:scale-x-150 hover:scale-y-150 transition-all ease-linear  p-2 rounded-full bg-[var(--yellow)]">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer
