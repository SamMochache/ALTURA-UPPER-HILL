import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import {
  WavesIcon,
  DumbbellIcon,
  WineIcon,
  FilmIcon,
  SparklesIcon,
  TrophyIcon } from
'lucide-react';
const amenities = [
{
  id: 1,
  name: 'Infinity Pool',
  icon: WavesIcon,
  status: 'Available',
  hours: '6:00 AM - 10:00 PM'
},
{
  id: 2,
  name: 'Spa & Wellness',
  icon: SparklesIcon,
  status: 'Available',
  hours: 'By Appointment'
},
{
  id: 3,
  name: 'Sky Lounge',
  icon: WineIcon,
  status: 'Available',
  hours: '5:00 PM - 12:00 AM'
},
{
  id: 4,
  name: 'Fitness Center',
  icon: DumbbellIcon,
  status: 'Available',
  hours: '24/7 Access'
},
{
  id: 5,
  name: 'Private Cinema',
  icon: FilmIcon,
  status: 'Booked Today',
  hours: '2:00 PM - 11:00 PM'
},
{
  id: 6,
  name: 'Tennis Court',
  icon: TrophyIcon,
  status: 'Available',
  hours: '6:00 AM - 8:00 PM'
}];

export function AmenityBooking() {
  const [bookingId, setBookingId] = useState<number | null>(null);
  const handleBook = (id: number) => {
    setBookingId(id);
    setTimeout(() => setBookingId(null), 1500);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {amenities.map((amenity) => {
        const Icon = amenity.icon;
        const isBooked = amenity.status === 'Booked Today';
        const isBooking = bookingId === amenity.id;
        return (
          <motion.div
            key={amenity.id}
            whileHover={{
              y: -5
            }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 flex flex-col relative overflow-hidden group">
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center group-hover:border-altura-gold/50 transition-colors">
                <Icon className="w-5 h-5 text-altura-gold" />
              </div>
              <span
                className={`px-2 py-1 text-[10px] tracking-widest uppercase font-medium ${isBooked ? 'bg-altura-warm/20 text-altura-warm border border-altura-warm/30' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                
                {amenity.status}
              </span>
            </div>

            <h3 className="font-serif text-xl text-altura-white mb-2">
              {amenity.name}
            </h3>
            <p className="text-altura-muted text-sm mb-8 flex-grow">
              {amenity.hours}
            </p>

            <Button
              variant={isBooked ? 'ghost' : 'secondary'}
              className="w-full"
              disabled={isBooked || isBooking}
              onClick={() => handleBook(amenity.id)}
              loading={isBooking}>
              
              {isBooked ?
              'Unavailable' :
              isBooking ?
              'Booking...' :
              'Reserve Space'}
            </Button>

            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-altura-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>);

      })}
    </div>);

}