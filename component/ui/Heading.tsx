import React from "react";

// Available variants and sizes for type safety
type HeadingVariant = 'primary' | 'secondary' | 'accent' | 'contrast' | 'dark';
type HeadingSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface MainHeadingProps {
    title: string;
    classes?: string;
    variant?: HeadingVariant;
    size?: HeadingSize;
    id?: string;
    itemProp?: string;
}

const MainHeading: React.FC<MainHeadingProps> = ({
    title,
    classes = '',
    variant = 'primary',
    size = 'lg',
    id,
    itemProp
}) => {
    // Size maps for responsive design
    const sizeClasses: Record<HeadingSize, string> = {
        sm: 'text-2xl md:text-3xl lg:text-4xl',
        md: 'text-3xl md:text-4xl lg:text-5xl',
        lg: 'text-4xl md:text-5xl lg:text-6xl',
        xl: 'text-5xl md:text-6xl lg:text-7xl',
        '2xl': 'text-6xl md:text-7xl lg:text-8xl'
    };

    // Using Tailwind's color utilities instead of RGB values
    const variantClasses: Record<HeadingVariant, string> = {
        primary: 'text-[#E7C8B4]',  // primaryBg
        secondary: 'text-amber-900', // approximate for darkBrown
        accent: 'text-amber-400',    // approximate for lightYellow
        contrast: 'text-white',      // white
        dark: 'text-black',          // dark
    };

    return (
        <h1
            className={`
        font-extrabold
        tracking-tight
        leading-tight
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${classes}
      `}
            id={id}
            itemProp={itemProp}
            role="heading"
            aria-level={1}
        >
            {title}
        </h1>
    );
};

export default MainHeading;