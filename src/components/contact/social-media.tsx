import React from 'react';
import Image from 'next/image';
import Instgram from '@/assets/instagram-icon.png';
import Whatsapp from '@/assets/whatsapp-icon.png';
import Telegram from '@/assets/telegram-icon.png';
import Facebook from '@/assets/facebook-icon.png';
import LinkedIn from '@/assets/linkedin-icon.png';

export default function SocialMedia() {
  const Icons = [
    { src: Instgram, alt: 'Instagram' },
    { src: Whatsapp, alt: 'WhatsApp' },
    { src: Telegram, alt: 'Telegram' },
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
