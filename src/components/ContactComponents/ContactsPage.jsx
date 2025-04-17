"use client";

import { useState } from "react";
import { toast, Toaster } from "sonner";

// Success message component
const SuccessMessage = ({ onReset }) => {
  return (
    <div className="bg-[#F8F9FA] border border-green-400 rounded-lg p-6 my-8 text-center">
      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl text-[#2C2C2C] font-thinbold mb-2">
        Thank You For Your Message!
      </h3>
      <p className="text-[#5A5A5A] mb-4">
        We have received your inquiry and will get back to you as soon as
        possible.
      </p>
      <button
        onClick={onReset}
        className="text-sm bg-[#FFC200] text-[#333333] px-4 py-2 rounded hover:brightness-110 transition-all"
      >
        Send Another Message
      </button>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        setSubmitSuccess(true);
      } else {
        toast.error(
          data.message || "Failed to send message. Please try again later."
        );
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-t from-[#F3E7CF] via-[#F3E7CF]/[0.1] to-[#FFFFFF]">
      {/* Toaster component for notifications */}
      <Toaster position="top-center" richColors />

      {/* Header with lines */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="h-[1px] bg-[#333333] flex-1 opacity-20"></div>
        <h2 className="text-[#2A2A2A] text-xl font-thinbold whitespace-nowrap">
          Contact Us
        </h2>
        <div className="h-[1px] bg-[#333333] flex-1 opacity-20"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-thinbold text-[#5A5A5A] leading-tight mb-4">
            We're Thrilled To
            <br />
            <span className="text-[#2C2C2C]">Connect With You</span>
          </h1>
          <p className="text-[#5A5A5A]">Get In Touch With Us Today.</p>
        </div>

        {submitSuccess ? (
          <SuccessMessage onReset={resetForm} />
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[#5A5A5A] mb-2 font-thinbold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 border border-black focus:outline-none focus:ring-1 focus:ring-[#FFCC33] placeholder-[#5A5A5A]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#5A5A5A] mb-2 font-thinbold"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 border border-black focus:outline-none focus:ring-1 focus:ring-[#FFCC33] placeholder-[#5A5A5A]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-[#5A5A5A] mb-2 font-thinbold"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone"
                className="w-full p-3 border border-black focus:outline-none focus:ring-1 focus:ring-[#FFCC33] placeholder-[#5A5A5A]"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-[#5A5A5A] mb-2 font-thinbold"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="w-full p-3 border border-black focus:outline-none focus:ring-1 focus:ring-[#FFCC33] placeholder-[#5A5A5A]"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-[#5A5A5A] font-thinbold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={6}
                className="w-full p-3 border border-black focus:outline-none focus:ring-1 focus:ring-[#FFCC33] placeholder-[#5A5A5A]"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-6 py-3 flex items-center gap-2 hover:bg-[#FFD966] transition-colors ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
