import Image from "next/image";
import checkIcon from "../../assets/check-icon.png";
interface checkedOptionPropos {
    text: string;

}

const CheckedOption: React.FC<checkedOptionPropos> = ({ text }) => {
  return (
    <div className="flex flex-row gap-2 mb-3">
        <Image src={checkIcon} alt="check icon"/>
      <p className="font-[400] text-[18px] text-[#5D5567] leading-[28px] text-center">{text}</p>
    </div>
  );
};

export default CheckedOption;
