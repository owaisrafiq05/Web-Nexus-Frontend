"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const WhoWeAre = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = sectionRef.current;
    const heading = headingRef.current;
    const content = contentRef.current;

    // Main section animation
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Heading animation
    gsap.fromTo(
      heading,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
        },
      }
    );

    // Content animation
    gsap.fromTo(
      content,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#F3E7CF] to-[#F8F8F8] py-24 pt-40 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#FFE5B4] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#FFD700] rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header with line */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-[#2A2A2A] text-2xl font-medium tracking-wider">
            Who We Are
          </h2>
          <div className="h-[2px] bg-gradient-to-r from-[#333333] to-transparent w-full opacity-30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div ref={contentRef} className="space-y-8">
            {/* Main heading */}
            <h1 
              ref={headingRef}
              className="text-[#2A2A2A] text-4xl md:text-5xl lg:text-6xl font-medium leading-tight"
            >
              <span className="text-[#5A5A5A] block mb-4">At Nexus Solutions</span>
              <span className="bg-gradient-to-r from-[#2A2A2A] to-[#5A5A5A] bg-clip-text text-transparent">
                Empowering Your Business Journey
              </span>
            </h1>

            {/* Description text */}
            <p className="text-[#5A5A5A] text-lg leading-relaxed">
              We are a dynamic team of professionals dedicated to transforming businesses 
              through innovative solutions and strategic partnerships. Our mission is to 
              help companies navigate the complexities of modern business with confidence 
              and clarity. Through our integrated approach combining technology, expertise, 
              and personalized service, we enable organizations to achieve their full potential 
              and drive sustainable growth in today's competitive landscape.
            </p>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/50 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#2A2A2A] font-medium mb-2">Innovative Solutions</h3>
                <p className="text-[#5A5A5A] text-sm">Cutting-edge approaches to business challenges</p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#2A2A2A] font-medium mb-2">Strategic Partnership</h3>
                <p className="text-[#5A5A5A] text-sm">Your success is our priority</p>
              </div>
            </div>
          </div>

          {/* Right content - Placeholder for image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5B4] to-[#FFD700] opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#5A5A5A] text-lg">[Your Business Image Here]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
