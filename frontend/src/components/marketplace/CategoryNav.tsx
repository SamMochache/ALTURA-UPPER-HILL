import React from 'react';
import { motion } from 'framer-motion';
interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}
export function CategoryNav({
  categories,
  activeCategory,
  onSelectCategory
}: CategoryNavProps) {
  return (
    <div className="w-full border-b border-altura-border mb-12 overflow-x-auto hide-scrollbar">
      <div className="flex space-x-8 min-w-max px-6 md:px-12">
        {categories.map((category) =>
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`relative pb-4 text-sm tracking-widest uppercase transition-colors whitespace-nowrap ${activeCategory === category ? 'text-altura-gold font-medium' : 'text-altura-muted hover:text-altura-white'}`}>
          
            {category}
            {activeCategory === category &&
          <motion.div
            layoutId="activeCategory"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-altura-gold"
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }} />

          }
          </button>
        )}
      </div>
    </div>);

}