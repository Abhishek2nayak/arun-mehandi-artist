import React from 'react';

// Types shared across heading and description
type ColorVariant = 'primary' | 'secondary' | 'accent' | 'light' | 'dark';
type SizeVariant = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AlignVariant = 'left' | 'center' | 'right';
type WidthVariant = 'full' | 'wide' | 'normal' | 'narrow';

interface SectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;

    variant?: ColorVariant;
    size?: SizeVariant;
    align?: AlignVariant;
    width?: WidthVariant;
    classes?: string;
    titleClasses?: string;
    descriptionClasses?: string;
    contentClasses?: string;

    id?: string;
    titleId?: string;
    descriptionId?: string;
    contentId?: string;
    role?: string;
    ariaLabel?: string;
}

const Section: React.FC<SectionProps> = ({
    title,
    description,
    children,
    variant = 'primary',
    size = 'lg',
    align = 'center',
    width = 'normal',
    classes = '',
    titleClasses = '',
    descriptionClasses = '',
    contentClasses = '',
    id,
    titleId,
    descriptionId,
    contentId,
    role = 'region',
    ariaLabel,
}) => {
    const headingSizes: Record<SizeVariant, string> = {
        sm: 'text-xl md:text-2xl lg:text-3xl',
        md: 'text-2xl md:text-3xl lg:text-4xl',
        lg: 'text-3xl md:text-4xl lg:text-5xl',
        xl: 'text-4xl md:text-5xl lg:text-6xl',
        '2xl': 'text-5xl md:text-6xl lg:text-7xl'
    };

    const descriptionSizes: Record<SizeVariant, string> = {
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
        '2xl': 'text-3xl md:text-4xl'
    };

    const variantClasses: Record<ColorVariant, { title: string; description: string; background: string }> = {
        primary: {
            title: 'text-[#4C2B16]',
            description: 'text-[#4C2B16]/80',
            background: 'bg-gradient-to-r from-[#E0D8B0] to-[#CDAE79]'
        },
        secondary: {
            title: 'text-[#7A3916]',
            description: 'text-[#7A3916]/80',
            background: 'bg-gradient-to-r from-[#FCE4B5] to-[#EEBC8C]'
        },
        accent: {
            title: 'text-[#E1AD3D]',
            description: 'text-[#E1AD3D]/90',
            background: 'bg-[#F7E6C8]'
        },
        light: {
            title: 'text-[#E7C8B4]',
            description: 'text-[#E7C8B4]/90',
            background: 'bg-[#FFF7E6]'
        },
        dark: {
            title: 'text-black',
            description: 'text-black/80',
            background: 'bg-[#E3D1C3]'
        }
    };

    const widthClasses: Record<WidthVariant, string> = {
        full: 'w-full',
        wide: 'max-w-7xl',
        normal: 'max-w-5xl',
        narrow: 'max-w-3xl'
    };

    const alignClasses: Record<AlignVariant, string> = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <section
            id={id}
            role={role}
            aria-label={ariaLabel || title}
            className={`relative overflow-hidden flex flex-col w-full mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20  ${alignClasses[align]} ${widthClasses[width]} ${classes}`}
        >
            {/* Background Vector */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                {/* Add Mehndi-inspired SVG or decorative pattern */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                    fill="none"
                    className="w-full h-full"
                >
                    <path
                        d="M100,0 C154,0 200,46 200,100 C200,154 154,200 100,200 C46,200 0,154 0,100 C0,46 46,0 100,0 Z"
                        fill="url(#gradient)"
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#E7C8B4" />
                            <stop offset="100%" stopColor="#CDAE79" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Header Group */}
            <div className={`z-10 space-y-4 md:space-y-6 mb-8 md:mb-12 lg:mb-16 ${width !== 'full' ? widthClasses[width] : ''} w-full`}>
                {/* Title */}
                <h2
                    id={titleId}
                    className={`font-bold tracking-tight leading-tight z-10 ${headingSizes[size]} ${variantClasses[variant].title} ${titleClasses}`}
                >
                    {title}
                </h2>

                {/* Description (Optional) */}
                {description && (
                    <p
                        id={descriptionId}
                        className={`max-w-prose mx-auto font-normal z-10 ${descriptionSizes[size]} ${variantClasses[variant].description} ${descriptionClasses}`}
                    >
                        {description}
                    </p>
                )}
            </div>

            {/* Decorative Separator */}
            <div className="relative z-10 flex justify-center items-center w-full my-8">
                <div className="w-1/3 h-[2px] bg-[#CDAE79]"></div>
                <div className="mx-2 w-6 h-6 rounded-full bg-[#E1AD3D]"></div>
                <div className="w-1/3 h-[2px] bg-[#CDAE79]"></div>
            </div>

            {/* Content */}
            <div
                id={contentId}
                className={`relative z-10 w-full ${contentClasses}`}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;
