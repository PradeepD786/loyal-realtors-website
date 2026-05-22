export default function LoyalRealtorsWebsite() {
  const services = [
    {
      title: 'Residential Properties',
      desc: 'Premium apartments, villas and independent homes in prime Bangalore locations.'
    },
    {
      title: 'Commercial Properties',
      desc: 'Office spaces, showrooms and commercial investments with high ROI potential.'
    },
    {
      title: 'Industrial Properties',
      desc: 'Warehouses, factories and industrial sheds for scalable business operations.'
    },
    {
      title: 'Land & Plots',
      desc: 'DTCP and BDA approved plots for residential and commercial developments.'
    },
    {
      title: 'Property Consultation',
      desc: 'End-to-end expert guidance for buying, selling and investment decisions.'
    },
    {
      title: 'Property Management',
      desc: 'Complete property maintenance and tenant management solutions.'
    },
    {
      title: 'Legal & Financial Support',
      desc: 'Documentation verification, legal assistance and financial support services.'
    },
    {
      title: 'Interior & Architecture Assistance',
      desc: 'Interior planning, architecture consultation and renovation guidance.'
    },
    {
      title: 'Loan Support Assistance',
      desc: 'Home loan guidance, eligibility checks and documentation support.'
    }
  ]

  const properties = [
    {
      title: 'Luxury Villas',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop',
      type: 'Villa',
      price: '₹4.5 Cr',
      location: 'Hebbal, Bangalore'
    },
    {
      title: 'Commercial Spaces',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop',
      type: 'Commercial',
      price: '₹8 Cr',
      location: 'MG Road, Bangalore'
    },
    {
      title: 'Premium Apartments',
      image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400&auto=format&fit=crop',
      type: 'Apartment',
      price: '₹1.8 Cr',
      location: 'Yelahanka, Bangalore'
    },
    {
      title: 'Industrial Warehouse',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop',
      type: 'Industrial',
      price: '₹12 Cr',
      location: 'Peenya Industrial Area'
    }
  ]

  const blogs = [
    {
      title: 'Top Real Estate Investment Locations in Bangalore 2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'How to Verify Property Documents Before Buying',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1400&auto=format&fit=crop'
    },
    {
      title: 'Luxury Villas vs Apartments: Which is Better?',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1400&auto=format&fit=crop'
    }
  ]

  return (
    <div className="bg-white text-gray-900 font-sans">
      <header className="bg-[#062d22] text-white sticky top-0 z-50 border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center text-black font-bold text-xl shadow-lg">
              LR
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wide">LOYAL REALTORS</h1>
              <p className="text-yellow-400 text-sm tracking-widest">
                Rooted in Trust. Driven by Loyalty.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-400 transition">Home</a>
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#properties" className="hover:text-yellow-400 transition">Properties</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </nav>

          <a
            href="https://wa.me/919743304860"
            className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-semibold transition"
          >
            Contact Now
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Property"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#041c15]/95 via-[#041c15]/70 to-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-5 py-2 rounded-full border border-yellow-500 text-yellow-400 text-sm tracking-widest mb-6">
              Bangalore Premium Real Estate Consultants
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight text-white mb-8">
              Your Trusted
              <span className="block text-yellow-400">Real Estate Partner</span>
            </h2>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mb-10">
              Loyal Realtors helps you Buy, Sell, Rent and Invest in premium properties across Bangalore with complete transparency, trusted consultation and end-to-end support.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/919743304860"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold shadow-2xl transition"
              >
                WhatsApp Us
              </a>

              <a
                href="#services"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
                <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-yellow-400">1000+</h3>
                <p className="text-sm text-gray-300 mt-1">Properties Listed</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
                <p className="text-sm text-gray-300 mt-1">Client Support</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
                <p className="text-sm text-gray-300 mt-1">Transparency</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-md shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">
                Quick Property Inquiry
              </h3>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none"
                />

                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none">
                  <option className="text-black">Looking For</option>
                  <option className="text-black">Buy Property</option>
                  <option className="text-black">Sell Property</option>
                  <option className="text-black">Rent Property</option>
                  <option className="text-black">Investment Consultation</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us your requirement"
                  className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none"
                ></textarea>

                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold transition">
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-semibold mb-6">
              About Loyal Realtors
            </div>

            <h2 className="text-5xl font-black text-[#062d22] leading-tight mb-8">
              We Don’t Just Deal in Properties,
              <span className="block text-yellow-600">We Build Relationships.</span>
            </h2>

            <p className="text-gray-700 text-lg leading-8 mb-8">
              Loyal Realtors is a Bangalore based real estate consultancy committed to delivering transparent, result-driven and customer-focused property solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-3">Trusted Advisors</h3>
                <p className="text-gray-600 leading-7">
                  Honest and professional guidance for buyers, sellers and investors.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-3">Transparent Deals</h3>
                <p className="text-gray-600 leading-7">
                  Every transaction is handled with complete transparency and clarity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-3">Legal Support</h3>
                <p className="text-gray-600 leading-7">
                  Verified documentation and complete legal guidance for safe transactions.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-3">After Sales Support</h3>
                <p className="text-gray-600 leading-7">
                  Dedicated customer assistance even after the property closure.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury House"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -left-8 bg-[#062d22] text-white p-8 rounded-3xl shadow-2xl max-w-xs">
              <h3 className="text-4xl font-black text-yellow-400 mb-2">2%</h3>
              <p className="leading-7">
                Service charge on sale and purchase transactions upon successful completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-[#062d22] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 border border-yellow-500 text-yellow-400 rounded-full mb-6">
              Our Professional Services
            </div>

            <h2 className="text-5xl font-black mb-6">
              Complete Real Estate Solutions
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              From residential properties to industrial investments, Loyal Realtors offers end-to-end property solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300 hover:border-yellow-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-black flex items-center justify-center text-2xl font-black mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                  {service.title}
                </h3>

                <p className="text-gray-300 leading-8">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="properties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <div className="inline-block bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-semibold mb-6">
                Featured Properties
              </div>

              <h2 className="text-5xl font-black text-[#062d22] leading-tight">
                Discover Premium Real Estate Opportunities
              </h2>
            </div>

            <p className="max-w-xl text-gray-600 text-lg leading-8">
              Explore handpicked residential, commercial and investment properties curated by our expert real estate consultants.
            </p>
          </div>

          <div className="bg-[#062d22] rounded-[30px] p-8 mb-16 text-white">
            <div className="grid md:grid-cols-4 gap-6">
              <select className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Commercial</option>
                <option>Industrial</option>
              </select>

              <select className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none">
                <option>Budget</option>
                <option>Below ₹50L</option>
                <option>₹50L - ₹1Cr</option>
                <option>₹1Cr - ₹5Cr</option>
                <option>Above ₹5Cr</option>
              </select>

              <select className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none">
                <option>Location</option>
                <option>Hebbal</option>
                <option>Yelahanka</option>
                <option>Whitefield</option>
                <option>MG Road</option>
              </select>

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-2xl font-bold transition">
                Search Property
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="rounded-[30px] overflow-hidden shadow-2xl border border-gray-100 group bg-white"
              >
                <div className="overflow-hidden h-72 relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute top-5 left-5 bg-yellow-500 text-black px-4 py-2 rounded-full font-bold text-sm">
                    {property.type}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-[#062d22]">
                      {property.title}
                    </h3>
                    <p className="text-yellow-600 font-black text-xl">
                      {property.price}
                    </p>
                  </div>

                  <p className="text-gray-500 mb-5">
                    {property.location}
                  </p>

                  <p className="text-gray-600 leading-7 mb-6">
                    Premium property with modern amenities, strategic location and excellent investment opportunity.
                  </p>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-[#062d22] hover:bg-[#0b4735] text-white px-5 py-3 rounded-xl font-semibold transition">
                      View Details
                    </button>

                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-3 rounded-xl font-bold transition">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#062d22] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block px-5 py-2 border border-yellow-500 text-yellow-400 rounded-full mb-6">
              Virtual Property Tours
            </div>

            <h2 className="text-5xl font-black mb-6">
              Experience Properties Virtually
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Explore luxury homes, apartments and commercial spaces through immersive virtual walkthrough experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="rounded-[30px] overflow-hidden bg-white/5 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Luxury Villa Walkthrough</h3>
                <p className="text-gray-300 leading-7 mb-6">
                  Interactive 360° virtual tour for premium villa properties.
                </p>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
                  Watch Tour
                </button>
              </div>
            </div>

            <div className="rounded-[30px] overflow-hidden bg-white/5 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Apartment Video Tour</h3>
                <p className="text-gray-300 leading-7 mb-6">
                  Fully guided property walkthrough videos with detailed interior views.
                </p>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
                  View Video
                </button>
              </div>
            </div>

            <div className="rounded-[30px] overflow-hidden bg-white/5 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop"
                className="h-80 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Commercial Space Tour</h3>
                <p className="text-gray-300 leading-7 mb-6">
                  Detailed walkthroughs for office spaces and commercial investments.
                </p>
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-block bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-semibold mb-6">
              Real Estate Insights
            </div>

            <h2 className="text-5xl font-black text-[#062d22] mb-6">
              Latest Blog & Market Updates
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Stay updated with the latest Bangalore real estate trends, investment opportunities and expert advice.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="rounded-[30px] overflow-hidden shadow-xl border border-gray-100 bg-white group">
                <div className="overflow-hidden h-72">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <p className="text-yellow-600 font-semibold mb-4">
                    Real Estate News
                  </p>

                  <h3 className="text-2xl font-bold text-[#062d22] leading-tight mb-5">
                    {blog.title}
                  </h3>

                  <button className="bg-[#062d22] hover:bg-[#0b4735] text-white px-6 py-3 rounded-xl font-semibold transition">
                    Read Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8f5ef]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#062d22] to-[#0a3f31] rounded-[40px] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

            <div className="relative grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full mb-6">
                  Why Choose Us
                </div>

                <h2 className="text-5xl font-black leading-tight mb-8">
                  Trusted by Buyers, Sellers & Investors Across Bangalore
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Verified Property Listings</h3>
                      <p className="text-gray-300">Every property is screened and verified before listing.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">Professional Consultation</h3>
                      <p className="text-gray-300">Expert advice tailored to your property goals.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">End-to-End Assistance</h3>
                      <p className="text-gray-300">From property search to registration and beyond.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black rounded-[30px] p-10 shadow-2xl">
                <h3 className="text-4xl font-black text-[#062d22] mb-8">
                  Service Charges
                </h3>

                <div className="space-y-8">
                  <div className="border border-gray-200 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-[#062d22] mb-3">
                      Rental Properties
                    </h4>
                    <p className="text-5xl font-black text-yellow-600 mb-3">
                      1 Month Rent
                    </p>
                    <p className="text-gray-600 leading-7">
                      Service charge applicable upon successful rental closure.
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-[#062d22] mb-3">
                      Sale / Purchase Transactions
                    </h4>
                    <p className="text-5xl font-black text-yellow-600 mb-3">
                      2%
                    </p>
                    <p className="text-gray-600 leading-7">
                      Service charge on the final transaction value after successful completion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-yellow-100 text-yellow-800 px-5 py-2 rounded-full font-semibold mb-6">
              Contact Us
            </div>

            <h2 className="text-5xl font-black text-[#062d22] leading-tight mb-8">
              Let’s Find Your Perfect Property
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Contact Loyal Realtors today for expert guidance in buying, selling, renting and investing in premium properties.
            </p>

            <div className="space-y-6">
              <div className="bg-[#f7f7f5] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-2">Phone & WhatsApp</h3>
                <p className="text-gray-700 text-lg">+91 9743304860</p>
                <p className="text-gray-700 text-lg">+91 7090121515</p>
              </div>

              <div className="bg-[#f7f7f5] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-2">Email Address</h3>
                <p className="text-gray-700 text-lg">hariskoyyode@gmail.com</p>
                <p className="text-gray-700 text-lg">loyalrealtors14@gmail.com</p>
              </div>

              <div className="bg-[#f7f7f5] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-[#062d22] mb-2">Office Address</h3>
                <p className="text-gray-700 text-lg leading-8">
                  A403, Unique Concorde,
                  <br />
                  LKR Nagar Main Road,
                  <br />
                  Devinagar, Bangalore – 560094
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#062d22] rounded-[40px] p-10 text-white shadow-2xl">
            <h3 className="text-4xl font-black mb-8">
              Send Your Requirement
            </h3>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none placeholder:text-gray-300"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none placeholder:text-gray-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none placeholder:text-gray-300"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your property requirement"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-4 outline-none placeholder:text-gray-300"
              ></textarea>

              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl font-bold text-lg transition">
                Submit Requirement
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#041c15] text-white py-12 border-t border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-black mb-3 text-yellow-400">
              LOYAL REALTORS
            </h2>
            <p className="text-gray-300 leading-7 max-w-md">
              Rooted in Trust. Driven by Loyalty. Your reliable real estate consultancy partner in Bangalore.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-gray-300">
            <a href="https://facebook.com/share/1DALLLch9m/" className="hover:text-yellow-400 transition">
              Facebook
            </a>
            <a href="https://instagram.com/loyalrealtors_blr" className="hover:text-yellow-400 transition">
              Instagram
            </a>
            <a href="https://wa.me/919743304860" className="hover:text-yellow-400 transition">
              WhatsApp
            </a>
          </div>

          <div className="lg:text-right">
            <p className="text-gray-300 mb-2">www.loyalrealtors.com</p>
            <p className="text-yellow-400 font-semibold">
              © 2026 Loyal Realtors. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
