import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUpIcon, TrendingDownIcon } from 'lucide-react';
interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ReactNode;
}
export function MetricCard({
  title,
  value,
  change,
  positive,
  icon
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5
      }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="bg-altura-card border border-altura-border p-8 relative overflow-hidden group">
      
      <div className="flex justify-between items-start mb-6">
        <span className="text-altura-muted text-sm tracking-widest uppercase font-medium">
          {title}
        </span>
        <div className="w-10 h-10 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center group-hover:border-altura-gold/50 transition-colors">
          <div className="text-altura-gold">{icon}</div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-serif text-4xl text-altura-white">{value}</h3>
      </div>

      <div className="flex items-center">
        <div
          className={`flex items-center px-2 py-1 rounded-sm text-xs font-medium mr-3 ${positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
          
          {positive ?
          <TrendingUpIcon className="w-3 h-3 mr-1" /> :

          <TrendingDownIcon className="w-3 h-3 mr-1" />
          }
          {change}
        </div>
        <span className="text-altura-muted text-xs">vs last month</span>
      </div>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-altura-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>);

}