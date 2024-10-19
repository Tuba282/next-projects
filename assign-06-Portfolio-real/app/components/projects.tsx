import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { StaticImageData } from 'next/image'
import Aesthetic from "@/app/assets/aesthetic-img.png"
import Ali_baba from "@/app/assets/ali-baba-img.png"
import Real_Estate from "@/app/assets/estate-img.png"
import Picked_Veges from "@/app/assets/veges-img.png"
import Electricca from "@/app/assets/electrica-img.png"
import Postivus from "@/app/assets/postivus-img.png"
import Tamba from "@/app/assets/tamba-img.png"
import Resume_Builder from "@/app/assets/resume-img.png"
import Get_gold from "@/app/assets/gold-img.png"
import Flow_Bee from "@/app/assets/flow-img.png"
import Charity from "@/app/assets/charity-img.png"
import Centi_deinks from "@/app/assets/drink-img.png"

function Projects() {

  type pro_type = {
    pro_img: StaticImageData
    pro_name: string
    pro_deploy_link: string
    rotate: string
  }
  const pro_info: pro_type[] = [
    {
      pro_img: Ali_baba,
      pro_name: "Ali Baba",
      pro_deploy_link: "https://ali-baba-landing-page-css.netlify.app",
      rotate: "6deg"
    },
    {
      pro_img: Aesthetic,
      pro_name: "Aesthetic Modern Wood",
      pro_deploy_link: "https://aestheitic-furniture-landing-page-css.netlify.app",
      rotate: "-6deg"
    },
    {
      pro_img: Real_Estate,
      pro_name: "Real Estate",
      pro_deploy_link: "https://bootstrap-landing-page-css.netlify.app",
      rotate: "10deg"
    },
    {
      pro_img: Picked_Veges,
      pro_name: "Picked Veges",
      pro_deploy_link: "https://picked-veges-landing-page-css.netlify.app",
      rotate: "-6deg"
    },
    {
      pro_img: Electricca,
      pro_name: "Electricca",
      pro_deploy_link: "https://electricaa-landing-page-css.netlify.app",
      rotate: "-6deg"
    },
    {
      pro_img: Postivus,
      pro_name: "Postivus",
      pro_deploy_link: "https://postivus-page-mini-hackathon.netlify.app",
      rotate: "10deg"
    },
    {
      pro_img: Tamba,
      pro_name: "Tamba",
      pro_deploy_link: "https://tamba-cs-assignment.netlify.app",
      rotate: "-6deg"
    },
    {
      pro_img: Resume_Builder,
      pro_name: "Resume Builder",
      pro_deploy_link: "https://tuba-jan-resume.netlify.app",
      rotate: "6deg"
    },
    {
      pro_img: Get_gold,
      pro_name: "Get Gold",
      pro_deploy_link: "https://get-gold-landing-page-css.netlify.app",
      rotate: "6deg"
    },
    {
      pro_img: Flow_Bee,
      pro_name: "Flow & Bee",
      pro_deploy_link: "https://flow-bee-landing-page-css.netlify.app",
      rotate: "6deg"
    },
    {
      pro_img: Charity,
      pro_name: "Charity website",
      pro_deploy_link: "https://full-fledge-charity-website.netlify.app",
      rotate: "10deg"
    },
    {
      pro_img: Centi_deinks,
      pro_name: "Centi Drinks",
      pro_deploy_link: "https://centi-drinks.vercel.app",
      rotate: "-6deg"
    },
  ]
  return (
    <div className=' project'>
      {pro_info.map((info) => (
        <div key={info.pro_deploy_link} className="pro_card" style={{ transform: `rotate(${info.rotate})` }}>
          <div className="img">
            <Image
              src={info.pro_img}
              alt={info.pro_name}
              className='pro_img'
              width={95}
              height={95}
            />
          </div>
          <div className="text">
            <div className="name text-2xl font-semibold">{info.pro_name}</div>
            <div className="demo">
              <Link className='flex gap-3 mt-2' target='_blank' href={info.pro_deploy_link}>
                <Icon icon="line-md:external-link" className='pro_icon' style={{ color: 'var(--dark)' }} />
                <span>Check it out </span>
              </Link>
            </div>
          </div>
        </div>

      ))}

    </div>
  )
}

export default Projects
