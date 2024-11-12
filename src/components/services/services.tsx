import React from 'react'
import ServicesTitle from './service-title'
import CustomFeature from './custom-feature'

export default function Services() {
  const services = [
    { icon: '/icons/stockage.png', title: 'Stockage', desc: 'Stockez vos marchandises en toute sécurité avec nos installations modernes et surveillées.' },
    { icon: '/icons/conditionnement.png', title: 'Conditionnement', desc: 'Emballage professionnel pour garantir la protection de vos colis tout au long du transport.' },
    { icon: '/icons/suivi.png', title: 'Suivi des colis', desc: 'Restez informé en temps réel de l\'emplacement et du statut de vos colis.' },
    { icon: '/icons/manutention.png', title: 'Manutention', desc: 'Manipulation sécurisée de vos marchandises pour un traitement sans encombre.' },
    { icon: '/icons/collecte.png', title: 'Collecte de fond', desc: 'Service sécurisé de collecte pour vos besoins de recouvrement de fonds.' },
    { icon: '/icons/livraison.png', title: 'Livraison à domicile', desc: 'Recevez vos colis directement chez vous, sans tracas.' }
]
  return (
    <div className='mt-44 flex justify-center flex-col items-center'>
      <ServicesTitle/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl max-h-96 mt-12 mb-28'>
        <CustomFeature/>
        <CustomFeature/>
        <CustomFeature/>
        <CustomFeature/>
        <CustomFeature/>
        <CustomFeature/>
      </div>
    </div>
  )
}
