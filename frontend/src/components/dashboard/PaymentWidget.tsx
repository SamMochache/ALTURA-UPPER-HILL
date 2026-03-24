import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { PhoneIcon, CheckCircleIcon, ClockIcon } from 'lucide-react';
export function PaymentWidget() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [phone, setPhone] = useState('+254 ');
  const [amount, setAmount] = useState('250,000');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate M-Pesa STK push delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };
  const recentPayments = [
  {
    id: 1,
    date: 'Feb 1, 2025',
    amount: 'KES 250,000',
    status: 'Completed',
    ref: 'QWE123RTY4'
  },
  {
    id: 2,
    date: 'Jan 1, 2025',
    amount: 'KES 250,000',
    status: 'Completed',
    ref: 'ASD567FGH8'
  },
  {
    id: 3,
    date: 'Dec 1, 2024',
    amount: 'KES 250,000',
    status: 'Completed',
    ref: 'ZXC901VBN2'
  }];

  return (
    <div className="bg-altura-card border border-altura-border p-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Payment Form */}
        <div className="flex-1">
          <h2 className="font-serif text-2xl text-altura-white mb-6">
            Make a Payment
          </h2>

          {isSuccess ?
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="bg-green-500/10 border border-green-500/20 p-8 text-center rounded-sm">
            
              <CheckCircleIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-serif text-xl text-altura-white mb-2">
                Payment Successful
              </h3>
              <p className="text-altura-muted text-sm mb-6">
                Your payment of KES {amount} has been received.
              </p>
              <Button
              variant="secondary"
              onClick={() => setIsSuccess(false)}
              className="w-full">
              
                Make Another Payment
              </Button>
            </motion.div> :

          <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-altura-surface p-6 border border-altura-border mb-6">
                <span className="text-altura-muted text-sm uppercase tracking-widest block mb-2">
                  Current Balance
                </span>
                <div className="flex items-end justify-between">
                  <span className="font-serif text-4xl text-altura-white">
                    KES 250,000
                  </span>
                  <span className="text-altura-gold text-sm font-medium">
                    Due Mar 1
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <PhoneIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-altura-muted" />
                  <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="M-Pesa Phone Number"
                  className="pl-8 bg-transparent border-b border-altura-border focus:border-green-500 text-altura-white w-full py-2 outline-none transition-colors"
                  required />
                
                </div>
                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-altura-muted text-sm font-medium">
                    KES
                  </span>
                  <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="pl-10 bg-transparent border-b border-altura-border focus:border-green-500 text-altura-white w-full py-2 outline-none transition-colors"
                  required />
                
                </div>
              </div>

              <Button
              type="submit"
              className="w-full bg-[#52B520] hover:bg-[#429518] text-white border-none shadow-[0_0_15px_rgba(82,181,32,0.15)] hover:shadow-[0_0_25px_rgba(82,181,32,0.3)]"
              loading={isSubmitting}>
              
                Pay via M-Pesa
              </Button>
              <p className="text-altura-muted text-xs text-center mt-4">
                A prompt will be sent to your phone to complete the transaction.
              </p>
            </form>
          }
        </div>

        {/* Payment History */}
        <div className="flex-1">
          <h2 className="font-serif text-2xl text-altura-white mb-6">
            Recent Transactions
          </h2>
          <div className="space-y-4">
            {recentPayments.map((payment) =>
            <div
              key={payment.id}
              className="flex items-center justify-between p-4 border-b border-altura-border hover:bg-altura-surface/50 transition-colors">
              
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-altura-surface flex items-center justify-center border border-altura-border">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-altura-white font-medium">
                      {payment.amount}
                    </p>
                    <p className="text-altura-muted text-xs">
                      {payment.date} · Ref: {payment.ref}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs tracking-widest uppercase font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                  {payment.status}
                </span>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            className="w-full mt-6 text-sm"
            onClick={() =>
            alert(
              'Full payment history will be available once connected to your backend. All transactions are securely stored and accessible via the Altura API.'
            )
            }>
            
            View All History
          </Button>
        </div>
      </div>
    </div>);

}