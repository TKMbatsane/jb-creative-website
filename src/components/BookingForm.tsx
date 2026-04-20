'use client';

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const SERVICES = [
    'Professional Headshots',
    'Portrait Sessions',
    'Branding Packages'
];

// Initialize EmailJS - Replace with your actual IDs
const EMAILJS_SERVICE_ID = 'service_0vy2lys';
const EMAILJS_TEMPLATE_ID = 'template_mk7zkaq';
const EMAILJS_PUBLIC_KEY = 'Z_wc6Yqk8nwSUqwO_';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        bookingDate: '',
        service: SERVICES[0],
        details: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
    const [isEmailJSInitialized, setIsEmailJSInitialized] = useState(false);

    // Initialize EmailJS once on component mount
    useEffect(() => {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        setIsEmailJSInitialized(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            if (!isEmailJSInitialized) {
                throw new Error('EmailJS not initialized');
            }

            // Prepare template parameters
            const templateParams = {
                from_name: formData.fullName,
                from_email: formData.email,
                from_phone: formData.phone,
                booking_date: formData.bookingDate,
                service: formData.service,
                details: formData.details || 'No additional details provided',
                to_email: 'mbatsanethabiso@gmail.com'
            };

            // Send email
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );

            if (response.status === 200) {
                setMessage({
                    type: 'success',
                    text: 'Booking request submitted successfully! We\'ll be in touch soon.'
                });
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    bookingDate: '',
                    service: SERVICES[0],
                    details: ''
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage({
                type: 'error',
                text: 'Failed to submit booking request. Please try again or contact us directly.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                    placeholder="John Doe"
                />
            </div>

            {/* Email Address */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                    placeholder="your@email.com"
                />
            </div>

            {/* Phone Number */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                    placeholder="+27 76 130 2496"
                />
            </div>

            {/* Booking Date */}
            <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium mb-2">
                    Preferred Booking Date *
                </label>
                <input
                    type="date"
                    id="bookingDate"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                />
            </div>

            {/* Service Selection */}
            <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Select Service *
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition"
                >
                    {SERVICES.map(service => (
                        <option key={service} value={service}>
                            {service}
                        </option>
                    ))}
                </select>
            </div>

            {/* Additional Details */}
            <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                    Additional Details
                </label>
                <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition resize-none"
                    placeholder="Tell us about any special requests or details for your session..."
                />
            </div>

            {/* Message Display */}
            {message && (
                <div
                    className={`p-4 rounded-lg ${
                        message.type === 'success'
                            ? 'bg-green-900 text-green-100 border border-green-700'
                            : 'bg-red-900 text-red-100 border border-red-700'
                    }`}
                >
                    {message.text}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#636b2f] hover:bg-[#7a8239] text-black px-6 py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-orange-500/50"
            >
                {loading ? 'Submitting...' : 'Book Your Session'}
            </button>
        </form>
    );
}
