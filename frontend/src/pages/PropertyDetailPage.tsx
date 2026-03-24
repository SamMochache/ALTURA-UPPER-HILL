import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronLeftIcon,
  BedIcon,
  BathIcon,
  SquareIcon,
  MapPinIcon,
  CheckIcon,
  XIcon,
  ChevronRightIcon } from
'lucide-react';
import { BookingWidget } from '../components/properties/BookingWidget';
const ALL_PROPERTIES: Record<
  string,
  {
    id: string;
    title: string;
    type: string;
    price: string;
    status: string;
    description: string;
    beds: number;
    baths: number;
    sqft: number;
    location: string;
    images: string[];
    amenities: string[];
  }> =
{
  'ph-01': {
    id: 'ph-01',
    title: 'The Crown Penthouse',
    type: 'Penthouse',
    price: '$2,500,000',
    status: 'Available',
    description:
    'Experience the pinnacle of luxury living in The Crown Penthouse. Occupying the entire top floor of Altura Upper Hill, this magnificent residence offers 360-degree panoramic views of the Nairobi skyline and beyond. Meticulously designed with imported Italian marble, custom millwork, and state-of-the-art smart home technology, every detail has been considered to provide an unparalleled living experience.',
    beds: 4,
    baths: 4.5,
    sqft: 4500,
    location: 'Floor 40, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'],

    amenities: [
    'Private Elevator Access',
    'Wrap-around Terrace',
    "Chef's Kitchen with Gaggenau Appliances",
    'Wine Cellar (500 bottles)',
    'Smart Home Automation (Control4)',
    'Motorized Window Treatments',
    'Radiant Heated Floors',
    '3 Dedicated Parking Spaces']

  },
  'res-3a': {
    id: 'res-3a',
    title: 'Residence 3A',
    type: '3 Bedroom',
    price: '$1,200,000',
    status: 'Available',
    description:
    'A spacious three-bedroom residence offering generous living areas with floor-to-ceiling windows framing stunning city views. The open-plan kitchen features premium Siemens appliances and stone countertops. The master suite includes a walk-in closet and en-suite bathroom with rain shower and soaking tub.',
    beds: 3,
    baths: 3.5,
    sqft: 2800,
    location: 'Floor 12, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'],

    amenities: [
    'Floor-to-Ceiling Windows',
    'Premium Siemens Appliances',
    'Walk-in Master Closet',
    'Rain Shower & Soaking Tub',
    'Smart Home Ready',
    'Balcony with City Views',
    '2 Dedicated Parking Spaces',
    'Storage Unit']

  },
  'res-3b': {
    id: 'res-3b',
    title: 'Residence 3B',
    type: '3 Bedroom',
    price: '$1,150,000',
    status: 'Reserved',
    description:
    'An elegant three-bedroom layout with a unique corner position providing dual-aspect views. The living space flows seamlessly onto a generous balcony, perfect for entertaining. High-end finishes throughout include engineered hardwood floors and designer lighting fixtures.',
    beds: 3,
    baths: 3,
    sqft: 2650,
    location: 'Floor 15, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'],

    amenities: [
    'Corner Unit - Dual Aspect',
    'Engineered Hardwood Floors',
    'Designer Lighting',
    'Large Entertaining Balcony',
    'Smart Home Ready',
    'En-suite Bathrooms',
    '2 Dedicated Parking Spaces',
    'Storage Unit']

  },
  'res-2a': {
    id: 'res-2a',
    title: 'Residence 2A',
    type: '2 Bedroom',
    price: '$850,000',
    status: 'Available',
    description:
    'A beautifully appointed two-bedroom residence ideal for professionals or couples. The thoughtful layout maximizes space with an open-plan living and dining area. Premium finishes include quartz countertops, custom cabinetry, and porcelain tile bathrooms.',
    beds: 2,
    baths: 2.5,
    sqft: 1800,
    location: 'Floor 8, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop'],

    amenities: [
    'Open-Plan Living',
    'Quartz Countertops',
    'Custom Cabinetry',
    'Porcelain Tile Bathrooms',
    'Balcony',
    'Smart Home Ready',
    '1 Dedicated Parking Space',
    'Storage Unit']

  },
  'res-2b': {
    id: 'res-2b',
    title: 'Residence 2B',
    type: '2 Bedroom',
    price: '$825,000',
    status: 'Sold',
    description:
    'A sophisticated two-bedroom residence with a modern aesthetic. Features include an integrated kitchen with breakfast bar, spacious bedrooms with built-in wardrobes, and a private balcony overlooking the landscaped gardens.',
    beds: 2,
    baths: 2,
    sqft: 1750,
    location: 'Floor 6, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'],

    amenities: [
    'Integrated Kitchen',
    'Breakfast Bar',
    'Built-in Wardrobes',
    'Garden View Balcony',
    'Smart Home Ready',
    'En-suite Master Bath',
    '1 Dedicated Parking Space',
    'Storage Unit']

  },
  'ph-02': {
    id: 'ph-02',
    title: 'The Horizon Penthouse',
    type: 'Penthouse',
    price: '$2,350,000',
    status: 'Available',
    description:
    'The Horizon Penthouse offers an extraordinary living experience across a single expansive floor. With panoramic views stretching to the Ngong Hills, this residence features a private rooftop terrace, infinity-edge plunge pool, and a dedicated entertainment wing with home cinema and bar.',
    beds: 4,
    baths: 4.5,
    sqft: 4200,
    location: 'Floor 39, Altura Tower',
    images: [
    'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'],

    amenities: [
    'Private Rooftop Terrace',
    'Infinity Plunge Pool',
    'Home Cinema Room',
    'Private Bar',
    'Smart Home Automation',
    "Chef's Kitchen",
    '3 Dedicated Parking Spaces',
    'Private Elevator']

  }
};
const DEFAULT_PROPERTY = ALL_PROPERTIES['ph-01'];
export function PropertyDetailPage() {
  const { id } = useParams();
  const property = ALL_PROPERTIES[id || ''] || DEFAULT_PROPERTY;
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const openGallery = (index: number) => {
    setGalleryIndex(index);
    setGalleryOpen(true);
  };
  const nextImage = () =>
  setGalleryIndex((i) => (i + 1) % property.images.length);
  const prevImage = () =>
  setGalleryIndex(
    (i) => (i - 1 + property.images.length) % property.images.length
  );
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
      className="min-h-screen bg-altura-black pt-24 pb-24">
      
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <Link
          to="/properties"
          className="inline-flex items-center text-altura-muted hover:text-altura-gold transition-colors text-sm tracking-widest uppercase">
          
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[60vh] min-h-[500px]">
          <div
            className="md:col-span-3 relative overflow-hidden group cursor-pointer"
            onClick={() => openGallery(0)}>
            
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-altura-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="text-altura-gold text-sm tracking-[0.3em] uppercase font-medium mb-2 block">
                {property.type}
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-altura-white">
                {property.title}
              </h1>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            {property.images.slice(1, 3).map((img, i) =>
            <div
              key={i}
              className="flex-1 relative overflow-hidden group cursor-pointer"
              onClick={() => openGallery(i + 1)}>
              
                <img
                src={img}
                alt={`Interior view ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                {i === 1 && property.images.length > 3 &&
              <div className="absolute inset-0 bg-altura-black/40 flex items-center justify-center hover:bg-altura-black/20 transition-colors">
                    <span className="text-altura-white text-sm tracking-widest uppercase border border-altura-white px-4 py-2">
                      +{property.images.length - 3} More
                    </span>
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-altura-border">
              <div className="flex items-center text-altura-white">
                <BedIcon className="w-5 h-5 mr-3 text-altura-gold" />
                <span className="text-lg">{property.beds} Bedrooms</span>
              </div>
              <div className="flex items-center text-altura-white">
                <BathIcon className="w-5 h-5 mr-3 text-altura-gold" />
                <span className="text-lg">{property.baths} Bathrooms</span>
              </div>
              <div className="flex items-center text-altura-white">
                <SquareIcon className="w-5 h-5 mr-3 text-altura-gold" />
                <span className="text-lg">{property.sqft} Sq.Ft</span>
              </div>
              <div className="flex items-center text-altura-white">
                <MapPinIcon className="w-5 h-5 mr-3 text-altura-gold" />
                <span className="text-lg">{property.location}</span>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-altura-white mb-6">
                About the Residence
              </h2>
              <p className="text-altura-muted leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-altura-white mb-8">
                Residence Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                {property.amenities.map((amenity, index) =>
                <div key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-altura-gold mr-4 flex-shrink-0 mt-0.5" />
                    <span className="text-altura-muted">{amenity}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl text-altura-white mb-6">
                Floor Plan
              </h2>
              <div className="w-full h-64 border border-altura-border bg-altura-card flex items-center justify-center">
                <span className="text-altura-muted tracking-widest uppercase text-sm">
                  Floor Plan Available Upon Request
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <BookingWidget price={property.price} status={property.status} />
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen &&
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
          className="fixed inset-0 z-[100] bg-altura-black/95 flex items-center justify-center"
          onClick={() => setGalleryOpen(false)}>
          
            <button
            onClick={() => setGalleryOpen(false)}
            className="absolute top-6 right-6 text-altura-white hover:text-altura-gold transition-colors z-10"
            aria-label="Close gallery">
            
              <XIcon className="w-8 h-8" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-altura-white hover:text-altura-gold transition-colors z-10 w-12 h-12 flex items-center justify-center bg-altura-black/50 border border-altura-border"
            aria-label="Previous image">
            
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-altura-white hover:text-altura-gold transition-colors z-10 w-12 h-12 flex items-center justify-center bg-altura-black/50 border border-altura-border"
            aria-label="Next image">
            
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <motion.img
            key={galleryIndex}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            transition={{
              duration: 0.3
            }}
            src={property.images[galleryIndex]}
            alt={`${property.title} - Image ${galleryIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()} />
          

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
              {property.images.map((_, i) =>
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setGalleryIndex(i);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${i === galleryIndex ? 'bg-altura-gold' : 'bg-altura-border hover:bg-altura-muted'}`}
              aria-label={`View image ${i + 1}`} />

            )}
              <span className="text-altura-muted text-xs ml-3">
                {galleryIndex + 1} / {property.images.length}
              </span>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>);

}