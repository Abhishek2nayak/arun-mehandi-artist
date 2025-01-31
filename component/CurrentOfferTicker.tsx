import React from "react";

export default function CurrentOfferTicker() {
  return (
    <div className="fixed top-0 left-0 w-full bg-darkBrown text-white py-2 z-50">
      <div className="overflow-hidden w-full">
        <div className="animate-marquee whitespace-nowrap text-xl font-semibold flex">
          {/* Ensure proper spacing and avoid text cutting */}
          <span className="px-5 md:px-10">
            💥 10% OFF on any Mehandi Design! Book Now! 💥
          </span>
          <span className="px-5 md:px-10">
            🌟 Online Booking Now Available for Your Mehandi Appointments! 🌟
          </span>
          <span className="px-5 md:px-10">
            🎉 Special Offer: Free Henna Design Consultation with Every Booking! 🎉
          </span>
          <span className="px-5 md:px-10">
            💥 Limited Time Offer! Get 10% OFF when you book online! 💥
          </span>
          <span className="px-5 md:px-10">
            🌟 Don't Miss Out! Book your Mehandi Appointment Online Today! 🌟
          </span>
        </div>
      </div>
    </div>
  );
}
