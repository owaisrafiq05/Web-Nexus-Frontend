const MediaServices = () => {
    return (
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading and description */}
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-thinbold leading-tight mb-4">
              <span className="text-[#2A2A2A]">Creative Solutions</span>
              <br />
              <span className="text-[#5A5A5A]">Measurable Results</span>
            </h1>
            <p className="text-[#666666] leading-relaxed">
              Take Your Digital Presence To The Next Level With Beyond The Books. Our Media Agency Services Are Designed To Create Impactful Campaigns And Engaging Content For Your Brand.
            </p>
          </div>
  
          {/* Main image */}
          <div className="mb-12">
            <img
              src="/media-card.png"
              alt="Media services"
              className="w-full h-auto max-w-3xl"
            />
          </div>
  
          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {/* Service 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Digital Marketing:</h3>
                <p className="text-[#666666]">Campaign Creation And Management To Drive Online Reach.</p>
              </div>
            </div>
  
            {/* Service 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">SEO & SEM:</h3>
                <p className="text-[#666666]">Improve Search Visibility And Launch Targeted Ads.</p>
              </div>
            </div>
  
            {/* Service 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Website Designing And Development:</h3>
                <p className="text-[#666666]">Custom website solutions with modern design and functionality.</p>
              </div>
            </div>
  
            {/* Service 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Social Media Management:</h3>
                <p className="text-[#666666]">Strategic content creation and community engagement across platforms.</p>
              </div>
            </div>
  
            {/* Service 5 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">AI Services:</h3>
                <p className="text-[#666666]">Intelligent automation and AI-powered business solutions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Mobile Applications:</h3>
                <p className="text-[#666666]">Native and cross-platform app development for iOS and Android.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Content writing:</h3>
                <p className="text-[#666666]">SEO-optimized and engaging content for all platforms.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Logo designing:</h3>
                <p className="text-[#666666]">Creative and memorable brand identity design solutions.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div>
                  <img src="/tick.png" alt="Checkmark" className="w-12 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333] mb-1">Graphic and banner designing:</h3>
                <p className="text-[#666666]">Eye-catching visual designs for digital and print media.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    )
  }
  
  export default MediaServices
  
  