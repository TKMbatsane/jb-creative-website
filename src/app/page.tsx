"use client";

import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';
import CounterSection from '../components/CounterSection';
import BookingForm from '../components/BookingForm';



export default function Home() {
    return (
        <div className="min-h-screen text-black dark:text-white bg-[#FFFAFA] dark:bg-[#000000]">
            <NavBar />

            <Hero />
            <CounterSection />
            <Gallery />

            <section id="services" className="py-20 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-[#000000]">
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

            <section id="contact" className="py-20 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-[#000000]">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-5xl font-bold mb-4 text-center">Book Your Session</h2>
                    <p className="text-zinc-400 text-center text-lg mb-12">Ready to shine? Fill out the form below and we'll get in touch to confirm your booking.</p>

                    <BookingForm />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">EMAIL</p>
                            <a href="mailto:jbcreativecinema@gmail.com" className="text-black dark:text-white font-semibold hover:text-[#636b2f] transition">
                                jbcreativecinema@gmail.com
                            </a>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">PHONE</p>
                            <p className="text-black dark:text-white font-semibold">+27 76 130 2496</p>
                        </div>
                        <div>
                            <p className="text-zinc-500 text-sm mb-2">LOCATION</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.123456789!2d30.9862!3d-25.4669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec1234567890abc%3A0xabcdef1234567890!2sUMP%20Center%20of%20Entrepreneurship%20%26%20Rapid%20Incubator!5e0!3m2!1sen!2sza!4v1670000000000!5m2!1sen!2sza"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}
