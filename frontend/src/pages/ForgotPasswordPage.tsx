import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ArrowLeftIcon, MailIcon, CheckCircleIcon } from 'lucide-react';
export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsLoading(false);
    setIsSent(true);
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
      className="min-h-screen bg-altura-black flex items-center justify-center px-6 py-32">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="w-full max-w-md">
        
        <motion.div variants={itemVariants}>
          <Link to="/" className="inline-block mb-12">
            <h1 className="font-serif text-3xl tracking-[0.2em] text-altura-white hover:text-altura-gold transition-colors">
              ALTURA
            </h1>
          </Link>
        </motion.div>

        {isSent ?
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="text-center">
          
            <div className="w-20 h-20 bg-altura-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-altura-gold/20">
              <CheckCircleIcon className="w-10 h-10 text-altura-gold" />
            </div>
            <h2 className="font-serif text-3xl text-altura-white mb-4">
              Check Your Email
            </h2>
            <p className="text-altura-muted mb-8 leading-relaxed">
              We've sent a password reset link to{' '}
              <span className="text-altura-white">{email}</span>. Please check
              your inbox and follow the instructions.
            </p>
            <Link to="/login">
              <Button variant="secondary" className="w-full">
                <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Sign In
              </Button>
            </Link>
          </motion.div> :

        <>
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="font-serif text-3xl text-altura-white mb-3">
                Reset Password
              </h2>
              <p className="text-altura-muted">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </motion.div>

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
            
              <Button
              type="submit"
              variant="primary"
              className="w-full"
              loading={isLoading}>
              
                <MailIcon className="w-4 h-4 mr-2" /> Send Reset Link
              </Button>
            </motion.form>

            <motion.div variants={itemVariants} className="mt-8 text-center">
              <Link
              to="/login"
              className="text-altura-gold text-sm hover:text-altura-gold-light transition-colors inline-flex items-center">
              
                <ArrowLeftIcon className="w-4 h-4 mr-2" /> Back to Sign In
              </Link>
            </motion.div>
          </>
        }
      </motion.div>
    </motion.div>);

}