"use client";

import React, { use, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ClipboardCheck, Flower2 } from "lucide-react";
import { Button } from "@/component/ui/Button";
import BookNowModal from "@/component/ui/BookModal";
import Head from "next/head";
import { API_Response, fetchGoogleSheetData, fetchGoogleSheetServicesData } from "../getGoogleSheetData";
import { TService , serviceTypes } from "@/component/sections/ServiceSection";

export type Category = typeof serviceTypes[number];

const BridalMehndiService = ({ service }: { service: TService }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-amber-50 to-orange-50 py-16"
    >
      <Head>
        <title>Professional Mehandi Services - Bridal, Events & More</title>
        <meta
          name="description"
          content="Get professional Mehandi services for weddings, events, and more. Available across Tamil Nadu, including Chennai and Coimbatore."
        />
      </Head>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent z-10" />
            <Image
              src={service.image}
              alt={service.alt}
              layout="fill"
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute -bottom-2 -left-2 w-24 h-24">
              <Flower2 className="text-amber-600/20 w-full h-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-amber-900">{service.title} Package</h1>
            <p className="text-lg text-amber-800/80">{service.description}</p>
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="text-amber-600 w-5 h-5" />
                <p className="text-2xl font-semibold text-amber-900">{service.price}</p>
              </div>
              <p className="text-sm text-amber-700 mt-2">Includes full {service.title} coverage</p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-4 px-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ClipboardCheck className="w-5 h-5" />
                Book Now
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {isModalOpen && <BookNowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </motion.div>
  );
};



export default function Service() {
  const [tab, setActiveTab] = useState<Category>("bridal");

  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);

  const [images , setImages] = useState<API_Response[]>([]);



  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await fetchGoogleSheetData<API_Response>();
        setImages(data);
        console.log("Fetched Images:", data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

    useEffect(() => {
      const fetchServices = async () => {
        setLoading(true);
        try {
          const data = await fetchGoogleSheetServicesData();
          setServices(data);
          console.log("Fetched Services:", data);
          setServices(data);
        } catch (error) {
          console.error("Error fetching services:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchServices();
    }, []);

    const memoImages: Record<Category, API_Response[]> = useMemo(() => {
      return images.reduce((acc, image) => {
        // If the category doesn't exist yet, initialize it as an empty array
        if (!acc[image.category]) {
          acc[image.category] = [];
        }
        // Add the current image to the correct category
        acc[image.category].push(image);
        return acc;
      }, {} as Record<Category, API_Response[]>);
    }, [images]); // Assuming images array is the only dependency
    
  

  if (loading) {
    return <span className="text-center text-lg text-gray-500">Loading services...</span>;
  }

 const currentService = services.find((service) => service.type === tab) ?? services[0];
 const currentImages = memoImages[tab];

  return (
    <div>
      <div className="container mx-auto px-4 lg:px-12 py-8">
        <div className="sm:hidden">
          <select
            value={tab}
            onChange={(e) => {
              setActiveTab(e.target.value as TService["type"]);
            }}
            className="bg-amber-50 border border-amber-300 text-amber-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
          >
            {serviceTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi
              </option>
            ))}
          </select>
        </div>


        <ul className="hidden text-sm font-medium text-center rounded-lg shadow-md sm:flex">
          {serviceTypes.map((type, index) => (
            <li key={type} className="w-full focus-within:z-10">
              <button
                onClick={() => {
                  setActiveTab(type as TService["type"]);
                }}
                className={`inline-block w-full p-4 ${
                  tab === type
                    ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-900"
                    : "bg-white text-amber-700 hover:bg-amber-50"
                } ${
                  index === 0 ? "rounded-l-lg" : ""
                } ${index === serviceTypes.length - 1 ? "rounded-r-lg" : ""} border-r border-amber-200 transition-all duration-300`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Mehandi

              </button>
            </li>
          ))}
        </ul>
      </div>

      {
        currentService && (
          <BridalMehndiService service={currentService} />
        )
      }


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-amber-50 to-orange-50 py-16"
      >
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-center text-3xl font-bold text-amber-900 mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-6 h-6" />
            Our {currentService?.title} Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentImages?.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={img.image_url}
                  alt={img.alt_text}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <img src={img.image_url}
                  alt={img.alt_text}
                  // type={img.type}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
