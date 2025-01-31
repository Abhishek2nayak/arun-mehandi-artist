"use client"
import React, { useState } from "react";
import { Star } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS

const FeedbackForm = () => {
    const [rating, setRating] = useState<number>(0);
    const [hoverRating, setHoverRating] = useState<number>(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            // Prepare the template parameters
            const templateParams = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                message: formData.message,
                rating,
            };

            // Send email via EmailJS
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key
            );

            setSubmitStatus({
                type: "success",
                message: "Thank you for your feedback! We appreciate your input.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });
            setRating(0);
        } catch (error) {
            console.error("Failed to send feedback:", error);
            setSubmitStatus({
                type: "error",
                message: "Failed to send feedback. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="min-h-screen py-12 px-4 bg-primaryBg">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-darkBrown">
                        Feedback
                    </h2>

                    {submitStatus.type && (
                        <div
                            className={`mb-6 p-4 rounded-md ${submitStatus.type === "success"
                                ? "bg-green-50 text-green-700"
                                : "bg-red-50 text-red-700"
                                }`}
                        >
                            {submitStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Input fields */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium mb-2 text-mediumBrown"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="block w-full px-4 py-2 rounded-md border border-darkYellow bg-white text-dark transition-colors duration-200"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium mb-2 text-mediumBrown"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="block w-full px-4 py-2 rounded-md border border-darkYellow bg-white text-dark transition-colors duration-200"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="mobile"
                                className="block text-sm font-medium mb-2 text-mediumBrown"
                            >
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                id="mobile"
                                required
                                className="block w-full px-4 py-2 rounded-md border border-darkYellow bg-white text-dark transition-colors duration-200"
                                onChange={handleChange}
                                value={formData.mobile}
                            />
                        </div>

                        {/* Star Rating */}
                        <div>
                            <label className="block text-sm font-medium mb-2 text-mediumBrown">
                                Rating
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                        className="focus:outline-none"
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setRating(star)}
                                    >
                                        <Star
                                            className={`w-6 h-6 transition-colors duration-150 ${star <= (hoverRating || rating)
                                                ? "text-lightYellow fill-lightYellow"
                                                : "text-darkYellow fill-transparent"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium mb-2 text-mediumBrown"
                            >
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                className="block w-full px-4 py-2 rounded-md border border-darkYellow bg-white text-dark transition-colors duration-200"
                                onChange={handleChange}
                                value={formData.message}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 px-4 rounded-md transition-colors duration-200 mt-6 disabled:opacity-50 bg-darkBrown text-white hover:bg-opacity-90"
                        >
                            {isSubmitting ? "Sending..." : "Submit Feedback"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;
