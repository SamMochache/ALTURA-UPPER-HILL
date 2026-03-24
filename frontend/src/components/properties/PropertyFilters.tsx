import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, SlidersHorizontalIcon, XIcon } from 'lucide-react';
interface FilterOption {
  label: string;
  value: string;
}
const PROPERTY_TYPES: FilterOption[] = [
{
  label: 'All Types',
  value: 'all'
},
{
  label: 'Penthouse',
  value: 'penthouse'
},
{
  label: '3 Bedroom',
  value: '3bed'
},
{
  label: '2 Bedroom',
  value: '2bed'
}];

const PRICE_RANGES: FilterOption[] = [
{
  label: 'Any Price',
  value: 'all'
},
{
  label: 'Under $1M',
  value: 'under1m'
},
{
  label: '$1M - $1.5M',
  value: '1m-1.5m'
},
{
  label: '$1.5M - $2.5M',
  value: '1.5m-2.5m'
},
{
  label: 'Over $2.5M',
  value: 'over2.5m'
}];

const BEDROOMS: FilterOption[] = [
{
  label: 'Any Beds',
  value: 'all'
},
{
  label: '2 Bedrooms',
  value: '2'
},
{
  label: '3 Bedrooms',
  value: '3'
},
{
  label: '4+ Bedrooms',
  value: '4+'
}];

const AVAILABILITY: FilterOption[] = [
{
  label: 'All Status',
  value: 'all'
},
{
  label: 'Available',
  value: 'available'
},
{
  label: 'Reserved',
  value: 'reserved'
},
{
  label: 'Sold',
  value: 'sold'
}];

function FilterDropdown({
  label,
  options,
  value,
  onChange





}: {label: string;options: FilterOption[];value: string;onChange: (val: string) => void;}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
      setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 border text-sm bg-altura-black transition-colors ${value !== 'all' ? 'border-altura-gold text-altura-gold' : 'border-altura-border text-altura-white hover:border-altura-gold'}`}>
        
        <span>{value !== 'all' ? selected?.label : label}</span>
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        
      </button>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: 8
          }}
          transition={{
            duration: 0.15
          }}
          className="absolute top-full left-0 mt-2 w-48 bg-altura-card border border-altura-border shadow-2xl z-50">
          
            {options.map((option) =>
          <button
            key={option.value}
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            className={`w-full text-left px-4 py-3 text-sm transition-colors ${value === option.value ? 'text-altura-gold bg-altura-gold/5' : 'text-altura-muted hover:text-altura-white hover:bg-altura-surface'}`}>
            
                {option.label}
              </button>
          )}
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}
export function PropertyFilters() {
  const [type, setType] = useState('all');
  const [price, setPrice] = useState('all');
  const [beds, setBeds] = useState('all');
  const [availability, setAvailability] = useState('all');
  const activeCount = [type, price, beds, availability].filter(
    (v) => v !== 'all'
  ).length;
  const clearAll = () => {
    setType('all');
    setPrice('all');
    setBeds('all');
    setAvailability('all');
  };
  return (
    <div className="w-full bg-altura-charcoal border-y border-altura-border py-4 px-6 md:px-12 mb-12 sticky top-[80px] z-40 backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center text-altura-muted text-sm w-full md:w-auto">
          <SlidersHorizontalIcon className="w-4 h-4 mr-2 text-altura-gold" />
          <span className="tracking-widest uppercase">Filter Residences</span>
          {activeCount > 0 &&
          <span className="ml-3 px-2 py-0.5 bg-altura-gold/10 text-altura-gold text-xs border border-altura-gold/20">
              {activeCount} active
            </span>
          }
        </div>

        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <FilterDropdown
            label="Property Type"
            options={PROPERTY_TYPES}
            value={type}
            onChange={setType} />
          
          <FilterDropdown
            label="Price Range"
            options={PRICE_RANGES}
            value={price}
            onChange={setPrice} />
          
          <FilterDropdown
            label="Bedrooms"
            options={BEDROOMS}
            value={beds}
            onChange={setBeds} />
          
          <FilterDropdown
            label="Availability"
            options={AVAILABILITY}
            value={availability}
            onChange={setAvailability} />
          

          {activeCount > 0 &&
          <button
            onClick={clearAll}
            className="flex items-center text-altura-muted hover:text-altura-gold text-sm transition-colors">
            
              <XIcon className="w-3 h-3 mr-1" /> Clear
            </button>
          }
        </div>
      </div>
    </div>);

}