import React from 'react'
import SuiviTitle from './suivi-title'
import CheckRobot from '../common/check-robot'

export default function SuiviColis() {
  return (
    <section id="suivi-mon-colis">

    <div className='flex flex-col justify-center items-center mt-32 mb-28'>
      <SuiviTitle/>
      <CheckRobot label='Numéro de colis' Btntitle='Suivi mon colis'/>
    </div>
    </section>
  )
}
