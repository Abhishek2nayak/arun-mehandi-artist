"use client";

import { mobile_number } from "@/component/sections/HeroSection";
import { useState } from "react";

interface FormData {
  name: string;
  date: string;
  phone: string;
  mehndiTypes: string[]; // Array for multi-select
  notes: string;
}

export default function BookNow() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    date: "",
    phone: "",
    mehndiTypes: [], // Initialize as an empty array
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;

    // Handle mehndi Types (multi-select)
    if (type === "checkbox" && id.startsWith("mehndiType")) {
      const selectedType = value;
      setFormData((prev) => {
        const updatedTypes = checked
          ? [...prev.mehndiTypes, selectedType]
          : prev.mehndiTypes.filter((type) => type !== selectedType);

        return { ...prev, mehndiTypes: updatedTypes };
      });
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, date, phone, mehndiTypes, notes } = formData;
    const message = encodeURIComponent(
      `Hello, I would like to book a mehndi design:\n\n` +
        `Name: ${name}\n` +
        `Event Date: ${date}\n` +
        `Phone: ${phone}\n` +
        `Mehndi Types: ${mehndiTypes.join(", ")}\n` +
        `Additional Notes: ${notes}\n\n` +
        `Please confirm my booking.`
    );

    const ownerWhatsAppNumber = "7736789140";

    // Redirect to WhatsApp
    window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Book a Mehndi Design
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href={`tel:${mobile_number}`}
          className="w-full sm:w-auto bg-mediumBrown text-white py-2 px-4 rounded-lg text-center shadow hover:bg-darkBrown transition duration-300"
        >
          Call Us
        </a>
        <a
          href="https://wa.me/7736789140"
          className="w-full sm:w-auto bg-lightYellow text-dark py-2 px-4 rounded-lg text-center shadow hover:bg-darkYellow transition duration-300"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>

      <form className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Event Date Field */}
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-gray-900"
            >
              Event Date
            </label>
            <div className="mt-2.5">
              <input
                id="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Mehndi Types (Checkboxes) */}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Mehndi Types
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Arabic",
                "Bridal",
                "Baby Shower",
                "Engagement",
                "Traditional",
                "Party",
                "Leg",
              ].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`mehndiType-${type}`}
                    value={type}
                    checked={formData.mehndiTypes.includes(type)}
                    onChange={handleChange}
                    className="form-checkbox text-mediumBrown focus:ring-lightYellow"
                  />
                  <span className="ml-2 text-darkBrown">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="sm:col-span-2">
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-gray-900"
            >
              Additional Notes
            </label>
            <div className="mt-2.5">
              <textarea
                id="notes"
                value={formData.notes}
                onChange={handleTextAreaChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                rows={4}
                placeholder="Mention any specific design or detail you'd like"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-mediumBrown text-white py-2 px-6 rounded-lg shadow hover:bg-darkBrown transition duration-300"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}
