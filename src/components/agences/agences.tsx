import React from 'react'
import AgenceImg from './agence-img'
import AgenceContent from './agences-content'

export default function Metrics() {
  return (
      <div className='flex flex-row gap-16 m-w-7xl m-h-2xl justify-center mt-40 mb-40'>
        <AgenceContent/>
        <AgenceImg/>
      </div>
  )
}
