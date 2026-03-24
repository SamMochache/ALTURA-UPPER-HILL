import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { PlusIcon } from 'lucide-react';
interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
  onAdd: () => void;
}
export function ProductCard({
  title,
  description,
  price,
  image,
  category,
  onAdd
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group flex flex-col bg-altura-card border border-altura-border overflow-hidden h-full">
      
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
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
        
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs tracking-widest uppercase font-medium backdrop-blur-md bg-altura-black/50 text-altura-white border border-altura-white/20">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <h3 className="font-serif text-xl text-altura-white mb-2 group-hover:text-altura-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="text-altura-muted text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-altura-border">
          <span className="text-altura-white font-medium text-lg">{price}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onAdd}
            className="text-altura-gold hover:bg-altura-gold/10 px-3"
            aria-label={`Add ${title} to request`}>
            
            <PlusIcon className="w-4 h-4 mr-2" />
            Request
          </Button>
        </div>
      </div>
    </motion.div>);

}