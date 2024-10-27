'use client'
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import Rev_1 from "@/app/assets/review-img1.png"
import Rev_2 from "@/app/assets/review-img2.png"
import Rev_3 from "@/app/assets/review-img3.png"
import IMG_1 from "@/app/assets/gal-car-1.png"
import IMG_2 from "@/app/assets/gal-car-2.png"
import IMG_3 from "@/app/assets/gal-car-3.png"
import IMG_4 from "@/app/assets/gal-car-4.png"
import IMG_5 from "@/app/assets/gal-car-5.png"
import IMG_6 from "@/app/assets/gal-car-6.png"
import IMG_7 from "@/app/assets/gal-car-7.png"
import IMG_8 from "@/app/assets/gal-car-8.png"
import IMG_9 from "@/app/assets/gal-car-9.png"
import IMG_10 from "@/app/assets/gal-car-10.png"
import IMG_11 from "@/app/assets/gal-car-11.png"
import IMG_12 from "@/app/assets/gal-car-12.png"
import IMG_13 from "@/app/assets/gal-car-13.png"
import IMG_14 from "@/app/assets/gal-car-14.png"
import IMG_15 from "@/app/assets/gal-car-15.png"
import { Icon } from '@iconify/react';

export default function Gallery() {
    const now = new Date()
    const now1 = new Date('October 20,2024')
    const now2 = new Date('May 04,2024')
    const now3 = new Date('January 18,2024')
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const img_data: StaticImageData[] = [
        IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6, IMG_7, IMG_8, IMG_9,
        IMG_10, IMG_11, IMG_12, IMG_13, IMG_14, IMG_15
    ];
    return (
        <>
            <h1 className="anim-sell text-3xl mt-6 font-bold text-[var(--yellow)] cursor-pointer">Travel to Fantacy Land :</h1>
            <hr className='w-[120px] bg-[var(--red)] h-1.5 rounded-md mt-2 anim-hr' />
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper gal-swiper my-10"
            >
                {
                    img_data.map(img => (
                        <SwiperSlide key={img.src}><Image className='gal-img' width={1500} height={550} src={img.src} alt=''></Image></SwiperSlide>
                    ))
                }
            </Swiper>
            <h1 className="anim-sell text-3xl mt-6 font-bold text-[var(--yellow)] cursor-pointer">Valuable Feedbacks :</h1>
            <hr className='w-[120px] bg-[var(--red)] h-1.5 rounded-md mt-2 anim-hr' />
            {/* feedback */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap -mx-4 -my-8">
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{month[now1.getMonth()]}</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{now.getDate()}</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs flex gap-2 title-font font-medium text-indigo-500 mb-1">
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                    </h2> <br />
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The Master Piece</h1>
                                    <p className="leading-relaxed mb-5">I was too fond of the book, but I finished it. I would likely recommend re-read it.</p>
                                    <a className="inline-flex items-center">
                                        <Image alt="blog" src={Rev_1} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">Alper Kamu</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{month[now2.getMonth()]}</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{now.getDate() - 5}</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs flex gap-2 title-font font-medium text-indigo-500 mb-1">
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                    </h2> <br />
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">A fantastic book</h1>
                                    <p className="leading-relaxed mb-5"> A great book read, and I would recommend it to others!</p>
                                    <a className="inline-flex items-center">
                                        <Image alt="blog" src={Rev_2} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">{month[now3.getMonth()]}</span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">{now.getDate() + 1}</span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs flex gap-2 title-font font-medium text-indigo-500 mb-1">
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                        <Icon icon="noto:star" width="20" height="20" />
                                    </h2> <br />
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Just Got Inspiration</h1>
                                    <p className="leading-relaxed mb-5">A fantastic book that was both enjoyable and memorable! I would highly recommend it!</p>
                                    <a className="inline-flex items-center">
                                        <Image alt="blog" src={Rev_3} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"></Image>
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">Henry Letham</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
