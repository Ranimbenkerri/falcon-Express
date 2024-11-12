import React from 'react'
import ContactContent from './contact-content'
import style from './contact.module.css'
import ContactFrom from './contact-form'

export default function Contact() {
  return (
    <div className={style.container}>
        <div className='flex flex-row gap-10 items-center justify-center max-w-6xl rounded-md shadow-xl  max-h-[620px] p-8 bg-white'>
      <ContactContent/>
      <ContactFrom/>
        </div>
    </div>
  )
}
