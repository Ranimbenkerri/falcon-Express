
import CheckRobot from '../common/check-robot'
import React from 'react'
import AvicContent from './avis-content'

export default function AvisArivee() {
    return (
        <section id='avis-arivee'>

            <div className='flex flex-col justify-center items-center mt-60 mb-32'>
                <AvicContent />
                <CheckRobot label='Arrivé' Btntitle='Imprimer mon Avis d&apos;Arrivée' />
            </div>

        </section>
    )
}
