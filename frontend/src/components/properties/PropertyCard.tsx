import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BedIcon, BathIcon, SquareIcon } from 'lucide-react';
interface PropertyCardProps {
  id: string;
  title: string;
  type: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  status: 'Available' | 'Reserved' | 'Sold';
}
export function PropertyCard({
  id,
  title,
  type,
  price,
  image,
  beds,
  baths,
  sqft,
  status
}: PropertyCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative flex flex-col bg-altura-card border border-altura-border overflow-hidden">
      
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-altura-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <motion.img
          whileHover={{
            scale: 1.05
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          src={image}
          alt={title}
          className="w-full h-full object-cover" />
        

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span
            className={`px-3 py-1 text-xs tracking-widest uppercase font-medium backdrop-blur-md ${status === 'Available' ? 'bg-altura-gold/20 text-altura-gold border border-altura-gold/30' : status === 'Reserved' ? 'bg-altura-warm/20 text-altura-warm border border-altura-warm/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
            
            {status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-altura-gold text-xs tracking-widest uppercase mb-2 block">
              {type}
            </span>
            <h3 className="font-serif text-2xl text-altura-white group-hover:text-altura-gold transition-colors duration-300">
              {title}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-altura-white font-medium text-xl block">
              {price}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center space-x-6 text-altura-muted text-sm mt-auto pt-6 border-t border-altura-border">
          <div className="flex items-center">
            <BedIcon className="w-4 h-4 mr-2 text-altura-gold/70" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <BathIcon className="w-4 h-4 mr-2 text-altura-gold/70" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <SquareIcon className="w-4 h-4 mr-2 text-altura-gold/70" />
            <span>{sqft} Sq.Ft</span>
          </div>
        </div>
      </div>

      {/* Clickable Overlay */}
      <Link to={`/property/${id}`} className="absolute inset-0 z-30">
        <span className="sr-only">View {title}</span>
      </Link>
    </motion.div>);

}