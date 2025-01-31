import React, { useState } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    type?: string;
}

const BookNowModal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
    const [isBooking, setIsBooking] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        phone: "",
        mehndiType: type || "Bridal",
        notes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white w-11/12 max-w-lg p-6 rounded-lg shadow-2xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                >
                    ✖
                </button>

                {/* Modal Content */}
                {!isBooking ? (
                    <>
                        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                            Book Now
                        </h2>
                        <p className="text-center text-gray-700 mb-6">
                            How would you like to contact us?
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a
                                href="tel:+1234567890"
                                className="bg-indigo-500 text-white py-2 px-4 rounded-lg text-center shadow-md hover:bg-indigo-600 transition-colors"
                            >
                                Call Us
                            </a>
                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white py-2 px-4 rounded-lg text-center shadow-md hover:bg-green-600 transition-colors"
                            >
                                WhatsApp
                            </a>
                            <button
                                onClick={() => setIsBooking(true)}
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center shadow-md hover:bg-blue-600 transition-colors"
                            >
                                Book Mehandi Design
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
                            Book a Mehandi Design
                        </h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Date Field */}
                            <div>
                                <label
                                    htmlFor="date"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Event Date
                                </label>
                                <input
                                    id="date"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Mehandi Type Field */}
                            <div>
                                <label
                                    htmlFor="mehndiType"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Mehandi Type
                                </label>
                                <select
                                    id="mehndiType"
                                    value={formData.mehndiType}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                                    required
                                >
                                    <option value="Arabic">Arabic</option>
                                    <option value="Bridal">Bridal</option>
                                    <option value="Baby Shower">Baby Shower</option>
                                    <option value="Engagement">Engagement</option>
                                    <option value="Traditional">Traditional</option>
                                    <option value="Party">Party</option>
                                    <option value="Leg">Leg</option>
                                </select>
                            </div>

                            {/* Notes Field */}
                            <div>
                                <label
                                    htmlFor="notes"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Additional Notes
                                </label>
                                <textarea
                                    id="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
                                    rows={3}
                                    placeholder="Mention any specific design or requirement"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 transition-colors"
                            >
                                Submit Booking
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookNowModal;
