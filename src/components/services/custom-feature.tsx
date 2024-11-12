import React from 'react'
import Image, { StaticImageData } from 'next/image'


interface CustomFeatureProps  {
    Img: StaticImageData|string;
    title: string;
    desc: string;
  }
const CustomFeature:React.FC<CustomFeatureProps> = ({Img:ImageSrc,title,desc})=>{ 
  return (
    <div>
        <div className='flex flex-col items-center '>
            <Image src={ImageSrc} alt={title} />
            <div>
              <p className='text-black text-[20px] font-[500] text-center mb-2 w-full '>{title}</p>
              <p className='text-[#5D5567] text-[16px] font-[400] text-center w-full '>{desc}</p>
            </div>
        </div>
    </div>
  )
}
export default CustomFeature;