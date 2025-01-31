import React from 'react';
import { Loader2 } from 'lucide-react';

// Types for button props
type ButtonVariant = 'primary' | 'secondary' | 'glass' | 'light' | 'dark' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonType;
    disabled?: boolean;
    variant?: ButtonVariant;
    size?: ButtonSize;
    classes?: string;
    fullWidth?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    id?: string;
    ariaLabel?: string;
    name?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',
    size = 'md',
    classes = '',
    fullWidth = false,
    loading = false,
    icon,
    iconPosition = 'left',
    id,
    ariaLabel,
    name,
}) => {
    const sizeClasses: Record<ButtonSize, string> = {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-3 text-lg',
        xl: 'px-10 py-4 text-xl',
    };

    const variantClasses: Record<ButtonVariant, string> = {
        primary: `
      bg-gradient-to-r from-purple-500 to-indigo-500 text-white 
      hover:from-indigo-500 hover:to-purple-500 
      focus:ring-purple-300
      disabled:opacity-50
    `,
        secondary: `
      bg-gradient-to-r from-green-500 to-teal-500 text-white 
      hover:from-teal-500 hover:to-green-500 
      focus:ring-green-300
      disabled:opacity-50
    `,
        glass: `
      bg-white bg-opacity-20 backdrop-blur-lg border border-white/10 
      text-white hover:bg-opacity-30 
      focus:ring-white/50
      disabled:opacity-50
    `,
        light: `
      bg-gray-100 text-gray-800 
      hover:bg-gray-200 
      focus:ring-gray-300
      disabled:opacity-50
    `,
        dark: `
      bg-gray-900 text-white 
      hover:bg-gray-700 
      focus:ring-gray-500
      disabled:opacity-50
    `,
        outline: `
      border-2 border-indigo-500 text-indigo-500 
      hover:bg-indigo-500 hover:text-white 
      focus:ring-indigo-300
      disabled:opacity-50
    `,
        ghost: `
      text-indigo-500 
      hover:bg-indigo-100 
      focus:ring-indigo-300
      disabled:opacity-50
    `,
    };

    const baseClasses = `
    inline-flex items-center justify-center
    gap-2 font-semibold rounded-lg shadow-md
    transition-all transform hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    disabled:cursor-not-allowed
  `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${classes}
      `}
            id={id}
            aria-label={ariaLabel}
            name={name}
            aria-busy={loading}
        >
            {loading ? (
                <>
                    <Loader2 className="animate-spin" size={size === 'xs' ? 14 : size === 'sm' ? 16 : 20} />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
                    {children}
                    {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
                </>
            )}
        </button>
    );
};

export { Button, type ButtonProps };
export type { ButtonVariant, ButtonSize, ButtonType };
