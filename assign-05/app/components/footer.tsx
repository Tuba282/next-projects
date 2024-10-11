import React from 'react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Icon } from '@iconify/react';

function Footer() {
    return (
        <div>
            <hr className='my-16 opacity-45' />
            <div className="flex my-8 justify-center items-center">
                <Button
                    variant="outline"
                    className="about-btn text-3xl bg-transparent my-2"
                >Reach Me Through
                </Button>
            </div>

            <br /><br />

            <div className="nav-icons flex justify-center items-center gap-8 sm:gap-20 my-8">
                <Link target='_blank' href='https://github.com/Tuba282'><Icon icon="charm:github" className='icon ' width="30" height="30" color="#c5c7c4" /></Link>

                <Link target='_blank' href='https://www.facebook.com/profile.php?id=100088131563237'><Icon icon="fa6-brands:facebook-f" className='icon' width="30" height="30" color="#c5c7c4" /></Link>

                <Link target='_blank' href='https://www.instagram.com/tubajan282/'><Icon icon="grommet-icons:instagram" className='icon' width="30" height="30" color="#c5c7c4" /></Link>

                <Link target='_blank' href='https://www.linkedin.com/in/tuba-jan-10b0a12b5/'><Icon icon="streamline:linkedin-solid" className='icon' width="30" height="30" color="#c5c7c4" /></Link>

            </div>

            <p className='text-center p-3'>Passionate about technology and innovation, I am Tuba Jan, a dedicated web developer with a strong foundation in HTML, CSS, and JavaScript. My curiosity and drive have led me to explore the frontiers of Web3, the Metaverse, Blockchain, and Cloud Computing. As a scholar with high rankings at Bahria College Karachi NORE-I and a participant in the Governor IT Initiative Program, I am committed to continuous learning and applying my knowledge to real-world projects. My goal is to leverage these cutting-edge technologies to create impactful solutions that shape the future.</p>

            <hr className='my-8 opacity-45' />
            <p className='text-center mb-8 p-3'>© Copyright 2024 All rights reserved . Made by <span className='font-extrabold text-white cursor-pointer'> 
            ❤️  TUBA JAN</span></p> 
        </div>
    )
}

export default Footer
