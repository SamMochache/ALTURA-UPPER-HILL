import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [
{
  name: 'Management Fees',
  value: 35,
  amount: 'KES 42,000'
},
{
  name: 'Maintenance',
  value: 25,
  amount: 'KES 30,000'
},
{
  name: 'Insurance',
  value: 15,
  amount: 'KES 18,000'
},
{
  name: 'Property Tax',
  value: 12,
  amount: 'KES 14,400'
},
{
  name: 'Utilities',
  value: 8,
  amount: 'KES 9,600'
},
{
  name: 'Reserve Fund',
  value: 5,
  amount: 'KES 6,000'
}];

const COLORS = [
'#C9A96E',
'#8A8A8A',
'#4ade80',
'#60a5fa',
'#f87171',
'#a78bfa'];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-altura-card border border-altura-border p-4 shadow-xl">
        <p className="text-altura-white text-sm font-medium mb-1">
          {data.name}
        </p>
        <p className="font-serif text-lg text-altura-gold">{data.amount}</p>
        <p className="text-altura-muted text-xs mt-1">
          {data.value}% of total expenses
        </p>
      </div>);

  }
  return null;
};
export function ExpenseBreakdown() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Expense Breakdown
        </h3>
        <p className="text-altura-muted text-sm">Average monthly expenses</p>
      </div>

      <div className="flex-grow relative flex items-center justify-center min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none">
              
              {data.map((entry, index) =>
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} />

              )}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="font-serif text-2xl text-altura-white">120K</span>
          <span className="text-altura-muted text-[10px] tracking-widest uppercase mt-1">
            Avg/Mo
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {data.map((item, index) =>
        <div key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <div
              className="w-2 h-2 rounded-full mr-3"
              style={{
                backgroundColor: COLORS[index % COLORS.length]
              }} />
            
              <span className="text-altura-white text-sm">{item.name}</span>
            </div>
            <span className="text-altura-muted text-sm">{item.value}%</span>
          </div>
        )}
      </div>
    </div>);

}