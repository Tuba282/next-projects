import React from 'react';
import { Icon } from '@iconify/react';
import Image, { StaticImageData } from 'next/image';
import GIAIC from "@/app/assets/giaic-icon.gif";
import SMIT from "@/app/assets/smit-icon.gif";
import Bahria from "@/app/assets/college-icon.gif";
import Iqra from "@/app/assets/school-icon.gif";

function About() {
  type Tabout = {
    short_name: string;
    name: string;
    icon: StaticImageData;
    duration: string;
    margin_left: '7em' | '0em'
  };

  const about: Tabout[] = [
    {
      icon: GIAIC,
      short_name: "GIAIC",
      name: "Certified Cloud Applied Generative AI Engineer (GenEng)",
      duration: "2024-2025",
      margin_left: "0em"
    },
    {
      icon: SMIT,
      short_name: "SMIT",
      name: "Saylani Mass IT Training",
      duration: "2024-2025",
      margin_left: "7em"
    },
    {
      icon: Bahria,
      short_name: "Intermediate",
      name: "Bahria College Karachi NORE-1",
      duration: "2020-2023",
      margin_left: "0em"
    },
    {
      icon: Iqra,
      short_name: "Matric",
      name: "Iqra Huffaz Secondary School",
      duration: "2015-2020",
      margin_left: "7em"
    }
  ];

  return (
    <div className='about' style={{ color: '#003092' }}>
      <div className="text grid">
        {about.map((about) => (
          <div key={about.name} className="about-card" style={{ marginLeft: `${about.margin_left}` }}>
            <div className="round flex gap-3 items-center">
              <Icon className="lineBox" icon="ri:gps-line" width={50} style={{ color: '#003092' }} />
              <Icon className="lineBox" icon="pepicons-pencil:line-x" width={40} height={60} style={{ color: '#003092' }} />
            </div>
            <div className="box ">
              <Image src={about.icon} className='img' alt={about.short_name} width={80} height={80} />
              <div className="info">
                <div className="short_name">{about.short_name}</div>
                <div className="name">{about.name}</div>
                <div className="duration">{about.duration}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
