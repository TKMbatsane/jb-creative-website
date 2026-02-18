'use client';

import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-[#636b2f] backdrop-blur-sm z-50 border-b border-zinc-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="hover:scale-200 transition transform">
                    <Image src="/images/logo.jpeg" alt="JB Creative Logo" width={60} height={60} className="h-12 w-auto rounded-full" />
                </a>
                <div className="flex gap-8">
                    <a href="#portfolio" className="text-zinc-400 hover:text-white transition">Portfolio</a>
                    <a href="#services" className="text-zinc-400 hover:text-white transition">Services</a>
                    <a href="#about" className="text-zinc-400 hover:text-white transition">About</a>
                    <a href="#contact" className="text-zinc-400 hover:text-white transition">Contact us</a>
                </div>
            </div>
        </nav>
    );
}
