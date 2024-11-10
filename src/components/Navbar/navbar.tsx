import Link from "next/link";
const links = [
    "Offres mobiles",
    "Internet",
    "Services",
    "Téléphones",
    "Assistance",
  ];
export default function Navbar() {
    return (
        <div>
            <div>
                {links.map((link) => (
                    <Link href="#" key={link}>{link}</Link>
                ))}
            </div>
        </div>
    );
}