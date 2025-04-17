"use client";

import React from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const StickyIcon = () => {
  const handleCalendlyClick = () => {
    window.open('https://calendly.com/owais-webnexus/30min', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923363277876', '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2" style={{ zIndex: 1000 }}>
      <div
        onClick={handleCalendlyClick}
        className="bg-blue-500 text-white rounded-full p-3 shadow-lg cursor-pointer transition-transform transform hover:scale-105 relative group"
      >
        <IoCalendarNumberOutline className='text-4xl' />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Book Now
        </span>
      </div>

      <div
        onClick={handleWhatsAppClick}
        className="bg-green-500 text-white rounded-full p-3 shadow-lg cursor-pointer transition-transform transform hover:scale-105 relative group"
      >
        <FaWhatsapp className='text-4xl' />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat Now
        </span>
      </div>
    </div>
  );
};

export default StickyIcon; 