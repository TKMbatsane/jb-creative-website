'use client';

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

interface GalleryImage {
    src: string;
    alt: string;
    publicId?: string;
}

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // index of the currently highlighted/selected image (used both in carousel and modal)
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [open, setOpen] = useState(false);

    // Fetch images from Cloudinary API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                if (!response.ok) {
                    throw new Error('Failed to fetch images');
                }
                const data = await response.json();
                // Handle both array format and object format with images property
                const imagesList = Array.isArray(data) ? data : data.images || [];
                setImages(imagesList);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load images');
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    // helper to grab the current image object
    const selected = images[selectedIndex];

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

    // keyboard handlers for modal navigation (memoized so effect deps stay stable)
    const prevImage = useCallback(() => {
        setSelectedIndex((current) => (current - 1 + images.length) % images.length);
    }, [images.length]);

    const nextImage = useCallback(() => {
        setSelectedIndex((current) => (current + 1) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') setOpen(false);
        };

        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, prevImage, nextImage]);

    useEffect(() => {
        if (!emblaApi) return;

        const autoplay = setInterval(() => {
            emblaApi.scrollNext();
        }, 3500); // speed (lower = faster)

        return () => clearInterval(autoplay);
    }, [emblaApi]);

    if (loading) {
        return (
            <section id="portfolio" className="py-24 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-gray-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-12">Featured Work</h2>
                    <p>Loading gallery...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="portfolio" className="py-24 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-gray-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-12">Featured Work</h2>
                    <p>Error loading gallery: {error}</p>
                </div>
            </section>
        );
    }

    if (images.length === 0) {
        return (
            <section id="portfolio" className="py-24 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-gray-800">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-12">Featured Work</h2>
                    <p>No images found in gallery.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="portfolio" className="py-24 px-6 text-black dark:text-white bg-[#FFFAFA] dark:bg-[#252525]">

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
                                            setSelectedIndex(index);
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
                            suppressHydrationWarning
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
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                >
                    <div
                        className="relative max-w-xl w-180 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* left arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            suppressHydrationWarning
                            className="absolute left-2 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-[#d4af37] transition"
                        >
                            ‹
                        </button>

                        <Image
                            src={selected.src}
                            alt={selected.alt}
                            width={1600}
                            height={1000}
                            className="w-full h-auto rounded-xl"
                        />

                        {/* right arrow */}
                        <button
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            suppressHydrationWarning
                            className="absolute right-2 text-white text-3xl p-2 bg-black/40 rounded-full hover:bg-[#d4af37] transition"
                        >
                            ›
                        </button>

                        <button
                            onClick={() => setOpen(false)}
                            suppressHydrationWarning
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