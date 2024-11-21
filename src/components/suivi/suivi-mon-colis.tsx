import React from 'react'
import SuiviTitle from './suivi-title'
import CheckRobot from '../common/check-robot'

export default function SuiviColis() {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <SuiviTitle/>
      <CheckRobot/>
    </div>
  )
}
