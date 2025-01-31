import React, { ReactNode } from "react";

// Type for Card props
type CardProps = {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
};

// Type for Image, Content, and Price components
type CardComponent = React.FC<CardProps> & {
    Image: React.FC<{
        src: string;
        alt: string;
        discount?: string;
        price?: string;
    }>;
    Content: React.FC<{ title: string; description?: string }>;
    Price: React.FC<{ price: string }>;
};

// Main Card component
const Card: CardComponent = ({ children, className, onClick }) => {
    return (
        <div
            className={`rounded-lg shadow-md overflow-hidden bg-darkBrown ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

// Image component
const Image = ({
    src,
    alt,
    discount,
    price,
}: {
    src: string;
    alt: string;
    discount?: string;
    price?: string;
}) => (
    <div className="relative">
        {/* Discount Sticker */}
        {discount && (
            <div className="absolute top-2 left-2 bg-yellow-400 text-xs font-bold text-gray-900 px-2 py-1 rounded">
                {discount}
            </div>
        )}

        {/* Image */}
        <img src={src} alt={alt} className="w-full h-48 object-cover" />

        {/* Price Tag */}
        {price && (
            <div className="absolute bottom-2 right-2 bg-darkBrown text-sm font-bold text-lightYellow px-3 py-1 rounded">
                {price}
            </div>
        )}
    </div>
);

// Content component
const Content = ({
    title,
    description,
}: {
    title: string;
    description?: string;
}) => (
    <div className="p-2">
        <h3 className="text-lg font-semibold text-lightYellow">{title}</h3>
        {description && (
            <p className="text-sm text-darkYellow mt-1">{description}</p>
        )}
    </div>
);

// Price component
const Price = ({ price }: { price: string }) => (
    <div className="p-4 border-t text-dark-800 font-bold text-lg">₹{price}</div>
);

// Attach subcomponents to Card component
Card.Image = Image;
Card.Content = Content;
Card.Price = Price;

export default Card;
