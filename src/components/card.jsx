import { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

// Import local .webp images
import image1 from "../assets/images/hero3.webp";
import image2 from "../assets/images/card4.webp";
import image3 from "../assets/images/hero4.webp";
import image4 from "../assets/images/card3.webp";

const Card = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const resortImages = [
    {
      url: image1,
      alt: "Luxury Resort Lobby",
      title: "Grand Entrance",
      description: "Step into a world of luxury with our stunning grand entrance."
    },
    {
      url: image2,
      alt: "Infinity Pool View",
      title: "Serene Pool",
      description: "Unwind in our breathtaking infinity pool overlooking the ocean."
    },
    {
      url: image3,
      alt: "Ocean View Suite",
      title: "Ocean Paradise",
      description: "Wake up to panoramic ocean views in our luxurious suites."
    },
    {
      url: image4,
      alt: "Beachfront Restaurant",
      title: "Dining Excellence",
      description: "Indulge in exquisite cuisine prepared by world-class chefs."
    },
  ];

  // Initialize AOS and auto rotate carousel
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === resortImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [resortImages.length]);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${resortImages[0].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black opacity-90 z-10" />
        <div 
          className="container mx-auto px-4 z-20 text-center text-white"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Escape to Paradise
          </h1>
          <p 
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Discover unparalleled luxury in our world-class resort. Immerse yourself in breathtaking experiences.
          </p>
          <Link 
                to="/accomodationpage"
            className="px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Book Your Stay
          </Link>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className="mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience Luxury</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Indulge in our premium accommodations and services designed for your comfort and pleasure.</p>
          </div>

          <div 
            className="relative w-full max-w-4xl mx-auto h-[500px] overflow-hidden rounded-2xl shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="flex w-full h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
            >
              {resortImages.map((image, index) => (
                <div key={index} className="min-w-full h-full flex-shrink-0 relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
              {resortImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? "bg-teal-600" : "bg-white/80"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {resortImages.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={`${200 + (index * 100)}`}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={feature.url} 
                    alt={feature.alt}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Your Luxury Getaway?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="200">
              Book your stay now and experience the ultimate luxury vacation. Limited rooms available for the upcoming season.
            </p>
            <Link 
                to="/accomodationpage"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-lg font-semibold transform transition-all duration-300 shadow-lg hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;