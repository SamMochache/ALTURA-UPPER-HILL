import React from 'react';
import { motion } from 'framer-motion';
import {
  WavesIcon,
  WineIcon,
  DumbbellIcon,
  FilmIcon,
  TreePineIcon } from
'lucide-react';
export function AmenitiesSection() {
  const amenities = [
  {
    icon: <WavesIcon className="w-8 h-8" />,
    title: 'Infinity Pool & Spa',
    description:
    'Temperature-controlled rooftop infinity pool with panoramic city views and a full-service wellness spa.'
  },
  {
    icon: <WineIcon className="w-8 h-8" />,
    title: 'Sky Lounge & Bar',
    description:
    'Exclusive residents-only lounge offering curated cocktails, fine wines, and breathtaking sunsets.'
  },
  {
    icon: <DumbbellIcon className="w-8 h-8" />,
    title: 'State-of-the-Art Fitness',
    description:
    'Technogym-equipped fitness center with personal training studios and yoga pavilion.'
  },
  {
    icon: <FilmIcon className="w-8 h-8" />,
    title: 'Private Cinema',
    description:
    'Acoustically treated screening room with plush seating and 4K laser projection.'
  },
  {
    icon: <div className="w-8 h-8" />,
    title: '24/7 Concierge',
    description:
    'White-glove service handling everything from dining reservations to travel arrangements.'
  },
  {
    icon: <TreePineIcon className="w-8 h-8" />,
    title: 'Landscaped Gardens',
    description:
    'Tranquil zen gardens and walking paths offering a serene escape from the bustling city.'
  }];

  return (
    <section id="amenities" className="py-32 bg-altura-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
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
            className="font-serif text-4xl md:text-5xl text-altura-white mb-6">
            
            World-Class Amenities
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-altura-muted text-lg max-w-2xl mx-auto font-light">
            
            A curated collection of lifestyle spaces designed to elevate your
            everyday experience to extraordinary heights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{
              y: -5
            }}
            className="group p-8 bg-altura-white/5 backdrop-blur-sm border border-altura-white/10 hover:border-altura-gold/50 transition-all duration-300 rounded-sm">
            
              <div className="text-altura-gold mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {amenity.icon}
              </div>
              <h3 className="font-serif text-xl text-altura-white mb-4 tracking-wide">
                {amenity.title}
              </h3>
              <p className="text-altura-muted text-sm leading-relaxed font-light">
                {amenity.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}