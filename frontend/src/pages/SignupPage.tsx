import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  EyeIcon,
  EyeOffIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon } from
'lucide-react';
export function SignupPage() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '+254 ',
    password: '',
    confirmPassword: '',
    role: '' as 'resident' | 'investor' | '',
    unit: '',
    agreeTerms: false
  });
  const updateForm = (field: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
    setError('');
  };
  const handleNext = () => {
    if (step === 1) {
      if (!form.role) {
        setError('Please select an account type.');
        return;
      }
    }
    if (step === 2) {
      if (!form.name || !form.email || !form.phone) {
        setError('Please fill in all fields.');
        return;
      }
    }
    if (step === 3) {
      if (form.password.length < 6) {
        setError('Password must be at least 6 characters.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!form.agreeTerms) {
        setError('Please accept the terms and conditions.');
        return;
      }
    }
    setError('');
    setStep((s) => s + 1);
  };
  const handleSubmit = async () => {
    if (!form.agreeTerms) {
      setError('Please accept the terms and conditions.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsLoading(true);
    const result = await signup({
      name: form.name,
      email: form.email,
      phone: form.phone,
      password: form.password,
      role: form.role as 'resident' | 'investor',
      unit: form.unit
    });
    if (result.success) {
      navigate(form.role === 'investor' ? '/investor' : '/resident');
    } else {
      setError(result.error || 'Registration failed');
    }
    setIsLoading(false);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
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
      
      {/* Left Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Residence"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-altura-black/90 via-altura-black/60 to-transparent" />
        <div className="absolute bottom-16 left-16 max-w-md z-10">
          <h2 className="font-serif text-4xl text-altura-white mb-4 leading-tight">
            Join the Altura Community
          </h2>
          <p className="text-altura-muted text-lg font-light">
            Create your account to access exclusive resident services and
            investment opportunities.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md">
          
          <motion.div variants={itemVariants}>
            <Link to="/" className="inline-block mb-12">
              <h1 className="font-serif text-3xl tracking-[0.2em] text-altura-white hover:text-altura-gold transition-colors">
                ALTURA
              </h1>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="font-serif text-3xl text-altura-white mb-3">
              Create Account
            </h2>
            <p className="text-altura-muted">Step {step} of 3</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div variants={itemVariants} className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) =>
            <div
              key={s}
              className={`h-1 flex-1 transition-colors duration-300 ${s <= step ? 'bg-altura-gold' : 'bg-altura-border'}`} />

            )}
          </motion.div>

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

          {/* Step 1: Account Type */}
          {step === 1 &&
          <motion.div
            key="step1"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-6">
            
              <p className="text-altura-muted text-sm mb-4">
                Select your account type
              </p>
              <div className="grid grid-cols-1 gap-4">
                <button
                type="button"
                onClick={() => updateForm('role', 'resident')}
                className={`p-6 border text-left transition-all ${form.role === 'resident' ? 'border-altura-gold bg-altura-gold/5' : 'border-altura-border hover:border-altura-gold/30'}`}>
                
                  <span className="font-serif text-xl text-altura-white block mb-2">
                    Resident
                  </span>
                  <span className="text-altura-muted text-sm">
                    Access your home, pay rent, book amenities, and manage
                    services.
                  </span>
                </button>
                <button
                type="button"
                onClick={() => updateForm('role', 'investor')}
                className={`p-6 border text-left transition-all ${form.role === 'investor' ? 'border-altura-gold bg-altura-gold/5' : 'border-altura-border hover:border-altura-gold/30'}`}>
                
                  <span className="font-serif text-xl text-altura-white block mb-2">
                    Investor
                  </span>
                  <span className="text-altura-muted text-sm">
                    Track ROI, monitor occupancy, and manage your property
                    portfolio.
                  </span>
                </button>
              </div>
              <Button
              variant="primary"
              className="w-full mt-6"
              onClick={handleNext}
              disabled={!form.role}>
              
                Continue <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          }

          {/* Step 2: Personal Info */}
          {step === 2 &&
          <motion.div
            key="step2"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-6">
            
              <Input
              label="Full Name"
              value={form.name}
              onChange={(e) => updateForm('name', e.target.value)}
              placeholder="James Kamau"
              required />
            
              <Input
              label="Email Address"
              type="email"
              value={form.email}
              onChange={(e) => updateForm('email', e.target.value)}
              placeholder="your@email.com"
              required />
            
              <Input
              label="Phone Number"
              type="tel"
              value={form.phone}
              onChange={(e) => updateForm('phone', e.target.value)}
              placeholder="+254 712 345 678"
              required />
            
              {form.role === 'resident' &&
            <div>
                  <label className="block text-xs uppercase tracking-widest text-altura-muted mb-2">
                    Unit (Optional)
                  </label>
                  <select
                value={form.unit}
                onChange={(e) => updateForm('unit', e.target.value)}
                className="w-full bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white py-2 outline-none transition-colors appearance-none cursor-pointer">
                
                    <option value="" className="bg-altura-black">
                      Select your unit
                    </option>
                    <option
                  value="The Crown Penthouse"
                  className="bg-altura-black">
                  
                      The Crown Penthouse
                    </option>
                    <option value="Residence 3A" className="bg-altura-black">
                      Residence 3A
                    </option>
                    <option value="Residence 3B" className="bg-altura-black">
                      Residence 3B
                    </option>
                    <option value="Residence 2A" className="bg-altura-black">
                      Residence 2A
                    </option>
                    <option value="Residence 2B" className="bg-altura-black">
                      Residence 2B
                    </option>
                  </select>
                </div>
            }
              <div className="flex gap-4 pt-4">
                <Button
                variant="ghost"
                onClick={() => setStep(1)}
                className="flex-1">
                
                  <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                variant="primary"
                onClick={handleNext}
                className="flex-1">
                
                  Continue <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          }

          {/* Step 3: Password & Confirm */}
          {step === 3 &&
          <motion.div
            key="step3"
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: -20
            }}
            className="space-y-6">
            
              <div className="relative">
                <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => updateForm('password', e.target.value)}
                placeholder="Minimum 6 characters"
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
              <Input
              label="Confirm Password"
              type="password"
              value={form.confirmPassword}
              onChange={(e) => updateForm('confirmPassword', e.target.value)}
              placeholder="Re-enter your password"
              required />
            

              <label className="flex items-start cursor-pointer mt-6">
                <input
                type="checkbox"
                checked={form.agreeTerms}
                onChange={(e) => updateForm('agreeTerms', e.target.checked)}
                className="sr-only peer" />
              
                <div className="w-4 h-4 border border-altura-border peer-checked:bg-altura-gold peer-checked:border-altura-gold transition-colors mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  {form.agreeTerms &&
                <CheckCircleIcon className="w-3 h-3 text-altura-black" />
                }
                </div>
                <span className="text-altura-muted text-sm">
                  I agree to the{' '}
                  <a href="#" className="text-altura-gold">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-altura-gold">
                    Privacy Policy
                  </a>
                </span>
              </label>

              <div className="flex gap-4 pt-4">
                <Button
                variant="ghost"
                onClick={() => setStep(2)}
                className="flex-1">
                
                  <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                variant="primary"
                onClick={handleSubmit}
                className="flex-1"
                loading={isLoading}>
                
                  Create Account
                </Button>
              </div>
            </motion.div>
          }

          <motion.p
            variants={itemVariants}
            className="text-center mt-8 text-altura-muted text-sm">
            
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-altura-gold hover:text-altura-gold-light transition-colors font-medium">
              
              Sign In
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>);

}