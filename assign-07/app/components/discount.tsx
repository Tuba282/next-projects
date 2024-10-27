import React from 'react'
import Image from 'next/image'
import Logo from "@/app/assets/logo.png"
import IMG_1 from "@/app/assets/dis-img-1.png"
import IMG_2 from "@/app/assets/dis-img-2.png"
import IMG_3 from "@/app/assets/3d-uncle.png"

function Discount() {
  return (
    <div className='discount-sec  flex justify-center items-center relative'>

      <Image src={IMG_2} className='absolute sm:w-24 w-16 -top-10 corn left-0' alt='' width={150} height={150}></Image>
      <div className="grid lg:flex video-div p-5">
      <div className="video flex justify-center items-center" style={{ width: '50%', height: '100%' }}>
          <video className="w-full h-full xl:top-5" style={{ borderRadius: '5px' }} autoPlay loop muted>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text p-5 grid" style={{ width: '50%', height: '100%' }}>
          <div className="flex items-center">
            <h1 className='text-center md:text-left text-2xl sm:text-4xl font-extrabold text-white'>GET BOOKS UPTO : </h1>
            <Image src={IMG_1} alt='' width={150} height={150}></Image>
          </div>
          <p className='text-white text-center md:text-left leading-7 font-light'><b className='text-white font-semibold'>OWN SHELF</b> is a place where you can find huge collection of web series books, comic books  and various other resources that are made accessible for reading and reference purpose. People of every age group can find books as per their reading interests and tastes.</p>
          <div className="grid sm:flex justify-center items-center">
            <Image src={IMG_3} alt='' width={200} height={200}></Image>
            <div className="uncle-text p-4 pt-6">
              <span className='text-white font-light'><b className='font-bold'>Bertha Jo</b>, CEO at jacole</span>
              <Image src={Logo} width={150} height={50} alt='logo'></Image>
            </div>
          </div>


        </div>
        
      </div>
      {/*  */}
      <Image src={IMG_2} className='absolute sm:w-24 w-16 top-72 corn right-0' alt='' width={150} height={150}></Image>

    </div>
  )
}

export default Discount
