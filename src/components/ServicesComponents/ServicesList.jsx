import Link from 'next/link'

const ServicesList = () => {
    return (
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header with line */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl font-normal text-[#2A2A2A] whitespace-nowrap">What We Offer</h2>
            <div className="h-[1px] bg-[#333333]/20 w-full"></div>
          </div>
  
          {/* Main heading and description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-normal text-[#333333] leading-tight mb-4">
                Explore Our
                <br />
                Digital Services
              </h1>
            </div>
            <div>
              <p className="text-[#666666] leading-relaxed text-xl">
                We Deliver Tailored Financial Solutions—Strategic Analysis, Process Optimization, And Business Advisory—To
                Drive Clarity, Efficiency, And Growth For Your Business.
              </p>
            </div>
          </div>
  
          {/* Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                <div>
                  <h3 className="text-4xl font-thinbold text-[#2A2A2A] mb-4">
                    Accounting
                    <br />& Bookkeeping
                  </h3>
                  <Link href="/services/accounting">
                    <button className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 flex items-center gap-2 mt-4 hover:bg-[#FFD966] transition-colors">
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
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/s1.png" alt="Accounting & Bookkeeping" className="w-full h-auto" />
                </div>
              </div>
              <div className="h-[1px] bg-[#2A2A2A] w-full"></div>
            </div>
  
            {/* Service 2 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                <div>
                  <h3 className="text-4xl font-thinbold text-[#2A2A2A] mb-4">
                    Inventory
                    <br />
                    Management Services
                  </h3>
                  <Link href="/services/inventory">
                    <button className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 flex items-center gap-2 mt-4 hover:bg-[#FFD966] transition-colors">
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
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/s2.png" alt="Inventory Management" className="w-full h-auto" />
                </div>
              </div>
              <div className="h-[1px] bg-[#2A2A2A] w-full"></div>
            </div>
  
            {/* Service 3 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                <div>
                  <h3 className="text-4xl font-thinbold text-[#2A2A2A] mb-4">
                    Media Agency
                    <br />
                    Services
                  </h3>
                  <Link href="/services/media">
                    <button className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 flex items-center gap-2 mt-4 hover:bg-[#FFD966] transition-colors">
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
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/s3.png" alt="Media Agency Services" className="w-full h-auto" />
                </div>
              </div>
              <div className="h-[1px] bg-[#2A2A2A] w-full"></div>
            </div>
  
            {/* Service 4 */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
                <div>
                  <h3 className="text-4xl font-thinbold text-[#2A2A2A] mb-4">
                    Back Office &<br />
                    Operational Services
                  </h3>
                  <Link href="/services/operations">
                    <button className="bg-gradient-to-r from-[#FFC200] to-[#FFF4D0] text-[#333333] px-4 py-2 flex items-center gap-2 mt-4 hover:bg-[#FFD966] transition-colors">
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
                    </button>
                  </Link>
                </div>
                <div>
                  <img src="/s4.png" alt="Back Office & Operational Services" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ServicesList
  
  