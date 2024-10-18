'use client'
import React from 'react'
import Navbar from './navbar'
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"

import Img from "@/app/assets/hero-img.png"
import Sir1 from "@/app/assets/sir-1.png"
// import Sir2 from "@/app/assets/sir-2.png"
// import Img from "@/app/assets/TUBA_personal.png"

import TypedComponent from '@/app/components/typed';
import Image from 'next/image';
function HeroSec() {

   
  return (
    <div className='hero-sec w-full min-h-screen '>
      
      <Navbar />
      <div className="hero-Container w-full flex justify-evenly items-center my-20 p-5">
        <div className="left-side w-[55%] p-3">
            
            
            <h1 className='typed-text'><TypedComponent /></h1>
                
            
            <p>
            I am Student at <span className='giaic'>GIAIC<span className='gic-span'>Governor Initiative for Artificial Intelligence, Web 3.0 and Metaverse.</span></span>, a passionate web developer with expertise in HTML, CSS, and JavaScript. Driven by curiosity, Committed to continuous learning, I aim to leverage these technologies to create impactful solutions for the future.
            </p>
            <div className="flex">
                <Button
                variant="outline"
                className="hero-btn bg-transparent my-5"
                >Explore More </Button>
            </div>

            <div className="hero-card grid my-9 gap-3">
              <div className="flex gap-4 sir-flex">
              <Image src={Sir1} className='rounded-full sir-img bg-slate-400 p-1' width={80} height={80} alt=""></Image>
              <div className="grid ">
                <p className='text-2xl font-semibold'>Sir Abdul Jabbar </p>
                <span className='flex gap-2'>
                <Icon icon="noto:star" width={20} height={20} />
                <Icon icon="noto:star" width={20} height={20} />
                <Icon icon="noto:star" width={20} height={20} />
                <Icon icon="noto:star" width={20} height={20} />
                <Icon icon="noto:star" width={20} height={20} />

                </span>
              </div>
              </div>
              <p style={{padding:'1em'}}>We appreciate the contributions of Ms. Tuba Jan made during her time with us and are confident that the skills and knowledge she acquired will serve her well in her future endeavors.</p>
            </div>
            


        </div>
        <div className="right-side w-[25%]  p-3">
          <div className="right-sub">
          <Image src={Img} className='personal-img' alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSec
