'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

    return (

        <nav
            ref={menuRef}
            className="fixed top-0 w-full bg-[#636b2f] z-50 border-b border-zinc-800"
        >

            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" onClick={closeMenu}>
                    <Image
                        src="/images/JbLogo.jpeg"
                        alt="JB Creative Logo"
                        width={60}
                        height={60}
                        className="rounded-full transition-transform hover:scale-110"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">

                    <Link href="/" className="hover:text-[#d3d3d3]">Home</Link>

                    <Link href="/#portfolio" className="hover:text-[#d3d3d3]">Portfolio</Link>

                    <Link href="/#services" className="hover:text-[#d3d3d3]">Services</Link>

                    <Link href="/about" className="hover:text-[#d3d3d3]">About</Link>

                    <Link href="/#contact" className="hover:text-[#d3d3d3]">Contact</Link>

                </div>

                {/* Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1"
                >

                    <span className={`w-6 h-0.5 bg-white transition ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />

                    <span className={`w-6 h-0.5 bg-white transition ${isOpen ? 'opacity-0' : ''}`} />

                    <span className={`w-6 h-0.5 bg-white transition ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />

                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (

                <div className="md:hidden bg-[#636b2f] border-t border-zinc-800">

                    <div className="flex flex-col px-6 py-4 gap-4">

                        <Link href="/" onClick={closeMenu}>Home</Link>

                        <Link href="/#portfolio" onClick={closeMenu}>Portfolio</Link>

                        <Link href="/#services" onClick={closeMenu}>Services</Link>

                        <Link href="/about" onClick={closeMenu}>About</Link>

                        <Link href="/#contact" onClick={closeMenu}>Contact</Link>

                    </div>

                </div>

            )}

        </nav>
    );
}
