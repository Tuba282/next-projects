'use client';
// import gsap from 'gsap';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Front_Img from "@/app/assets/bg-1.png";
import github from "@/app/assets/github.png";
import facebook from "@/app/assets/facebook.png";
import instagram from "@/app/assets/instagram.png";
import linkedin from "@/app/assets/linkedin.png";
import pinterest from "@/app/assets/pinterest.png";
import { useEffect, useState } from 'react';
const Index = () => {

    const [time, setTime] = useState(new Date());
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

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: 'numeric',
        second: 'numeric',
        hour12: true // 12-hour format
    };

    const formatted_Time_With_AmPm = time.toLocaleTimeString('en-US', options);
    const formatted_Time = formatted_Time_With_AmPm.replace(/( AM| PM)/gi, ''); // Remove AM/PM
    return (
        <div className='restContent'>
            <div className="top">
                <div className="div1">
                    <p id='time' className=''> {formatted_Time}  <small id='sec'>{ /*time.toLocaleTimeString()*/}</small> <small id='date'>{day_name[day]}</small></p>
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
                <p className='loop'>
                    Welcome to my <span className='span font-extrabold'> Tech World </span> . I am a <span className='span font-extrabold'> Web Developer </span>Welcome to my <span className='span font-extrabold'> Tech World </span> . I am a <span className='span font-extrabold'> Web Developer </span>Welcome to my <span className='span font-extrabold'> Tech World </span> . I am a <span className='span font-extrabold'> Web Developer </span>
                </p>
            </div>
            <div className="bottom relative">
                <Image
                    // width={260}
                    // height={260}
                    className='bottom-img absolute '
                    src={Front_Img}
                    alt=''></Image>
            </div>
        </div>
    )
}

export default Index
