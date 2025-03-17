import React, { useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiArrowRight } from "react-icons/fi";
import image1 from "../assets/images/d1.webp";
import image2 from "../assets/images/s1.webp";
import image3 from "../assets/images/v3.webp";
import image4 from "../assets/images/l1.webp";
import { Link } from "react-router-dom";

const AccommodationCard = () => {
  const containerRef = useRef(null);
  
  const villas = [
    {
      id: 1,
      type: "Double Or Twin Beach View",
      image: image1,
      alt: "Luxurious one bedroom villa with private pool",
      description: "An intimate retreat with private infinity pool",
    },
    {
      id: 2,
      type: "Single Beach View",
      image: image2,
      alt: "Spacious two bedroom villa with garden view",
      description: "Elegant spaces surrounded by lush gardens",
    },
    {
      id: 3,
      type: "Premium Suite",
      image: image3,
      alt: "Elegant three bedroom villa with ocean view",
      description: "Panoramic ocean views from every window",
    },
    {
      id: 4,
      type: "Family Villa",
      image: image4,
      alt: "Luxurious four bedroom villa with private beach access",
      description: "Your exclusive pathway to pristine shores",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e6eef8 100%)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-teal-50 to-transparent opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-50 to-transparent opacity-30"></div>
        <div className="absolute top-40 left-20 w-64 h-64 rounded-full bg-teal-100 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-20 pb-40">
        {/* Intro Section */}
        <div className="flex items-center justify-center mb-24">
          <div 
            className="text-center px-4 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-800">
              <span 
                className="block" 
                data-aos="fade-up" 
                data-aos-delay="200"
              >Luxury Villa</span>
              <span 
                className="block text-5xl md:text-6xl font-serif text-teal-800" 
                data-aos="fade-up" 
                data-aos-delay="300"
              >Collection</span>
            </h1>
            <p 
              className="text-lg text-gray-600"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Discover our exclusive selection of premium villas
            </p>
          </div>
        </div>

        {/* Villas Section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-32 md:space-y-40">
              {villas.map((villa, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={villa.id} className="relative" id={`villa-${villa.id}`}>
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                      <div 
                        className={`w-full md:w-3/5 overflow-hidden rounded-lg shadow-lg ${isEven ? 'md:ml-8' : 'md:mr-8'}`}
                        data-aos={isEven ? "slide-right" : "slide-left"}
                        data-aos-delay={`${index * 200}`}
                      >
                        <img
                          src={villa.image}
                          alt={villa.alt}
                          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      
                      <div 
                        className={`w-full md:w-2/5 ${isEven ? 'text-left' : 'text-right'}`}
                        data-aos={isEven ? "slide-left" : "slide-right"}
                        data-aos-delay={`${index * 200 + 100}`}
                      >
                        <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-800">{villa.type}</h2>
                        <div className={`w-16 h-0.5 bg-teal-600 mb-6 ${isEven ? '' : 'ml-auto'}`}></div>
                        <p className="text-gray-600 mb-8">{villa.description}</p>
                        <Link 
                          to="/accomodationpage"
                          className={`inline-flex items-center text-sm tracking-wider text-teal-700 hover:text-teal-500 transition-colors duration-300 ${isEven ? '' : 'flex-row-reverse'}`}
                        >
                          {isEven ? (
                            <>
                              DISCOVER MORE
                              <FiArrowRight className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            <>
                              <FiArrowRight className="mr-2 h-4 w-4 transform rotate-180" />
                              DISCOVER MORE
                            </>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative mt-40 px-4 sm:px-6 lg:px-8">
          <div 
            className="max-w-4xl mx-auto bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-lg p-12 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Decorative elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-teal-100 opacity-60"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-blue-100 opacity-60"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-light mb-6 text-gray-800" data-aos="fade-up" data-aos-delay="300">Begin Your Journey</h3>
              <p className="text-gray-600 mb-10 mx-auto max-w-lg" data-aos="fade-up" data-aos-delay="400">
                Immerse yourself in the extraordinary. Our collection awaits your discovery.
              </p>
              <Link 
                to="/accomodationpage"
                className="inline-flex items-center px-8 py-3 bg-teal-700 hover:bg-teal-600 text-white font-light tracking-wider transition-all duration-300 rounded-sm"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                EXPLORE ALL VILLAS
                <FiArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add improved global styles */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AccommodationCard;