'use client'
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const links = [
    "Acceuill",
    "Nos Services",
    "Nos agences",
    "Nos tarifs",
    "Nos qualites",
    "Contact",
];

export default function Navbar() {
    const [activeLink, setActiveLink] = useState("Acceuill");

    return (
        <div className="px-52 py-5 flex items-center justify-between sticky top-0 bg-white shadow-sm z-10">
            <h2 className="text-[24px] font-[900]  text-[#6f1dc9]">
                Falcon<span className="text-[#FF6200] font-[900]  text-[24px]">Express</span>
            </h2>
            <div className="flex">
                {links.map((link) => (
                    <Link
                        href="#"
                        key={link}
                        className={`px-2 text-[16px] ${activeLink === link ? "text-[#FF6200]" : "text-black"}`}
                        onClick={() => setActiveLink(link)}
                    >
                        {link}
                    </Link>
                ))}
            </div>
            <Button variant="default" className="bg-[#FF6200] text-[14px]  font-[600]">Voir nos tarifs</Button>
        </div>
    );
}
