'use client';

import Section from '../ui/SectionWrapper';
import Link from 'next/link';

export default function LocationSection() {
    return (
        <Section
            title="Our Location"
            description="We provide mehandi services in Chennai with home booking options. Our professional mehandi artists deliver stunning designs for weddings, engagements, and festive events. People love our artistry and personalized service."
        >
            {/* Location Details */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
                <div className="flex-1 max-w-md text-gray-800">
                    <h3 className="text-xl font-semibold mb-2">Chennai</h3>
                    <p className="text-base">
                        Offering the best mehandi designs in Chennai, we bring professional mehandi artists to your doorstep. Perfect for weddings, engagements, and festive celebrations.
                    </p>
                </div>

                <div className="flex-1 w-full max-w-lg h-64">
                    <iframe
                        title="Chennai"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.23616943538!2d80.2212535852147!3d13.082680744893444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d503e6782f%3A0xbff53b6cd7281466!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1731768176100!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: '0' }}
                        allowFullScreen
                        aria-hidden="false"
                    />
                </div>
            </div>

            {/* Link to Book Now */}
            <div className="mt-8 text-center">
                <Link
                    href="/booknow"
                    className="inline-block px-8 py-3 rounded-lg bg-yellow-500 text-white font-semibold text-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                    Book Your Appointment
                </Link>
            </div>
        </Section>
    );
}
