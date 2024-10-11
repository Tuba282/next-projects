import React from 'react'
// import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Pro_img from "@/app/assets/iqra.png"
import Link from 'next/link';

function Projects() {
  return (
    <div>
      <div className="flex my-8 justify-center items-center">
        <Button
          variant="outline"
          className="about-btn text-3xl bg-transparent my-2"
        >Projects
        </Button>
      </div>



    </div>
  )
}

export default Projects



export function Pro_card(info: { pro_name: string, pro_deploy_link: string }) {
  return (
    <div className="flex justify-center flex-wrap gap-6 items-center">
      <div className="pro-card pro-card-1 ">

        <Image src={Pro_img} className={'glow pro-img'} width={150} height={150} alt=''></Image>
        <h5 className='cursor-pointer'>Project Name :{info.pro_name}</h5>
        <h5 className='cursor-pointer'>Live Demo :<Link href={info.pro_deploy_link} >filhal</Link></h5>
      </div>

    </div>
  )
}
