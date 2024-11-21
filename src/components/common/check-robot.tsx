import React from 'react'
import InputWithLabel from './input-label'


export default function CheckRobot() {
  return (
    <div className='min-w-[640px] min-h-[340px] rounded-md shadow-xl bg-white'>
        <div className='p-5'>
      <InputWithLabel label='Numero de colis' type='Email' placeHolder='xxxxx-xxxxx' />
        </div>
    </div>
  )
}
