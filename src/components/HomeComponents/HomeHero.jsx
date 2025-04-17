"use client"

import React, { useState, useEffect } from "react"

const HomeHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full h-screen overflow-hidden bg-[#F3E7CF]">
      {/* First background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: "url(/hero-bg-1.png)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Second background image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-10 transition-opacity duration-1000 delay-500"
        style={{
          backgroundImage: "url(/hero-bg-2.png)",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 
          className="text-5xl md:text-7xl font-tinbold text-[#333333] mb-8 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1000ms'
          }}
        >
          Empowering
          <br />
          Your Success
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/about"
            className="px-8 py-3 bg-white border border-[#333333] text-[#333333] hover:bg-white/70 transition-all flex items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease',
              transitionDelay: '1200ms'
            }}
          >
            Explore More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <a
            href="/services"
            className="px-8 py-3 bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] hover:bg-[#FFD966] transition-all flex items-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease',
              transitionDelay: '1400ms'
            }}
          >
            Our Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS for custom styling */}
      <style jsx>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default HomeHero

