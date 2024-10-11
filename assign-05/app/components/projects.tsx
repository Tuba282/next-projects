import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Pro_img1 from "@/app/assets/ali-baba-img.png"
import Pro_img2 from "@/app/assets/aesthetic-img.png"
import Pro_img3 from "@/app/assets/estate-img.png"
import Pro_img4 from "@/app/assets/veges-img.png"
import Pro_img5 from "@/app/assets/electrica-img.png"
import Pro_img6 from "@/app/assets/postivus-img.png"
import Pro_img7 from "@/app/assets/tamba-img.png"
import Pro_img8 from "@/app/assets/resume-img.png"
import Pro_img9 from "@/app/assets/gold-img.png"
import Pro_img10 from "@/app/assets/drink-img.png"
import Pro_img11 from "@/app/assets/flow-img.png"
import Pro_img12 from "@/app/assets/charity-img.png"
import Link from 'next/link';

function Projects() {

  type pro_type = {
    pro_name: string
    pro_deploy_link: string
  }
  const pro_info: pro_type[] = [
    {
      pro_name: "Ali Baba",
      pro_deploy_link: "https://ali-baba-landing-page-css.netlify.app",
    },
    {
      pro_name: "Aesthetic Modern Wood",
      pro_deploy_link: "https://aestheitic-furniture-landing-page-css.netlify.app",
    },
    {
      pro_name: "Real Estate",
      pro_deploy_link: "https://bootstrap-landing-page-css.netlify.app",
    },
    {
      pro_name: "Picked Veges",
      pro_deploy_link: "https://picked-veges-landing-page-css.netlify.app",
    },
    {
      pro_name: "Electricca",
      pro_deploy_link: "https://electricaa-landing-page-css.netlify.app",
    },
    {
      pro_name: "Postivus",
      pro_deploy_link: "https://postivus-page-mini-hackathon.netlify.app",
    },
    {
      pro_name: "Tamba",
      pro_deploy_link: "https://tamba-cs-assignment.netlify.app",
    },
    {
      pro_name: "Resume Builder",
      pro_deploy_link: "https://tuba-jan-resume.netlify.app",
    },
    {
      pro_name: "Get Gold",
      pro_deploy_link: "https://get-gold-landing-page-css.netlify.app",
    },
    {
      pro_name: "Centi Drinks",
      pro_deploy_link: "https://centi-drinks.vercel.app",
    },
    {
      pro_name: "Flow & Bee",
      pro_deploy_link: "https://flow-bee-landing-page-css.netlify.app",
    },
    {
      pro_name: "Charity website",
      pro_deploy_link: "https://full-fledge-charity-website.netlify.app",
    },
  ]
  return (
    <div id='projects'>
      <div className="flex my-8 justify-center items-center">
        <Button
          variant="outline"
          className="about-btn text-3xl bg-transparent my-2"
        >Projects
        </Button>
      </div>

      <div className="flex justify-center flex-wrap gap-10 items-center">
        {/* pro-card-1 */}
        <div className="pro-card grid justify-center items-center ">

          <Image src={Pro_img1} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[0].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[0].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-2 */}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img2} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[1].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center ' href={ pro_info[1].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-3 */}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}}  src={Pro_img3} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[2].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[2].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-4 */}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}}  src={Pro_img4} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[3].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[3].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-5 */}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}}  src={Pro_img5} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[4].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[4].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-6 */}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}}  src={Pro_img6} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[5].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[5].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-7*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}}  src={Pro_img7} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[6].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[6].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-8*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img8} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name :{ pro_info[7].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[7].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-9*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img9} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[8].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[8].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-10*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img10} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[9].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[9].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-11*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img11} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[10].pro_name}</h5>
         <Link target='_blank' className='flex justify-start items-center' href={ pro_info[10].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        {/* pro-card-12*/}
        <div className="pro-card grid justify-center items-center ">

          <Image style={{margin:'0 auto'}} src={Pro_img12} className={'glow pro-img'} width={150} height={150} alt=''></Image>
          <h5>Project Name : { pro_info[11].pro_name}</h5>
          <Link target='_blank' className='flex justify-start items-center' href={ pro_info[11].pro_deploy_link} >
         <Icon icon="lets-icons:video-light" className="pro_icon rounded-full" />
          <h5 className=' mx-2'>Live Demo ... </h5>
         </Link>
        </div>
        
      </div>

    </div>
  )
}

export default Projects
