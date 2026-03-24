import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{
            scale: 1.1
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 10,
            ease: 'easeOut'
          }}
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Apartment Interior"
          className="w-full h-full object-cover" />
        
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-altura-black/60 via-altura-black/40 to-altura-black z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-altura-black/80 via-transparent to-altura-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center">
          
          <motion.span
            variants={itemVariants}
            className="text-altura-gold text-xs md:text-sm tracking-[0.3em] uppercase font-medium mb-6">
            
            Canaan Developers Presents
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-altura-white mb-6 leading-tight">
            
            Altura Upper Hill
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-altura-warm text-lg md:text-xl lg:text-2xl font-light mb-4 tracking-wide">
            
            Where Luxury Meets Legacy
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-altura-muted max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
            
            Premium residences in the heart of Nairobi's most prestigious
            address. Experience an unparalleled standard of living designed for
            the global citizen.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-6">
            
            <Link to="/properties">
              <Button variant="primary" size="lg">
                Explore Residences
              </Button>
            </Link>
            <Link to="/properties">
              <Button variant="secondary" size="lg">
                Book a Viewing
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 2,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        
        <span className="text-altura-muted text-xs tracking-widest uppercase mb-2">
          Scroll
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut'
          }}>
          
          <ChevronDownIcon className="text-altura-gold w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>);

}