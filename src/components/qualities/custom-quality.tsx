import React from 'react';

interface CustomQualityPropos {
  title: string;
  desc: string;
}

const CustomQuality: React.FC<CustomQualityPropos> = ({ title, desc }) => {
  return (
    <div className='flex flex-row'>
      <div className="flex flex-col max-w-[220px] mr-8">
        <p className="font-[600] text-[60px] text-[#6f1dc9] leading-[72px]">{title}</p>
        <p className="font-[500] text-[18px] text-[#5D5567] leading-[28px] text-center ">{desc}</p>
      </div>
      <div className="w-px h-36 bg-black"></div>
    </div>
  );
};

export default CustomQuality;
