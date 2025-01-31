import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const mobile_number = "9510668439";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhlbm5hfGVufDB8fDB8fHww)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Background Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          {" "}
          Exquisite Mehndi designs, crafted with love and precision for your
          most cherished occasions.
        </p>
        <div className="flex justify-center gap-6 pt-6">
          <Link href={"/booknow"}>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-full flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105">
              Book Now <ChevronRight size={20} />
            </button>
          </Link>
          <Link href={"/mehandi-design-gallery"}>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore Designs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
