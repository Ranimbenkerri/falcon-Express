'use client';

import { useState } from "react";
import { Button } from "../ui/button";

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
        <div className="px-52 py-5 flex items-center justify-between sticky top-0 bg-white shadow-sm z-10">
            <h2 className="text-[24px] font-[900] text-[#6f1dc9]">
                Falcon<span className="text-[#FF6200] font-[900] text-[24px]">Express</span>
            </h2>
            <div className="flex">
                {links.map((link) => (
                    <button
                        key={link.name}
                        className={`px-2 text-[16px] ${
                            activeLink === link.href ? "text-[#FF6200]" : "text-black"
                        }`}
                        onClick={() => handleScroll(link.href)}
                    >
                        {link.name}
                    </button>
                ))}
            </div>
            <Button variant="default" className="bg-[#FF6200] hover:bg-[#ff7925] text-[14px] font-[600]">
                Voir nos tarifs
            </Button>
        </div>
    );
}
