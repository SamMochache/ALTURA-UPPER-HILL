import React from 'react';
import {
  UserIcon,
  CalendarIcon,
  ShieldCheckIcon,
  AlertCircleIcon,
  ClockIcon } from
'lucide-react';
const tenants = [
{
  id: 1,
  property: 'The Crown Penthouse',
  tenant: 'Corporate Lease (UN)',
  rent: 'KES 320,000',
  start: 'Jan 2024',
  end: 'Dec 2026',
  reliability: 100,
  expiryDays: 640,
  status: 'good' // > 180 days
},
{
  id: 2,
  property: 'Residence 2A',
  tenant: 'J. Smith',
  rent: 'KES 95,000',
  start: 'Mar 2024',
  end: 'Feb 2025',
  reliability: 95,
  expiryDays: 345,
  status: 'good'
},
{
  id: 3,
  property: 'Studio 5C',
  tenant: 'Vacant',
  rent: '-',
  start: '-',
  end: '-',
  reliability: 0,
  expiryDays: 0,
  status: 'vacant'
},
{
  id: 4,
  property: 'Residence 4B',
  tenant: 'M. Wanjiku',
  rent: 'KES 110,000',
  start: 'Jun 2023',
  end: 'May 2024',
  reliability: 85,
  expiryDays: 65,
  status: 'warning' // < 90 days
}];

export function TenantOverview() {
  return (
    <div className="bg-altura-card border border-altura-border p-8 h-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-serif text-2xl text-altura-white mb-1">
            Tenant Overview
          </h3>
          <p className="text-altura-muted text-sm">
            Lease status and payment reliability
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-2" />{' '}
            <span className="text-altura-muted">Secure</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-altura-gold mr-2" />{' '}
            <span className="text-altura-muted">Expiring Soon</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-red-400 mr-2" />{' '}
            <span className="text-altura-muted">Vacant</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-altura-border">
              <th className="py-3 px-4 text-altura-muted text-xs uppercase tracking-widest font-medium">
                Property & Tenant
              </th>
              <th className="py-3 px-4 text-altura-muted text-xs uppercase tracking-widest font-medium">
                Monthly Rent
              </th>
              <th className="py-3 px-4 text-altura-muted text-xs uppercase tracking-widest font-medium">
                Lease Period
              </th>
              <th className="py-3 px-4 text-altura-muted text-xs uppercase tracking-widest font-medium">
                Reliability
              </th>
              <th className="py-3 px-4 text-altura-muted text-xs uppercase tracking-widest font-medium text-right">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-altura-border/50">
            {tenants.map((t) =>
            <tr
              key={t.id}
              className="hover:bg-altura-surface/30 transition-colors">
              
                <td className="py-4 px-4">
                  <span className="block text-altura-white font-medium mb-1">
                    {t.property}
                  </span>
                  <div className="flex items-center text-altura-muted text-xs">
                    <UserIcon className="w-3 h-3 mr-1" /> {t.tenant}
                  </div>
                </td>
                <td className="py-4 px-4 text-altura-gold font-medium">
                  {t.rent}
                </td>
                <td className="py-4 px-4">
                  {t.status === 'vacant' ?
                <span className="text-altura-muted text-sm">-</span> :

                <div>
                      <span className="block text-altura-white text-sm">
                        {t.start} - {t.end}
                      </span>
                      <span className="text-altura-muted text-xs">
                        {t.expiryDays} days remaining
                      </span>
                    </div>
                }
                </td>
                <td className="py-4 px-4">
                  {t.status === 'vacant' ?
                <span className="text-altura-muted text-sm">-</span> :

                <div className="flex items-center">
                      <div className="w-16 h-1.5 bg-altura-border rounded-full mr-2 overflow-hidden">
                        <div
                      className={`h-full rounded-full ${t.reliability >= 95 ? 'bg-green-400' : t.reliability >= 80 ? 'bg-altura-gold' : 'bg-red-400'}`}
                      style={{
                        width: `${t.reliability}%`
                      }} />
                    
                      </div>
                      <span className="text-altura-white text-sm">
                        {t.reliability}%
                      </span>
                    </div>
                }
                </td>
                <td className="py-4 px-4 text-right">
                  {t.status === 'good' &&
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                      <ShieldCheckIcon className="w-3 h-3 mr-1" /> Secure
                    </span>
                }
                  {t.status === 'warning' &&
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-altura-gold/10 text-altura-gold border border-altura-gold/20">
                      <ClockIcon className="w-3 h-3 mr-1" /> Renewing
                    </span>
                }
                  {t.status === 'vacant' &&
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <AlertCircleIcon className="w-3 h-3 mr-1" /> Vacant
                    </span>
                }
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}