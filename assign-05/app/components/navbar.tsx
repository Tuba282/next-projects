import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Logo from "@/app/assets/logo.png"

function Navbar() {
    return (
        <div className='nav-main flex w-full justify-between items-center'>
            <div className="logo flex justify-start items-center ">
                <Image src={Logo} alt='logo' className='logo-img' ></Image>
                <span className='font-bold flex justify-center items-center text-2xl '>Tuba Jan</span>
            </div>
            <nav className="nav ">
                <ul className="nav-ul flex justify-between items-center gap-5">
                    <Link href='/'><li className="nav-li">Home</li></Link>
                    <Link href='/#about'><li className="nav-li">About</li></Link>
                    <Link href='/#projects'>
                    <li className="nav-li dropdown">Projects

                        <div className="project-links">

                        </div>
                    </li>
                    </Link>

                    <Link href='/#certificates'><li className="nav-li">Certificates</li></Link>
                    
                </ul>
            </nav>
            <div className="nav-icons flex justify-between items-center gap-2">
                <Link target='_blank' href='https://github.com/Tuba282'><Icon icon="arcticons:github" className='icon'  width="30" height="30" color="#c5c7c4"  /></Link>
            
                <Link target='_blank' href='https://www.facebook.com/profile.php?id=100088131563237'><Icon icon="arcticons:facebook" className='icon'  width="30" height="30" color="#c5c7c4"  /></Link>
            
                <Link target='_blank' href='https://www.instagram.com/tubajan282/'><Icon icon="arcticons:instagram" className='icon'  width="30" height="30" color="#c5c7c4"  /></Link>
            
                <Link target='_blank' href='https://www.linkedin.com/in/tuba-jan-10b0a12b5/'><Icon icon="ph:linkedin-logo-thin" className='icon'  width="30" height="30" color="#c5c7c4"  /></Link>
            
            </div>


        </div>
    )
}

export default Navbar
