'use client';

import CounterCard from './CounterCard';

export default function CounterSection() {

    const stats = [
        {
            icon: '🚀',
            value: 2451,
            label: 'Projects Delivered'
        },
        {
            icon: '✓',
            value: 2300,
            label: 'Happy Clients'
        },
        {
            icon: '📞',
            value: 2780,
            label: 'Sessions Completed'
        },
        {
            icon: '❤️',
            value: 2984,
            label: 'Photos Delivered'
        }
    ];

    return (
        <section className="bg-black py-20 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">

                {stats.map((stat, index) => (
                    <CounterCard
                        key={index}
                        icon={stat.icon}
                        value={stat.value}
                        label={stat.label}
                    />
                ))}

            </div>

        </section>
    );
}
