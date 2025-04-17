"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { fetchBlogs } from "../../utils/contentful";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Refs for animation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const blogCardsRef = useRef([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getBlogs();
  }, []);

  // Animation effects
  useEffect(() => {
    if (typeof window === "undefined" || isLoading) return;

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

    // Blog cards staggered animation
    tl.fromTo(
      blogCardsRef.current,
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
      0.7
    );

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [blogs, isLoading]);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header with line */}
        <div ref={headerRef} className="flex items-center gap-6 mb-12">
          <h2 className="text-xl font-semibold text-[#2A2A2A] whitespace-nowrap">Our Blog</h2>
          <div className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Title and description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#333333] leading-tight mb-4">
              Insights &
              <br />
              Knowledge
            </h1>
          </div>
          <div>
            <p ref={subtitleRef} className="text-[#666666] leading-relaxed text-xl">
              Explore our blog for the latest industry trends, expert insights, and practical tips to help grow your business.
            </p>
          </div>
        </div>

        {/* Blog posts grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-400">Loading blog posts...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-400">No blog posts available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                <div
                  ref={(el) => (blogCardsRef.current[index] = el)}
                  className="group bg-[#F9F9F9] shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#333333] text-white px-3 py-1 text-sm">
                      {formatDate(blog.createdAt)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#2A2A2A] mb-3 group-hover:text-[#FFC200] transition-colors">
                      {blog.title}
                    </h3>
                    <div className="text-[#666666] mb-4 line-clamp-3">
                      {/* This is a simplified approach for the preview - in the actual implementation we would need to parse the rich text */}
                      {typeof blog.description === 'string' 
                        ? blog.description 
                        : "Click to read more about this blog post"}
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 rounded-md flex items-center gap-2 transition-transform group-hover:translate-x-2">
                        Read More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 