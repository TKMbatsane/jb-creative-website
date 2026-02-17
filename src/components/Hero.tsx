'use client';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    Capture Your <span className="bg-[#636b2f] bg-clip-text text-transparent">Moments</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
                    Professional portrait and headshot photography that reveals the authentic you. Elevate your professional image with timeless portraits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-[#636b2f] text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-105">
                        Book a Session
                    </button>
                    <button className="border border-zinc-600 px-8 py-4 rounded-lg font-semibold hover:border-white transition">
                        View Portfolio
                    </button>
                </div>
            </div>
        </section>
    );
}
