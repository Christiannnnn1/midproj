import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HotelBookingSystem = () => {
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+63');
  const [isGuest, setIsGuest] = useState(true);
  const [specialRequests, setSpecialRequests] = useState('');
  const [checkInDate, setCheckInDate] = useState('2025-03-17');
  const [checkOutDate, setCheckOutDate] = useState('2025-03-18');
  const [roomType, setRoomType] = useState('Double Or Twin Room, Beach View');
  const [guestCount, setGuestCount] = useState(1);
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!contactName.trim()) newErrors.contactName = 'Name is required';
    else if (!/^[A-Za-z\s]+$/.test(contactName)) newErrors.contactName = 'Name should only contain letters and spaces';
    
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d+$/.test(phoneNumber)) newErrors.phoneNumber = 'Phone number should only contain digits';
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (checkIn < today) newErrors.checkInDate = 'Check-in date cannot be in the past';
    if (checkOut <= checkIn) newErrors.checkOutDate = 'Check-out date must be after check-in date';
    if (guestCount < 1) newErrors.guestCount = 'At least one guest is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Navbar />
      {/* Modified Hero Section with Black Overlay */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <img 
          src="../src/assets/images/hero3.webp" 
          alt="Hotel View" 
          className="w-full h-full object-cover"
        />
        {/* Black Overlay with Opacity */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 
            className="text-3xl md:text-5xl font-bold mb-4 text-center px-4"
            data-aos="fade-down"
          >
            Book Your Dream Stay
          </h1>
          <p 
            className="text-lg md:text-xl text-center px-4 max-w-2xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Experience luxury and comfort at Recidencia del Hamor
          </p>
          <button
            className="mt-6 bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-4 font-sans">  
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-7/12" data-aos="fade-right">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h2>
                <p className="text-gray-600 mb-4">Please fill in all fields correctly to ensure you receive the booking confirmation voucher in your email.</p>
                
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Contact's name*</label>
                  <input 
                    type="text" 
                    className={`w-full border ${errors.contactName ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    placeholder="e.g John Maeda"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                  />
                  {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
                  <p className="text-gray-500 text-sm mt-1">Please use only alphabet (A-Z), without title, special characters, and punctuation.</p>
                </div>
  
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Contact's email address*</label>
                  <input 
                    type="email" 
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    placeholder="e.g email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
  
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Mobile Number*</label>
                  <div className="flex">
                    <div className="w-1/4 mr-2">
                      <button 
                        type="button"
                        className="w-full border border-gray-300 rounded p-2 flex items-center justify-between"
                      >
                        <span>{countryCode}</span>
                        <span>▼</span>
                      </button>
                    </div>
                    <input 
                      type="text" 
                      className={`w-3/4 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                  <p className="text-gray-500 text-sm mt-1">e.g. +6312345678, for Country Code (+63) and Mobile No. 12345678.</p>
                </div>
  
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Reservation Dates*</label>
                  <div className="flex space-x-2">
                    <div className="w-1/2">
                      <label className="block text-gray-500 text-sm mb-1">Check-in Date</label>
                      <input 
                        type="date" 
                        className={`w-full border ${errors.checkInDate ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                      />
                      {errors.checkInDate && <p className="text-red-500 text-sm mt-1">{errors.checkInDate}</p>}
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-500 text-sm mb-1">Check-out Date</label>
                      <input 
                        type="date" 
                        className={`w-full border ${errors.checkOutDate ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                      />
                      {errors.checkOutDate && <p className="text-red-500 text-sm mt-1">{errors.checkOutDate}</p>}
                    </div>
                  </div>
                </div>
  
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Room Selection*</label>
                  <select 
                    className="w-full border border-gray-300 rounded p-2"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                  >
                    <option value="Double Or Twin Room, Beach View">Double Or Twin Room, Beach View</option>
                    <option value="Deluxe Room, Sea View">Deluxe Room, Sea View</option>
                    <option value="Premium Suite, Ocean View">Premium Suite, Ocean View</option>
                  </select>
                </div>
  
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Number of Guests*</label>
                  <input 
                    type="number" 
                    className={`w-full border ${errors.guestCount ? 'border-red-500' : 'border-gray-300'} rounded p-2`}
                    min="1"
                    max="4"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  />
                  {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
                </div>
  
                <p className="text-gray-600 mb-4">We will send the e-voucher to this email.</p>
  
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-6">
                    <div onClick={() => setIsGuest(true)} className={`w-6 h-6 rounded-full border ${isGuest ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}>
                      {isGuest && <span className="text-white">✓</span>}
                    </div>
                    <span className="ml-2">I am the guest</span>
                  </div>
                  <div className="flex items-center">
                    <div onClick={() => setIsGuest(false)} className={`w-6 h-6 rounded-full border ${!isGuest ? 'border-blue-500 bg-blue-500' : 'border-gray-300'} flex items-center justify-center cursor-pointer`}>
                      {!isGuest && <span className="text-white">✓</span>}
                    </div>
                    <span className="ml-2">I'm booking for another person</span>
                  </div>
                </div>
  
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Let us know if you have any request</h3>
                  <textarea 
                    className="w-full border border-gray-300 rounded p-2"
                    rows="4"
                    placeholder="Special requests (optional)"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
  
            <div className="w-full md:w-5/12" data-aos="fade-left">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-2">🌟</span>
                  <span>You've made a <span className="font-bold text-yellow-500">great choice</span> for your stay.</span>
                </div>
              </div>
  
              <div className="border border-gray-200 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">Recidencia del Hamor Full View</h3>
                  <div className="flex text-yellow-500">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="text-blue-500 mr-1">✈</span>
                  <span>No rating yet</span>
                </div>
  
                <div className="mb-4">
                  <img src="../src/assets/images/s1.webp" alt="Hotel" className="w-full h-48 object-cover rounded-lg" />
                </div>
  
                <div className="flex justify-between mb-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <div className="text-sm text-gray-600">Check-in</div>
                    <div className="font-bold">Mon, 17 Mar 2025</div>
                    <div className="text-sm text-gray-600">14:00 - 18:00</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="bg-gray-200 text-gray-600 p-1 rounded">1 night</span>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <div className="text-sm text-gray-600">Check-out</div>
                    <div className="font-bold">Tue, 18 Mar 2025</div>
                    <div className="text-sm text-gray-600">Before 12:00</div>
                  </div>
                </div>
  
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold mb-2">(1x) {roomType}</h4>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">👤</span>
                    <span>{guestCount} Guest{guestCount > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">🛏️</span>
                    <span>2 Twin Bed</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="mr-2">🍳</span>
                    <span>Breakfast included for 1 pax</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✈</span>
                    <span>🧹</span>
                  </div>
                </div>
  
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between mb-1">
                    <div>Total Room Price</div>
                    <div className="text-gray-500 line-through">₱ 35,898.53</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold">1 room(s), 1 night(s)</div>
                    <div className="font-bold text-orange-500">₱ 26,923.91</div>
                  </div>
                  <div className="text-right text-green-500 text-sm">• Best Offer</div>
                </div>
  
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-4 transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Book Now'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
  
      {isSuccess && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
              <p className="text-gray-600 mt-2">Your booking has been successfully confirmed. We've sent all the details to your email.</p>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Booking Reference:</span>
                <span className="font-bold">RES-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-in Date:</span>
                <span>Mon, 17 Mar 2025</span>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setIsSuccess(false);
                window.location.href = "accomodationpage";
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mt-6 transition duration-200"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HotelBookingSystem;