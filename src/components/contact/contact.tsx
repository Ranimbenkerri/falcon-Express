import React from 'react'
import ContactContent from './contact-content'
import ContactFrom from './contact-form'
import BgImageInverse from '../background/bg-image-inverse'

export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
        <BgImageInverse />
      <div className='flex justify-center items-center mt-52 mb-64'>
        <div className='flex flex-col sm:flex-row lg:flex-row gap-10 items-center justify-center max-w-6xl rounded-md shadow-xl  max-h-[920px] sm:max-h-[620px] lg:max-h-[620px] p-8 bg-white'>
          <ContactContent />
          <ContactFrom />
        </div>
        
      </div>
    </section>
  )
}
