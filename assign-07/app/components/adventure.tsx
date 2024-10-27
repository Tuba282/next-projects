'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import IMG_1 from "@/app/assets/adv-img-1.png";
import IMG_2 from "@/app/assets/adv-img-2.png";
import IMG_3 from "@/app/assets/adv-img-3.png";
import IMG_4 from "@/app/assets/adv-img-4.png";
import IMG_5 from "@/app/assets/adv-img-5.png";
import IMG_6 from "@/app/assets/adv-img-6.png";
import IMG_7 from "@/app/assets/adv-img-7.png";
import IMG_8 from "@/app/assets/adv-img-8.png";
import IMG_9 from "@/app/assets/adv-img-9.png";
import IMG_10 from "@/app/assets/adv-img-10.png";
import IMG_11 from "@/app/assets/adv-img-11.png";

function Animated() {
    type Tadv = {
        title: string;
        author: string;
        like: string;
        img: StaticImageData;
    };

    const adv_info: Tadv[] = [
        { title: "sherlock holmes (Game of shadows)", author: "Arthur Conan", like: "crime comedy", img: IMG_1 },
        { title: "sherlock holmes (holmes for the holiday)", author: "Arthur Conan", like: "action drama", img: IMG_2 },
        { title: "enola holmes (series-1)", author: "Nancy Springer", like: "action history", img: IMG_3 },
        { title: "enola holmes (series-2)", author: "Nancy Springer", like: "adventure drama", img: IMG_4 },
        { title: "detective chintang", author: "Octavia Spencer", like: "comedy crime", img: IMG_5 },
        { title: "detective china town 2", author: "Octavia Spencer", like: "comedy adventure", img: IMG_6 },
        { title: "detective china town 3", author: "Octavia Spencer", like: "comedy crime", img: IMG_7 },
        { title: "midnight summer", author: "Dean Koontz", like: "action comedy crime", img: IMG_8 },
        { title: "Johnny English", author: "Neal Purvis", like: "comedy crime", img: IMG_9 },
        { title: "Johnny English 2", author: "Robert Wade", like: "drama comedy", img: IMG_10 },
        { title: "Johnny English 3", author: "William Davies", like: "action comedy", img: IMG_11 },
    ];

    return (
        <div className='adv-sec'>
            <h1 className="top-sell text-3xl font-bold text-[var(--yellow)] cursor-pointer">Top Sellers</h1>
            <hr className='w-[80px] bg-[var(--red)] h-2 rounded-md mt-2 top-hr' />
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
                                <div className="flex-img">
                                    <Image src={item.img} className='img' alt='' ></Image>
                                </div>
                                <div className="flex-text">
                                    <h1 className="font-thin text-[var(--yellow)] ">Title: <span className='text-black text-[15px] uppercase'> {item.title} </span> </h1>
                                    <p className="font-thin text-[var(--yellow)]">Author: <span className='text-black text-[15px] uppercase'> {item.author} </span> </p>
                                    <p className="font-thin text-[var(--yellow)]">Brief : <span className='text-black text-[15px] uppercase'> {item.like} </span> </p>
                                    <p className="chota font-thin text-sm text-[var(--yellow)]"> <span className='text-black text-[15px] uppercase'> Dolor sit amet consectetur adipisicing elit. At illum autem minima eligendi veniam omnis odit fugit quam voluptatem. Quam, eveniet debitis unde tempore ut ea commodi nesciunt hic fugit?</span>  </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Animated;
