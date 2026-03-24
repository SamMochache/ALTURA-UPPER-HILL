import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
const portfolio = [
{
  id: 'ph-01',
  name: 'The Crown Penthouse',
  type: 'Penthouse',
  purchasePrice: 'KES 85.0M',
  currentValue: 'KES 98.5M',
  income: 'KES 320,000',
  status: 'Occupied',
  roi: '15.8%',
  grossYield: '12.5%',
  netYield: '9.8%',
  capitalGain: '+KES 13.5M',
  capitalGainPct: '+15.8%',
  acquired: 'Jan 2023'
},
{
  id: 'res-2a',
  name: 'Residence 2A',
  type: '2 Bedroom',
  purchasePrice: 'KES 25.0M',
  currentValue: 'KES 29.2M',
  income: 'KES 95,000',
  status: 'Occupied',
  roi: '16.8%',
  grossYield: '14.2%',
  netYield: '11.5%',
  capitalGain: '+KES 4.2M',
  capitalGainPct: '+16.8%',
  acquired: 'Mar 2023'
},
{
  id: 'stu-5c',
  name: 'Studio 5C',
  type: 'Studio',
  purchasePrice: 'KES 8.0M',
  currentValue: 'KES 9.2M',
  income: '-',
  status: 'Vacant',
  roi: '15.0%',
  grossYield: '0.0%',
  netYield: '-2.5%',
  capitalGain: '+KES 1.2M',
  capitalGainPct: '+15.0%',
  acquired: 'Jun 2023'
},
{
  id: 'res-4b',
  name: 'Residence 4B',
  type: '3 Bedroom',
  purchasePrice: 'KES 35.0M',
  currentValue: 'KES 41.5M',
  income: 'KES 110,000',
  status: 'Occupied',
  roi: '18.5%',
  grossYield: '13.8%',
  netYield: '10.2%',
  capitalGain: '+KES 6.5M',
  capitalGainPct: '+18.5%',
  acquired: 'Nov 2022'
},
{
  id: 'res-1c',
  name: 'Residence 1C',
  type: '1 Bedroom',
  purchasePrice: 'KES 15.0M',
  currentValue: 'KES 17.8M',
  income: 'KES 65,000',
  status: 'Occupied',
  roi: '18.6%',
  grossYield: '15.2%',
  netYield: '12.1%',
  capitalGain: '+KES 2.8M',
  capitalGainPct: '+18.6%',
  acquired: 'Feb 2023'
}];

export function PortfolioTable() {
  const [expanded, setExpanded] = useState(false);
  const displayData = expanded ? portfolio : portfolio.slice(0, 3);
  return (
    <div className="bg-altura-card border border-altura-border overflow-hidden">
      <div className="p-8 border-b border-altura-border flex justify-between items-center">
        <div>
          <h3 className="font-serif text-2xl text-altura-white mb-1">
            Properties Owned
          </h3>
          <p className="text-altura-muted text-sm">
            Detailed breakdown of your investments and performance metrics
          </p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-altura-gold text-sm tracking-widest uppercase hover:text-altura-white transition-colors flex items-center">
          
          {expanded ? 'View Less' : 'View All'}
          {expanded ?
          <ChevronUpIcon className="w-4 h-4 ml-2" /> :

          <ChevronDownIcon className="w-4 h-4 ml-2" />
          }
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-altura-surface/50 border-b border-altura-border">
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Property
              </th>
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Value (Purchase / Current)
              </th>
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Capital Gain
              </th>
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Monthly Income
              </th>
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Yield (Gross / Net)
              </th>
              <th className="py-4 px-6 text-altura-muted text-[10px] uppercase tracking-widest font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-altura-border">
            <AnimatePresence initial={false}>
              {displayData.map((item) =>
              <motion.tr
                key={item.id}
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: 'auto'
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: 0.3
                }}
                className="hover:bg-altura-surface/30 transition-colors group cursor-pointer">
                
                  <td className="py-5 px-6">
                    <span className="block text-altura-white font-medium mb-1 group-hover:text-altura-gold transition-colors">
                      {item.name}
                    </span>
                    <span className="block text-altura-muted text-xs">
                      {item.type} · Acq: {item.acquired}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="block text-altura-white font-medium mb-1">
                      {item.currentValue}
                    </span>
                    <span className="block text-altura-muted text-xs line-through">
                      {item.purchasePrice}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <span className="block text-green-400 font-medium mb-1">
                      {item.capitalGain}
                    </span>
                    <span className="block text-green-400/70 text-xs">
                      {item.capitalGainPct}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-altura-gold font-medium">
                    {item.income}
                  </td>
                  <td className="py-5 px-6">
                    <span className="block text-altura-white font-medium mb-1">
                      {item.grossYield}
                    </span>
                    <span
                    className={`block text-xs ${item.netYield.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                    
                      Net: {item.netYield}
                    </span>
                  </td>
                  <td className="py-5 px-6">
                    <div className="flex items-center">
                      <div
                      className={`w-2 h-2 rounded-full mr-2 ${item.status === 'Occupied' ? 'bg-green-400' : 'bg-red-400'}`} />
                    
                      <span className="text-altura-muted text-sm">
                        {item.status}
                      </span>
                    </div>
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
          <tfoot>
            <tr className="bg-altura-surface border-t border-altura-border">
              <td className="py-6 px-6 text-altura-white font-serif text-xl">
                Total Portfolio
              </td>
              <td className="py-6 px-6">
                <span className="block text-altura-white font-medium mb-1">
                  KES 196.2M
                </span>
                <span className="block text-altura-muted text-xs line-through">
                  KES 168.0M
                </span>
              </td>
              <td className="py-6 px-6">
                <span className="block text-green-400 font-medium mb-1">
                  +KES 28.2M
                </span>
                <span className="block text-green-400/70 text-xs">+16.7%</span>
              </td>
              <td className="py-6 px-6 text-altura-gold font-medium">
                KES 590,000/mo
              </td>
              <td className="py-6 px-6">
                <span className="block text-altura-white font-medium mb-1">
                  12.8% Avg
                </span>
                <span className="block text-green-400 text-xs">
                  Net: 9.5% Avg
                </span>
              </td>
              <td className="py-6 px-6"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>);

}