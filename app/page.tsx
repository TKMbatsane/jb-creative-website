'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-navbar-bg backdrop-blur-sm z-50 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="hover:scale-200 transition transform">
            <Image src="/images/logo.jpeg" alt="JB Creative Logo" width={60} height={60} className="h-12 w-auto rounded-lg" />
          </a>
          <div className="flex gap-8">
            <a href="#portfolio" className="text-zinc-400 hover:text-white transition">Portfolio</a>
            <a href="#services" className="text-zinc-400 hover:text-white transition">Services</a>
            <a href="#about" className="text-zinc-400 hover:text-white transition">About</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition">Contact us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Capture Your <span className="bg-navbar-bg bg-clip-text text-transparent">Moments</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
            Professional portrait and headshot photography that reveals the authentic you. Elevate your professional image with timeless portraits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navbar-bg text-black px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition transform hover:scale-105">
              Book a Session
            </button>
            <button className="border border-zinc-600 px-8 py-4 rounded-lg font-semibold hover:border-white transition">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-amber-400 transition">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-4">Professional Headshots</h3>
              <p className="text-zinc-400 mb-6">Perfect for LinkedIn, corporate profiles, and professional portfolios. Studio or on-location sessions available.</p>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>✓ Professional styling guidance</li>
                <li>✓ Multiple outfit changes</li>
                <li>✓ Retouching included</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-amber-400 transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-4">Portrait Sessions</h3>
              <p className="text-zinc-400 mb-6">Individual or group portrait sessions. Ideal for personal branding, actors, models, and professionals.</p>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>✓ Customized backdrops</li>
                <li>✓ Professional lighting</li>
                <li>✓ Digital gallery delivery</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg border border-zinc-800 hover:border-amber-400 transition">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">Branding Packages</h3>
              <p className="text-zinc-400 mb-6">Complete branding photography packages with consistent styling and premium post-production editing.</p>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>✓ Multiple locations</li>
                <li>✓ Creative direction</li>
                <li>✓ Fast turnaround</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 text-center">Ready to Shine?</h2>
          <p className="text-zinc-400 text-center text-lg mb-12">Get in touch to book your session or learn more about our services.</p>

          <form onSubmit={handleSubscribe} className="mb-12">
            <div className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition"
              >
                Subscribe
              </button>
            </div>
            {subscribed && (
              <p className="text-green-400 text-center text-sm">Thanks for subscribing!</p>
            )}
          </form>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-zinc-500 text-sm mb-2">EMAIL</p>
              <a href="mailto:hello@jbcreative.com" className="text-white font-semibold hover:text-amber-400 transition">
                hello@jbcreative.com
              </a>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-2">PHONE</p>
              <p className="text-white font-semibold">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm mb-2">LOCATION</p>
              <p className="text-white font-semibold">Your City, State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-8 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-zinc-500 text-sm">
          <p>&copy; 2026 JB Creative Cinema. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Instagram</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
