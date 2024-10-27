'use client'
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link'
import IMG_1 from "@/app/assets/hero-img-1.png"
import IMG_2 from "@/app/assets/hero-img-2.png"
import IMG_3 from "@/app/assets/hero-img-3.png"
import IMG_4 from "@/app/assets/hero-img-4.png"
import IMG_5 from "@/app/assets/hero-img-5.png"
import IMG_6 from "@/app/assets/hero-img-6.png"
import IMG_7 from "@/app/assets/hero-img-7.png"
import IMG_8 from "@/app/assets/hero-img-8.png"
import IMG_9 from "@/app/assets/hero-img-9.png"
import IMG_10 from "@/app/assets/hero-img-10.png"
import IMG_11 from "@/app/assets/hero-img-11.png"
import IMG_12 from "@/app/assets/hero-img-12.png"
import IMG_13 from "@/app/assets/hero-img-13.png"
import IMG_14 from "@/app/assets/hero-img-14.png"
import IMG_15 from "@/app/assets/hero-img-15.png"

const Hero = () => {
   
    const img_data: StaticImageData[] = [
        IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9,
        IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15
    ];

    return (
        <div className='hero-sec'>
            <div className="left ">
                <h1 className='hero-heading font-bold text-white uppercase '>This Week Hottest Releases Grab your favourite</h1>
                <p className='hero-para my-6 font-light text-white'>Its time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week new releases offer something for everyone</p>
                <Link target="_blank" href={'https://www.linkedin.com/in/tuba-jan-10b0a12b5/'}>
                    <p className='hero-btn button-30 '>
                        <b>Visit</b>
                        <Icon icon="uil:arrow-right" width="20" height="20" style={{ color: '#fff' }} />
                        <Icon icon="eva:linkedin-fill" width="20" height="20" style={{ color: 'var(--yellow)' }} />
                    </p>
                </Link>
            </div>
            <div className="right ">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >{img_data.map((img, ind) => (
                    <SwiperSlide key={ind}>
                        <Image className="swiper-img" width={150} height={200} src={img.src} alt='slider'></Image>
                    </SwiperSlide>
                ))
                    }
                </Swiper>


            </div>
        </div>
    )
}

export default Hero
