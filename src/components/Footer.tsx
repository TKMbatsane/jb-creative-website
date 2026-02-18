'use client';

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-black py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm gap-4 md:gap-0">
                <p>© 2026 JB Creative Cinema. All rights reserved.</p>
                <div className="flex gap-6">
                    <a
                        href="https://www.instagram.com/jbcreative_cinema"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.tiktok.com/@jb.creative.cinem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        TikTok
                    </a>
                    <a
                        href="https://web.facebook.com/profile.php?id=100083672318103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
}
