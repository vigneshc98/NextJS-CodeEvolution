"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';

const navLinks = [
    {name:"Register", href: "/register"},
    {name:"Login", href: "/login"}
];

export default function AuthLayout({children} : {children: React.ReactNode}){
    const pathName = usePathname();
    return (
        <div>
           { navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);
                return (
                    <div  key={link.name} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
                        <Link href={link.href} >{link.name}</Link>
                    </div>
                );
            })}
            {children}
        </div>
    );
}