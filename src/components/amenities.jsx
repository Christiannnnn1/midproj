import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from "../assets/images/card4.webp";
import image2 from "../assets/images/m1.webp";
import image3 from "../assets/images/card3.webp";
import image4 from "../assets/images/card1.webp";
import image5 from "../assets/images/x1.webp";
import image6 from "../assets/images/e1.webp";

const Amenities = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sections = [
    {
      title: "Premium Amenities",
      subtitle: "Indulge in luxury",
      items: [
        {
          name: "Infinity Pool",
          description: "Swim in our breathtaking oceanfront infinity pool with panoramic views",
          image: image1
        },
        {
          name: "Luxury Spa",
          description: "Rejuvenate your body and mind with our exclusive spa treatments",
          image: image2
        },
        {
          name: "Gourmet Restaurant",
          description: "Savor exquisite cuisine prepared by our award-winning chefs",
          image: image3
        },
        {
          name: "Private Beach Access",
          description: "Enjoy exclusive access to pristine beaches just steps from your villa",
          image: image4
        }
      ]
    },
    {
      title: "Exciting Activities",
      subtitle: "Create unforgettable memories",
      items: [
        {
          name: "Water Sports",
          description: "Experience thrilling adventures with surfing, paddleboarding, and snorkeling",
          image: image5
        },
        {
          name: "Beachfront Yoga",
          description: "Find your center with guided yoga sessions at sunrise and sunset",
          image: image6
        },
      ]
    }
  ];

  return (
    <div className="relative bg-gray-50 overflow-hidden font-serif">
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 transform translate-x-1/4 translate-y-1/4" />
      
      <div className="relative py-20">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Experience Paradise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto px-4 font-serif">
            Discover our world-class amenities and exciting activities designed to create unforgettable memories during your stay.
          </p>
        </div>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-24">
            <div 
              className="text-center mb-12"
              data-aos="fade-up"
              data-aos-delay={sectionIndex * 200}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2 font-serif">{section.title}</h3>
              <p className="text-xl text-gray-600 font-serif">{section.subtitle}</p>
            </div>

            <div className="space-y-24">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="container mx-auto px-4">
                  <div 
                    className={`flex flex-col ${itemIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                    data-aos={itemIndex % 2 === 0 ? 'slide-right' : 'slide-left'}
                    data-aos-delay={itemIndex * 200}
                  >
                    <div 
                      className="w-full lg:w-1/2 mb-8 lg:mb-0"
                      data-aos="fade-up"
                      data-aos-delay={itemIndex * 200 + 100}
                    >
                      <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-xl group">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xl font-bold font-serif">View Details</span>
                        </div>
                      </div>
                    </div>
                    <div 
                      className={`w-full lg:w-1/2 ${itemIndex % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'}`}
                      data-aos="fade-up"
                      data-aos-delay={itemIndex * 200 + 200}
                    >
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 font-serif">{item.name}</h4>
                      <p className="text-lg text-gray-600 mb-6 font-serif">{item.description}</p>
                      <div className="inline-flex items-center text-teal-600 font-medium font-serif hover:text-teal-800 transition-colors duration-300 cursor-pointer">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div 
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <button className="px-8 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors duration-300 inline-flex items-center font-serif">
            Explore All Amenities
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Amenities;