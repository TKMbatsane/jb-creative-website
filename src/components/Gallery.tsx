'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const images = [{ src: '/images/jbImages/gallery1.jpeg', alt: 'Portrait 1' },
{ src: '/images/jbImages/gallery2.jpeg', alt: 'Portrait 2' },
{ src: '/images/jbImages/gallery3.jpeg', alt: 'Portrait 3' },
{ src: '/images/jbImages/gallery4.jpeg', alt: 'Portrait 4' },
{ src: '/images/jbImages/gallery5.jpeg', alt: 'Portrait 5' },
{ src: '/images/jbImages/gallery6.JPG', alt: 'Portrait 6' },
{ src: '/images/jbImages/gallery7.JPG', alt: 'Portrait 7' },
{ src: '/images/jbImages/gallery8.JPG', alt: 'Portrait 8' },
{ src: '/images/jbImages/gallery9.JPG', alt: 'Portrait 9' },
{ src: '/images/jbImages/gallery10.JPG', alt: 'Portrait 10' },
{ src: '/images/jbImages/gallery11.JPG', alt: 'Portrait 11' },
{ src: '/images/jbImages/gallery12.JPG', alt: 'Portrait 12' },
{ src: '/images/jbImages/gallery13.JPG', alt: 'Portrait 13' },
];

export default function Gallery() {

    const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        containScroll: false
    });

    // Track active slide (works with loop)
    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3500); // speed (lower = faster)

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    return (
        <section id="portfolio" className="py-24 px-6 bg-black text-white">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-bold mb-12 text-center">
                    Featured Work
                </h2>

                {/* SLIDER */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">

                        {images.map((image, index) => {

                            const isActive = index === selectedIndex;

                            return (
                                <div
                                    key={index}
                                    className={`flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_30%] px-4
                  transition-all duration-500 ease-in-out
                  ${isActive ? 'scale-110 opacity-100 z-10' : 'scale-90 opacity-50'}
                  `}
                                >
                                    <div
                                        className="relative h-[450px] rounded-xl overflow-hidden cursor-pointer shadow-2xl"
                                        onClick={() => {
                                            setSelected(image);
                                            setOpen(true);
                                        }}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

                {/* DOT SCROLL BAR (works better with loop) */}
                <div className="flex justify-center mt-10 gap-3">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`h-2 rounded-full transition-all duration-300
              ${index === selectedIndex
                                    ? 'w-10 bg-[#d4af37]'
                                    : 'w-3 bg-white/30 hover:bg-white/50'}
              `}
                        />
                    ))}
                </div>

            </div>


            {/* MODAL */}
            {open && selected && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                >
                    <div
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            width={1600}
                            height={1000}
                            className="w-full h-auto rounded-xl"
                        />

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4 rounded-full bg-black/60 p-3 text-white hover:bg-[#d4af37] hover:text-black transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
}