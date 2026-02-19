'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
    icon: string;
    value: number;
    label: string;
};

export default function CounterCard({ icon, value, label }: Props) {

    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {

                if (entries[0].isIntersecting && !started) {
                    setStarted(true);
                }

            },
            {
                threshold: 0.5 // trigger when 50% visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();

    }, [started]);



    useEffect(() => {

        if (!started) return;

        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {

            start += increment;

            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }

        }, 16);

        return () => clearInterval(timer);

    }, [started, value]);



    return (
        <div
            ref={ref}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center hover:border-[#636b2f] transition duration-300"
        >

            <div className="text-4xl mb-4">
                {icon}
            </div>

            <div className="text-4xl font-bold text-white">
                {count.toLocaleString()}+
            </div>

            <div className="text-zinc-400 mt-2">
                {label}
            </div>

        </div>
    );
}
