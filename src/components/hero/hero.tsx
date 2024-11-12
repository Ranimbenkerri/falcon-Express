import Badge from './badge'
import React from 'react'
import Image from 'next/image'
import HeroText from './hero-text'
import { Button } from '../ui/button'
import HeroImage from './../../assets/hero-img.png'

export default function Hero() {
    return (
        <div>
            <div className='pt-20 flex flex-col items-center'>
                <Badge />
                <HeroText />
                <Button variant="default" className="bg-[#6f1dc9] text-[18px] p-4 py-6 font-[600]">Voir nos tarifs</Button>
                <Image src={HeroImage} alt='hero-img' className='h-max w-max' />
            </div>
        </div>
    )
}
