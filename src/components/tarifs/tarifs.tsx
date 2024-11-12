import React from 'react'
import TarifImg from './tarif-img'
import TarifsContent from './tarifs-content'

export default function Tarifs() {
    return (
        <div className='flex justify-center mb-32'>
            <div className='flex flex-row gap-16 justify-center items-center max-w-7xl max-h-[504px]'>
                <TarifImg />
                <TarifsContent />
            </div>
        </div>
    )
}
