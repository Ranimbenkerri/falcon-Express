import React from 'react';

interface CustomQualityPropos {
  title: string;
  desc: string;
  showLine?: boolean;
}

const CustomQuality: React.FC<CustomQualityPropos> = ({ title, desc,showLine=true }) => {
  return (
    <div className='flex flex-row'>
      <div className="flex flex-col max-w-[220px] mr-12">
        <p className="font-[600] text-[60px] text-[#6f1dc9] leading-[72px]">{title}</p>
        <p className="font-[500] text-[18px] text-[#5D5567] leading-[28px] text-center ">{desc}</p>
      </div>
      {showLine && (
        <div className="w-px h-36 bg-[#E6CFFF]"></div> // Line is displayed based on showLine prop
      )}
    </div>
  );
};

export default CustomQuality;
