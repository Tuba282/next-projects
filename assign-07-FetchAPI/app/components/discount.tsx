import React from 'react'
import Image from 'next/image'
import IMG_1 from "@/app/assets/dis-img-1.png"
import IMG_2 from "@/app/assets/dis-img-2.png"

function Discount() {
  return (
    <div className='discount-sec  flex justify-center items-center relative'>
      
      <Image src={IMG_2} className='absolute sm:w-24 w-16 -top-16 corn left-0' alt='' width={150} height={150}></Image>
      <h1 className='text-center text-2xl sm:text-7xl font-extrabold text-white'>GET MARVEL BOOKS UPTO : </h1>
      <Image src={IMG_1} alt='' width={150} height={150}></Image>
      <Image src={IMG_2} className='absolute sm:w-24 w-16 top-60 corn right-0' alt='' width={150} height={150}></Image>

    </div>
  )
}

export default Discount
