'use client';

import NavBar from '@/components/NavBar';
import TeamCard from '@/components/TeamCard';

export default function About() {

    const teamMembers = [
        {
            name: 'Jane Doe',
            role: 'Videographer',
            image: '/images/team/jane.jpeg',
        },
        {
            name: 'John Smith',
            role: 'Photo Editor',
            image: '/images/team/john.jpeg',
        },
        {
            name: 'Thabiso Mbatsane',
            role: 'Web Designer & Developer',
            image: '/images/photos/Thabiso.jpg',
        },
    ];

    return (

        <div className="min-h-screen text-black dark:text-white bg-[#FFFAFA] dark:bg-gray-800">

            <NavBar />

            {/* Hero Section */}
            <section className="py-24 px-6 text-center mt-16">

                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
                    About JB Creative Cinema
                </h1>

                <p className="max-w-3xl mx-auto text-lg md:text-xl text-black dark:text-white leading-relaxed">
                    We capture your moments with creativity, professionalism, and heart.
                    Our mission is to provide high-quality photography and videography services tailored to every client’s needs.
                </p>

            </section>


            {/* Vision & Mission */}
            <section className="py-24 px-6">

                <div className="max-w-5xl mx-auto text-center space-y-8 ">

                    <h2 className="text-4xl font-bold">
                        Our Vision & Mission
                    </h2>

                    <p className="text-lg text-black dark:text-white leading-relaxed">
                        JB Creative Cinema thrives on being a leading solutions company in South Africa,
                        setting the standard in visual media production and equipment services while driving social impact through innovation.
                    </p>

                    <p className="text-black dark:text-white text-lg leading-relaxed">
                        We deliver exceptional photography, videography and equipment solutions tailored to the evolving needs of corporate and creative sectors.
                    </p>

                    <p className="text-black dark:text-white text-lg leading-relaxed">
                        Whether it&apos;s a corporate headshot, portrait session, wedding, or event coverage,
                        we deliver visuals that are timeless and uniquely yours.
                    </p>

                </div>

            </section>


            {/* Team Section */}
            <section className="py-24 px-6">

                <div className="max-w-6xl mx-auto text-center mb-16">

                    <h2 className="text-5xl font-bold mb-4">
                        Meet Our Team
                    </h2>

                    <p className="text-black dark:text-white text-lg">
                        Passionate professionals dedicated to bringing your vision to life.
                    </p>

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
