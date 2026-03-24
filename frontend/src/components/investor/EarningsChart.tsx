import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
const data = [
{
  name: 'Jan',
  earnings: 180000
},
{
  name: 'Feb',
  earnings: 195000
},
{
  name: 'Mar',
  earnings: 210000
},
{
  name: 'Apr',
  earnings: 205000
},
{
  name: 'May',
  earnings: 240000
},
{
  name: 'Jun',
  earnings: 260000
},
{
  name: 'Jul',
  earnings: 255000
},
{
  name: 'Aug',
  earnings: 280000
},
{
  name: 'Sep',
  earnings: 295000
},
{
  name: 'Oct',
  earnings: 310000
},
{
  name: 'Nov',
  earnings: 305000
},
{
  name: 'Dec',
  earnings: 320000
}];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-altura-card border border-altura-border p-4 shadow-xl">
        <p className="text-altura-muted text-xs uppercase tracking-widest mb-2">
          {label} 2025
        </p>
        <p className="font-serif text-xl text-altura-gold">
          KES {payload[0].value.toLocaleString()}
        </p>
      </div>);

  }
  return null;
};
export function EarningsChart() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-serif text-2xl text-altura-white mb-1">
            Earnings Overview
          </h3>
          <p className="text-altura-muted text-sm">
            Monthly rental income across portfolio
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs text-altura-muted hover:text-altura-white transition-colors">
            6M
          </button>
          <button className="px-3 py-1 text-xs bg-altura-surface text-altura-white border border-altura-border">
            1Y
          </button>
          <button className="px-3 py-1 text-xs text-altura-muted hover:text-altura-white transition-colors">
            ALL
          </button>
        </div>
      </div>

      <div className="flex-grow min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0
            }}>
            
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9A96E" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#C9A96E" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#2A2A2A" />
            
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#8A8A8A',
                fontSize: 12
              }}
              dy={10} />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#8A8A8A',
                fontSize: 12
              }}
              tickFormatter={(value) => `${value / 1000}k`}
              dx={-10} />
            
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: '#2A2A2A',
                strokeWidth: 1,
                strokeDasharray: '3 3'
              }} />
            
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#C9A96E"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorEarnings)"
              activeDot={{
                r: 6,
                fill: '#C9A96E',
                stroke: '#1A1A1A',
                strokeWidth: 2
              }} />
            
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>);

}