'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import IMG_1 from "@/app/assets/anim-img-1.png";
import IMG_2 from "@/app/assets/anim-img-2.png";
import IMG_3 from "@/app/assets/anim-img-3.png";
import IMG_4 from "@/app/assets/anim-img-4.png";
import IMG_5 from "@/app/assets/anim-img-5.png";
import IMG_6 from "@/app/assets/anim-img-6.png";
import IMG_7 from "@/app/assets/anim-img-7.png";
import IMG_8 from "@/app/assets/anim-img-8.png";
import IMG_9 from "@/app/assets/anim-img-9.png";
import IMG_10 from "@/app/assets/anim-img-10.png";
import IMG_11 from "@/app/assets/anim-img-11.png";
import IMG_12 from "@/app/assets/anim-img-12.png";
import IMG_13 from "@/app/assets/anim-img-13.png";

function Adventure() {
    type Tadv = {
        title: string;
        author: string;
        like: string;
        img: StaticImageData;
    };

    const adv_info: Tadv[] = [
        { title: "kung fu panda ", author: "John Stevenson", like: "adventure comedy histroty", img: IMG_1 },
        { title: "kung fu panda 2", author: "John Stevenson", like: "adventure comedy histroty", img: IMG_2 },
        { title: "kung fu panda 3", author: "John Stevenson", like: "adventure comedy histroty", img: IMG_3 },
        { title: "kung fu panda 4", author: "John Stevenson", like: "adventure comedy histroty", img: IMG_4 },
        { title: "Megamind", author: "Alan Schoolcraft", like: "comedy adventure", img: IMG_5 },
        { title: "Madagascar Escape ", author: "Octavia Spencer", like: "comedy adventure", img: IMG_6 },
        { title: "Madagascar Escape 2 africa", author: "Octavia Spencer", like: "comedy adventure", img: IMG_7 },
        { title: "Madagascar Escape 3 One Shot", author: "Octavia Spencer", like: "comedy adventure", img: IMG_8 },
        { title: "Zotopia", author: "Neal Purvis", like: "comedy duty", img: IMG_9 },
        { title: "coco", author: "Robert Wade", like: "drama family music", img: IMG_10 },
        { title: "How to train dragon ", author: "William Davies", like: "action trust", img: IMG_11 },
        { title: "How to train dragon 2", author: "William Davies", like: "action war", img: IMG_12 },
        { title: "How to train dragon 3", author: "William Davies", like: "action reunite", img: IMG_13 },
    ];

    return (
        <div className='adv-sec'>
            <h1 className="anim-sell text-3xl font-bold text-[var(--yellow)] cursor-pointer">Animated Collection</h1>
            <hr className='w-[80px] bg-[var(--red)] h-1.5 rounded-md mt-2 anim-hr' />
            <div className="sell">
                <Swiper
                    spaceBetween={10}
                    direction={'horizontal'}
                    slidesPerView={2}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper adv-swiper"
                    breakpoints={{

                        1230: {
                            slidesPerView: 2,
                        },
                        759: {
                            slidesPerView: 2,
                        },
                        758: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        }
                    }}
                >
                    {adv_info.map((item, index) => (
                        <SwiperSlide key={index} className='adv-slide'>
                            <div className="flex-div">

                                <div className="flex-text">
                                    <h1 className="font-thin text-[var(--yellow)] ">Title: <span className='text-black text-[15px] uppercase'> {item.title} </span> </h1>
                                    <p className="font-thin text-[var(--yellow)]">Author: <span className='text-black text-[15px] uppercase'> {item.author} </span> </p>
                                    <p className="font-thin text-[var(--yellow)]">Brief : <span className='text-black text-[15px] uppercase'> {item.like} </span> </p>
                                    <p className="chota font-thin text-sm text-[var(--yellow)]"> <span className='text-black text-[15px] uppercase'> Dolor sit amet consectetur adipisicing elit. At illum autem minima eligendi veniam omnis odit fugit quam voluptatem. Quam, eveniet debitis unde tempore ut ea commodi nesciunt hic fugit?</span>  </p>
                                </div>
                                <div className="flex-img">
                                    <Image src={item.img} className='img' alt='' ></Image>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Adventure;
