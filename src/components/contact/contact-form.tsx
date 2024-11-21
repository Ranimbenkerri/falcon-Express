import React from 'react'
import  InputWithLabel  from '../common/input-label'
import {Button} from '../ui/button'
import {Textarea} from '../ui/textarea'
import {Label} from '../ui/label'
export default function ContactFrom() {
  return (
    <div className='max-w-[562px] w-[80%]'>
      <InputWithLabel label='Nom' type='Email' placeHolder='Benkerri'/>
      <InputWithLabel label='Prénom' type='Email' placeHolder='Ranim'/>
      <InputWithLabel label='Numero de telephone' type='Number' placeHolder='+213555100314'/>
      <Label htmlFor="message">Message</Label>
      <Textarea placeholder="Type your message here." className='mb-4 max-h-[120px] min-h-[80px]'/>
      <Button className='w-full text-white bg-[#6f1dc9] hover:bg-[#622b9d]'>Envoyer ma demande</Button>
    </div>
  )
}
