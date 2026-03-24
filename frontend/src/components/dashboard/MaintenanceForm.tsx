import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import {
  WrenchIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon } from
'lucide-react';
export function MaintenanceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  const requests = [
  {
    id: 'REQ-089',
    title: 'AC Unit Filter Replacement',
    category: 'HVAC',
    date: 'Feb 20, 2025',
    status: 'In Progress',
    priority: 'Medium'
  },
  {
    id: 'REQ-088',
    title: 'Master Bath Faucet Leak',
    category: 'Plumbing',
    date: 'Feb 15, 2025',
    status: 'Resolved',
    priority: 'Low'
  },
  {
    id: 'REQ-087',
    title: 'Smart Hub Connectivity Issue',
    category: 'Electrical',
    date: 'Jan 10, 2025',
    status: 'Resolved',
    priority: 'High'
  }];

  return (
    <div className="bg-altura-card border border-altura-border p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Form */}
        <div className="flex-1">
          <h2 className="font-serif text-2xl text-altura-white mb-6">
            New Request
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-altura-muted text-xs uppercase tracking-widest mb-2">
                Category
              </label>
              <select className="w-full bg-altura-surface border-b border-altura-border focus:border-altura-gold text-altura-white py-3 outline-none transition-colors appearance-none cursor-pointer">
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC / Climate</option>
                <option value="appliances">Appliances</option>
                <option value="general">General Maintenance</option>
              </select>
            </div>

            <div>
              <label className="block text-altura-muted text-xs uppercase tracking-widest mb-2">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full bg-altura-surface border border-altura-border focus:border-altura-gold text-altura-white p-4 outline-none transition-colors resize-none"
                placeholder="Please describe the issue in detail..."
                required />
              
            </div>

            <div>
              <label className="block text-altura-muted text-xs uppercase tracking-widest mb-2">
                Priority
              </label>
              <div className="flex gap-4">
                {['Low', 'Medium', 'High'].map((p) =>
                <label key={p} className="flex-1 cursor-pointer">
                    <input
                    type="radio"
                    name="priority"
                    value={p.toLowerCase()}
                    className="peer sr-only"
                    defaultChecked={p === 'Medium'} />
                  
                    <div className="text-center py-2 border border-altura-border text-altura-muted peer-checked:border-altura-gold peer-checked:text-altura-gold transition-colors text-sm">
                      {p}
                    </div>
                  </label>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={isSubmitting}>
              
              {isSuccess ? 'Request Submitted' : 'Submit Request'}
            </Button>
          </form>
        </div>

        {/* History */}
        <div className="flex-1">
          <h2 className="font-serif text-2xl text-altura-white mb-6">
            Recent Requests
          </h2>
          <div className="space-y-4">
            {requests.map((req) =>
            <div
              key={req.id}
              className="p-5 border border-altura-border bg-altura-surface/30 hover:bg-altura-surface transition-colors">
              
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-altura-gold text-[10px] tracking-widest uppercase block mb-1">
                      {req.category} · {req.id}
                    </span>
                    <h4 className="text-altura-white font-medium">
                      {req.title}
                    </h4>
                  </div>
                  <span
                  className={`px-2 py-1 text-[10px] tracking-widest uppercase font-medium ${req.status === 'Resolved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-altura-gold/10 text-altura-gold border border-altura-gold/20'}`}>
                  
                    {req.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-altura-muted text-xs mt-4 pt-4 border-t border-altura-border/50">
                  <div className="flex items-center">
                    <ClockIcon className="w-3 h-3 mr-1" />
                    {req.date}
                  </div>
                  <div className="flex items-center">
                    <AlertCircleIcon className="w-3 h-3 mr-1" />
                    {req.priority} Priority
                  </div>
                </div>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-6 text-sm"
            onClick={() =>
            alert(
              'Full maintenance history will be available once connected to your backend. All service requests are tracked and accessible via the Altura API.'
            )
            }>
            
            View All Requests
          </Button>
        </div>
      </div>
    </div>);

}