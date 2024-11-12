import React from 'react'
import ServicesTitle from './service-title'
import CustomFeature from './custom-feature'
import stokcge from '../../assets/featured-icon.png'
export default function Services() {
  const services = [
    { icon: stokcge, title: 'Stockage', desc: 'Stockez vos marchandises en toute sécurité avec nos installations modernes et surveillées.' },
    { icon: stokcge, title: 'Conditionnement', desc: 'Emballage professionnel pour garantir la protection de vos colis tout au long du transport.' },
    { icon: stokcge, title: 'Suivi des colis', desc: 'Restez informé en temps réel de l\'emplacement et du statut de vos colis.' },
    { icon: stokcge, title: 'Manutention', desc: 'Manipulation sécurisée de vos marchandises pour un traitement sans encombre.' },
    { icon: stokcge, title: 'Collecte de fond', desc: 'Service sécurisé de collecte pour vos besoins de recouvrement de fonds.' },
    { icon: stokcge, title: 'Livraison à domicile', desc: 'Recevez vos colis directement chez vous, sans tracas.' }
]
  return (
    <div className='mt-44 flex justify-center flex-col items-center'>
      <ServicesTitle/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl max-h-96 mt-12 mb-28'>
        {services.map(
          (service,index)=>(
            <CustomFeature 
            key={index}
            Img={service.icon}
            title={service.title}
            desc={service.desc}
            />
          )
        )}
      </div>
    </div>
  )
}
