import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend } from
'recharts';
const data24M = [
{
  name: 'Jan 24',
  total: 118,
  penthouse: 85,
  res2a: 25,
  studio: 8
},
{
  name: 'Feb 24',
  total: 119.5,
  penthouse: 86,
  res2a: 25.3,
  studio: 8.2
},
{
  name: 'Mar 24',
  total: 121,
  penthouse: 87.5,
  res2a: 25.2,
  studio: 8.3
},
{
  name: 'Apr 24',
  total: 122.2,
  penthouse: 88,
  res2a: 25.8,
  studio: 8.4
},
{
  name: 'May 24',
  total: 124,
  penthouse: 89,
  res2a: 26.5,
  studio: 8.5
},
{
  name: 'Jun 24',
  total: 125.5,
  penthouse: 90.5,
  res2a: 26.3,
  studio: 8.7
},
{
  name: 'Jul 24',
  total: 127,
  penthouse: 91.5,
  res2a: 26.6,
  studio: 8.9
},
{
  name: 'Aug 24',
  total: 128.8,
  penthouse: 92.8,
  res2a: 27,
  studio: 9.0
},
{
  name: 'Sep 24',
  total: 130,
  penthouse: 93.5,
  res2a: 27.5,
  studio: 9.0
},
{
  name: 'Oct 24',
  total: 131.5,
  penthouse: 94.5,
  res2a: 28,
  studio: 9.0
},
{
  name: 'Nov 24',
  total: 133,
  penthouse: 95.5,
  res2a: 28.4,
  studio: 9.1
},
{
  name: 'Dec 24',
  total: 134.2,
  penthouse: 96.5,
  res2a: 28.6,
  studio: 9.1
},
{
  name: 'Jan 25',
  total: 135.5,
  penthouse: 97.5,
  res2a: 28.9,
  studio: 9.1
},
{
  name: 'Feb 25',
  total: 136.9,
  penthouse: 98.5,
  res2a: 29.2,
  studio: 9.2
}];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-altura-card border border-altura-border p-4 shadow-xl">
        <p className="text-altura-muted text-xs uppercase tracking-widest mb-3">
          {label}
        </p>
        {payload.map((entry: any, index: number) =>
        <div
          key={index}
          className="flex items-center justify-between gap-4 mb-1">
          
            <div className="flex items-center">
              <div
              className="w-2 h-2 rounded-full mr-2"
              style={{
                backgroundColor: entry.color
              }} />
            
              <span className="text-altura-white text-sm">{entry.name}</span>
            </div>
            <span
            className="font-serif text-sm"
            style={{
              color: entry.color
            }}>
            
              KES {entry.value.toFixed(1)}M
            </span>
          </div>
        )}
      </div>);

  }
  return null;
};
export function CapitalChart() {
  const [timeframe, setTimeframe] = useState<'6M' | '1Y' | '2Y'>('1Y');
  const getData = () => {
    if (timeframe === '6M') return data24M.slice(-6);
    if (timeframe === '1Y') return data24M.slice(-12);
    return data24M;
  };
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-serif text-2xl text-altura-white mb-1">
            Capital Appreciation
          </h3>
          <p className="text-altura-muted text-sm">
            Property value growth over time (KES Millions)
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeframe('6M')}
            className={`px-3 py-1 text-xs transition-colors ${timeframe === '6M' ? 'bg-altura-surface text-altura-white border border-altura-border' : 'text-altura-muted hover:text-altura-white'}`}>
            
            6M
          </button>
          <button
            onClick={() => setTimeframe('1Y')}
            className={`px-3 py-1 text-xs transition-colors ${timeframe === '1Y' ? 'bg-altura-surface text-altura-white border border-altura-border' : 'text-altura-muted hover:text-altura-white'}`}>
            
            1Y
          </button>
          <button
            onClick={() => setTimeframe('2Y')}
            className={`px-3 py-1 text-xs transition-colors ${timeframe === '2Y' ? 'bg-altura-surface text-altura-white border border-altura-border' : 'text-altura-muted hover:text-altura-white'}`}>
            
            2Y
          </button>
        </div>
      </div>

      <div className="flex-grow min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={getData()}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0
            }}>
            
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
              tickFormatter={(value) => `${value}M`}
              domain={['auto', 'auto']} />
            
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: '#2A2A2A',
                strokeWidth: 1,
                strokeDasharray: '3 3'
              }} />
            
            <Legend
              iconType="circle"
              wrapperStyle={{
                fontSize: '12px',
                color: '#8A8A8A',
                paddingTop: '20px'
              }} />
            
            <Line
              type="monotone"
              dataKey="total"
              name="Total Portfolio"
              stroke="#C9A96E"
              strokeWidth={3}
              dot={false}
              activeDot={{
                r: 6,
                fill: '#C9A96E',
                stroke: '#1A1A1A',
                strokeWidth: 2
              }} />
            
            <Line
              type="monotone"
              dataKey="penthouse"
              name="The Crown Penthouse"
              stroke="#4ade80"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4
              }} />
            
            <Line
              type="monotone"
              dataKey="res2a"
              name="Residence 2A"
              stroke="#60a5fa"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4
              }} />
            
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>);

}