"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Award, Users, Calendar } from "lucide-react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
      src="https://images.unsplash.com/photo-1681519252175-d036319d3834?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background Image"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Arun Mehandi Artist
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl">
            Transforming traditions into breathtaking art, one henna design at a time.
            With a passion spanning over a decade, I create intricate mehandi designs
            that celebrate your unique journey.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Happy Customers</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">8000+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Years of Experience</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">12+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Design Styles</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">50+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base/7 text-gray-300">Cities Covered</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">10+</dd>
            </div>
          </dl>
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center py-12">
        <Link
          href="/booknow"
          className="inline-block bg-[#8B4513] text-white px-8 py-4 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:bg-[#6B3E23] hover:scale-105"
        >
          Book Your Mehandi Session
        </Link>
      </div>
    </div>
  );
};

export default About;
