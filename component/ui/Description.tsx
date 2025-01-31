import React from "react";

type DescriptionVariant = 'primary' | 'secondary' | 'accent' | 'muted' | 'dark';
type DescriptionSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type DescriptionWeight = 'normal' | 'medium' | 'semibold';
type DescriptionWidth = 'normal' | 'wide' | 'narrow';

interface DescriptionProps {
    text: string;
    variant?: DescriptionVariant;
    size?: DescriptionSize;
    weight?: DescriptionWeight;
    width?: DescriptionWidth;
    classes?: string;
    id?: string;
    itemProp?: string;
    isHtml?: boolean; // For cases when text contains HTML
}

const Description: React.FC<DescriptionProps> = ({
    text,
    variant = 'primary',
    size = 'base',
    weight = 'normal',
    width = 'normal',
    classes = '',
    id,
    itemProp,
    isHtml = false,
}) => {
    // Size variations with responsive design
    const sizeClasses: Record<DescriptionSize, string> = {
        xs: 'text-sm md:text-base',
        sm: 'text-base md:text-lg',
        base: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl'
    };

    // Color variants using your color scheme
    const variantClasses: Record<DescriptionVariant, string> = {
        primary: 'text-[#4C2B16]',    // darkBrown
        secondary: 'text-[#7A3916]',  // mediumBrown
        accent: 'text-[#E1AD3D]',     // lightYellow
        muted: 'text-gray-600',       // Additional muted option
        dark: 'text-black'
    };

    // Font weight variations
    const weightClasses: Record<DescriptionWeight, string> = {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold'
    };

    // Max width variations for better readability
    const widthClasses: Record<DescriptionWidth, string> = {
        narrow: 'max-w-2xl',
        normal: 'max-w-3xl',
        wide: 'max-w-4xl'
    };

    // Base styles that should always be applied
    const baseClasses = 'leading-relaxed tracking-normal antialiased';

    return (
        <p
            className={`s
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${weightClasses[weight]}
        ${widthClasses[width]}
        ${classes}
      `}
            id={id}
            itemProp={itemProp}
            // If text needs to be accessible to screen readers differently
            aria-label={isHtml ? undefined : text}
        >
            {isHtml ? (
                <span dangerouslySetInnerHTML={{ __html: text }} />
            ) : (
                text
            )}
        </p>
    );
};

export default Description;