import React from 'react'
import QualityContent from './quality-content'
import CustomQuality from './custom-quality'

export default function Qualities() {
  const qualities = [
    { title: 'Fiabilité', desc: 'Livraison sécurisée de chaque colis. ', showLine : true },
    { title: 'Rapidité', desc: 'Délais respectés partout en Algérie.', showLine : true },
    { title: 'Support', desc: 'Équipe disponible à chaque étape.', showLine : true },
    { title: 'Efficacité', desc: 'Des solutions rapides et pratiques.', showLine :false }
  ]
  return (
    <div className='mt-28 flex flex-col justify-center items-center mb-32'>
      <QualityContent />
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl max-h-96 mt-12 mb-28'>
        {qualities.map(
          (quality, index) => (
            
            <CustomQuality
              key={index}
              title={quality.title}
              desc={quality.desc}
              showLine={quality.showLine}
            />
            
          )
        )
        }
      </div>
    </div>
  )
}
