import React from 'react';
import Image from 'next/image';
import Whatsapp from '@/assets/whatsapp-icon.png';
import Facebook from '@/assets/facebook-icon.png';
import LinkedIn from '@/assets/linkedin-icon.png';

export default function SocialMedia() {
  const Icons = [
    { src: Whatsapp, alt: 'WhatsApp' },
    { src: Facebook, alt: 'Facebook' },
    { src: LinkedIn, alt: 'LinkedIn' }
  ];

  return (
    <div className='flex flex-row gap-2'>
      {Icons.map((icon, index) => (
        <Image src={icon.src} alt={icon.alt} key={index} />
      ))}
    </div>
  );
}
