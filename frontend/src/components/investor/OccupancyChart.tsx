import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
{
  name: 'Occupied',
  value: 95
},
{
  name: 'Vacant',
  value: 5
}];

const COLORS = ['#C9A96E', '#2A2A2A'];
export function OccupancyChart() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Portfolio Occupancy
        </h3>
        <p className="text-altura-muted text-sm">Current tenant status</p>
      </div>

      <div className="flex-grow relative flex items-center justify-center min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              stroke="none">
              
              {data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} />

              )}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1E1E1E',
                borderColor: '#2A2A2A',
                color: '#FAFAF9'
              }}
              itemStyle={{
                color: '#C9A96E'
              }}
              formatter={(value: number) => [`${value}%`, '']} />
            
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-serif text-5xl text-altura-white">95%</span>
          <span className="text-altura-gold text-xs tracking-widest uppercase mt-2">
            Occupied
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-altura-border pt-6">
        <div>
          <span className="text-altura-muted text-xs uppercase tracking-widest block mb-1">
            Penthouses
          </span>
          <span className="text-altura-white font-medium">100% Occupied</span>
        </div>
        <div>
          <span className="text-altura-muted text-xs uppercase tracking-widest block mb-1">
            Residences
          </span>
          <span className="text-altura-white font-medium">92% Occupied</span>
        </div>
      </div>
    </div>);

}