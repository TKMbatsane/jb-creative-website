'use client';

import React from 'react';
import Modal from './Modal';
import BookingForm from './BookingForm';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Book a Session">
            <BookingForm onSubmitSuccess={onClose} />
        </Modal>
    );
}
