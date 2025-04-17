"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { fetchTestimonials } from "../../utils/contentful"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const splideRef = useRef(null)

  // Refs for animation targets
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const lineRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const navButtonsRef = useRef(null)
  const slideRefs = useRef([])

  // Fetch testimonials from Contentful
  useEffect(() => {
    const getTestimonials = async () => {
      try {
        setIsLoading(true)
        const data = await fetchTestimonials()
        setTestimonials(data)
      } catch (error) {
        console.error("Error fetching testimonials:", error)
        // Fallback to default testimonials in case of error
        setTestimonials([
          {
            id: 1,
            name: "Alice Johnson",
            image: "/personimg.png",
            rating: 4,
            quality: "Great Service",
            text: "Working with this team has been a game changer for our business. Their attention to detail and commitment to excellence is unmatched. Highly recommend!",
            dark: true,
          },
          {
            id: 2,
            name: "Bob Smith, CEO of Tech Innovations",
            image: "/personimg.png",
            rating: 5,
            quality: "Outstanding Experience",
            text: "The expertise and support provided by this company have significantly improved our operational efficiency. Their solutions are innovative and effective.",
          },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    getTestimonials()
  }, [])

  const splideOptions = {
    type: "slide",
    perPage: 2,
    perMove: 1,
    gap: "2rem",
    padding: { right: "15%" },
    arrows: false,
    pagination: false,
    breakpoints: {
      1024: {
        perPage: 2,
        padding: { right: "10%" },
      },
      768: {
        perPage: 1,
        padding: { right: "20%" },
      },
      640: {
        perPage: 1,
        padding: { right: "0" },
      },
    },
  }

  // Main animations
  useEffect(() => {
    // Only run on client side and when testimonials are loaded
    if (typeof window === "undefined" || isLoading || testimonials.length === 0) return

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center center",
        toggleActions: "play none none none",
      },
    })

    // Header and line animation
    tl.fromTo(headerRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 0)
    tl.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1.2, ease: "power3.inOut" },
      0.2,
    )

    // Title and subtitle animation
    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5)
    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.7)

    // Navigation buttons animation
    tl.fromTo(
      navButtonsRef.current.children,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      },
      0.9,
    )

    // Initial slides animation
    const visibleSlides = document.querySelectorAll(".splide__slide.is-visible")
    tl.fromTo(
      visibleSlides,
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
      1.1,
    )

    // Add animation for slide change
    if (splideRef.current) {
      splideRef.current.splide.on("moved", () => {
        const activeSlides = document.querySelectorAll(".splide__slide.is-visible")

        gsap.fromTo(
          activeSlides,
          {
            opacity: 0.5,
            scale: 0.95,
            x: 30,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
        )
      })
    }

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()

      // Remove event listener if splide exists
      if (splideRef.current && splideRef.current.splide) {
        splideRef.current.splide.off("moved")
      }
    }
  }, [testimonials, isLoading])

  if (isLoading) {
    return (
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-12 whitespace-nowrap">
            <h2 className="text-lg font-normal text-[#2A2A2A]">Who We Are</h2>
            <div className="h-[1px] bg-[#333333]/20 w-full"></div>
          </div>
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-400">Loading testimonials...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with single line */}
        <div className="flex items-center gap-6 mb-12 whitespace-nowrap">
          <h2 ref={headerRef} className="text-lg font-normal text-[#2A2A2A]">
            Who We Are
          </h2>
          <div ref={lineRef} className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Title and Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
            <span ref={titleRef} className="text-[#5A5A5A] block">
              What Our
            </span>
            <span ref={subtitleRef} className="text-[#2A2A2A] block">
              Clients Are Saying
            </span>
          </h1>

          <div ref={navButtonsRef} className="flex gap-4">
            <button
              onClick={() => splideRef.current.splide.go("<")}
              className="w-12 h-12 border border-[#333333] flex items-center justify-center hover:bg-[#333333] hover:text-white transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => splideRef.current.splide.go(">")}
              className="w-12 h-12 bg-[#333333] text-white flex items-center justify-center hover:bg-[#444444] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        {testimonials.length > 0 ? (
          <Splide ref={splideRef} options={splideOptions}>
            {testimonials.map((testimonial, index) => (
              <SplideSlide key={testimonial.id}>
                <div
                  ref={(el) => (slideRefs.current[index] = el)}
                  className={`p-6 md:p-8 relative overflow-hidden h-full ${
                    testimonial.dark ? "bg-[#333333] text-white" : "bg-[#F5F0E8] text-[#333333]"
                  }`}
                >
                  {/* Profile and Rating */}
                  <div className="flex items-start gap-4 mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-medium mb-1">{testimonial.name}</h3>
                      <div className="flex items-center gap-2">
                        <span>{testimonial.quality}</span>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg leading-relaxed mb-12 break-words">{testimonial.text}</p>

                  {/* Diagonal cut */}
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 transform rotate-45 translate-x-8 translate-y-8 ${
                      testimonial.dark ? "bg-white" : "bg-white"
                    }`}
                  ></div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-400">No testimonials available</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default TestimonialsSection

