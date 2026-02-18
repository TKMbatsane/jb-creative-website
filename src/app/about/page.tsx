'use client';

import NavBar from '@/components/NavBar';
import TeamCard from '@/components/TeamCard';

export default function About() {
    const teamMembers = [
        {
            name: 'Jane Doe',
            role: 'Videographer',
            image: '/images/team/jane.jpeg',
            bio: 'Expert in cinematic storytelling through video production.'
        },
        {
            name: 'John Smith',
            role: 'Photo Editor',
            image: '/images/team/john.jpeg',
            bio: 'Enhancing every shot to make your memories shine.'
        },
        {
            name: 'Thabiso Mbatsane',
            role: 'Web designer and developer',
            image: '/images/photos/Thabiso.jpg',
            bio: 'Founder of JB Creative Cinema, Siya brings a unique vision and passion for capturing moments that matter. With over a decade of experience, Siya specializes in portrait and headshot photography, ensuring every client looks their best.'
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar />

            {/* Hero Section */}
            <section className="bg-[#98a869] py-20 px-6 text-center mt-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">About JB Creative Cinema</h1>
                <p className="text-zinc-200 max-w-3xl mx-auto text-lg md:text-xl">
                    We capture your moments with creativity, professionalism, and heart. Our mission is to provide high-quality photography and videography services tailored to every client’s needs.
                </p>
            </section>

            {/* Business Description */}
            <section className="py-20 px-6 bg-zinc-900">
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl font-bold mb-6">Our Vision & Values</h2>
                    <p className="text-zinc-300 text-lg">
                        JB Creative Cinema is dedicated to preserving your special moments in the most authentic and professional way. We value creativity, reliability, and client satisfaction above all else. Our goal is to make every photo and video not just a memory, but a story.
                    </p>
                    <p className="text-zinc-300 text-lg">
                        Our company is built on three core pillars: Quality, Visual Narrative, and Alignment with Sustainable Development Goals. These principles guide our approach to creating impactful, high-quality content that resonates with audiences while supporting sustainable business practices.
                    </p>
                    <p className="text-zinc-300 text-lg">
                        Whether it’s a corporate headshot, portrait session, wedding, or event coverage, our objective is to deliver visuals that are both timeless and uniquely yours.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 bg-black">
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className="text-5xl font-bold">Meet Our Team</h2>
                    <p className="text-zinc-400 text-lg mt-4">Passionate professionals dedicated to bringing your vision to life.</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}

                        />
                    ))}
                </div>
            </section>


        </div>
    );
}
