"use client"

import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="relative bg-[#fffff] overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-40 pb-40">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-thinbold text-[#2A2A2A] mb-4">Services</h1>
        <div className="flex items-center text-[#2A2A2A]">
          <Link href="/" className="hover:text-[#2A2A2A] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-[#2A2A2A] transition-colors">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span>Media Agency</span>
        </div>
      </div>

      {/* Background Image with Linear Gradient */}
      <div className="absolute inset-0 z-0">
        <Image src="/media-bg.png" alt="About Us" fill className="object-cover object-center" priority />
      </div>

    </div>
  )
}

export default HeroSection

