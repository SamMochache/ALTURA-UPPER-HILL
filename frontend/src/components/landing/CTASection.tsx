import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Luxury Interior Detail"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-altura-black/80 backdrop-blur-sm z-10" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>
          
          <div className="w-12 h-12 mx-auto border border-altura-gold rounded-full flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-altura-gold rounded-full" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-altura-white mb-6">
            Begin Your Altura Journey
          </h2>

          <p className="text-altura-warm text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Schedule a private viewing or speak with our investment advisors to
            secure your place in Nairobi's most prestigious address.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
            <Link to="/properties">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Schedule Viewing
              </Button>
            </Link>
            <a href="tel:+254700000000">
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto bg-altura-black/50">
                
                Speak to an Advisor
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-altura-white/10 pt-12">
            <a
              href="tel:+254700000000"
              className="flex flex-col items-center text-altura-muted hover:text-altura-gold transition-colors">
              
              <PhoneIcon className="w-5 h-5 mb-3 text-altura-gold" />
              <span className="text-sm">+254 700 000 000</span>
            </a>
            <a
              href="mailto:info@alturaupperhill.com"
              className="flex flex-col items-center text-altura-muted hover:text-altura-gold transition-colors">
              
              <MailIcon className="w-5 h-5 mb-3 text-altura-gold" />
              <span className="text-sm">info@alturaupperhill.com</span>
            </a>
            <a
              href="https://maps.google.com/?q=Upper+Hill+Road+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-altura-muted hover:text-altura-gold transition-colors">
              
              <MapPinIcon className="w-5 h-5 mb-3 text-altura-gold" />
              <span className="text-sm text-center">
                Upper Hill Road
                <br />
                Nairobi, Kenya
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}