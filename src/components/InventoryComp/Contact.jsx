"use client"

import React from 'react'
import { ChevronRight } from "lucide-react"
import Link from 'next/link'    
const Contact = () => {
    return (
        <div className="bg-[#F3E7CF] pt-10 pl-4 md:pl-8 lg:pl-16">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="md:w-1/2">
                    <h2 className="text-5xl font-normal text-[#2A2A2A] mb-6">Get Free Consultation!</h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] hover:bg-[#FFD966] transition-colors"
                    >
                        Contact Us Today
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img
                        src="/world.png" // Replace with your image path
                        alt="Consultation"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default Contact