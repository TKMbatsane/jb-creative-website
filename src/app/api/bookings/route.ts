import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for bookings (in production, use a database)
let bookings: { [date: string]: { name: string; email: string; service: string } } = {};

// Unavailable dates (dates when no bookings are accepted)
const UNAVAILABLE_DATES = [
    '2026-12-25', // Christmas
    '2026-01-01', // New Year
    '2026-12-31', // New Year's Eve
    // Add more unavailable dates as needed
];

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const action = searchParams.get('action');

        if (action === 'booked') {
            // Return all booked dates
            return NextResponse.json({
                bookedDates: Object.keys(bookings),
                unavailableDates: UNAVAILABLE_DATES
            });
        }

        // Return all bookings (for admin purposes)
        return NextResponse.json({ bookings, unavailableDates: UNAVAILABLE_DATES });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { date, name, email, service } = body;

        if (!date || !name || !email || !service) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Check if date is already booked
        if (bookings[date]) {
            return NextResponse.json({ error: 'Date already booked' }, { status: 409 });
        }

        // Check if date is unavailable
        if (UNAVAILABLE_DATES.includes(date)) {
            return NextResponse.json({ error: 'Date is unavailable' }, { status: 409 });
        }

        // Add booking
        bookings[date] = { name, email, service };

        return NextResponse.json({ success: true, message: 'Booking created successfully' });
    } catch (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const date = searchParams.get('date');

        if (!date) {
            return NextResponse.json({ error: 'Date parameter required' }, { status: 400 });
        }

        if (!bookings[date]) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        delete bookings[date];

        return NextResponse.json({ success: true, message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
    }
}