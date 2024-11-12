import React from 'react'
import MetricsImage from '../../assets/metrics-img.png'
import Image from 'next/image'
export default function AgenceImg() {
  return (
    <div>
      <Image src={MetricsImage} alt='MetricsImg' />
    </div>
  )
}
