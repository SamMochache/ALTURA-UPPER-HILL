import React from 'react';
import { motion } from 'framer-motion';
export function AboutSection() {
  const stats = [
  {
    value: '200+',
    label: 'Exclusive Residences'
  },
  {
    value: '40',
    label: 'Floors of Luxury'
  },
  {
    value: '5-Star',
    label: 'World-Class Amenities'
  },
  {
    value: '15%',
    label: 'Projected Annual ROI'
  }];

  return (
    <section className="py-32 bg-altura-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>
            
            <div className="w-16 h-px bg-altura-gold mb-8" />
            <h2 className="font-serif text-4xl md:text-5xl text-altura-white mb-8 leading-tight">
              The Altura Vision
            </h2>
            <div className="space-y-6 text-altura-muted text-lg font-light leading-relaxed">
              <p>
                Rising majestically above Nairobi's skyline, Altura Upper Hill
                represents the pinnacle of architectural brilliance and refined
                living. Developed by Canaan Developers, this landmark property
                redefines the concept of luxury in East Africa.
              </p>
              <p>
                Every detail has been meticulously crafted to cater to the most
                discerning tastes. From the grand lobby to the sweeping
                panoramic views of the city, Altura is more than a residence—it
                is a statement of success and a sanctuary of elegance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 1,
              ease: 'easeOut'
            }}
            className="relative h-[600px] rounded-sm overflow-hidden">
            
            <div className="absolute inset-0 bg-altura-gold/10 mix-blend-overlay z-10" />
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1935&auto=format&fit=crop"
              alt="Luxury Building Exterior"
              className="w-full h-full object-cover" />
            
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-altura-border pt-16">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className="text-center md:text-left">
            
              <div className="font-serif text-4xl md:text-5xl text-altura-gold mb-2">
                {stat.value}
              </div>
              <div className="text-altura-muted text-sm tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}