import React from 'react'
import InputWithLabel from './input-label'


export default function CheckRobot() {
  return (
    <div className='max-w-[640px] max-h-[340px] rounded-md shadow-xl bg-white'>
      <InputWithLabel label='Numero de colis' type='Email' placeHolder='xxxxx-xxxxx'/>
    </div>
  )
}
