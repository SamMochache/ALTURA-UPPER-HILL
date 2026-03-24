import React from 'react';
import { motion } from 'framer-motion';
interface DashboardCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}
export function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  className = ''
}: DashboardCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`bg-altura-card border border-altura-border p-6 relative overflow-hidden group ${className}`}>
      
      <div className="flex justify-between items-start mb-4">
        <span className="text-altura-muted text-sm tracking-widest uppercase font-medium">
          {title}
        </span>
        <div className="text-altura-gold/50 group-hover:text-altura-gold transition-colors duration-300">
          {icon}
        </div>
      </div>

      <div className="mb-2">
        <h3 className="font-serif text-3xl text-altura-white">{value}</h3>
      </div>

      <div className="flex items-center justify-between mt-4">
        {subtitle &&
        <span className="text-altura-muted text-sm">{subtitle}</span>
        }
        {trend &&
        <span
          className={`text-sm font-medium ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
          
            {trend.positive ? '+' : ''}
            {trend.value}
          </span>
        }
      </div>

      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-altura-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>);

}