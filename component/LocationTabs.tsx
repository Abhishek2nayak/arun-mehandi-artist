"use client"
import { useState } from "react";

type Location = {
    name: string;
    details: string;
    mapEmbed: string; // Google Maps iframe URL
};

type LocationTabsProps = {
    locations: Location[];
};

const LocationTabs: React.FC<LocationTabsProps> = ({ locations }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col md:flex-row   rounded-lg overflow-hidden ">
            {/* Tabs (Location Names) */}
            <div className="w-full w-[300px] bg-darkBrown p-4">
                {locations.map((location, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`block w-full text-left px-4 py-2 rounded-lg mb-2 ${index === activeIndex
                            ? "bg-yellow-500 text-white font-bold shadow-md"
                            : "bg-yellow-100 text-gray-800"
                            }`}
                    >
                        {location.name}
                    </button>
                ))}
            </div>

            {/* Location Details */}
            <div className="w-full md:w-2/3 p-6 bg-primaryBg">
                <h2 className="text-lg font-semibold text-lightBrown mb-4">
                    {locations[activeIndex].name}
                </h2>
                <p className="text-darkBrown mb-4">{locations[activeIndex].details}</p>

                {/* Google Maps Embed */}
                {/* <div className="relative overflow-hidden bg-red-300 rounded-lg border ">
                    <iframe
                        src={locations[activeIndex].mapEmbed}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg "
                    /> */}
                {/* </div> */}
            </div>
        </div>
    );
};


export default LocationTabs;