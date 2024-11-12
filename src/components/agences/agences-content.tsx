import { Button } from '../ui/button'
import AgenceStatistics from './agence-statistcs'
export default function AgenceContent() {
    const staticStats = [
        { number: '100%', title: 'Satisfaction Client', desc: 'Un service fiable et apprécié.' },
        { number: '+50', title: 'Agences', desc: 'Dans les grandes villes d\'Algérie.' },
        { number: '24/7', title: 'Support Client', desc: 'Assistance à toute heure.' },
        { number: '1,000+', title: 'Colis Livrés par Jour', desc: 'Livraisons sécurisées en Algérie.' }
    ]
    return (
        <div className='flex flex-col justify-between max-w-[606px] max-h-[635px] mb-28'>
            <div className='flex flex-col justify-between max-h-[243px] mb-16'>
                <p className='text-[16px] font-[600] text-[#FF6200] mb-4 '>Nos agences</p>
                <h1 className='text-4xl font-[600] text-black leading-[44px] mb-3' >Nos Agences Partout</h1>
                <p className='font-normal text-[20px] text-[#5D5567] leading-[30px] mb-[40px]'>Retrouvez Falcon Express dans plusieurs agences à travers l&apos;Algérie, prêtes à répondre à tous vos besoins .</p>
                <Button className="bg-[#6f1dc9] text-[16px] font-[600] max-w-[174px]" variant="default">Voir nos agences</Button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-h-[300px]'>
            {staticStats.map((stat, index) => (
                <AgenceStatistics
                key={index}
                number={stat.number}
                title={stat.title}
                desc={stat.desc}
                />
            ))}
            </div>
        
        </div>
    )
}
