import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import {
  HomeIcon,
  CreditCardIcon,
  CalendarIcon,
  WrenchIcon,
  TrendingUpIcon,
  ShoppingBagIcon,
  MessageCircleIcon,
  SearchIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  GlobeIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  RocketIcon } from
'lucide-react';
export function RoadmapPage() {
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
  const residentFeatures = [
  {
    icon: HomeIcon,
    title: 'Resident Dashboard',
    desc: 'Your personal command center for managing your Altura lifestyle.',
    status: 'live'
  },
  {
    icon: CreditCardIcon,
    title: 'M-Pesa Payments',
    desc: 'Pay rent seamlessly via M-Pesa with instant confirmation.',
    status: 'live'
  },
  {
    icon: CalendarIcon,
    title: 'Amenity Booking',
    desc: 'Reserve the pool, spa, cinema, and more with one tap.',
    status: 'live'
  },
  {
    icon: WrenchIcon,
    title: 'Maintenance Requests',
    desc: 'Submit and track service requests for your residence.',
    status: 'live'
  },
  {
    icon: ShoppingBagIcon,
    title: 'Luxury Marketplace',
    desc: 'Order chef experiences, spa services, and more.',
    status: 'live'
  },
  {
    icon: MessageCircleIcon,
    title: 'AI Concierge',
    desc: 'Get instant answers from our AI-powered assistant.',
    status: 'live'
  }];

  const investorFeatures = [
  {
    icon: TrendingUpIcon,
    title: 'Portfolio Analytics',
    desc: 'Track ROI, occupancy, and earnings in real-time.',
    status: 'live'
  },
  {
    icon: CreditCardIcon,
    title: 'Earnings Dashboard',
    desc: 'Monitor monthly rental income with detailed charts.',
    status: 'live'
  },
  {
    icon: HomeIcon,
    title: 'Property Management',
    desc: 'View and manage all your investment properties.',
    status: 'live'
  }];

  const comingSoon = [
  {
    icon: SmartphoneIcon,
    title: 'Mobile App',
    desc: 'Native iOS and Android apps for on-the-go access.',
    quarter: 'Q3 2025'
  },
  {
    icon: GlobeIcon,
    title: 'Virtual Tours',
    desc: '360° immersive property walkthroughs.',
    quarter: 'Q3 2025'
  },
  {
    icon: SearchIcon,
    title: 'Smart Search',
    desc: 'AI-powered predictive property search.',
    quarter: 'Q4 2025'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Biometric Login',
    desc: 'Face ID and fingerprint authentication.',
    quarter: 'Q4 2025'
  },
  {
    icon: SparklesIcon,
    title: 'AI Interior Design',
    desc: 'Visualize custom interiors for your unit.',
    quarter: 'Q1 2026'
  },
  {
    icon: RocketIcon,
    title: 'Fractional Ownership',
    desc: 'Invest in units with fractional shares.',
    quarter: 'Q1 2026'
  }];

  const howToUse = [
  {
    step: '01',
    title: 'Create Your Account',
    desc: 'Sign up as a Resident or Investor with your email and phone number.'
  },
  {
    step: '02',
    title: 'Explore Properties',
    desc: 'Browse our curated collection of luxury residences and penthouses.'
  },
  {
    step: '03',
    title: 'Access Your Portal',
    desc: 'Residents manage their home; Investors track their portfolio.'
  },
  {
    step: '04',
    title: 'Use Premium Services',
    desc: 'Book amenities, order from the marketplace, and request maintenance.'
  },
  {
    step: '05',
    title: 'Stay Connected',
    desc: 'Use the AI concierge for instant help and stay updated on new features.'
  }];

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
      className="min-h-screen bg-altura-black pt-32 pb-24">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible">
          
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-24">
            <span className="text-altura-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
              Platform Guide
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-altura-white mb-6">
              How Altura Works
            </h1>
            <p className="text-altura-muted text-lg max-w-2xl mx-auto">
              Your complete guide to navigating the Altura Upper Hill platform —
              from first login to managing your luxury lifestyle.
            </p>
          </motion.div>

          {/* How To Use Steps */}
          <motion.section variants={itemVariants} className="mb-32">
            <h2 className="font-serif text-3xl text-altura-white mb-12 text-center">
              Getting Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {howToUse.map((item, i) =>
              <motion.div
                key={i}
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
                  delay: i * 0.1,
                  duration: 0.5
                }}
                className="text-center relative">
                
                  <div className="font-serif text-5xl text-altura-gold/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-lg text-altura-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-altura-muted text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  {i < howToUse.length - 1 &&
                <div className="hidden md:block absolute top-8 -right-4 text-altura-border">
                      <ArrowRightIcon className="w-6 h-6" />
                    </div>
                }
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Resident Features */}
          <motion.section variants={itemVariants} className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl text-altura-white mb-2">
                  For Residents
                </h2>
                <p className="text-altura-muted">
                  Everything you need to manage your Altura lifestyle
                </p>
              </div>
              <Link to="/resident">
                <Button variant="secondary" size="sm">
                  Open Portal <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {residentFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
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
                      delay: i * 0.05
                    }}
                    className="bg-altura-card border border-altura-border p-6 group hover:border-altura-gold/30 transition-colors">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center group-hover:border-altura-gold/50 transition-colors">
                        <Icon className="w-5 h-5 text-altura-gold" />
                      </div>
                      <span className="flex items-center text-green-400 text-xs tracking-widest uppercase">
                        <CheckCircleIcon className="w-3 h-3 mr-1" /> Live
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-altura-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-altura-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>);

              })}
            </div>
          </motion.section>

          {/* Investor Features */}
          <motion.section variants={itemVariants} className="mb-32">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl text-altura-white mb-2">
                  For Investors
                </h2>
                <p className="text-altura-muted">
                  Powerful tools to manage your property portfolio
                </p>
              </div>
              <Link to="/investor">
                <Button variant="secondary" size="sm">
                  Open Portal <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {investorFeatures.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
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
                      delay: i * 0.05
                    }}
                    className="bg-altura-card border border-altura-border p-6 group hover:border-altura-gold/30 transition-colors">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center group-hover:border-altura-gold/50 transition-colors">
                        <Icon className="w-5 h-5 text-altura-gold" />
                      </div>
                      <span className="flex items-center text-green-400 text-xs tracking-widest uppercase">
                        <CheckCircleIcon className="w-3 h-3 mr-1" /> Live
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-altura-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-altura-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>);

              })}
            </div>
          </motion.section>

          {/* Coming Soon */}
          <motion.section variants={itemVariants} className="mb-32">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl text-altura-white mb-2">
                Coming Soon
              </h2>
              <p className="text-altura-muted">
                Exciting features on our development roadmap
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoon.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
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
                      delay: i * 0.05
                    }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6">
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center">
                        <Icon className="w-5 h-5 text-altura-muted" />
                      </div>
                      <span className="flex items-center text-altura-gold text-xs tracking-widest uppercase">
                        <ClockIcon className="w-3 h-3 mr-1" /> {feature.quarter}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg text-altura-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-altura-muted text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>);

              })}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center py-16 border-t border-altura-border">
            
            <h2 className="font-serif text-3xl text-altura-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-altura-muted mb-8 max-w-lg mx-auto">
              Create your account today and experience the future of luxury
              living.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="primary" size="lg">
                  Create Account
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>);

}