import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import Cer_icon1 from "@/app/assets/cer-icon2.png"
import React from 'react'
import Link from 'next/link'

function Certificates() {

  type Tcer = {
    short_name: string
    name: string
    image: StaticImageData
    link: string
    rotate: string

  }

  const cer: Tcer[] = [
    {
      image: Cer_icon1,
      short_name: "LNR",
      name: "Learning Resource Netwrok",
      link: "/LRN-Banoqabil-Certificate.pdf",
      rotate: "6deg"

    },
    {
      image: Cer_icon1,
      short_name: "SBTE",
      name: "Sindh Board Of Technical Education",
      link: "/LRN-Banoqabil-Certificate.pdf",
      rotate: "-6deg"

    }
    ,
    {
      image: Cer_icon1,
      short_name: "BQWD",
      name: "Bano Qabil Web-Development ",
      link: "/LRN-Banoqabil-Certificate.pdf",
      rotate: "9deg"

    }
  ]

  return (
    <div className='certify'>
      {
        cer.map((cer) => (
          <div key={cer.image.src} className="cer-card " style={{ color: '#003092', transform: `rotate(${cer.rotate})` }} >
            <div className="cer-show text-center">
              <Image src={cer.image} width={150} height={150} alt=''></Image>
              <div className="short_name font-extrabold text-2xl">{cer.short_name}</div>
            </div>
            <div className="cer-hide">
              <div className="name font-light">{cer.name}</div><br />
              <Link className='flex items-center gap-3' target='_blank' href={cer.link}><span>See</span><Icon icon="mingcute:share-forward-fill" style={{ color: '#003092' }} /></Link>
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default Certificates
