import Image from "next/image";
import checkIcon from "../../assets/check-icon.png";
interface checkedOptionPropos {
    text: string;

}

const CheckedOption: React.FC<checkedOptionPropos> = ({ text }) => {
  return (
    <div className="flex flex-row gap-2 mb-3">
        <div>
        <Image src={checkIcon} alt="check icon" className="w-[28px] h-[28px]" />
        </div>
        <div>
      <p className="font-[400] text-[16px] text-[#5D5567] leading-[28px]">{text}</p>
        </div>
    </div>
  );
};

export default CheckedOption;
