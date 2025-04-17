const InventoryServices = () => {
    return (
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading and description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-thinbold leading-tight mb-4">
              <span className="text-[#2A2A2A]">Smart Inventory</span>
              <br />
              <span className="text-[#5A5A5A]">Smarter Business</span>
            </h1>
            <p className="text-[#666666] leading-relaxed">
              Optimize Your Inventory Processes With Beyond The Books. We Provide Tailored Solutions To Manage Stock Levels, Forecast Demand, And Streamline Your Supply Chain.
            </p>
          </div>
  
          {/* Main image */}
          <div className="mb-12">
            <img
              src="/inventory-card.png"
              alt="Accounting and financial services"
              className="w-full h-auto max-w-3xl"
            />
          </div>
  
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Demand Forecasting:</h3>
                <p className="text-[#666666]">Predict Future Needs To Minimize Waste And Maximize Profit.</p>
              </div>
            </div>
  
            {/* Service 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Assortment Planning:</h3>
                <p className="text-[#666666]">Optimize Your Product Mix For Efficiency And Profitability.</p>
              </div>
            </div>
  
            {/* Service 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Reporting & Analysis:</h3>
                <p className="text-[#666666]">Detailed Inventory Performance Insights.</p>
              </div>
            </div>

            {/* New Service - Supply and Demand Planning */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Supply and Demand Planning:</h3>
                <p className="text-[#666666]">Strategic planning to balance supply with market demand.</p>
              </div>
            </div>

            {/* New Service - Merchandising */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Merchandising:</h3>
                <p className="text-[#666666]">Effective product placement and display strategies.</p>
              </div>
            </div>

            {/* New Service - Stock Outs Management */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Stock Outs Management:</h3>
                <p className="text-[#666666]">Prevent and manage inventory shortages effectively.</p>
              </div>
            </div>

            {/* New Service - Vendor Management */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Vendor Management:</h3>
                <p className="text-[#666666]">Optimize supplier relationships and procurement processes.</p>
              </div>
            </div>

            {/* New Service - Operational Efficiency */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Operational Efficiency:</h3>
                <p className="text-[#666666]">Streamline processes to reduce costs and improve performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default InventoryServices
  
  