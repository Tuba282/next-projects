'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Sir1 from "@/app/assets/sir-1.png"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

function Review() {
    return (
        <>
            <Swiper  
            navigation ={true}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Review
