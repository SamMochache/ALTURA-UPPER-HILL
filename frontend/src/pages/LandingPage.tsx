import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/landing/HeroSection';
import { AboutSection } from '../components/landing/AboutSection';
import { AmenitiesSection } from '../components/landing/AmenitiesSection';
import { InvestmentSection } from '../components/landing/InvestmentSection';
import { CTASection } from '../components/landing/CTASection';
export function LandingPage() {
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
      }}>
      
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <InvestmentSection />
      <CTASection />
    </motion.div>);

}