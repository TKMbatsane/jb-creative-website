'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Detect click outside
    useEffect(() => {

        const handleClickOutside = (event: MouseEvent) => {

            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }

        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    // social link definitions so we can render them in two spots
    const socialLinks = [
        { href: 'https://www.instagram.com/jbcreative_cinema', Icon: FaInstagram, label: 'Instagram' },
        { href: 'https://www.tiktok.com/@jb.creative.cinem', Icon: FaTiktok, label: 'TikTok' },
        { href: 'https://web.facebook.com/profile.php?id=100083672318103', Icon: FaFacebook, label: 'Facebook' },
    ];

    return (

        <nav
            ref={menuRef}
            className="fixed top-0 w-full bg-[#FFFAFA] dark:bg-[#000000] z-50  text-black dark:text-white"
        >

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center md:justify-center relative">

                {/* Mobile Logo */}
                <Link href="/" onClick={closeMenu} className="md:hidden">
                    <Image
                        src="/images/JbLogo.jpeg"
                        alt="JB Creative Logo"
                        width={80}
                        height={80}
                        className="rounded-full transition-transform hover:scale-110"
                    />
                </Link>

                {/* Hamburger on right for mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 absolute right-6"
                >

                    <span className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />

                    <span className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? 'opacity-0' : ''}`} />

                    <span className={`w-6 h-0.5 bg-black dark:bg-white transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />

                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12 ">

                    <Link href="/" className="hover:text-[#d3d3d3]">Home</Link>

                    <Link href="/#portfolio" className="hover:text-[#d3d3d3]">Portfolio</Link>

                    <Link href="/#services" className="hover:text-[#d3d3d3]">Services</Link>

                    {/* Logo */}
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src="/images/JbLogo.jpeg"
                            alt="JB Creative Logo"
                            width={120}
                            height={100}
                            className="rounded-full transition-transform hover:scale-110 border border-zinc-800"
                        />
                    </Link>
                    <Link href="/about" className="hover:text-[#d3d3d3]">About</Link>

                    <Link href="/#contact" className="hover:text-[#d3d3d3]">Contact</Link>

                    {/* social icons */}
                    <div className="flex gap-4">
                        {socialLinks.map(({ href, Icon, label }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-black dark:text-white hover:text-[#d3d3d3] transition text-xl"
                            >
                                <Icon />
                            </a>
                        ))}
                    </div>

                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (

                <div className="md:hidden bg-white dark:bg-gray-800 border-t border-zinc-800 text-black dark:text-white">

                    <div className="flex flex-col px-6 py-4 gap-4">

                        <Link href="/" onClick={closeMenu}>Home</Link>

                        <Link href="/#portfolio" onClick={closeMenu}>Portfolio</Link>

                        <Link href="/#services" onClick={closeMenu}>Services</Link>

                        <Link href="/about" onClick={closeMenu}>About</Link>

                        <Link href="/#contact" onClick={closeMenu}>Contact</Link>

                        {/* social icons at bottom of mobile menu */}
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map(({ href, Icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="text-black dark:text-white hover:text-[#d3d3d3] transition text-2xl"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>

                    </div>

                </div>

            )}

        </nav>
    );
}
