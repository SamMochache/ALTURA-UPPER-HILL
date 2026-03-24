import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { PropertyCard } from '../components/properties/PropertyCard';
import { PropertyFilters } from '../components/properties/PropertyFilters';
// Mock Data
const properties = [
{
  id: 'ph-01',
  title: 'The Crown Penthouse',
  type: 'Penthouse',
  price: '$2,500,000',
  image:
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
  beds: 4,
  baths: 4.5,
  sqft: 4500,
  status: 'Available' as const
},
{
  id: 'res-3a',
  title: 'Residence 3A',
  type: '3 Bedroom',
  price: '$1,200,000',
  image:
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
  beds: 3,
  baths: 3.5,
  sqft: 2800,
  status: 'Available' as const
},
{
  id: 'res-3b',
  title: 'Residence 3B',
  type: '3 Bedroom',
  price: '$1,150,000',
  image:
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
  beds: 3,
  baths: 3,
  sqft: 2650,
  status: 'Reserved' as const
},
{
  id: 'res-2a',
  title: 'Residence 2A',
  type: '2 Bedroom',
  price: '$850,000',
  image:
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  beds: 2,
  baths: 2.5,
  sqft: 1800,
  status: 'Available' as const
},
{
  id: 'res-2b',
  title: 'Residence 2B',
  type: '2 Bedroom',
  price: '$825,000',
  image:
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop',
  beds: 2,
  baths: 2,
  sqft: 1750,
  status: 'Sold' as const
},
{
  id: 'ph-02',
  title: 'The Horizon Penthouse',
  type: 'Penthouse',
  price: '$2,350,000',
  image:
  'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop',
  beds: 4,
  baths: 4.5,
  sqft: 4200,
  status: 'Available' as const
}];

export function PropertiesPage() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="min-h-screen bg-altura-black pt-32 pb-24">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center md:text-left">
        <motion.span
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1,
            duration: 0.6
          }}
          className="text-altura-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
          
          Portfolio
        </motion.span>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.6
          }}
          className="font-serif text-4xl md:text-6xl text-altura-white mb-6">
          
          Exclusive Residences
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3,
            duration: 0.6
          }}
          className="text-altura-muted text-lg max-w-2xl">
          
          Discover our curated collection of luxury apartments and penthouses,
          designed for those who appreciate the finest things in life.
        </motion.p>
      </div>

      <PropertyFilters />

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {properties.map((property) =>
          <motion.div key={property.id} variants={itemVariants}>
              <PropertyCard {...property} />
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>);

}