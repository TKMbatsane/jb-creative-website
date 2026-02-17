'use client';

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/10"></div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    Capture Your <span className="text-[#636b2f]">Moments</span>
                </h1>

                <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                    Professional portrait and headshot photography that reveals the authentic you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="bg-[#636b2f] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                        Book a Session
                    </Link>

                    <Link href="/portfolio" className="border border-white px-8 py-4 rounded-lg font-semibold hover:border-[#636b2f] transition">
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
