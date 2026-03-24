import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ArrowDownToLineIcon, CheckCircleIcon } from 'lucide-react';
const data = [
{
  name: 'Q1',
  amount: 1200
},
{
  name: 'Q2',
  amount: 2500
},
{
  name: 'Q3',
  amount: 3800
},
{
  name: 'Q4',
  amount: 5200
}];

const payouts = [
{
  id: 1,
  date: 'Mar 1, 2025',
  amount: 'KES 460,000',
  type: 'Monthly Rent',
  status: 'Processed'
},
{
  id: 2,
  date: 'Feb 1, 2025',
  amount: 'KES 460,000',
  type: 'Monthly Rent',
  status: 'Processed'
},
{
  id: 3,
  date: 'Jan 1, 2025',
  amount: 'KES 460,000',
  type: 'Monthly Rent',
  status: 'Processed'
},
{
  id: 4,
  date: 'Dec 15, 2024',
  amount: 'KES 1,200,000',
  type: 'Annual Dividend',
  status: 'Processed'
}];

export function DistributionHistory() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Distributions
        </h3>
        <p className="text-altura-muted text-sm">
          Payout history and cumulative returns
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-altura-surface/50 border border-altura-border rounded-sm">
          <span className="text-altura-muted text-[10px] uppercase tracking-widest block mb-1">
            YTD Distributions
          </span>
          <span className="font-serif text-xl text-green-400">KES 1.38M</span>
        </div>
        <div className="p-4 bg-altura-surface/50 border border-altura-border rounded-sm">
          <span className="text-altura-muted text-[10px] uppercase tracking-widest block mb-1">
            All Time
          </span>
          <span className="font-serif text-xl text-altura-gold">KES 14.2M</span>
        </div>
      </div>

      <div className="h-24 w-full mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0
            }}>
            
            <defs>
              <linearGradient id="colorDist" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="amount"
              stroke="#4ade80"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorDist)" />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
        <div className="space-y-4">
          {payouts.map((p) =>
          <div
            key={p.id}
            className="flex items-center justify-between p-3 border border-altura-border/50 hover:bg-altura-surface/30 transition-colors rounded-sm">
            
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                  <ArrowDownToLineIcon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-altura-white text-sm font-medium">
                    {p.amount}
                  </p>
                  <p className="text-altura-muted text-xs">
                    {p.date} · {p.type}
                  </p>
                </div>
              </div>
              <CheckCircleIcon className="w-4 h-4 text-green-400" />
            </div>
          )}
        </div>
      </div>
    </div>);

}