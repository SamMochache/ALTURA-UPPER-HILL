import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend } from
'recharts';
const data = [
{
  name: 'Mar',
  income: 420,
  expenses: 110,
  net: 310
},
{
  name: 'Apr',
  income: 420,
  expenses: 115,
  net: 305
},
{
  name: 'May',
  income: 440,
  expenses: 112,
  net: 328
},
{
  name: 'Jun',
  income: 440,
  expenses: 120,
  net: 320
},
{
  name: 'Jul',
  income: 440,
  expenses: 115,
  net: 325
},
{
  name: 'Aug',
  income: 460,
  expenses: 130,
  net: 330
},
{
  name: 'Sep',
  income: 460,
  expenses: 125,
  net: 335
},
{
  name: 'Oct',
  income: 460,
  expenses: 120,
  net: 340
},
{
  name: 'Nov',
  income: 460,
  expenses: 140,
  net: 320
},
{
  name: 'Dec',
  income: 460,
  expenses: 135,
  net: 325
},
{
  name: 'Jan',
  income: 460,
  expenses: 125,
  net: 335
},
{
  name: 'Feb',
  income: 460,
  expenses: 120,
  net: 340
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
          className="flex items-center justify-between gap-6 mb-1">
          
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
            
              KES {entry.value}K
            </span>
          </div>
        )}
      </div>);

  }
  return null;
};
export function CashFlowChart() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Cash Flow Analysis
        </h3>
        <p className="text-altura-muted text-sm">
          Monthly income vs expenses and net cash flow (KES Thousands)
        </p>
      </div>

      <div className="flex-grow min-h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
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
              tickFormatter={(value) => `${value}k`} />
            
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: '#2A2A2A',
                opacity: 0.4
              }} />
            
            <Legend
              iconType="circle"
              wrapperStyle={{
                fontSize: '12px',
                color: '#8A8A8A',
                paddingTop: '20px'
              }} />
            
            <Bar
              dataKey="income"
              name="Gross Income"
              fill="#4ade80"
              radius={[4, 4, 0, 0]}
              barSize={20} />
            
            <Bar
              dataKey="expenses"
              name="Expenses"
              fill="#f87171"
              radius={[4, 4, 0, 0]}
              barSize={20} />
            
            <Line
              type="monotone"
              dataKey="net"
              name="Net Cash Flow"
              stroke="#C9A96E"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: '#C9A96E',
                stroke: '#1A1A1A',
                strokeWidth: 2
              }}
              activeDot={{
                r: 6
              }} />
            
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>);

}