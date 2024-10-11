import React from 'react'
import Image from 'next/image'
import Logo from "@/app/assets/logo.png"
import Bail from "@/app/assets/bail.png"
import SSC from "@/app/assets/iqra.png"
import HSC from "@/app/assets/bahria.png"
import SMIT from "@/app/assets/smit.png"
import GIAIC from "@/app/assets/giaic.png"

import { Button } from "@/components/ui/button"
function About() {
  return (
    <div id='about' className='About-sec w-full '>
        <div className="flex my-5 justify-center items-center">
                <Button
                variant="outline"
                className="about-btn text-3xl bg-transparent my-2"
                >More About Me
                </Button>
            </div>
      <div className="edu">

        {/* about div-1 */}
      <div className="flex">
        <div className="div div1 flex gap-10 justify-around items-center">
        <div className="img w-[40%]">
          <Image src={GIAIC} alt='logo'className='edu-img up-down glow justify-self-center self-center mx-4' ></Image>
          </div>
          <div className="text w-[60%]  grid gap-2">
            <h1 className='text-3xl font-semibold'>GIAIC</h1>
            <h6 className='text-xl font-light'>Certified Cloud Applied Generative AI Engineer (GenEng)</h6>
            <p className='text-xs'>2024-2025</p>
          </div>
        </div>
        
        <Image src={Logo} alt='logo'className='round-img justify-self-center self-center mx-4' ></Image>
        {/* <Icon  icon="fa6-regular:circle-dot" /> */}
      </div>
      {/* about div-2 */}
      <div className="flex  justify-end relative">
        
      <Image src={Bail} alt='logo'className='bail bail1 justify-self-center self-center mx-4' ></Image>
      <Image src={Logo} alt='logo'className='round-img justify-self-center self-center mx-4' ></Image>
      <Image src={Bail} alt='logo'className='bail bail2 justify-self-center self-center mx-4' ></Image>
      <div className="div div2  flex  gap-10 justify-around items-center">
        
          <div className="img w-[40%]">
          <Image src={SMIT} alt='logo'className='edu-img up-down glow justify-self-center self-center mx-4' ></Image>
          </div>
          <div className="text w-[60%]  grid gap-2">
            <h1 className='text-3xl font-semibold'>SMIT</h1>
            <h6 className='text-xl font-light'>Saylani Mass IT Training </h6>
            <p className='text-xs'>2024-2025</p>
          </div>

      </div>
      </div>


      <div className="flex">
        <div className="div div3 flex  gap-10 justify-around items-center">
          
          <div className="img w-[40%]">
          <Image src={HSC} alt='logo'className='edu-img up-down glow justify-self-center self-center mx-4' ></Image>
          </div>
          <div className="text w-[60%]  grid gap-2">
            <h1 className='text-3xl font-semibold'>Intermediate</h1>
            <h6 className='text-xl font-light'>Bahria College Karachi NORE-1</h6>
            <p className='text-xs'>2020-2023</p>
          </div>

        </div>
        <Image src={Logo} alt='logo'className='round-img justify-self-center self-center mx-4' ></Image>
      </div>

      <div className="flex justify-end relative">
        
      <Image src={Bail} alt='logo'className='bail bail1 justify-self-center self-center mx-4' ></Image>
      <Image src={Logo} alt='logo'className='round-img justify-self-center self-center mx-4' ></Image>
      <div className="div div2 flex  gap-10 justify-around items-center">
        
          <div className="img w-[40%]">
          <Image src={SSC} alt='logo'className='edu-img up-down glow justify-self-center self-center mx-4' ></Image>
          </div>
          <div className="text w-[60%] grid gap-2">
            <h1 className='text-3xl  font-semibold'>Matric</h1>
            <h6 className='text-xl font-light'>Iqra Huffaz Secondary School</h6>
            <p className='text-xs'>2015-2020</p>
          </div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default About
