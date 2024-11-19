import React from 'react'
import ContactContent from './contact-content'
import style from './contact.module.css'
import ContactFrom from './contact-form'

export default function Contact() {
  return (
    <section id="contact">

    <div className={style.container}>
        <div className='flex flex-col sm:flex-row lg:flex-row gap-10 items-center justify-center max-w-6xl rounded-md shadow-xl  max-h-[920px] sm:max-h-[620px] lg:max-h-[620px] p-8 bg-white'>
      <ContactContent/>
      <ContactFrom/>
        </div>
    </div>
    </section>
  )
}
