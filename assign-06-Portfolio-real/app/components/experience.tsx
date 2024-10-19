import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Exp_img1 from "@/app/assets/BFFP.jpg"
import Exp_img2 from "@/app/assets/acshr.jpg"
import React from 'react'

function Experience() {
  type Texp = {
    short_name: string
    name: string
    image: StaticImageData
    description: string
    exp_duration: string
  }

  const exp: Texp[] = [
    {
      short_name: 'BFFP',
      name: "( Better Future For Pakistan )",
      image: Exp_img1,
      description: " The BFFP Website is about an organization that helps people in need, such as with food, shelter, clothing, flood relief, etc. I created the UI for this website according to the client's specifications.",
      exp_duration: " March 2024 - May 2024"
    },
    {
      short_name: 'ACSHR',
      name: "( Alliance od Civil Society  for Human Rights )",
      image: Exp_img2,
      description: " The ACSHR Website is about a company that organizes events for needy people, such as marriage ceremonies, death ceremonies and many other functions. I created the UI for this website according to the client's specifications.",
      exp_duration: "Dec 2023 - Feb 2024"
    }
  ]

  return (
    <div className='experience'>
      <div className="exp_card exp-1">
        <div className="div1">
          <div className="shortName text-2xl">{exp[0].short_name}</div>
          <div className="name">{exp[0].name}</div><br />
          <div className="des">{exp[0].description}</div><br />
          <div className="des">{exp[0].exp_duration}</div>
        </div>
        <div className="div2"><Image src={exp[0].image} className='exp-img' alt=''></Image></div>
      </div>
      <div className="exp_card exp-2">
        <div className="div1">
          <div className="shortName text-2xl">{exp[1].short_name}</div>
          <div className="name">{exp[1].name}</div><br />
          <div className="des">{exp[1].description}</div><br />
          <div className="des">{exp[1].exp_duration}</div>
        </div>
        <div className="div2"><Image src={exp[1].image} className='exp-img' alt=''></Image></div>
      </div>
    </div>
  )
}

export default Experience
