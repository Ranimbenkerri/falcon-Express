import React from 'react';
import Image from 'next/image';
import Whatsapp from '@/assets/whatsapp-icon.png';
import Facebook from '@/assets/facebook-icon.png';
import LinkedIn from '@/assets/linkedin-icon.png';

export default function Lower() {
    const Icons = [
        { src: Whatsapp, alt: 'WhatsApp' },
        { src: Facebook, alt: 'Facebook' },
        { src: LinkedIn, alt: 'LinkedIn' }
    ];
    return (
        <div className="flex flex-row justify-between items-center px-8 mb-10">
            <div>
                <p className='text-[#5D5567]'>© 2024 Falcon Express. Tous droits réservés.</p>
            </div>
            <div className='flex flex-row gap-2'>
                {Icons.map((icon, index) => (
                    <Image src={icon.src} alt={icon.alt} key={index} />
                ))}
            </div>
        </div>
    )
}
