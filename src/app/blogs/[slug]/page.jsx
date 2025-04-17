"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { fetchBlogById } from "../../../utils/contentful";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Format date function
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export default function BlogPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Refs for animation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        setIsLoading(true);
        if (!params.slug) {
          router.push('/blogs');
          return;
        }
        
        const data = await fetchBlogById(params.slug);
        if (!data) {
          router.push('/blogs');
          return;
        }
        
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        router.push('/blogs');
      } finally {
        setIsLoading(false);
      }
    };

    getBlog();
  }, [params.slug, router]);

  // Rich text renderer options
  const richTextOptions = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text) => <code className="bg-gray-100 text-black p-1 rounded">{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-6 text-[#666666] leading-relaxed">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1 className="text-4xl font-bold mb-6 text-[#333333]">{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-3xl font-bold mb-5 text-[#333333]">{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-2xl font-bold mb-4 text-[#333333]">{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4 className="text-xl font-bold mb-4 text-[#333333]">{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5 className="text-lg font-bold mb-3 text-[#333333]">{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6 className="text-base font-bold mb-3 text-[#333333]">{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-6 mb-6 text-[#666666]">{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-6 mb-6 text-[#666666]">{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li className="mb-2">{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="border-l-4 border-[#FFC200] pl-4 py-2 mb-6 italic text-[#666666]">{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr className="my-8 border-t border-gray-300" />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { data: { target: { fields } } } = node;
        const { file, title } = fields;
        const url = file?.url || '';
        return (
          <div className="my-8">
            <img className="w-full h-auto rounded" src={url ? `https:${url}` : ''} alt={title || ''} />
          </div>
        );
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const { data: { uri } } = node;
        return (
          <a 
            href={uri} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#FFC200] hover:underline"
          >
            {children}
          </a>
        );
      },
    },
  };

  // Animation effects
  useEffect(() => {
    if (typeof window === "undefined" || isLoading || !blog) return;

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

    // Image animation
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      0.3
    );

    // Title and date animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      0.6
    );
    tl.fromTo(
      dateRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power3.out" },
      0.8
    );

    // Content animation
    tl.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      1
    );

    // Cleanup
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [blog, isLoading]);

  if (isLoading) {
    return (
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center h-64">
            <p className="text-xl text-gray-400">Loading blog post...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col justify-center items-center h-64">
            <p className="text-xl text-gray-400 mb-4">Blog post not found</p>
            <Link href="/blogs">
              <div className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 rounded-md hover:shadow-lg transition-shadow">
                Return to Blogs
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div ref={headerRef} className="flex items-center gap-6 mb-12">
          <Link href="/blogs">
            <div className="flex items-center text-[#2A2A2A] hover:text-[#FFC200] transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Blogs
            </div>
          </Link>
          <div className="h-[1px] bg-[#333333]/20 w-full"></div>
        </div>

        {/* Blog featured image */}
        <div ref={imageRef} className="mb-8 rounded-lg overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Blog header */}
        <div className="mb-8">
          <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#2A2A2A] leading-tight mb-4">
            {blog.title}
          </h1>
          <div ref={dateRef} className="flex items-center text-[#666666]">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>

        {/* Blog content */}
        <div ref={contentRef} className="prose max-w-none">
          {blog.description && typeof blog.description === 'object' 
            ? documentToReactComponents(blog.description, richTextOptions)
            : <p className="text-[#666666] leading-relaxed">{blog.description || 'No content available'}</p>
          }
        </div>

        {/* Share buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-[#2A2A2A] mb-4">Share this post</h3>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-100 text-[#333333] flex items-center justify-center hover:bg-[#FFC200] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-[#333333] flex items-center justify-center hover:bg-[#FFC200] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-[#333333] flex items-center justify-center hover:bg-[#FFC200] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-100 text-[#333333] flex items-center justify-center hover:bg-[#FFC200] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 