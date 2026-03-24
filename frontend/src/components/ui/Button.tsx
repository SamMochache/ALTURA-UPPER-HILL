import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2Icon } from 'lucide-react';
interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
  {
    variant = 'primary',
    size = 'md',
    loading = false,
    children,
    className = '',
    disabled,
    ...props
  },
  ref) =>
  {
    const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wide transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
    const variants = {
      primary:
      'bg-altura-gold text-altura-black hover:bg-altura-gold-light shadow-[0_0_15px_rgba(201,169,110,0.15)] hover:shadow-[0_0_25px_rgba(201,169,110,0.3)]',
      secondary:
      'bg-transparent border border-altura-gold text-altura-gold hover:bg-altura-gold/10',
      ghost:
      'bg-transparent text-altura-gold hover:text-altura-gold-light hover:bg-altura-gold/5'
    };
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };
    return (
      <motion.button
        ref={ref}
        whileHover={{
          scale: disabled || loading ? 1 : 1.02
        }}
        whileTap={{
          scale: disabled || loading ? 1 : 0.98
        }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        {...props}>
        
        {loading && <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />}
        <span className="relative z-10 flex items-center">{children}</span>

        {/* Subtle shimmer effect for primary button */}
        {variant === 'primary' && !disabled && !loading &&
        <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
        }
      </motion.button>);

  }
);
Button.displayName = 'Button';