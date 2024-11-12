import React from 'react'
import QualityContent from './quality-content'
import CustomQuality from './custom-quality'

export default function Qualities() {
  return (
    <div className='mt-28 flex flex-col justify-center items-center mb-32'>
       <QualityContent/>
       <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl max-h-96 mt-12 mb-28'>
        <CustomQuality title='Fiabilité' desc='Livraison sécurisée de chaque colis.'/>
        <CustomQuality title='Fiabilité' desc='Livraison sécurisée de chaque colis.'/>
        <CustomQuality title='Fiabilité' desc='Livraison sécurisée de chaque colis.'/>
        <CustomQuality title='Fiabilité' desc='Livraison sécurisée de chaque colis.'/>
        
       </div>
    </div>
  )
}
