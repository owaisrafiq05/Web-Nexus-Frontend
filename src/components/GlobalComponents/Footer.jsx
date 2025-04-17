const Footer = () => {
    return (
        <footer className="relative w-full bg-[#2A2A2A]">
            {/* Background Image - Fixed path and styling */}
            <div
                className="absolute inset-0 hidden lg:block"
                style={{
                    backgroundImage: "url('/footerbg.png')",
                    backgroundColor: "#2A2A2A",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top right",
                    backgroundSize: "auto",
                    width: "100%",
                    height: "100%",
                    opacity: 1,
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 pb-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <img src="/logo.png" alt="Web Nexus" className="h-16 mb-6" />
                        <p className="text-white/80 text-sm leading-relaxed lg:w-[60%]">
                            We are committed to staying ahead of the curve and using the most advanced methodologies and solutions
                            available.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Quick Links */} 
                        <div>
                            <h3 className="text-white text-lg mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {["Home", "About", "Services", "Blogs", "Contact"].map((link) => (
                                    <li key={link}>
                                        <a href={`/${link.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-white text-lg mb-6">Follow Us</h3>
                            <ul className="space-y-3">
                                {[
                                    { name: "Facebook", url: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61573159183320" },
                                    { name: "LinkedIn", url: "https://www.linkedin.com/company/webNexus/?viewAsMember=true" },
                                    { name: "Instagram", url: "https://www.instagram.com/webNexus/" },
                                    { name: "Youtube", url: "https://www.youtube.com/@WebNexus" },
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a href={social.url} className="text-white/80 hover:text-white transition-colors">
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-white text-lg mb-6">Contact</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <svg
                                        className="w-5 h-5 text-white/80 mt-1 shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-white/80">Karachi, Pakistan</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        className="w-5 h-5 text-white/80 mt-1 shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-white/80">info@webnexus.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/20 mb-8"></div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-white/60 text-sm">Web Nexus Copyrights © 2025. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

