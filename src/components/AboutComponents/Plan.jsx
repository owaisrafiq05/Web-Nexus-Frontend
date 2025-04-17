"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Plan = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const lineRef = useRef(null);
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

    // Header and line animation
    tl.fromTo(
      headerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      0
    );
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
      0.2
    );

    // Title and subtitle animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.5
    );
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.7
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
      1.1
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
            Our Plans
          </h2>
          <div ref={lineRef} className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Main heading */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            <span ref={titleRef} className="text-[#5A5A5A] block">
              Strategic
            </span>
            <span ref={subtitleRef} className="text-[#2A2A2A] block">
              Business Solutions
            </span>
          </h1>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
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
                <h3 className="text-xl font-medium mb-1 group-hover:text-blue-600 transition-colors duration-300">Strategic Planning</h3>
                <div className="text-[#5A5A5A]">Future-Ready Solutions</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words">
              We develop comprehensive strategic plans that align with your business goals and market opportunities. Our approach combines data-driven insights with innovative thinking to create sustainable growth strategies.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>

          {/* Vision Card */}
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
                <h3 className="text-xl font-medium mb-1 group-hover:text-yellow-400 transition-colors duration-300">Growth Strategy</h3>
                <div className="text-gray-300">Scalable Solutions</div>
              </div>
            </div>
            <p className="text-lg leading-relaxed mb-12 break-words text-gray-200">
              Our growth strategies focus on scalability and sustainability. We help businesses identify new markets, optimize operations, and implement innovative solutions that drive long-term success.
            </p>
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-white transform rotate-45 translate-x-8 translate-y-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
