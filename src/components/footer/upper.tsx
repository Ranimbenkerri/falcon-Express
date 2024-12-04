import React from 'react'
import Link from "next/link";
import { Button } from '../ui/button';
type Link = {
    name: string;
    href: string;
};

const links:  Link[] = [
    { name: "Acceuill", href: "#hero" },
    { name: "Nos Services", href: "#services" },
    { name: "Suivre Mon Colis", href: "#suivi-mon-colis" },
    { name: "Nos agences", href: "#agences" },
    { name: "Nos tarifs", href: "#tarifs" },
    { name: "Nos qualites", href: "#qualities" },
    { name: "Avis d'arrivée", href: "#avis-arivee" },
    { name: "Contact", href: "#contact" },
];

export default function Upper() {
  return (
<div className='flex flex-row justify-between px-8'>
            <div className='flex flex-col gap-8 justify-between min-w-[1280px]'>
                <h2 className="text-[24px] font-[900] text-[#6f1dc9]">
                    Falcon<span className="text-[#FF6200] font-[900] text-[24px]">Express</span>
                </h2>
                <p className='text-[#5D5567]'>Falcon Express, votre partenaire de confiance pour des livraisons rapides et sécurisées, partout et à temps.</p>
                <div className="flex flex-row gap-3">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='  text-[14px]'>
                        {link.name}
                    </Link>
                ))}
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-[14px] text-black font-[500]'>Liens Rapides</p>
                <div className='flex flex-col gap-3'>
                <Button variant="default" className="bg-[#FF6200] text-[12px] w-[166px]  hover:bg-[#cc753e]">Voir nos agences</Button>
                <Button variant="default" className="bg-[#FF6200] text-[12px] w-[166px] hover:bg-[#cc753e]">Consulter nos tarifs</Button>
                </div>
            </div>
        </div>
  )
}
