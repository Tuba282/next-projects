'use client';

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Front_Img from "@/app/assets/bg-1.png";
import github from "@/app/assets/github.png";
import facebook from "@/app/assets/facebook.png";
import instagram from "@/app/assets/instagram.png";
import linkedin from "@/app/assets/linkedin.png";
import pinterest from "@/app/assets/pinterest.png";
import { useEffect, useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false
  };

  const formattedTime = time.toLocaleTimeString('en-US', options);

  type Tpages = {
    name: string;
    icon: string;
  };

  const pages: Tpages[] = [
    { name: 'Dashboard', icon: 'fluent:home-16-regular' },
    { name: 'About', icon: 'fluent-mdl2:education' },
    { name: 'Projects', icon: 'ant-design:fund-projection-screen-outlined' },
    { name: 'Certificate', icon: 'ph:certificate' },
    { name: 'Experience', icon: 'hugeicons:book-open-02' },
  ];

  type Ttop_icons = {
    name: StaticImageData;
    link: string;
  };

  const top_icons: Ttop_icons[] = [
    { name: linkedin, link: 'https://www.linkedin.com/in/tuba-jan-10b0a12b5/' },
    { name: instagram, link: 'https://www.instagram.com/tubajan282/' },
    { name: facebook, link: 'https://www.facebook.com/profile.php?id=100088131563237' },
    { name: pinterest, link: 'https://www.pinterest.com/tubajan282/' },
    { name: github, link: 'https://github.com/Tuba282' },
  ];

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const now = new Date();
  const day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hour = now.getHours();

  const wish = hour >= 0 && hour <= 6 ? 'Sweet Dreams' :
    hour >= 6 && hour <= 12 ? "Good Morning" :
      hour >= 12 && hour <= 17 ? "Good Afternoon" :
        hour >= 17 && hour <= 21 ? "Good Evening" :
          "Good Night";

  return (
    <div className="main-container">
      <div className="sub-container">
        <div className={`sidebar ${isActive ? 'active' : ''} p-[2em] rounded-3xl`}>
          <div className="top">
            <div className="logo flex justify-between items-center">
              <Link className='logo-text text-3xl' href="/">Tuba Jan</Link>
              <Icon className='menu text-3xl' icon="mi:menu" onClick={toggleMenu} />
            </div>
          </div>
          <hr className='my-4 opacity-25' />
          <ul className={`pages grid items-center gap-10 py-10 cursor-pointer`}>
            {pages.map((page) => (
              <li key={page.name} className='li'>
                <Link className='link' href={`${page.name}`}>
                  <Icon className='inline text-xl icon' icon={page.icon} />
                  <span className='page-li'>{page.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <hr className='my-4 opacity-25' />
        </div>
        <div className="restContent">
          <div className="top">
            <div className="div1">
              <p id='time' className=''> {formattedTime}  <small id='sec'>{ /*time.toLocaleTimeString()*/}</small> <small id='date'>{day_name[day]}</small></p>
              <p id='month' className='-mt-2'><small>{month_name[month]} {date} {year}</small></p>
              <p id='timing' className='-mt-2'><small>{wish}</small></p>
            </div>
            <div className="div2 top-icons">
              {top_icons.map((icon) => (
                <p key={icon.name.src}>
                  <Link target='_blank' href={icon.link}>
                    <Image
                      className='img'
                      src={icon.name}
                      alt='top-icon' />
                  </Link>
                </p>
              ))}
            </div>
          </div>
          <div className="middle">
            Welcome to my Tech World. I am a Web Developer
          </div>
          <div className="bottom">
            <Image
              width={260}
              height={260}
              src={Front_Img}
              alt=''></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
