const AccountingServices = () => {
    return (
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading and description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-thinbold leading-tight mb-4">
              <span className="text-[#2A2A2A]">Beyond Numbers,</span>
              <br />
              <span className="text-[#5A5A5A]">Beyond Expectations</span>
            </h1>
            <p className="text-[#666666] leading-relaxed">
              At Beyond The Books, Our Accounting And Bookkeeping Services Provide Businesses With Accurate Financial
              Management, Compliance, And Strategic Planning. From Tax Filing To Financial Reporting, We Ensure That Your
              Finances Are In Expert Hands.
            </p>
          </div>
  
          {/* Main image */}
          <div className="mb-12">
            <img
              src="/acc-card.png"
              alt="Accounting and financial services"
              className="w-full h-auto max-w-3xl"
            />
          </div>
  
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

            {/* Service 6 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Bookkeeping Services:</h3>
                <p className="text-[#666666]">Daily, Weekly, And Monthly Transaction Recording And Reconciliation.</p>
              </div>
            </div>

            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Tax Services:</h3>
                <p className="text-[#666666]">GST/PST Filing, Corporate Tax Returns (T2), T4s.</p>
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
                <h3 className="text-lg font-bold text-[#333333] mb-1">HR & Payroll:</h3>
                <p className="text-[#666666]">Comprehensive Payroll Processing And Employee Management.</p>
              </div>
            </div>
  
            {/* Service 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Financial Planning:</h3>
                <p className="text-[#666666]">Cash Flow & Budget Projections, Business Plans.</p>
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
                <h3 className="text-lg font-bold text-[#333333] mb-1">Reporting & Dashboards:</h3>
                <p className="text-[#666666]">Real-Time Insights And Detailed Financial Reports.</p>
              </div>
            </div>
  
            {/* Service 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div >
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Virtual CFO:</h3>
                <p className="text-[#666666]">Strategic Financial Guidance To Drive Business Growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AccountingServices
  
  