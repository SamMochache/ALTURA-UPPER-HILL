import React, { useMemo, useState, Children } from 'react';
import { motion } from 'framer-motion';
import { CategoryNav } from '../components/marketplace/CategoryNav';
import { ProductCard } from '../components/marketplace/ProductCard';
import { CartWidget } from '../components/marketplace/CartWidget';
// Mock Data
const CATEGORIES = [
'All Services',
'Fine Dining',
'Wellness & Spa',
'Home Services',
'Experiences'];

const PRODUCTS = [
{
  id: 'fd-01',
  title: 'Private Chef Experience',
  description:
  'A curated 5-course tasting menu prepared in your residence by our executive chef. Includes wine pairing consultation.',
  price: 'From KES 45,000',
  image:
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop',
  category: 'Fine Dining'
},
{
  id: 'fd-02',
  title: 'Sommelier Wine Selection',
  description:
  'A curated case of 6 premium vintage wines selected by our head sommelier based on your personal taste profile.',
  price: 'KES 85,000',
  image:
  'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop',
  category: 'Fine Dining'
},
{
  id: 'ws-01',
  title: 'In-Residence Massage',
  description:
  'A 90-minute deep tissue or Swedish massage in the comfort of your own residence. Includes aromatherapy.',
  price: 'KES 15,000',
  image:
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop',
  category: 'Wellness & Spa'
},
{
  id: 'ws-02',
  title: 'Personal Training Session',
  description:
  'One-on-one session with a master trainer in the Altura fitness center or your residence.',
  price: 'KES 8,000',
  image:
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
  category: 'Wellness & Spa'
},
{
  id: 'hs-01',
  title: 'Premium Housekeeping',
  description:
  'Deep cleaning service including luxury linen change, wardrobe organization, and floral arrangement refresh.',
  price: 'KES 12,000',
  image:
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
  category: 'Home Services'
},
{
  id: 'ex-01',
  title: 'Helicopter City Tour',
  description:
  'A 45-minute scenic helicopter tour over Nairobi and the Nairobi National Park. Departs from Wilson Airport.',
  price: 'KES 120,000',
  image:
  'https://images.unsplash.com/photo-1526304760382-3591d3840148?q=80&w=2070&auto=format&fit=crop',
  category: 'Experiences'
}];

export function MarketplacePage() {
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [cartItems, setCartItems] = useState<
    {
      id: string;
      title: string;
      price: string;
      quantity: number;
    }[]>(
    []);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All Services') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);
  const handleAddToCart = (product: (typeof PRODUCTS)[0]) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
        item.id === product.id ?
        {
          ...item,
          quantity: item.quantity + 1
        } :
        item
        );
      }
      return [
      ...prev,
      {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1
      }];

    });
    // Optional: show a small toast or open cart automatically
    // setIsCartOpen(true)
  };
  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const handleCheckout = () => {
    setCartItems([]);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      className="min-h-screen bg-altura-black pt-32 pb-24 relative">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 text-center md:text-left">
        <motion.span
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1,
            duration: 0.6
          }}
          className="text-altura-gold text-sm tracking-[0.3em] uppercase font-medium mb-4 block">
          
          Concierge & Lifestyle
        </motion.span>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2,
            duration: 0.6
          }}
          className="font-serif text-4xl md:text-6xl text-altura-white mb-6">
          
          Altura Marketplace
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.3,
            duration: 0.6
          }}
          className="text-altura-muted text-lg max-w-2xl">
          
          Curated services and exclusive experiences delivered directly to your
          residence. Elevate your everyday living.
        </motion.p>
      </div>

      {/* Success Message */}
      {showSuccess &&
      <motion.div
        initial={{
          opacity: 0,
          y: -20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -20
        }}
        className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        
          <div className="bg-altura-gold/10 border border-altura-gold/30 p-4 flex items-center justify-center text-altura-gold">
            <p className="text-sm tracking-wide">
              Request submitted successfully. Our concierge will contact you
              shortly.
            </p>
          </div>
        </motion.div>
      }

      {/* Navigation */}
      <CategoryNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory} />
      

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Re-trigger animation on category change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {filteredProducts.map((product) =>
          <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
              {...product}
              onAdd={() => handleAddToCart(product)} />
            
            </motion.div>
          )}
        </motion.div>

        {filteredProducts.length === 0 &&
        <div className="text-center py-20">
            <p className="text-altura-muted text-lg">
              No services currently available in this category.
            </p>
          </div>
        }
      </div>

      {/* Cart Widget */}
      <CartWidget
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onCheckout={handleCheckout}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen} />
      
    </motion.div>);

}