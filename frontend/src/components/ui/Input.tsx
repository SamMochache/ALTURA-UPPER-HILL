import React, { forwardRef } from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label &&
        <label className="block text-xs uppercase tracking-widest text-altura-muted mb-2">
            {label}
          </label>
        }
        <input
          ref={ref}
          className={`bg-transparent border-b border-altura-border focus:border-altura-gold text-altura-white w-full py-2 outline-none transition-colors placeholder:text-altura-muted/50 ${className}`}
          {...props} />
        
        {error &&
        <span className="text-red-400 text-xs mt-1 block">{error}</span>
        }
      </div>);

  }
);
Input.displayName = 'Input';