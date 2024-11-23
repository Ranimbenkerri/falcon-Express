import React from 'react'
import { Button } from '../ui/button'
import InputWithLabel from './input-label'
// import ReCAPTCHA from 'react-google-recaptcha'
interface CheckRobotProps {
  label: string
  Btntitle: string
}
const CheckRobot :React.FC<CheckRobotProps> = ({label,Btntitle}) => {
  return (
    <div className='min-w-[540px] max-h-[340px] rounded-md shadow-xl bg-white'>
        <div className='p-5 flex flex-col gap-5'>
      <InputWithLabel label={label} type='Email' placeHolder='xxxxx-xxxxx' />
      <Button className='w-full text-white bg-[#6f1dc9] hover:bg-[#622b9d]'>{Btntitle}</Button>
      {/* <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" className='mt-4' /> */}
        </div>
    </div>
  )
}
export default CheckRobot