import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer";
import ImageModal from "../components/modal.jsx";
import RoomModal from "../components/modal.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBackground from "../assets/images/card4.webp";
import image1 from "../assets/images/d1.webp";
import image2 from "../assets/images/d2.webp";
import image3 from "../assets/images/d3.webp";
import image4 from "../assets/images/d4.webp";
import image5 from "../assets/images/s1.webp";
import image6 from "../assets/images/s2.webp";
import image7 from "../assets/images/s3.webp";
import image8 from "../assets/images/s4.webp";
import image9 from "../assets/images/s5.webp";
import image10 from "../assets/images/v1.webp";
import image12 from "../assets/images/v3.webp";
import image13 from "../assets/images/v4.webp";
import image14 from "../assets/images/l1.webp";
import image15 from "../assets/images/l2.webp";
import image16 from "../assets/images/l3.webp";
import image17 from "../assets/images/l4.webp";
import a1 from "../assets/images/card4.webp";
import a2 from "../assets/images/card3.webp";
import a3 from "../assets/images/m1.webp";
import a4 from "../assets/images/l2.webp";

// Error Boundary Component to Catch Rendering Errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-red-500 py-10">Something went wrong. Please try refreshing the page.</h1>;
    }
    return this.props.children;
  }
}

const AccommodationsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [showAmenities, setShowAmenities] = useState(false);

  useEffect(() => {
    try {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
      AOS.refresh();
    } catch (error) {
      console.error("AOS initialization failed:", error);
    }
  }, []);

  const roomTypes = [
    {
      id: 1,
      name: "Double Or Twin Beach View",
      image: image1,
      size: "4.6 m²",
      price: 22068.78,
      originalPrice: 29425.03,
      features: ["Non-smoking", "Shower"],
      description: "Double Or Twin Room, Beach View",
      details: {
        breakfast: "Breakfast included for 1 pax",
        bed: "2 twin beds",
        refundable: false,
        guests: 1,
        available: 1,
        amenities: ["Private bathroom", "Shower", "Toiletries", "Towels"],
        facilities: ["Desk", "Housekeeping", "Non smoking rooms"]
      },
      category: "Villa Room 1",
      images: [image1, image2, image3, image4]
    },
    {
      id: 2,
      name: "Single Beach View",
      image: image3,
      size: "6.2 m²",
      price: 28500.00,
      originalPrice: 35625.00,
      features: ["Non-smoking", "Shower", "Pool view"],
      description: "Deluxe Villa Room with Ocean View",
      details: {
        breakfast: "Breakfast included for 2 pax",
        bed: "1 king bed",
        refundable: true,
        guests: 2,
        available: 3,
        amenities: ["Private bathroom", "Shower", "Toiletries", "Towels", "Bathtub"],
        facilities: ["Desk", "Housekeeping", "Non smoking rooms", "Mini bar"]
      },
      category: "Villa Room 2",
      images: [image5, image6, image7, image8, image9]
    },
    {
      id: 3,
      name: "Premium Suite",
      image: image5,
      size: "8.5 m²",
      price: 35999.99,
      originalPrice: 45000.00,
      features: ["Non-smoking", "Shower", "Ocean view", "Living area"],
      description: "Premium Suite with Living Area",
      details: {
        breakfast: "Breakfast included for 2 pax",
        bed: "1 king bed",
        refundable: true,
        guests: 2,
        available: 2,
        amenities: ["Private bathroom", "Shower", "Toiletries", "Towels", "Bathtub", "Bathrobes"],
        facilities: ["Desk", "Housekeeping", "Non smoking rooms", "Mini bar", "Coffee maker"]
      },
      category: "Villa Room 3",
      images: [image10, image12, image13]
    },
    {
      id: 4,
      name: "Family Villa",
      image: image14,
      size: "10.2 m²",
      price: 42500.00,
      originalPrice: 53125.00,
      features: ["Non-smoking", "Shower", "Ocean view", "Private terrace"],
      description: "Family Villa with Private Terrace",
      details: {
        breakfast: "Breakfast included for 4 pax",
        bed: "1 king bed, 2 twin beds",
        refundable: true,
        guests: 4,
        available: 1,
        amenities: ["Private bathroom", "Shower", "Toiletries", "Towels", "Bathtub", "Bathrobes"],
        facilities: ["Desk", "Housekeeping", "Non smoking rooms", "Mini bar", "Coffee maker", "Dining area"]
      },
      category: "Villa Room 4",
      images: [image14, image15, image16, image17]
    }
  ];

  const galleryImages = [
    { id: 'g1', image: image1, alt: 'Gallery Image 1', category: 'Villa Room 1' },
    { id: 'g2', image: image2, alt: 'Gallery Image 2', category: 'Villa Room 1' },
    { id: 'g3', image: image3, alt: 'Gallery Image 3', category: 'Villa Room 1' },
    { id: 'g4', image: image4, alt: 'Gallery Image 4', category: 'Villa Room 1' },
    { id: 'g5', image: image5, alt: 'Gallery Image 5', category: 'Villa Room 2' },
    { id: 'g6', image: image6, alt: 'Gallery Image 6', category: 'Villa Room 2' },
    { id: 'g7', image: image7, alt: 'Gallery Image 7', category: 'Villa Room 2' },
    { id: 'g8', image: image8, alt: 'Gallery Image 8', category: 'Villa Room 2' },
    { id: 'g9', image: image9, alt: 'Gallery Image 9', category: 'Villa Room 2' },
    { id: 'g10', image: image10, alt: 'Gallery Image 10', category: 'Villa Room 3' },
    { id: 'g11', image: image12, alt: 'Gallery Image 11', category: 'Villa Room 3' },
    { id: 'g12', image: image13, alt: 'Gallery Image 12', category: 'Villa Room 3' },
    { id: 'g13', image: image14, alt: 'Gallery Image 13', category: 'Villa Room 4' },
    { id: 'g14', image: image15, alt: 'Gallery Image 14', category: 'Villa Room 4' },
    { id: 'g15', image: image16, alt: 'Gallery Image 15', category: 'Villa Room 4' },
    { id: 'g16', image: image17, alt: 'Gallery Image 16', category: 'Villa Room 4' }
  ];

  const amenitiesImages = [
    { 
      id: 'a1', 
      image: a1, 
      alt: 'Serene Pool', 
      description: 'Dive into Bliss! Relax by our breathtaking serene pools and let your worries melt away in paradise.' 
    },
    { 
      id: 'a2', 
      image: a2, 
      alt: 'Gourmet Dining', 
      description: 'Savor the Extraordinary! Indulge in gourmet dining experiences that tantalize your taste buds like never before.' 
    },
    { 
      id: 'a3', 
      image: a3, 
      alt: 'Luxury Spa', 
      description: 'Rejuvenate your body and mind with our exclusive spa treatments' 
    },
    { 
      id: 'a4', 
      image: a4, 
      alt: 'Luxury Bathroom', 
      description: 'Pamper Yourself in Style! Indulge in our lavish luxury bathrooms designed for ultimate relaxation.' 
    },
  ];

  const filteredRooms = activeCategory === 'All' 
    ? roomTypes 
    : roomTypes.filter(room => room.category === activeCategory);

  const filteredGalleryImages = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const categories = ['All', 'Villa Room 1', 'Villa Room 2', 'Villa Room 3', 'Villa Room 4'];

  const reviews = [
    {
      name: "Maria S.",
      rating: 5,
      text: "An absolutely divine experience! The rooms were impeccably clean, and the ocean view was breathtaking. The staff went above and beyond.",
      date: "March 2025"
    },
    {
      name: "James L.",
      rating: 4,
      text: "Luxury at its finest. The villa was spacious and elegant, though the breakfast could be more varied. Still wonderful!",
      date: "February 2025"
    },
    {
      name: "Sophie R.",
      rating: 5,
      text: "Perfect getaway! The private terrace was a dream, and the service was exceptional. Can't wait to return!",
      date: "January 2025"
    }
  ];

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const handleRoomClick = (room) => {
    setCurrentRoom(room);
    setIsRoomModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseRoomModal = () => setIsRoomModalOpen(false);
  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
    setShowAmenities(false);
  };
  const toggleAmenities = () => {
    setShowAmenities(!showAmenities);
    setIsGalleryOpen(false);
  };

  return (
    <ErrorBoundary>
      <div className="bg-gray-50 min-h-screen font-serif">
        <Navbar />
        
        {/* Hero Section with AOS */}
        <div className="relative h-[500px] overflow-hidden" data-aos="fade">
          <img 
            src={heroBackground} 
            alt="Luxury accommodation" 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => { 
              e.target.src = 'https://via.placeholder.com/1200x500?text=Hero+Image'; 
              console.log('Hero image failed to load'); 
            }}
          />
          <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:bg-opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 
                className="text-5xl md:text-6xl font-light tracking-wide mb-4"
                data-aos="fade-down"
              >
                Timeless Elegance
              </h1>
              <p 
                className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Indulge in sophisticated luxury and unparalleled comfort
              </p>
              <div 
                className="flex justify-center gap-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button 
                  onClick={toggleAmenities}
                  className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-all duration-300 shadow-md"
                >
                  {showAmenities ? 'Hide Amenities' : 'Amenities'}
                </button>
                <button 
                  onClick={toggleGallery}
                  className="border-2 border-white text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  {isGalleryOpen ? 'Hide Gallery' : 'Explore Gallery'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section with AOS Only */}
        <div className={`transition-opacity duration-500 ${showAmenities ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="bg-gray-100 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 
                className="text-3xl md:text-4xl font-light text-gray-800 mb-12 text-center"
                data-aos="fade-up"
              >
                Unrivaled Amenities Await You!
              </h2>
              {amenitiesImages.map((amenity, index) => (
                <div
                  key={amenity.id}
                  className={`flex flex-col md:flex-row items-center justify-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={amenity.image}
                      alt={amenity.alt}
                      className="w-full h-96 object-cover rounded-lg shadow-md"
                      onError={(e) => {
                        console.error(`Failed to load amenity image: ${amenity.alt}`);
                        e.target.src = 'https://via.placeholder.com/600?text=Amenity+Image';
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-6">
                    <h3 
                      className="text-2xl font-light text-gray-800 mb-4"
                      data-aos="slide-up"
                      data-aos-delay={index * 300}
                    >
                      {amenity.alt}
                    </h3>
                    <p 
                      className="text-gray-600 text-lg leading-relaxed"
                      data-aos="slide-up"
                      data-aos-delay={index * 400}
                    >
                      {amenity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section with AOS */}
        <div className={`transition-opacity duration-500 ${isGalleryOpen && !showAmenities ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-gray-800 mb-10 text-center"
              data-aos="fade-up"
            >
              Property Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredGalleryImages.map((galleryImage, index) => (
                <div 
                  key={galleryImage.id}
                  className="relative group cursor-pointer"
                  onClick={() => handleImageClick(galleryImage.image)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img 
                    src={galleryImage.image}
                    alt={galleryImage.alt}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.error(`Failed to load image: ${galleryImage.alt}`);
                      e.target.src = 'https://via.placeholder.com/300?text=Gallery+Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
                  <p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                    {galleryImage.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accommodation Sections with AOS */}
        <div className={`transition-opacity duration-500 ${!isGalleryOpen && !showAmenities ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          {/* Introduction */}
          <div className="py-16 bg-white" data-aos="fade-up">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">Exquisite Accommodations</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                Discover a sanctuary of elegance at Recidencia del Hamor, where impeccable service meets refined luxury. 
                From serene pools to gourmet dining, every moment is crafted for your delight.
              </p>
            </div>
          </div>

          {/* Filter Navigation */}
          <div className="bg-white py-8 border-t border-b border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-2 text-sm rounded-full transition-all duration-300 ${
                      activeCategory === category 
                        ? 'bg-gray-800 text-white shadow-md' 
                        : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:shadow'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Rooms Section */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 
              className="text-2xl md:text-3xl font-light text-gray-800 mb-10 text-center"
              data-aos="fade-up"
            >
              Your Perfect Retreat
            </h2>
            
            <div className="grid gap-8">
              {filteredRooms.map((room) => (
                <div 
                  key={room.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={room.id * 100}
                >
                  <div className="flex flex-col md:flex-row">
                    <div 
                      className="md:w-1/3 relative cursor-pointer group" 
                      onClick={() => handleRoomClick(room)}
                    >
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          console.log(`Image failed to load for ${room.name}:`, e);
                          e.target.src = `https://via.placeholder.com/400?text=${room.name.replace(/\s+/g, '+')}`;
                          e.target.onerror = null;
                        }}
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                      <div className="absolute top-4 left-4 bg-white bg-opacity-90 py-1 px-4 rounded-full">
                        <p className="text-gray-800 text-sm font-medium">{room.name}</p>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6 flex flex-col md:flex-row">
                      <div className="flex-grow">
                        <h3 className="text-xl font-light text-gray-800 mb-2">{room.description}</h3>
                        <p className="text-gray-500 text-sm mb-3">{room.details.breakfast}</p>
                        <p className="text-gray-500 text-sm mb-4">{room.details.bed}</p>

                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {room.details.refundable ? 'Refundable' : 'Non Refundable'}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M19 21H5M19 21H21M5 21H3M9 6.99998H10M9 11H10M14 6.99998H15M14 11H15M12 21V16C12 15.4477 12.4477 15 13 15H17C17.5523 15 18 15.4477 18 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {room.size}
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-600" viewBox="0 0 24 24" fill="none"><path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {room.details.guests} Guest{room.details.guests > 1 ? 's' : ''}
                          </div>
                        </div>

                        <button 
                          onClick={() => handleRoomClick(room)}
                          className="mt-4 text-gray-700 hover:text-gray-900 flex items-center text-sm transition-colors duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none"><rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 8V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          Explore Details
                        </button>
                      </div>

                      <div className="mt-6 md:mt-0 md:ml-6 md:border-l md:pl-6 flex flex-col items-end justify-between">
                        {room.originalPrice && (
                          <p className="text-gray-400 line-through text-sm">₱ {room.originalPrice.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        )}
                        <p className="text-gray-800 text-xl font-light">₱ {room.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                        <p className="text-gray-500 text-xs mb-4">Excludes taxes & fees</p>
                        <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm">
                          Book Now
                        </button>
                        <p className="text-gray-500 text-xs mt-2">{room.details.available} Room{room.details.available > 1 ? 's' : ''} Available</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA with AOS */}
          <div className="max-w-6xl mx-auto px-4 pb-16 text-center" data-aos="fade-up">
            <button className="bg-gray-800 text-white px-8 py-3 rounded-full flex items-center mx-auto hover:bg-gray-900 transition-all duration-300 shadow-md">
              Discover More Rooms
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none"><path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          {/* Customer Reviews Section with AOS */}
          <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 
                className="text-3xl font-light text-gray-800 mb-12 text-center"
                data-aos="fade-up"
              >
                What Our Guests Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{review.text}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-800 font-medium">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ImageModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          currentImage={currentImage}
          images={galleryImages}
        />

        <RoomModal
          isOpen={isRoomModalOpen}
          onClose={handleCloseRoomModal}
          room={currentRoom}
        />

        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default AccommodationsPage;