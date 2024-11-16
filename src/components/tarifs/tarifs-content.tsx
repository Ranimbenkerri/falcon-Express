import { Button } from "../ui/button";
import CheckedOption from "../common/cheked-option";
export default function TarifsContent() {
    const checkText = [
        'Tarifs Transparents', 
        'Options Flexibles',
        'Tarification Nationale Compétitive'
    ];
    return (
        <div>
            <div className='flex justify-center lg:justify-start max-w-[606px] max-h-[505px]'>
            <div className='flex flex-col justify-between  '>
                <p className='text-[16px] font-[600] text-[#FF6200] mb-4  text-center lg:text-start'>Nos Tarifs</p>
                <h1 className='text-4xl font-[600] text-black leading-[44px] mb-3 text-center lg:text-start' >Des Tarifs Accessibles et Flexibles</h1>
                <p className='font-normal text-[20px] text-[#5D5567] leading-[30px] mb-[40px] text-center lg:text-start'>Chez Falcon Express, nous offrons des options de tarification adaptées pour un service de qualité à un prix accessible.</p>
                <div className="mb-10">
                    {checkText.map((text, index) => (<CheckedOption key={index} text={text}/>))}
                </div>

                
                <Button className="bg-[#6f1dc9] text-[16px] font-[600]  max-w-screen-sm lg:max-w-[174px]" variant="default">Voir nos agences</Button>
            </div>
            </div>
        </div>
    )
}
