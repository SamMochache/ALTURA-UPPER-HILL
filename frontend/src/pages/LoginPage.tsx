import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  EyeIcon,
  EyeOffIcon,
  ShieldCheckIcon,
  ArrowRightIcon } from
'lucide-react';
export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || '/';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'resident' | 'investor'>(
    'resident'
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const result = await login(email, password);
    if (result.success) {
      navigate(
        from === '/' ?
        activeTab === 'investor' ?
        '/investor' :
        '/resident' :
        from,
        {
          replace: true
        }
      );
    } else {
      setError(result.error || 'Login failed');
    }
    setIsLoading(false);
  };
  const fillDemo = (type: 'resident' | 'investor') => {
    if (type === 'resident') {
      setEmail('james@altura.com');
      setPassword('resident123');
      setActiveTab('resident');
    } else {
      setEmail('njoroge@altura.com');
      setPassword('investor123');
      setActiveTab('investor');
    }
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
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
      className="min-h-screen bg-altura-black flex">
      
      {/* Left: Image Panel (desktop only) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-altura-black/90 via-altura-black/60 to-transparent" />
        <div className="absolute bottom-16 left-16 max-w-md z-10">
          <h2 className="font-serif text-4xl text-altura-white mb-4 leading-tight">
            Welcome to Your Exclusive Portal
          </h2>
          <p className="text-altura-muted text-lg font-light">
            Access your residence, manage investments, and experience luxury
            living at your fingertips.
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md">
          
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-12">
            <Link to="/" className="inline-block">
              <h1 className="font-serif text-3xl tracking-[0.2em] text-altura-white hover:text-altura-gold transition-colors">
                ALTURA
              </h1>
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="font-serif text-3xl text-altura-white mb-3">
              Sign In
            </h2>
            <p className="text-altura-muted">
              Access your Altura Upper Hill account
            </p>
          </motion.div>

          {/* Role Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex mb-8 border border-altura-border">
            
            <button
              onClick={() => setActiveTab('resident')}
              className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all ${activeTab === 'resident' ? 'bg-altura-gold text-altura-black font-medium' : 'text-altura-muted hover:text-altura-white'}`}>
              
              Resident
            </button>
            <button
              onClick={() => setActiveTab('investor')}
              className={`flex-1 py-3 text-sm tracking-widest uppercase transition-all ${activeTab === 'investor' ? 'bg-altura-gold text-altura-black font-medium' : 'text-altura-muted hover:text-altura-white'}`}>
              
              Investor
            </button>
          </motion.div>

          {/* Error */}
          {error &&
          <motion.div
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="bg-red-500/10 border border-red-500/20 p-4 mb-6">
            
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          }

          {/* Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6">
            
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required />
            

            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-8 text-altura-muted hover:text-altura-gold transition-colors">
                
                {showPassword ?
                <EyeOffIcon className="w-4 h-4" /> :

                <EyeIcon className="w-4 h-4" />
                }
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-4 h-4 border border-altura-border peer-checked:bg-altura-gold peer-checked:border-altura-gold transition-colors mr-2 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-altura-black hidden peer-checked:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}>
                    
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7" />
                    
                  </svg>
                </div>
                <span className="text-altura-muted text-sm">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-altura-gold text-sm hover:text-altura-gold-light transition-colors">
                
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={isLoading}>
              
              Sign In
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>

          {/* Demo Credentials */}
          <motion.div
            variants={itemVariants}
            className="mt-8 p-6 bg-altura-surface border border-altura-border">
            
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="w-4 h-4 text-altura-gold mr-2" />
              <span className="text-altura-muted text-xs tracking-widest uppercase">
                Demo Access
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => fillDemo('resident')}
                className="text-left p-3 border border-altura-border hover:border-altura-gold/30 transition-colors">
                
                <span className="text-altura-white text-sm block mb-1">
                  Resident
                </span>
                <span className="text-altura-muted text-xs">
                  james@altura.com
                </span>
              </button>
              <button
                type="button"
                onClick={() => fillDemo('investor')}
                className="text-left p-3 border border-altura-border hover:border-altura-gold/30 transition-colors">
                
                <span className="text-altura-white text-sm block mb-1">
                  Investor
                </span>
                <span className="text-altura-muted text-xs">
                  njoroge@altura.com
                </span>
              </button>
            </div>
          </motion.div>

          {/* Sign Up Link */}
          <motion.p
            variants={itemVariants}
            className="text-center mt-8 text-altura-muted text-sm">
            
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-altura-gold hover:text-altura-gold-light transition-colors font-medium">
              
              Create Account
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>);

}