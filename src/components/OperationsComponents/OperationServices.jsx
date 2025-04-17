const OperationServices = () => {
    return (
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading and description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-thinbold leading-tight mb-4">
              <span className="text-[#2A2A2A]">Streamlining Operations</span>
              <br />
              <span className="text-[#5A5A5A]">Driving Success</span>
            </h1>
            <p className="text-[#666666] leading-relaxed">
              Beyond The Books Offers Comprehensive Back Office Support To Keep Your Business Operations Running Smoothly. Let Us Handle The Administrative Tasks While You Focus On Your Core Strengths.
            </p>
          </div>
  
          {/* Main image */}
          <div className="mb-12">
            <img
              src="/op-card.png" // Update this path if necessary
              alt="Operations support"
              className="w-full h-auto max-w-3xl"
            />
          </div>
  
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* New Service - Training and Development */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Training and Development:</h3>
                <p className="text-[#666666]">Comprehensive employee training programs and skill development.</p>
              </div>
            </div>
  
            {/* Existing services */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Administrative Support:</h3>
                <p className="text-[#666666]">Email Management, Scheduling, And Documentation.</p>
              </div>
            </div>
  
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">HR Support:</h3>
                <p className="text-[#666666]">Recruitment, Onboarding, And Compliance Management.</p>
              </div>
            </div>
  
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Operations Support:</h3>
                <p className="text-[#666666]">Streamline Processes And Improve Efficiency.</p>
              </div>
            </div>
  
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Customer Support:</h3>
                <p className="text-[#666666]">Dedicated Support To Enhance Customer Satisfaction.</p>
              </div>
            </div>
  
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Compliance & Legal Support:</h3>
                <p className="text-[#666666]">Ensure Regulatory Compliance With Expert Guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default OperationServices 