import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'

function Feature() {
    type Tfed = {
        icon: string;
        h4: string;
        text: string;
    };

    const fed_card: Tfed[] = [
        
        { icon: "fa-solid:user-friends", h4: "User Friendly System", text: "System is coprative a library with efficiency and at reduced costs." },
        { icon: "carbon:manage-protection", h4: "Manage", text: "You can even allow patrons to manage their own accounts and perform various activities." },
        { icon: "ion:globe-outline", h4: "Localization", text: "Use the 10+ languages available in the platform to localize the widget for your web visitors." },
        { icon: "mage:chart-down-fill", h4: "Analytics", text: "Know which Instagram story performs best and the total clicks of the entire widget on your website." },
        { icon: "ion:qr-code", h4: "Accessibility", text: "Location for Maximum Accessibility: The library should be easily accessible to its primary users." },
        { icon: "ion:qr-code", h4: "Connection", text: "No library system is complete without a Network module. This is what allows customer to add items such as books and their records to the ..." },
    ];
    return (
        <div className='feature'>
            <h1 className="anim-sell text-3xl mt-14 font-bold text-[var(--yellow)] cursor-pointer">Other features at your Service :</h1>
            <hr className='w-[120px] bg-[var(--red)] h-1.5 rounded-md mt-2 anim-hr' />
            <div className="cards my-10 flex flex-wrap gap-12 justify-center items-center">
                {
                    fed_card.map((card) => (
                        <div key={card.icon} className="card grid p-3  rounded-md bg-[var(--red)] text-white font-light" style={{ width: '300px', height: '250px', boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", }}>
                            <Icon icon={card.icon} className=' bg-[var(--yellow)] p-2 rounded-md' width="50" height="50" style={{ color: '#8c0010', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' }} />
                            <h4 className='font-bold text-2xl'>{card.h4}</h4>
                            <p className=''>{card.text}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Feature
