import React, { useState, useEffect } from 'react';

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
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-teal-50 to-blue-50">
          <h3 className="text-xl font-semibold text-teal-800">{room.name}</h3>
          <button 
            onClick={onClose} 
            className="text-teal-600 hover:text-teal-800 transition-colors p-1 rounded-full hover:bg-teal-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Image Gallery */}
          <div className="md:w-3/5 relative">
            {/* Main Image */}
            <div className="relative h-[400px] p-4 bg-gray-50">
              <img 
                src={room.images[currentImageIndex]} 
                alt={room.name}
                className="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevImage}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-teal-500/90 hover:bg-teal-600 text-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNextImage}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-teal-500/90 hover:bg-teal-600 text-white p-2 rounded-full shadow-md transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-teal-800/80 text-white px-3 py-1 rounded-full text-sm shadow-sm">
                {currentImageIndex + 1} / {room.images.length}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="bg-gray-100 p-3 flex justify-center gap-3">
              {room.images.map((image, index) => (
                <div 
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-14 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                    currentImageIndex === index ? 'border-teal-500 scale-105 shadow-md' : 'border-transparent hover:border-teal-300'
                  }`}
                >
                  <img src={image} alt={`${room.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Room Details */}
          <div className="md:w-2/5 p-6 overflow-y-auto max-h-[400px] bg-gradient-to-b from-white to-gray-50">
            <div className="space-y-6">
              {/* Room Information */}
              <div>
                <h4 className="text-lg font-semibold text-teal-800 mb-3">Room Details</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                      <path d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" />
                    </svg>
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span>{room.details.guests} Guests</span>
                  </div>
                </div>
              </div>
              
              {/* Features and Facilities */}
              <div>
                <h4 className="text-lg font-semibold text-teal-800 mb-3">Amenities</h4>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  {[...room.details.facilities, ...room.details.amenities].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price and Booking */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Starting from</p>
                  <p className="text-2xl font-bold text-orange-500">
                    ₱ {room.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-gray-500">per room / night</p>
                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;