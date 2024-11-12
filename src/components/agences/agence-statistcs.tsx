import React from 'react';

interface AgenceStatisticsProps {
  number: number | string;
  title: string;
  desc: string;
}

const AgenceStatistics: React.FC<AgenceStatisticsProps> = ({ number, title, desc }) => {
  return (
    <div>
      <div className="max-w-[287px] max-h-[144px] flex flex-col justify-between">
        <h1 className="text-[60px] font-[600] text-[#FF6200]">{number}</h1>
        <p className="font-normal text-[18px] text-black leading-[28px]">{title}</p>
        <p className="font-normal text-[16px] text-[#5D5567] leading-[24px]">{desc}</p>
      </div>
    </div>
  );
};

export default AgenceStatistics;
