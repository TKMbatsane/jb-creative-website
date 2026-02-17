"use client";

import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

export default function Home() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);


    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar />

            <Hero />

            <Gallery />

            <section id="services" className="py-20 px-6 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon="📸"
                            title="Professional Headshots"
                            description="Perfect for LinkedIn, corporate profiles, and professional portfolios. Studio or on-location sessions available."
                            features={[
                                'Professional styling guidance',
                                'Multiple outfit changes',
                                'Retouching included',
                            ]}
                        />
                        <ServiceCard
                            icon="👥"
                            title="Portrait Sessions"
                            description="Individual or group portrait sessions. Ideal for personal branding, actors, models, and professionals."
                            features={[
                                'Customized backdrops',
                                'Professional lighting',
                                'Digital gallery delivery',
                            ]}
                        />
                        <ServiceCard
                            icon="🎬"
                            title="Branding Packages"
                            description="Complete branding photography packages with consistent styling and premium post-production editing."
                            features={[
                                'Multiple locations',
                                'Creative direction',
                                'Fast turnaround',
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section id="contact" className="py-20 px-6 bg-black">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4 text-center">Ready to Shine?</h2>
                    <p className="text-zinc-400 text-center text-lg mb-12">Get in touch to book your session or learn more about our services.</p>

                    <form onSubmit={handleSubscribe} className="mb-12">
                        <div className="flex gap-3 mb-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                            />
                            <button
                                type="submit"
                                className="bg-[#636b2f] text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition"
                            >
                                Subscribe
                            </button>
                        </div>
                        {subscribed && (
                            <p className="text-green-400 text-center text-sm">Thanks for subscribing!</p>
                        )}
                    </form>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">EMAIL</p>
                            <a href="mailto:jbcreativecinema@gmail.com" className="text-white font-semibold hover:text-amber-400 transition">
                                jbcreativecinema@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">PHONE</p>
                            <p className="text-white font-semibold">+27 76 130 2496</p>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">LOCATION</p>
                            <p className="text-white font-semibold">Mbombela Valencia Park Mbombela, South Africa 1200</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
