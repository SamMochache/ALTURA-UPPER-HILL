import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  MailIcon,
  PhoneIcon } from
'lucide-react';
interface BookingWidgetProps {
  price: string;
  status: string;
}
export function BookingWidget({ price, status }: BookingWidgetProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  if (isSuccess) {
    return (
      <div className="bg-altura-card border border-altura-gold/30 p-8 text-center">
        <div className="w-16 h-16 bg-altura-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CalendarIcon className="w-8 h-8 text-altura-gold" />
        </div>
        <h3 className="font-serif text-2xl text-altura-white mb-4">
          Viewing Requested
        </h3>
        <p className="text-altura-muted text-sm mb-8">
          Our concierge team will contact you shortly to confirm your private
          viewing appointment.
        </p>
        <Button
          variant="secondary"
          className="w-full"
          onClick={() => setIsSuccess(false)}>
          
          Book Another
        </Button>
      </div>);

  }
  return (
    <div className="bg-altura-card border border-altura-border p-8 sticky top-32">
      <div className="mb-8 pb-8 border-b border-altura-border">
        <span className="text-altura-muted text-sm uppercase tracking-widest block mb-2">
          Asking Price
        </span>
        <div className="flex items-end justify-between">
          <span className="font-serif text-4xl text-altura-white">{price}</span>
          <span
            className={`px-3 py-1 text-xs tracking-widest uppercase font-medium ${status === 'Available' ? 'text-altura-gold' : status === 'Reserved' ? 'text-altura-warm' : 'text-red-400'}`}>
            
            {status}
          </span>
        </div>
      </div>

      <h3 className="font-serif text-xl text-altura-white mb-6">
        Schedule a Private Viewing
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <CalendarIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
            <Input
              placeholder="Date"
              className="pl-8 bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors"
              required />
            
          </div>
          <div className="relative">
            <ClockIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
            <Input
              placeholder="Time"
              className="pl-8 bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors"
              required />
            
          </div>
        </div>

        <div className="relative">
          <UserIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
          <Input
            placeholder="Full Name"
            className="pl-8 bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors"
            required />
          
        </div>

        <div className="relative">
          <MailIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
          <Input
            type="email"
            placeholder="Email Address"
            className="pl-8 bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors"
            required />
          
        </div>

        <div className="relative">
          <PhoneIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
          <Input
            type="tel"
            placeholder="Phone Number"
            className="pl-8 bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors"
            required />
          
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full mt-4"
          loading={isSubmitting}
          disabled={status === 'Sold'}>
          
          {status === 'Sold' ? 'Currently Unavailable' : 'Request Viewing'}
        </Button>
      </form>

      <p className="text-altura-muted text-xs text-center mt-6">
        By requesting a viewing, you agree to our{' '}
        <a
          href="/roadmap"
          className="text-altura-gold hover:text-altura-gold-light transition-colors">
          
          Terms of Service
        </a>{' '}
        and{' '}
        <a
          href="/roadmap"
          className="text-altura-gold hover:text-altura-gold-light transition-colors">
          
          Privacy Policy
        </a>
        .
      </p>
    </div>);

}