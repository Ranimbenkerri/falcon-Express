'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
type Link = {
    name: string;
    href: string;
};

const links: Link[] = [
    { name: "Acceuill", href: "#hero" },
    { name: "Nos Services", href: "#services" },
    { name: "Nos agences", href: "#agences" },
    { name: "Nos tarifs", href: "#tarifs" },
    { name: "Nos qualites", href: "#qualities" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string>("Acceuill");
    const handleScroll = (href: string) => {
        const section = document.querySelector(href) as HTMLElement | null;
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            setActiveLink(href); // Update active link
        }
    };

    return (
        <div className="px-10 py-5 flex items-center justify-between  top-0 bg-white shadow-sm z-10 mb-20">
            <h2 className="text-[24px] font-[900] text-[#6f1dc9]">
                Falcon<span className="text-[#FF6200] font-[900] text-[24px]">Express</span>
            </h2>
            <div className="flex">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => handleScroll(link.href)}
                        className={`px-3 py-2 rounded-md text-[14px]  ${
                            activeLink === link.href ? "text-[#FF6200]" : "text-gray-600"
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex gap-2">
            <Button variant="default" className="bg-[#FF6200] hover:bg-[#ff7925] text-[14px] font-[600] hover:">Voir nos tarifs</Button>
            <Button variant="default" className="bg-[#6f1dc9] hover:bg-[#7d38c6] text-[14px] font-[600]">Avis d&apos;arrivée</Button>
            </div>
        </div>
    );
}
