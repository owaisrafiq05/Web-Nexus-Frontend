"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CoreValues = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center center",
        toggleActions: "play none none none",
      },
    });

    // Header animation
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0
    );

    // Title and subtitle animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.3
    );
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.5
    );

    // Cards animation
    tl.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      },
      0.8
    );

    // Hover animations for cards
    cardsRef.current.forEach((card) => {
      if (card) {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -15,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();

      cardsRef.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mouseenter", () => {});
          card.removeEventListener("mouseleave", () => {});
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#2A2A2A] py-24 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with lines */}
        <div ref={headerRef} className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] bg-white flex-1 opacity-20"></div>
          <h2 className="text-xl font-normal whitespace-nowrap">Core Values</h2>
          <div className="h-[1px] bg-white flex-1 opacity-20"></div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            <span ref={titleRef} className="text-white block">Integrity. Excellence.</span>
            <span ref={subtitleRef} className="text-[#F3E7CF] block">Growth. Always.</span>
          </h1>
        </div>

        {/* Values grid - centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Integrity Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#F5F0E8] text-[#333333] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Integrity</h3>
                <div className="text-[#5A5A5A]">Honesty & Transparency</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              We uphold the highest standards of honesty and transparency in every interaction, building trust through consistent ethical practices.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Innovation Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#333333] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-yellow-400 transition-colors duration-300">Innovation</h3>
                <div className="text-gray-300">Forward Thinking</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words text-gray-200">
              We embrace change and continuously seek better ways to serve our clients, driving progress through creative solutions.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Excellence Card */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#F5F0E8] text-[#333333] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-green-600 transition-colors duration-300">Excellence</h3>
                <div className="text-[#5A5A5A]">Quality First</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              We are committed to delivering top-quality services that exceed expectations, setting new standards in our industry.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>
        </div>

        {/* Second row - centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {/* Collaboration Card */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#333333] text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-purple-400 transition-colors duration-300">Collaboration</h3>
                <div className="text-gray-300">Teamwork & Partnership</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words text-gray-200">
              We believe in partnering with our clients to achieve shared success, fostering strong relationships through open communication.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Customer-Centric Card */}
          <div
            ref={(el) => (cardsRef.current[4] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#F5F0E8] text-[#333333] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="00 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-red-600 transition-colors duration-300">Customer-Centric</h3>
                <div className="text-[#5A5A5A]">Client Focus</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              We put our clients at the center of everything we do, ensuring their needs and success drive our decisions and actions.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
