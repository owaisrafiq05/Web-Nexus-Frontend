"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronRight } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We provide a range of services including bookkeeping, tax preparation, and financial consulting.",
  },
  {
    id: 2,
    question: "How can I get started?",
    answer: "You can get started by contacting us through our website or scheduling a consultation.",
  },
  {
    id: 3,
    question: "What are your business hours?",
    answer: "Our business hours are Monday to Friday, 9 AM to 5 PM.",
  },
  {
    id: 4,
    question: "Do you offer remote services?",
    answer: "Yes, we offer remote services to clients across the globe.",
  },
  {
    id: 5,
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on the services you require. Please contact us for a detailed quote.",
  },
  {
    id: 6,
    question: "How do you ensure data security?",
    answer: "We use industry-standard security measures to protect your data, including encryption and secure access protocols.",
  },
  {
    id: 7,
    question: "Can you help with financial planning?",
    answer: "Absolutely! We offer comprehensive financial planning services tailored to your needs.",
  },
  {
    id: 8,
    question: "What makes your services unique?",
    answer: "Our personalized approach and commitment to client success set us apart from the competition.",
  },
  {
    id: 9,
    question: "How can I contact support?",
    answer: "You can reach our support team via email or phone, and we will respond promptly.",
  },
  {
    id: 10,
    question: "Do you have any client testimonials?",
    answer: "Yes, we have numerous client testimonials available on our website that highlight our success stories.",
  },
]

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null)

  // Refs for animation targets
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const linesRef = useRef([])
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const faqItemsRef = useRef([])
  const dividerRef = useRef(null)
  const consultationTextRef = useRef(null)
  const consultationButtonRef = useRef(null)
  const worldImageRef = useRef(null)

  // Animation for opening/closing FAQ items
  useEffect(() => {
    if (openQuestion !== null) {
      const answerElement = document.querySelector(`#faq-answer-${openQuestion}`)
      if (answerElement) {
        gsap.fromTo(
          answerElement,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" },
        )
      }
    }
  }, [openQuestion])

  // Main animations
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "center center",
        toggleActions: "play none none none",
      },
    })

    // Header and lines animation
    tl.fromTo(
      linesRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 1, ease: "power2.inOut" },
      0,
    )
    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
      0.3,
    )

    // Title and subtitle animation
    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.5)
    tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.7)

    // FAQ items staggered animation
    tl.fromTo(
      faqItemsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      0.9,
    )

    // Divider line animation
    tl.fromTo(
      dividerRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 1, ease: "power2.inOut" },
      1.5,
    )

    // Consultation section animation
    tl.fromTo(
      consultationTextRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      1.7,
    )
    tl.fromTo(
      consultationButtonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      1.9,
    )
    tl.fromTo(
      worldImageRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
      1.7,
    )

    // Add floating animation to world image
    gsap.to(worldImageRef.current, {
      y: "10px",
      rotation: 2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()

      // Kill the floating animation
      gsap.killTweensOf(worldImageRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="pt-20 px-4 md:px-8 lg:px-16 bg-[#F3E7CF] relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#FFB800 2px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-12 justify-center">
          <div ref={(el) => (linesRef.current[0] = el)} className="h-[1px] bg-[#333333]/20 w-full"></div>
          <h2 ref={headerRef} className="text-lg font-normal text-[#333333] whitespace-nowrap">
            FAQ's
          </h2>
          <div ref={(el) => (linesRef.current[1] = el)} className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-normal mb-2">
            You Have A Question
          </h1>
          <p ref={subtitleRef} className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#666666]">
            We Have An Answer
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div key={faq.id} ref={(el) => (faqItemsRef.current[index] = el)} className="bg-[#333333] text-white">
              <button
                className="w-full p-4 flex justify-between items-center text-left"
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${openQuestion === faq.id ? "rotate-90" : ""}`}
                />
              </button>
              {openQuestion === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="p-4 pt-0 text-white/80 overflow-hidden">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Header Line Before Consultation Section */}
      <div ref={dividerRef} className="h-[1px] bg-[#2A2A2A]/40 w-full mb-8"></div>

      {/* Consultation Section */}
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div ref={consultationTextRef} className="md:w-1/2">
          <h2 className="text-4xl font-normal mb-6">Get Free Consultation!</h2>
          <Link
            ref={consultationButtonRef}
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#FFCC33] text-[#333333] hover:bg-[#FFD966] transition-colors"
          >
            Contact Us Today
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img ref={worldImageRef} src="./world.png" alt="Consultation" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  )
}

export default FAQSection

