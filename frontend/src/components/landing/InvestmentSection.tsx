import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export function InvestmentSection() {
  const metrics = [
  {
    value: '15%+',
    label: 'Projected Annual ROI',
    desc: "Strong rental yields driven by Upper Hill's status as Nairobi's financial hub."
  },
  {
    value: '95%',
    label: 'Target Occupancy',
    desc: 'High demand from expats, diplomats, and medical tourists.'
  },
  {
    value: '3x',
    label: 'Capital Appreciation',
    desc: 'Expected property value multiplier over a 5-year investment horizon.'
  }];

  return (
    <section id="investment" className="py-32 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-altura-charcoal via-altura-black to-altura-black z-0" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
          'linear-gradient(#FAFAF9 1px, transparent 1px), linear-gradient(90deg, #FAFAF9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
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
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="lg:col-span-5">
            
            <h2 className="font-serif text-4xl md:text-5xl text-altura-white mb-6 leading-tight">
              A Legacy <br />
              <span className="text-altura-gold">Investment</span>
            </h2>
            <p className="text-altura-muted text-lg font-light leading-relaxed mb-8">
              Altura Upper Hill offers more than a home—it is a strategic
              investment in Nairobi's fastest-growing district. Secure your
              wealth with an asset designed for exceptional returns and enduring
              value.
            </p>
            <Link to="/signup">
              <Button variant="primary" size="lg">
                Download Prospectus
              </Button>
            </Link>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((metric, index) =>
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
                duration: 0.6,
                delay: index * 0.15
              }}
              className="bg-altura-card/50 backdrop-blur-md border border-altura-border p-8 rounded-sm hover:border-altura-gold/30 transition-colors">
              
                <div className="font-serif text-4xl text-altura-gold mb-4">
                  {metric.value}
                </div>
                <div className="text-altura-white font-medium mb-3 text-sm tracking-wide">
                  {metric.label}
                </div>
                <div className="text-altura-muted text-xs leading-relaxed font-light">
                  {metric.desc}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}