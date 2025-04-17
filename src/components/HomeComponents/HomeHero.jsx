"use client"

import { useEffect, useState, useRef } from "react"

const HomeHero = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const [contentAnimationStarted, setContentAnimationStarted] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(scrollPosition / windowHeight, 1)

      setScrollProgress(progress)

      // Start content animation at 30% scroll
      if (progress >= 0.3 && !contentAnimationStarted) {
        setContentAnimationStarted(true)
      } else if (progress < 0.3 && contentAnimationStarted) {
        setContentAnimationStarted(false)
      }

      // Complete animation at 100% scroll
      if (progress >= 1 && !animationComplete) {
        setAnimationComplete(true)
      } else if (progress < 1 && animationComplete) {
        setAnimationComplete(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [contentAnimationStarted, animationComplete])

  // Hero section style - fixed position with transform when animation completes
  const heroStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "#F3E7CF",
    zIndex: 50,
    transform: animationComplete ? `translateY(-${window.innerHeight}px)` : "translateY(0)",
    transition: "transform 0.3s ease-out",
  }

  // Content animation styles
  const contentStyle = {
    opacity: contentAnimationStarted ? 1 : 0,
    transform: contentAnimationStarted ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
  }

  // Button animation styles with staggered delay
  const button1Style = {
    opacity: contentAnimationStarted ? 1 : 0,
    transform: contentAnimationStarted ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s",
  }

  const button2Style = {
    opacity: contentAnimationStarted ? 1 : 0,
    transform: contentAnimationStarted ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s",
  }

  return (
    <>
      <section ref={heroRef} className="w-full h-screen overflow-hidden" style={heroStyle}>
        {/* First background image - always visible at 100% opacity */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/hero-bg-1.png)",
            opacity: 1, // Keep at full opacity
          }}
        />

        {/* Second background image - appears on scroll */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-10 transition-opacity duration-300"
          style={{
            backgroundImage: "url(/hero-bg-2.png)",
            opacity: scrollProgress, // Fade in second background
          }}
        />

        {/* Content container */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-tinbold text-[#333333] mb-8" style={contentStyle}>
            Empowering
            <br />
            Your Success
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/about"
              className="px-8 py-3 bg-white border border-[#333333] text-[#333333] hover:bg-white/70 transition-all flex items-center"
              style={button1Style}
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
              style={button2Style}
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
      </section>

      {/* Spacer to allow scrolling - always present */}
      <div style={{ height: "100vh" }}></div>

      {/* CSS for custom styling */}
      <style jsx>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  )
}

export default HomeHero

