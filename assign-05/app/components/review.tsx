'use client'
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Sir1 from "@/app/assets/client-img.png"
import Maam from "@/app/assets/cleint-img.png"
import { Autoplay, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation";
import { Button } from '@/components/ui/button';

function Review() {
  return (
    <>
      <div className="flex my-12 justify-center items-center">
        <Button
          variant="outline"
          className="about-btn text-3xl bg-transparent my-2"
        >Clients Reviews
        </Button>
      </div>
      <Swiper
        navigation={true}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Navigation]}>
          {/* Slider -1 */}
        <SwiperSlide className='my-6'>
          <div className="client-card grid my-9 gap-3">
            <div className="flex card-flex gap-4 sir-flex">
              <Image src={Sir1} className='  p-1' alt=""></Image>
              <div className="grid justify-center items-center">
                <br /><br />
               <p className='text-2xl font-semibold'>Sir Abdul Jabbar </p>
                <span className='flex gap-2 star-div'>
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />

                </span>
                <p style={{ padding: '1em' }}>We appreciate the contributions of Ms. Tuba Jan made during her time with us and are confident that the skills and knowledge she acquired will serve her well in her future endeavors.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
          {/* Slider -2 */}
        <SwiperSlide className='my-6'>
          <div className="client-card grid my-9 gap-3">
            <div className="flex card-flex gap-4 sir-flex">
              <Image src={Maam} className='  p-1' alt=""></Image>
              <div className="grid justify-center items-center">
                <br /><br />
               <p className='text-2xl font-semibold'>Maam Rukhsana Panhwer</p>
                <span className='flex gap-2 star-div'>
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />
                  <Icon icon="noto:star" width={20} height={20} />

                </span>
                <p style={{ padding: '1em' }}>Ms Tuba’s dedication and enthusiasm made her a valuable asset to our team, and we appreciate the contributions she made during her time with us. We are confident that the skills and knowledge she gained during her internship will serve her well in her future endeavors.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Review
