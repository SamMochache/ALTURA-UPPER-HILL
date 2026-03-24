import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { DashboardCard } from '../components/dashboard/DashboardCard';
import { PaymentWidget } from '../components/dashboard/PaymentWidget';
import { AmenityBooking } from '../components/dashboard/AmenityBooking';
import { MaintenanceForm } from '../components/dashboard/MaintenanceForm';
import { useAuth } from '../hooks/useAuth';
import {
  CreditCardIcon,
  WrenchIcon,
  CalendarIcon,
  BellIcon } from
'lucide-react';
export function ResidentDashboard() {
  const { user } = useAuth();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
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
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Welcome Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="mb-16">
          
          <span className="text-altura-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
            {currentDate}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-altura-white mb-4">
            Welcome back, {user?.name?.split(' ')[0] || 'Resident'}
          </h1>
          <p className="text-altura-muted text-lg">
            {user?.unit || 'Residence 3A'} · {user?.floor || 'Floor 12'} ·
            Altura Upper Hill
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20">
          
          {/* Quick Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <DashboardCard
              title="Next Payment"
              value="KES 250K"
              subtitle="Due March 1"
              icon={<CreditCardIcon className="w-6 h-6" />} />
            
            <DashboardCard
              title="Maintenance"
              value="1 Active"
              subtitle="Last resolved 2 days ago"
              icon={<WrenchIcon className="w-6 h-6" />} />
            
            <DashboardCard
              title="Amenities"
              value="3 Booked"
              subtitle="This week"
              icon={<CalendarIcon className="w-6 h-6" />} />
            
            <DashboardCard
              title="Concierge"
              value="Available"
              subtitle="24/7 Service"
              icon={<BellIcon className="w-6 h-6" />} />
            
          </motion.div>

          {/* Payment Section */}
          <motion.section variants={itemVariants}>
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-altura-white mb-2">
                Financial Overview
              </h2>
              <p className="text-altura-muted">
                Manage your rent payments and view transaction history.
              </p>
            </div>
            <PaymentWidget />
          </motion.section>

          {/* Amenities Section */}
          <motion.section variants={itemVariants}>
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-altura-white mb-2">
                Reserve Amenities
              </h2>
              <p className="text-altura-muted">
                Book exclusive spaces for your private use.
              </p>
            </div>
            <AmenityBooking />
          </motion.section>

          {/* Maintenance Section */}
          <motion.section variants={itemVariants}>
            <div className="mb-8">
              <h2 className="font-serif text-3xl text-altura-white mb-2">
                Service Requests
              </h2>
              <p className="text-altura-muted">
                Submit and track maintenance requests for your residence.
              </p>
            </div>
            <MaintenanceForm />
          </motion.section>
        </motion.div>
      </div>
    </motion.div>);

}