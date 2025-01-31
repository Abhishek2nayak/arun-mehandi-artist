import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Section from "../ui/SectionWrapper";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { API_Response, fetchGoogleSheetServicesData } from "@/app/getGoogleSheetData";

export const serviceTypes = ["bridal", "baby_shower", "engagement", "arabic", "traditional", "leg", "party"] as const;

type Category = typeof serviceTypes[number];

export type TService = {
  image: string;
  alt: string;
  title: string;
  price: string;
  description: string;
  type: Category;
};

// Function to convert Google Drive URL to a direct image link
const getGoogleDriveImageUrl = (url: string): string => {
  if (!url) return ""; // Handle empty URLs

  // Extract the file ID using regex
  const match = url.match(/(?:drive\.google\.com\/file\/d\/|drive\.google\.com\/open\?id=)([^\/]+)/);
  
  const data = match ? `https://drive.google.com/uc?export=view&id=${match[1]}` : url;
  console.log("Google Drive Image URL:", data); // Logs image URL for debugging
  return data;
};

export default function ServicesPage() {
  const [services, setServices] = useState<TService[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      setLoading(true);
      try {
        const data = await fetchGoogleSheetServicesData();
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

  return (
    <Section
      title="Discover Our Mehndi Services"
      description="Celebrate your special moments with our exquisite Mehndi designs. From traditional bridal patterns to modern artistic styles, we use 100% organic mehndi for a safe and stunning experience. Let us bring your vision to life."
      classes="py-10"
    >
      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading services...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.length > 0 ? (
            services.map((service, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md">
                <img
                  src={getGoogleDriveImageUrl(service.image)}
                
                 width="640" height="480"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
                <p className="text-lg font-bold mt-2">${service.price}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No services available.</p>
          )}
        </div>
      )}

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Link href="/mehandi-services">
          <Button classes="px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg" size="md">
            See all services
            <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </Section>
  );
}
