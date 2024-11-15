import React from 'react'
import TarifImg from './tarif-img'
import TarifsContent from './tarifs-content'

export default function Tarifs() {
    return (
        <div className='flex justify-center '>
            <div className='flex flex-col sm:flex-row lg:flex-row gap-16 justify-center items-center max-w-7xl max-h-[504px]'>
                <TarifImg />
                <TarifsContent />
            </div>
        </div>
    )
}
