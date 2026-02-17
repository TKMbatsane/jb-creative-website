'use client';

export default function Gallery() {
    return (
        <section id="portfolio" className="py-20 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-16 text-center">Featured Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="group relative overflow-hidden rounded-lg bg-zinc-900 aspect-square cursor-pointer">
                            <div className="w-full h-full bg-gradient-to-br from-amber-400/20 to-orange-500/20 flex items-center justify-center">
                                <span className="text-zinc-500 text-lg">Portrait {item}</span>
                            </div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                                <span className="text-white font-semibold">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
