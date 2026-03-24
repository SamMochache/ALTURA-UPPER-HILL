import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine } from
'recharts';
const data = [
{
  name: 'The Crown Penthouse',
  gross: 12.5,
  net: 9.8,
  cap: 8.5
},
{
  name: 'Residence 2A',
  gross: 14.2,
  net: 11.5,
  cap: 9.2
},
{
  name: 'Studio 5C',
  gross: 15.8,
  net: 12.4,
  cap: 10.1
}];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-altura-card border border-altura-border p-4 shadow-xl">
        <p className="text-altura-white text-sm font-medium mb-3">{label}</p>
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
            
              <span className="text-altura-muted text-sm">{entry.name}</span>
            </div>
            <span className="font-serif text-sm text-altura-white">
              {entry.value}%
            </span>
          </div>
        )}
      </div>);

  }
  return null;
};
export function YieldAnalysis() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Yield Analysis
        </h3>
        <p className="text-altura-muted text-sm">
          Property performance metrics vs market average
        </p>
      </div>

      <div className="flex-grow min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 10,
              right: 30,
              left: 40,
              bottom: 0
            }}>
            
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              stroke="#2A2A2A" />
            
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#8A8A8A',
                fontSize: 12
              }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 20]} />
            
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: '#FAFAF9',
                fontSize: 12
              }}
              width={120} />
            
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
                paddingTop: '10px'
              }} />
            

            <ReferenceLine
              x={8.5}
              stroke="#f87171"
              strokeDasharray="3 3"
              label={{
                position: 'top',
                value: 'Market Avg Net (8.5%)',
                fill: '#f87171',
                fontSize: 10
              }} />
            

            <Bar
              dataKey="gross"
              name="Gross Yield"
              fill="#C9A96E"
              radius={[0, 4, 4, 0]}
              barSize={12} />
            
            <Bar
              dataKey="net"
              name="Net Yield"
              fill="#4ade80"
              radius={[0, 4, 4, 0]}
              barSize={12} />
            
            <Bar
              dataKey="cap"
              name="Cap Rate"
              fill="#60a5fa"
              radius={[0, 4, 4, 0]}
              barSize={12} />
            
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-altura-border overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-altura-muted text-xs uppercase tracking-widest">
              <th className="pb-3 font-medium">Property</th>
              <th className="pb-3 font-medium text-right">Gross</th>
              <th className="pb-3 font-medium text-right">Net</th>
              <th className="pb-3 font-medium text-right">Cap Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-altura-border/50">
            {data.map((item, i) =>
            <tr key={i}>
                <td className="py-3 text-altura-white">{item.name}</td>
                <td className="py-3 text-altura-gold text-right">
                  {item.gross}%
                </td>
                <td className="py-3 text-green-400 text-right">{item.net}%</td>
                <td className="py-3 text-blue-400 text-right">{item.cap}%</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}