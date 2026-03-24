import React from 'react';
import {
  TrendingUpIcon,
  BuildingIcon,
  MapPinIcon,
  ActivityIcon } from
'lucide-react';
export function MarketInsights() {
  const insights = [
  {
    title: 'Upper Hill Avg Price',
    value: 'KES 185,000',
    unit: '/ sq.ft',
    change: '+12.4%',
    positive: true,
    icon: BuildingIcon,
    desc: 'Premium residential average'
  },
  {
    title: 'YoY Price Change',
    value: '14.2%',
    unit: '',
    change: '+2.1%',
    positive: true,
    icon: TrendingUpIcon,
    desc: 'Compared to Nairobi avg 8.5%'
  },
  {
    title: 'Rental Yield Benchmark',
    value: '8.5%',
    unit: ' Net',
    change: '-0.2%',
    positive: false,
    icon: MapPinIcon,
    desc: 'Upper Hill district average'
  },
  {
    title: 'Luxury Demand Index',
    value: '92/100',
    unit: ' High',
    change: '+5 pts',
    positive: true,
    icon: ActivityIcon,
    desc: 'Driven by expat influx'
  }];

  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full flex flex-col">
      <div className="mb-8">
        <h3 className="font-serif text-2xl text-altura-white mb-1">
          Market Insights
        </h3>
        <p className="text-altura-muted text-sm">
          Nairobi Upper Hill real estate trends
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
        {insights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-5 border border-altura-border bg-altura-surface/30 hover:bg-altura-surface transition-colors rounded-sm">
              
              <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 rounded-full bg-altura-black border border-altura-border flex items-center justify-center">
                  <Icon className="w-4 h-4 text-altura-gold" />
                </div>
                <div
                  className={`flex items-center px-2 py-1 rounded-sm text-[10px] font-medium ${item.positive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                  
                  {item.change}
                </div>
              </div>

              <p className="text-altura-muted text-xs uppercase tracking-widest mb-1">
                {item.title}
              </p>
              <div className="flex items-baseline mb-2">
                <span className="font-serif text-2xl text-altura-white">
                  {item.value}
                </span>
                <span className="text-altura-muted text-sm ml-1">
                  {item.unit}
                </span>
              </div>
              <p className="text-altura-muted text-xs">{item.desc}</p>
            </div>);

        })}
      </div>

      <div className="mt-6 pt-6 border-t border-altura-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-altura-gold/10 flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-altura-gold">AI</span>
          </div>
          <div>
            <h4 className="text-altura-white text-sm font-medium mb-1">
              AI Market Analysis
            </h4>
            <p className="text-altura-muted text-sm leading-relaxed">
              Your portfolio is outperforming the Upper Hill average by 2.7% in
              net yield. Strong demand from diplomatic missions is driving
              premium rental rates up. Consider holding assets for another 24-36
              months to maximize capital appreciation.
            </p>
          </div>
        </div>
      </div>
    </div>);

}