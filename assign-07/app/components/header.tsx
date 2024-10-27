'use client'
import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/app/assets/logo.png"

function Header() {
    return (
        <div id='header'>
            <div id="logo" >
                <Image src={Logo} width={250} height={50} alt='logo'></Image>
            </div>
            <div id="nav-links">
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><a href='#'>Gallery</a></li>
                    <li><a href='#'>Tour Guide</a></li>
                </ul>
            </div>

            <div id="side-links">
                <div id="search-bar" className='relative'>
                    <input className="button-31 mx-2 " contentEditable placeholder='Search' type="search" />
                    <Icon icon="iconamoon:search-bold" width="30" height="30" className='seach-btn' style={{ color: '#ffce1a' }} />
                </div>
                <Link target='_blank' href={'https://www.instagram.com/tubajan282/'}>
                    <button className="button-30 mx-2" role="button">
                        <Icon icon="iconoir:instagram" className="mx-2" style={{ color: '#ffce1a' }} />  Follow us
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Header
