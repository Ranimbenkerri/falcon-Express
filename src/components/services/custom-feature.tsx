import React from 'react'
import Image from 'next/image'
import feaureIcon from '../../assets/featured-icon.png'
export default function CustomFeature() {
  return (
    <div>
        <div className='flex flex-col items-center '>
            <Image src={feaureIcon} alt='Feature icon' className='mb-2'/>
            <div>
              <p className='text-black text-[20px] font-[500] text-center mb-2 w-full '>Stockage</p>
              <p className='text-[#5D5567] text-[16px] font-[400] text-center w-full '>Stockez vos marchandises en toute sécurité avec nos installations modernes et surveillées.</p>
            </div>
        </div>
    </div>
  )
}
