import React from 'react'
import TarifImg from './tarif-img'
import TarifsContent from './tarifs-content'

export default function Tarifs() {
    return (
        <div className='flex justify-center '>
            <div className='flex flex-col gap-16  justify-center items-center max-h[1028px] max-w-[375px] sm:flex-row lg:flex-row  lg:max-w-7xl lg:max-h-[504px]'>
                                <div className='order-2 lg:order-1'>
                    <TarifImg />
                </div>
                <div className='order-1 lg:order-2'>
                    <TarifsContent />
                </div>
            </div>
        </div>
    )
}
