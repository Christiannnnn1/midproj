import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const RoomModal = ({ isOpen, onClose, room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen || !room) return null;
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };
  
  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 transition-opacity duration-300">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-200">
          <h3 className="text-lg md:text-xl font-semibold text-[#1A2E44]">{room.name}</h3>
          <button 
            onClick={onClose} 
            className="text-[#1A2E44] hover:text-[#132134] transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <svg className="w-5 md:w-6 h-5 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="w-full md:w-3/5 relative">
            {/* Main Image */}
            <div className="relative h-[200px] md:h-[400px] p-2 md:p-4 bg-gray-50">
              <img 
                src={room.images[currentImageIndex]} 
                alt={room.name}
                className="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-[#1A2E44]/90 hover:bg-[#132134] text-white p-1 md:p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNextImage}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-[#1A2E44]/90 hover:bg-[#132134] text-white p-1 md:p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-[#1A2E44]/80 text-white px-1 md:px-2 py-0.5 md:py-1 rounded-full text-xs shadow-sm">
                {currentImageIndex + 1} / {room.images.length}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="bg-gray-100 p-1 md:p-2 flex justify-center gap-1 md:gap-2 overflow-x-auto">
              {room.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-12 h-8 md:w-20 md:h-14 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    currentImageIndex === index ? 'border-[#1A2E44] scale-105 shadow-md' : 'border-transparent hover:border-[#2A3F5A]'
                  }`}
                >
                  <img src={image} alt={`${room.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Room Details */}
          <div className="w-full md:w-2/5 p-2 md:p-4 bg-gradient-to-b from-white to-gray-50">
            {/* Scrollable Content */}
            <div className="space-y-4 pb-24 md:pb-0">
              {/* Room Information */}
              <div>
                <h4 className="text-base md:text-lg font-semibold text-[#1A2E44] mb-2 md:mb-3">Room Details</h4>
                <div className="space-y-1 md:space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-4 md:w-5 h-4 md:h-5 text-[#1A2E44] mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      <path d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" />
                    </svg>
                    <span className="text-sm md:text-base">{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 md:w-5 h-4 md:h-5 text-[#1A2E44] mr-1 md:mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-sm md:text-base">{room.details.guests} Guests</span>
                  </div>
                </div>
              </div>
              
              {/* Features and Facilities */}
              <div>
                <h4 className="text-base md:text-lg font-semibold text-[#1A2E44] mb-2 md:mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-1 md:gap-2 text-gray-700">
                  {[...room.details.facilities, ...room.details.amenities].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#1A2E44] rounded-full mr-1 md:mr-2" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Fixed Price and Booking Section */}
            <div className="mt-2 md:mt-4 pt-2 md:pt-4 border-t border-gray-200 bg-white md:static fixed bottom-0 left-0 right-0 p-2 md:p-0 md:border-t-0 md:bg-transparent">
              <div className="space-y-1 md:space-y-2">
                <p className="text-xs md:text-sm text-gray-600">Starting from</p>
                <p className="text-lg md:text-2xl font-bold text-orange-500">
                  ₱ {room.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-xs md:text-xs text-gray-500">per room / night</p>
                <Link to="/booking"
                  className="w-full bg-[#1A2E44] hover:bg-[#132134] text-white py-1.5 md:py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg block text-center text-sm md:text-base"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;