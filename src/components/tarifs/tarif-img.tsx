import Image from "next/image"
import tarifImg from '../../assets/tarif-img.png'
export default function TarifImg() {
  return (
    <div>
      <Image src={tarifImg} alt='tarif image' />
    </div>
  )
}
