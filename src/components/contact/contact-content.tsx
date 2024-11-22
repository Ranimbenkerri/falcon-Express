import CheckedOption from '../common/cheked-option'
import SocialMedia from './social-media'
export default function ContactContent() {
    const checkText =[
        'Remplissez le formulaire pour recevoir une réponse rapide.',
        'Nous vous contactons dans les plus brefs délais.'
    ]
  return (
    <div className='max-w-[562px]'>
      <div className='flex flex-col'>
                <p className='text-[16px] font-[600] text-[#FF6200] mb-4 '>Contactez-nous</p>
                <h1 className='text-4xl font-[600] text-black leading-[44px] mb-3' >Restons en Contact</h1>
                <p className='font-normal text-[18px] text-[#5D5567] leading-[30px] mb-[40px]'>Notre équipe est à votre écoute pour répondre à toutes vos questions. </p>
                <div className="mb-10">


                    {checkText.map((text, index) => (<CheckedOption key={index} text={text}/>))}
                </div>

                
            <SocialMedia/>
        </div>
    </div>
  )
}
