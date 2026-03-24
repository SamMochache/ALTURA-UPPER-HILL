import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { ShoppingBagIcon, XIcon } from 'lucide-react';
interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
}
interface CartWidgetProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function CartWidget({
  items,
  onRemove,
  onCheckout,
  isOpen,
  setIsOpen
}: CartWidgetProps) {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 md:right-12 z-40 bg-altura-gold text-altura-black p-4 rounded-full shadow-[0_0_20px_rgba(201,169,110,0.3)] flex items-center justify-center"
        aria-label="Open requests cart">
        
        <div className="relative">
          <ShoppingBagIcon className="w-6 h-6" />
          {itemCount > 0 &&
          <span className="absolute -top-2 -right-2 bg-altura-black text-altura-gold text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border border-altura-gold">
              {itemCount}
            </span>
          }
        </div>
      </motion.button>

      {/* Cart Panel Overlay */}
      <AnimatePresence>
        {isOpen &&
        <>
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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-altura-black/60 backdrop-blur-sm z-50" />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-altura-charcoal border-l border-altura-border z-50 flex flex-col shadow-2xl">
            
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-altura-border">
                <h2 className="font-serif text-2xl text-altura-white">
                  Your Requests
                </h2>
                <button
                onClick={() => setIsOpen(false)}
                className="text-altura-muted hover:text-altura-gold transition-colors"
                aria-label="Close cart">
                
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ?
              <div className="h-full flex flex-col items-center justify-center text-center text-altura-muted">
                    <ShoppingBagIcon className="w-12 h-12 mb-4 opacity-20" />
                    <p>Your request list is empty.</p>
                    <p className="text-sm mt-2">
                      Browse our curated services to add items.
                    </p>
                  </div> :

              <ul className="space-y-6">
                    {items.map((item) =>
                <li
                  key={item.id}
                  className="flex justify-between items-start border-b border-altura-border/50 pb-4">
                  
                        <div>
                          <h4 className="text-altura-white font-medium mb-1">
                            {item.title}
                          </h4>
                          <p className="text-altura-gold text-sm">
                            {item.price}
                          </p>
                          <p className="text-altura-muted text-xs mt-1">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <button
                    onClick={() => onRemove(item.id)}
                    className="text-altura-muted hover:text-red-400 transition-colors p-1"
                    aria-label={`Remove ${item.title}`}>
                    
                          <XIcon className="w-4 h-4" />
                        </button>
                      </li>
                )}
                  </ul>
              }
              </div>

              {/* Footer */}
              {items.length > 0 &&
            <div className="p-6 border-t border-altura-border bg-altura-card">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-altura-muted">Total Items</span>
                    <span className="text-altura-white font-medium">
                      {itemCount}
                    </span>
                  </div>
                  <Button
                variant="primary"
                className="w-full"
                onClick={() => {
                  onCheckout();
                  setIsOpen(false);
                }}>
                
                    Submit Request
                  </Button>
                  <p className="text-altura-muted text-xs text-center mt-4">
                    Our concierge will contact you to confirm details and
                    pricing.
                  </p>
                </div>
            }
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}