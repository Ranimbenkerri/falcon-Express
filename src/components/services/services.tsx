import React from 'react'
import ServicesTitle from './service-title'
import CustomFeature from './custom-feature'
import stokcge from '../../assets/featured-icon.png'
export default function Services() {
  const services = [
    { icon: stokcge, title: 'Livraison à domicile', desc: 'Recevez vos colis directement chez vous, sans tracas.' },
    { icon: stokcge, title: 'Suivi des colis', desc: 'Restez informés en temps réel de l\'emplacement et du statut de vos colis.' },
    { icon: stokcge, title: 'Stockage', desc: 'Entreposage sécurisé de vos colis en attente de livraison.' },
    { icon: stokcge, title: 'Magasinage', desc: 'Stockage sécurisé de vos marchandises en attente de dédouanement, avec des conditions optimales pour préserver leur intégrité.' },
    { icon: stokcge, title: 'Conventions', desc: 'Mise à disposition d\'une plateforme web dédiée pour nos clients conventionnés, facilitant l\'accès et la gestion de leurs services en ligne.' },
    { icon: stokcge, title: 'Manutention', desc: 'Manipulation sécurisée de vos marchandises pour un traitement sans encombre.' }
];
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
