import React from 'react'
import AgenceImg from './agence-img'
import AgenceContent from './agences-content'

export default function Metrics() {
  return (
    <section id="agences">

      <div className='flex flex-col sm:flex-row lg:flex-row gap-16 m-w-7xl max-h[1028px] lg:m-h-2xl justify-center mt-60 mb-40'>
        <AgenceContent/>
        <AgenceImg/>
      </div>
    </section>
  )
}
