import React from 'react'
import ServicesTitle from './service-title'
import CustomFeature from './custom-feature'
import convention from '../../assets/convention-icon.png'
import manutention from '../../assets/manutention-icon.png'
import stockage from '../../assets/featured-icon.png'
import livraison from '../../assets/livrasion-icon.png'
import suivi from '../../assets/suivi-colis.png'
import magasinage from '../../assets/magasinge-icon.png'

export default function Services() {
  

  
  const services = [
    { icon: livraison, title: 'Livraison à domicile', desc: 'Recevez vos colis directement chez vous, sans tracas.' },
    { icon: suivi, title: 'Suivi des colis', desc: 'Restez informés en temps réel de l\'emplacement et du statut de vos colis.' },
    { icon: stockage, title: 'Stockage', desc: 'Entreposage sécurisé de vos colis en attente de livraison.' },
    { icon: magasinage, title: 'Magasinage', desc: 'Stockage sécurisé de vos marchandises en attente de dédouanement, avec des conditions optimales pour préserver leur intégrité.' },
    { icon: convention, title: 'Conventions', desc: 'Mise à disposition d\'une plateforme web dédiée pour nos clients conventionnés, facilitant l\'accès et la gestion de leurs services en ligne.' },
    { icon: manutention, title: 'Manutention', desc: 'Manipulation sécurisée de vos marchandises pour un traitement sans encombre.' }
];
  return (
    <section id='services'>

    <div className='mt-44 flex justify-center flex-col items-center'>
      <ServicesTitle/>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl max-h-[1600px] sm:max-h-96 lg:max-h-96 mt-12 mb-28'>
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
        </section>
  )
}
