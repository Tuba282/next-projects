import React from 'react'
import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Cer_img from "@/app/assets/cer-img.png"
import Link from 'next/link'

function Certificates() {

    const cer_info = ['Bano Qabil', 'Sindh Board of Technical Education', ' LRN Global']
    return (
        <div  id='certificates'>
            <div className="flex my-8 justify-center items-center">
                <Button
                    variant="outline"
                    className="about-btn text-3xl bg-transparent my-2"
                >Certificates
                </Button>
            </div>

            <div className="flex justify-center flex-wrap gap-10 items-center my-32">
                {/* pro-card-1 */}
                <div className="pro-card grid justify-center items-center ">

                    <Image style={{ margin: '0 auto' }} src={Cer_img} className={'glow pro-img'} width={150} height={150} alt=''></Image>
                    <h5>Certificate Name : {cer_info[0]}</h5>
                    <Link target='_blank'  style={{ margin: '0 auto' }}  className='flex justify-start items-center ' href={''} >
                        <Icon icon="ci:external-link" className="cer_icon rounded-full" />
                        <h5 className=' mx-2'>Check Out ... </h5>
                    </Link>
                </div>
                {/* pro-card-2 */}
                <div className="pro-card grid justify-center items-center ">

                    <Image style={{ margin: '0 auto' }} src={Cer_img} className={'glow pro-img'} width={150} height={150} alt=''></Image>
                    <h5>Certificate Name : {cer_info[1]}</h5>
                    <Link target='_blank'  style={{ margin: '0 auto' }}  className='flex justify-start items-center ' href={''} >
                        <Icon icon="ci:external-link" className="cer_icon rounded-full" />
                        <h5 className=' mx-2'>Check Out ... </h5>
                    </Link>
                </div>
                {/* pro-card-3 */}
                <div className="pro-card grid justify-center items-center ">

                    <Image style={{ margin: '0 auto' }} src={Cer_img} className={'glow pro-img'} width={150} height={150} alt=''></Image>
                    <h5>Certificate Name : {cer_info[2]}</h5>
                    <Link target='_blank'  style={{ margin: '0 auto' }}  className='flex justify-start items-center ' href={''} >
                        <Icon icon="ci:external-link" className="cer_icon rounded-full" />
                        <h5 className=' mx-2'>Check Out ... </h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Certificates
