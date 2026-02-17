'use client';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black py-8 px-6">
            <div className="max-w-6xl mx-auto flex justify-between items-center text-zinc-500 text-sm">
                <p>© 2026 JB Creative Cinema. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Instagram</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                    <a href="#" className="hover:text-white transition">Facebook</a>
                </div>
            </div>
        </footer>
    );
}
