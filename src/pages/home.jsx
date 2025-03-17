import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card.jsx";
import AccomodationCard from "../components/card2.jsx";
import Amenities from "../components/amenities.jsx";
import Hero1 from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero2.webp";
import Hero3 from "../assets/images/hero3.webp";
import Hero4 from "../assets/images/hero4.webp";

const HomePage = () => {
  const heroImages = [Hero1, Hero2, Hero3, Hero4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Initialize AOS
      AOS.init({
      duration: 1000, // Animation duration (default: 400)
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Delay in ms
    });

    // Hero image interval
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative h-screen">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-90" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Resort view ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wider"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to Residencia del Hamor
            </h1>
            <p 
              className="text-xl md:text-2xl text-white mb-8 font-light tracking-widest"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Experience luxury and tranquility in our exclusive resort
            </p>
          </div>
        </div>
      </div>
        <Card />
      
        <AccomodationCard />
      
      <Footer />
    </>
  );
};

export default HomePage;