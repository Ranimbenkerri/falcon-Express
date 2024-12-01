import Badge from './badge'
import React from 'react'
import Image from 'next/image'
import HeroText from './hero-text'
import { Button } from '../ui/button'
import HeroImage from './../../assets/hero-img.png'
import BgImage from '../background/bg-image'
export default function Hero() {
    return (
        <section id='hero' style={{ position: 'relative', overflow: 'hidden' }}>
        <div >
            <div className=' flex flex-col items-center'>
                <BgImage />
                <Badge />
                <HeroText /> 
                <Button variant="default" className="bg-[#6f1dc9] text-[18px] p-4 py-6 font-[600] hover:bg-[#622b9d]">Voir nos tarifs</Button>
                <Image src={HeroImage} alt='hero-img' className='h-max w-max mb-60' />
            </div>
        </div>
        </section>
    )
}
