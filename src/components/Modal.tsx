'use client';

import React from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative z-10 bg-[#1a1a1a] rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-[#1a1a1a] border-b border-zinc-800 px-8 py-6 flex items-center justify-between">
                    {title && <h2 className="text-2xl font-bold text-white">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="ml-auto text-zinc-400 hover:text-white transition"
                        aria-label="Close modal"
                    >
                        <IoClose size={28} />
                    </button>
                </div>

                {/* Content */}
                <div className="px-8 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
