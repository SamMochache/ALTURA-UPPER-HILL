import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { MetricCard } from '../components/investor/MetricCard';
import { EarningsChart } from '../components/investor/EarningsChart';
import { OccupancyChart } from '../components/investor/OccupancyChart';
import { PortfolioTable } from '../components/investor/PortfolioTable';
import { CapitalChart } from '../components/investor/CapitalChart';
import { CashFlowChart } from '../components/investor/CashFlowChart';
import { ExpenseBreakdown } from '../components/investor/ExpenseBreakdown';
import { YieldAnalysis } from '../components/investor/YieldAnalysis';
import { MarketInsights } from '../components/investor/MarketInsights';
import { TenantOverview } from '../components/investor/TenantOverview';
import { DistributionHistory } from '../components/investor/DistributionHistory';
import {
  WalletIcon,
  TrendingUpIcon,
  PercentIcon,
  BuildingIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  LineChartIcon,
  CoinsIcon } from
'lucide-react';
export function InvestorDashboard() {
  const { user } = useAuth();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  const lastUpdated = new Date().toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
  const recentActivity = [
  {
    id: 1,
    title: 'Rent Payment Received',
    desc: 'The Crown Penthouse',
    amount: '+ KES 320,000',
    date: 'Today, 09:45 AM',
    icon: ArrowUpRightIcon,
    color: 'text-green-400'
  },
  {
    id: 2,
    title: 'Maintenance Completed',
    desc: 'Residence 2A - HVAC Service',
    amount: '- KES 15,000',
    date: 'Yesterday',
    icon: CheckCircleIcon,
    color: 'text-altura-muted'
  },
  {
    id: 3,
    title: 'Rent Payment Received',
    desc: 'Residence 2A',
    amount: '+ KES 95,000',
    date: 'Mar 1, 2025',
    icon: ArrowUpRightIcon,
    color: 'text-green-400'
  },
  {
    id: 4,
    title: 'Property Tax Paid',
    desc: 'Q1 2025 Assessment',
    amount: '- KES 42,500',
    date: 'Feb 28, 2025',
    icon: CheckCircleIcon,
    color: 'text-altura-muted'
  },
  {
    id: 5,
    title: 'Rent Payment Received',
    desc: 'Residence 4B',
    amount: '+ KES 110,000',
    date: 'Feb 25, 2025',
    icon: ArrowUpRightIcon,
    color: 'text-green-400'
  },
  {
    id: 6,
    title: 'Management Fee',
    desc: 'Monthly Deduction',
    amount: '- KES 42,000',
    date: 'Feb 25, 2025',
    icon: CheckCircleIcon,
    color: 'text-altura-muted'
  }];

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0
      }}
      transition={{
        duration: 0.5
      }}
      className="min-h-screen bg-altura-black pt-32 pb-24">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Welcome Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-altura-white mb-4">
              Investment Portfolio
            </h1>
            <p className="text-altura-muted text-lg">
              Welcome back, {user?.name || 'Investor'}
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-altura-muted text-xs uppercase tracking-widest block mb-1">
              Last Updated
            </span>
            <span className="text-altura-gold text-sm font-medium">
              {lastUpdated}
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12">
          
          {/* Top Metric Cards (6 cards) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            
            <MetricCard
              title="Portfolio Value"
              value="KES 196.2M"
              change="16.7%"
              positive={true}
              icon={<BuildingIcon className="w-5 h-5" />} />
            
            <MetricCard
              title="Monthly Earnings"
              value="KES 590K"
              change="8.3%"
              positive={true}
              icon={<WalletIcon className="w-5 h-5" />} />
            
            <MetricCard
              title="Average ROI"
              value="16.7%"
              positive={true}
              change="2.1%"
              icon={<TrendingUpIcon className="w-5 h-5" />} />
            
            <MetricCard
              title="Occupancy Rate"
              value="80%"
              change="15.0%"
              positive={false}
              icon={<PercentIcon className="w-5 h-5" />} />
            
            <MetricCard
              title="Net Yield"
              value="9.5%"
              change="0.4%"
              positive={true}
              icon={<LineChartIcon className="w-5 h-5" />} />
            
            <MetricCard
              title="Capital Gains"
              value="KES 28.2M"
              change="12.4%"
              positive={true}
              icon={<CoinsIcon className="w-5 h-5" />} />
            
          </motion.div>

          {/* Section 1: Earnings & Occupancy */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-altura-white">
                Income Performance
              </h2>
              <p className="text-altura-muted mt-1">
                Gross rental income and portfolio occupancy status
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <EarningsChart />
              </div>
              <div className="lg:col-span-1">
                <OccupancyChart />
              </div>
            </div>
          </motion.div>

          {/* Section 2: Capital Appreciation & Expenses */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-altura-white">
                Asset Growth & Costs
              </h2>
              <p className="text-altura-muted mt-1">
                Property value appreciation and operational expense breakdown
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CapitalChart />
              </div>
              <div className="lg:col-span-1">
                <ExpenseBreakdown />
              </div>
            </div>
          </motion.div>

          {/* Section 3: Cash Flow */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-altura-white">
                Net Cash Flow
              </h2>
              <p className="text-altura-muted mt-1">
                Monthly gross income vs expenses leading to net cash flow
              </p>
            </div>
            <CashFlowChart />
          </motion.div>

          {/* Section 4: Yield Analysis & Market Insights */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-altura-white">
                Market Positioning
              </h2>
              <p className="text-altura-muted mt-1">
                Property yields compared to Nairobi Upper Hill market averages
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <YieldAnalysis />
              <MarketInsights />
            </div>
          </motion.div>

          {/* Section 5: Portfolio Table */}
          <motion.div variants={itemVariants}>
            <PortfolioTable />
          </motion.div>

          {/* Section 6: Tenants & Distributions */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <h2 className="font-serif text-3xl text-altura-white">
                Operations & Returns
              </h2>
              <p className="text-altura-muted mt-1">
                Tenant lease management and historical distributions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TenantOverview />
              </div>
              <div className="lg:col-span-1">
                <DistributionHistory />
              </div>
            </div>
          </motion.div>

          {/* Section 7: Recent Activity */}
          <motion.div
            variants={itemVariants}
            className="bg-altura-card border border-altura-border p-8">
            
            <h3 className="font-serif text-2xl text-altura-white mb-6">
              Recent Ledger Activity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
              {recentActivity.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between py-5 border-b border-altura-border/50">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-altura-surface border border-altura-border flex items-center justify-center">
                        <Icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div>
                        <p className="text-altura-white font-medium mb-1">
                          {activity.title}
                        </p>
                        <p className="text-altura-muted text-xs">
                          {activity.desc} · {activity.date}
                        </p>
                      </div>
                    </div>
                    <span className={`font-medium ${activity.color}`}>
                      {activity.amount}
                    </span>
                  </div>);

              })}
            </div>
            <div className="mt-8 text-center">
              <button className="text-altura-gold text-sm tracking-widest uppercase hover:text-altura-white transition-colors">
                Download Full Statement
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>);

}