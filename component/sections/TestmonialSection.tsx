import React from 'react';

type TestimonialProps = {
    name: string;
    feedback: string;
    rating: number; // 1 to 5 stars
    reviewCount ?: number; // Number of reviews
};

const Testimonial: React.FC<TestimonialProps> = ({ name, feedback, rating, reviewCount }) => {
    return (
        <div className="bg-gradient-to-r from-yellow-300 to-orange-500 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 max-w-md mx-auto my-6">
            <div className="flex items-center gap-4 mb-4">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-600 opacity-80">({reviewCount} Reviews)</p>
                </div>
            </div>

            <div className="flex mb-4">
                {/* Star Rating */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill={index < rating ? "#FFD700" : "#E4E4E7"} // Gold for filled stars, gray for empty
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.12 6.517a1 1 0 00.95.69h6.688c.969 0 1.371 1.24.588 1.81l-5.396 3.916a1 1 0 00-.364 1.118l2.12 6.517c.3.921-.755 1.688-1.54 1.118l-5.396-3.916a1 1 0 00-1.175 0l-5.396 3.916c-.785.57-1.84-.197-1.54-1.118l2.12-6.517a1 1 0 00-.364-1.118L2.41 11.944c-.783-.57-.38-1.81.588-1.81h6.688a1 1 0 00.95-.69l2.12-6.517z"
                            />
                        </svg>
                    ))}
                </div>
            </div>

            {/* Feedback */}
            <p className="text-lg text-gray-800 italic">"{feedback}"</p>
        </div>
    );
};

export default Testimonial;
