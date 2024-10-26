'use client'
import FORK from "@/app/assets/pexels-souvenirpixels-414612.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='hero-sec'>
            <div className="left">
                <h1 className='hero-heading font-bold text-[#FFCE1A]'>New Releases This Week</h1>
                <p className='hero-para my-6 font-'>Its time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week new releases offer something for everyone</p>
                <p className='hero-btn button-30 '>
                    <b>Visit</b>
                    {/* <Icon icon="uil:arrow-right" width="20" height="20" style={{ color: '#fff' }} /> */}
                    {/* <Icon icon="eva:linkedin-fill" width="20" height="20" style={{ color: '#fff' }} /> */}
                </p>
            </div>
            <div className="right">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image src={FORK} alt='slider'></Image>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={FORK} alt='slider'></Image>
                    </SwiperSlide>
                    {/* <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero
