'use client'
import React from 'react'

function Ticket() {
    const now = new Date().getFullYear()
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="hero-heading font-bold text-[#FFCE1A] uppercase">Get Attach With us</h1>
                    <hr className='w-[280px]  bg-[var(--red)] h-1.5 rounded-md mt-2 anim-hr' style={{margin:'0 auto'}} />
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base my-4">Here is my proposed bookstore (TekShelf) for {now}. Buy something from a bookstore every time you go in the door. Buy a book you`ve been looking for.</p>
                </div>
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <div className="relative flex-grow w-full">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                        <input type="text" id="full-name" name="full-name" className="w-full bg-yellow-100 bg-opacity-50 rounded border border-yellow-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="relative flex-grow w-full">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-yellow-100 bg-opacity-50 rounded border border-yellow-300 focus:border-yellow-500 focus:bg-transparent focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <button className="text-[var(--yellow)] bg-[#8C0010] border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
                </div>
            </div>
        </section>
    )
}

export default Ticket
