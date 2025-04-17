"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
const WhyUsFeatures = () => {
    return (
      <section className="bg-[#F3E7CF] pt-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with line */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl font-normal text-[#333333] whitespace-nowrap">Why Us</h2>
            <div className="h-[1px] bg-[#333333]/20 w-full"></div>
          </div>
  
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thinbold text-[#2A2A2A] leading-tight">
              A Vision Of Growth,
              <br />
              <span className="text-[#5A5A5A]">Clarity, & Opportunity</span>
            </h1>
          </div>
  
          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/whyUsImg.png"
                alt="Person looking at question mark"
                className="w-full h-auto rounded-sm"
              />
            </div>
  
            {/* Features list */}
            <div className="space-y-6">
              {["Tailored Solutions", "Expert Team", "Innovative Approach", "Expert Team", "Comprehensive Services"].map(
                (feature, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                    </div>
                    <span className="text-xl font-thinbold text-[#2A2A2A]">{feature}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Header Line Before Consultation Section */}
        <div className="h-[1px] bg-[#2A2A2A]/40 w-full my-24"></div>
        {/* Consultation Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-normal mb-6">Get Free Consultation!</h2>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FFCC33] text-[#333333] hover:bg-[#FFD966] transition-colors"
            >
              Contact Us Today
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="./world.png" // Replace with your image path
              alt="Consultation"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyUsFeatures
  
  