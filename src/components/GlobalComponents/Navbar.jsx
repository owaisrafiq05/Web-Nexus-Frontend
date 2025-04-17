"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export const AcmeLogo = () => {
  return (
    <div className="relative h-10 w-auto md:h-12">
      <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const overlayRef = useRef(null)
  const menuRef = useRef(null)
  const navRef = useRef(null)
  const linksRef = useRef([])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Animate nav items on load
  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" })

    gsap.fromTo(
      linksRef.current,
      { y: -10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      },
    )
  }, [])

  // Handle mobile menu animations
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" })
      gsap.fromTo(menuRef.current, { x: "100%", opacity: 0.5 }, { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" })
      gsap.fromTo(menuRef.current.querySelectorAll("a, button"), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.2 })
    } else if (overlayRef.current && menuRef.current) {
      document.body.style.overflow = "auto"
      gsap.to(menuRef.current.querySelectorAll("a, button"), { y: 10, opacity: 0, duration: 0.2, stagger: 0.03 })
      gsap.to(menuRef.current, { x: "100%", opacity: 0.5, duration: 0.4, ease: "power3.in" })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" })
    }
  }, [isMenuOpen])

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el)
    }
  }

  const handleLinkHover = (e) => {
    gsap.to(e.target, { y: -2, duration: 0.2, ease: "power1.out" })
  }

  const handleLinkLeave = (e) => {
    gsap.to(e.target, { y: 0, duration: 0.2, ease: "power1.out" })
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "All Services", path: "/services" },
        { name: "Accounting & Bookkeeping", path: "/services/accounting" },
        { name: "Inventory Management Services", path: "/services/inventory" },
        { name: "Media Agency", path: "/services/media" },
        { name: "Back Office & Operational Services", path: "/services/operations" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
  ]

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 transition-all duration-300 z-100 ${scrolled ? "bg-white py-2" : "bg-transparent py-4"}`}
      >
        <div className="flex items-center">
          <Link href="/">
            <AcmeLogo />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`text-gray-800 hover:text-yellow-500 transition-colors relative overflow-hidden group flex items-center font-normal`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} />
                  </button>
                  {activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 z-20 w-72">
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className="block px-4 py-3 text-gray-800 hover:bg-yellow-50 hover:text-yellow-500 transition-colors border-b border-gray-100 last:border-0"
                          onClick={() => {
                            setActiveDropdown(null)
                            setIsMenuOpen(false) // Close mobile menu on sub-item click
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.path}
                  ref={addToRefs}
                  onMouseEnter={handleLinkHover}
                  onMouseLeave={handleLinkLeave}
                  className={`text-gray-800 hover:text-yellow-500 transition-colors relative overflow-hidden group ${scrolled ? "py-1" : "py-2"}`}
                  onClick={() => setIsMenuOpen(false)} // Close mobile menu on link click
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-center items-center" ref={addToRefs}>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-black px-5 py-2 rounded-md hover:brightness-110 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            Get Consultation Today
            <span className="text-2xl text-center">›</span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fixed z-index to be higher than navbar but lower than menu */}
      {isMenuOpen && (
        <div 
          ref={overlayRef} 
          className="fixed inset-0 bg-white z-[100]" 
          onClick={() => setIsMenuOpen(false)} 
        />
      )}

      {/* Mobile Menu - Increased z-index to be higher than overlay */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-[200] shadow-xl flex flex-col p-6 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <AcmeLogo />
          </Link>
          <button
            onClick={() => {
              setIsMenuOpen(false); // Close the menu
            }}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-0 mt-4 bg-white w-full">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100 w-full">
              {item.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-gray-800 hover:text-yellow-500 transition-colors relative overflow-hidden group flex items-center font-normal py-3 px-4 text-lg w-full justify-between"
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`bg-white overflow-hidden transition-all duration-300 w-full ${activeDropdown === index ? "max-h-96" : "max-h-0"}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.path}
                        className="block py-3 px-8 text-gray-700 hover:text-yellow-500 border-t border-gray-50 text-base w-full"
                        onClick={() => {
                          setActiveDropdown(null)
                          setIsMenuOpen(false) // Close mobile menu on sub-item click
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.path}
                  className="text-gray-800 hover:text-yellow-500 py-3 px-4 text-lg flex justify-between items-center w-full"
                  onClick={() => setIsMenuOpen(false)} // Close mobile menu on link click
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <a
            href="/contact"
            className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-black px-5 py-2 rounded-md hover:brightness-110 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-full justify-center"
            onClick={() => setIsMenuOpen(false)} // Close mobile menu on contact link click
          >
            Get Consultation Today
          </a>
        </div>
      </div>
    </>
  )
}