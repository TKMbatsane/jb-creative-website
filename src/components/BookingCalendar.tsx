'use client';

import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { format, isSameDay } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

interface BookingCalendarProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
    className?: string;
}

interface BookingData {
    bookedDates: string[];
    unavailableDates: string[];
}

export default function BookingCalendar({ selectedDate, onDateChange, className = "" }: BookingCalendarProps) {
    const [bookingData, setBookingData] = useState<BookingData>({ bookedDates: [], unavailableDates: [] });
    const [loading, setLoading] = useState(true);

    // Fetch booking data on component mount
    useEffect(() => {
        fetchBookingData();
    }, []);

    const fetchBookingData = async () => {
        try {
            const response = await fetch('/api/bookings?action=booked');
            if (response.ok) {
                const data = await response.json();
                setBookingData(data);
            }
        } catch (error) {
            console.error('Error fetching booking data:', error);
        } finally {
            setLoading(false);
        }
    };

    // Check if a date is booked
    const isDateBooked = (date: Date): boolean => {
        const dateString = format(date, 'yyyy-MM-dd');
        return bookingData.bookedDates.includes(dateString);
    };

    // Check if a date is unavailable
    const isDateUnavailable = (date: Date): boolean => {
        const dateString = format(date, 'yyyy-MM-dd');
        return bookingData.unavailableDates.includes(dateString);
    };

    // Custom day class name function for color coding
    const getDayClassName = (date: Date): string => {
        if (isDateBooked(date)) {
            return 'booked-date'; // Yellow
        }
        if (isDateUnavailable(date)) {
            return 'unavailable-date'; // Red
        }
        return 'available-date'; // Green
    };

    // Filter dates function - prevent selection of booked/unavailable dates
    const filterDate = (date: Date): boolean => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Don't allow past dates
        if (date < today) {
            return false;
        }

        // Don't allow booked or unavailable dates
        return !isDateBooked(date) && !isDateUnavailable(date);
    };

    if (loading) {
        return (
            <div className={`animate-pulse ${className}`}>
                <div className="h-10 bg-zinc-700 rounded"></div>
            </div>
        );
    }

    return (
        <div className={className}>
            <DatePicker
                selected={selectedDate}
                onChange={onDateChange}
                filterDate={filterDate}
                dayClassName={getDayClassName}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select a date"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition"
                calendarClassName="booking-calendar"
                minDate={new Date()} // Prevent past dates
                showPopperArrow={false}
            />

            {/* Legend */}
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-zinc-300">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-zinc-300">Booked</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-zinc-300">Unavailable</span>
                </div>
            </div>

            <style jsx global>{`
        .booking-calendar .react-datepicker__day {
          color: #ffffff;
          background-color: #18181b; /* zinc-900 */
        }

        .booking-calendar .react-datepicker__day:hover {
          background-color: #27272a; /* zinc-800 */
        }

        .booking-calendar .react-datepicker__day--selected {
          background-color: #f59e0b; /* amber-400 */
          color: #000000;
        }

        .booking-calendar .react-datepicker__day--keyboard-selected {
          background-color: #f59e0b;
          color: #000000;
        }

        .booking-calendar .available-date {
          background-color: #16a34a !important; /* green-600 */
          color: #ffffff !important;
        }

        .booking-calendar .available-date:hover {
          background-color: #15803d !important; /* green-700 */
        }

        .booking-calendar .booked-date {
          background-color: #eab308 !important; /* yellow-500 */
          color: #000000 !important;
        }

        .booking-calendar .unavailable-date {
          background-color: #dc2626 !important; /* red-600 */
          color: #ffffff !important;
        }

        .booking-calendar .react-datepicker__header {
          background-color: #09090b; /* zinc-950 */
          border-bottom: 1px solid #27272a; /* zinc-800 */
        }

        .booking-calendar .react-datepicker__current-month,
        .booking-calendar .react-datepicker-time__header {
          color: #ffffff;
        }

        .booking-calendar .react-datepicker__day-name {
          color: #a1a1aa; /* zinc-400 */
        }

        .booking-calendar .react-datepicker__navigation {
          background: none;
          border: none;
          color: #ffffff;
        }

        .booking-calendar .react-datepicker__navigation:hover {
          background-color: #27272a; /* zinc-800 */
        }

        .booking-calendar .react-datepicker__triangle {
          display: none;
        }
      `}</style>
        </div>
    );
}