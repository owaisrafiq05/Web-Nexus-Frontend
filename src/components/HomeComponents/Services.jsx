"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const buttonRef = useRef(null);

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
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    // Heading animation
    tl.fromTo(
      headingRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      },
      0.3
    );

    // Service cards animation
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
      0.5
    );

    // Button animation
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      1.2
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
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex items-center gap-6 mb-12 whitespace-nowrap">
          <h2 ref={headerRef} className="text-lg font-normal text-[#2A2A2A]">
            Our Services
          </h2>
          <div className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Main heading */}
        <div ref={headingRef} className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            <span className="text-[#5A5A5A] block">Transform Your</span>
            <span className="text-[#2A2A2A] block">Business</span>
          </h1>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Service Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="p-6 md:p-8 relative overflow-hidden h-full bg-[#F5F0E8] text-[#333333] transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Digital Transformation</h3>
                <div className="text-[#5A5A5A]">Modern Solutions</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              Modernize your business with cutting-edge digital solutions that drive growth and efficiency.
            </p>
            <Link
              href="/services/digital"
              className="inline-flex items-center text-[#2A2A2A] hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Service Card 2 - Center Card with Black Background */}
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
                <h3 className="text-xl font-medium mb-1 group-hover:text-yellow-400 transition-colors duration-300">Cloud Solutions</h3>
                <div className="text-gray-300">Scalable Infrastructure</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words text-gray-200">
              Leverage the power of cloud computing to scale your operations and enhance collaboration.
            </p>
            <Link
              href="/services/cloud"
              className="inline-flex items-center text-white hover:text-yellow-400 font-medium transition-colors duration-300"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Service Card 3 */}
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
                <h3 className="text-xl font-medium mb-1 group-hover:text-green-600 transition-colors duration-300">Cybersecurity</h3>
                <div className="text-[#5A5A5A]">Secure Solutions</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              Protect your business with advanced security solutions and expert guidance.
            </p>
            <Link
              href="/services/security"
              className="inline-flex items-center text-[#2A2A2A] hover:text-green-600 font-medium transition-colors duration-300"
            >
              Learn More
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>
        </div>

        {/* View All Services button */}
        <div className="text-center">
          <Link
            ref={buttonRef}
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-[#333333] text-white rounded-xl hover:bg-[#444444] transition-colors"
          >
            Explore All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
