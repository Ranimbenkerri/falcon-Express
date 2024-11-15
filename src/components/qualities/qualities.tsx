"use client"
import React, { useState, useEffect } from 'react'
import QualityContent from './quality-content'
import CustomQuality from './custom-quality'

export default function Qualities() {
  const initialQualities = [
    { title: 'Fiabilité', desc: 'Livraison sécurisée de chaque colis.', showLine: true },
    { title: 'Rapidité', desc: 'Délais respectés partout en Algérie.', showLine: true },
    { title: 'Support', desc: 'Équipe disponible à chaque étape.', showLine: true },
    { title: 'Efficacité', desc: 'Des solutions rapides et pratiques.', showLine: false }
  ]

  const [qualities, setQualities] = useState(initialQualities)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setQualities(qualities.map(quality => ({ ...quality, showLine: false })))
      } else {
        setQualities(initialQualities)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='mt-28 flex flex-col justify-center items-center mb-32'>
      <QualityContent />
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl  max-h-[1028px] sm:max-h-96 lg:max-h-96  mt-12 mb-28'>
        {qualities.map((quality, index) => (
          <CustomQuality
            key={index}
            title={quality.title}
            desc={quality.desc}
            showLine={quality.showLine}
          />
        ))}
      </div>
    </div>
  )
}
