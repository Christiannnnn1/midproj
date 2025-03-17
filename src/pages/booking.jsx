import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImage from '../assets/images/hero3.webp';
import Image from '../assets/images/s1.webp';

const HotelBookingSystem = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '2025-03-17',
    checkOut: '2025-03-18',
    roomType: 'Double Or Twin Room, Beach View',
    guests: 1,
    specialRequests: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const { fullName, email, phone, checkIn, checkOut, guests } = formData;

    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email format';
    if (!phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Enter 10-digit phone number';

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) newErrors.checkIn = 'Check-in cannot be in past';
    if (checkOutDate <= checkInDate) newErrors.checkOut = 'Check-out must be after check-in';
    if (guests < 1 || guests > 4) newErrors.guests = 'Guests must be 1-4';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setBookingConfirmed(true);
      } catch (error) {
        setErrors({ submit: 'Booking failed. Please try again.' });
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Hotel View" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Dream Stay</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">Experience luxury and comfort at Recidencia del Hamor</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form Column */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6" data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                    placeholder="e.g John Maeda"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                    placeholder="email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number*</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500">+63</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-r border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                      placeholder="9123456789"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Check-In*</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border ${errors.checkIn ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.checkIn && <p className="text-red-500 text-xs mt-1">{errors.checkIn}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Check-Out*</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className={`w-full p-3 rounded border ${errors.checkOut ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.checkOut && <p className="text-red-500 text-xs mt-1">{errors.checkOut}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Room Type*</label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Double Or Twin Room, Beach View">Double Or Twin Room, Beach View</option>
                    <option value="Deluxe Room, Sea View">Deluxe Room, Sea View</option>
                    <option value="Premium Suite, Ocean View">Premium Suite, Ocean View</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Guests*</label>
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="4"
                    className={`w-full p-3 rounded border ${errors.guests ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-600`}
                  />
                  {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-600"
                  rows="3"
                  placeholder="Special requests (optional)"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
              >
                {isSubmitting ? 'Processing...' : 'Book Now'}
              </button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Recidencia Del Hamor</h3>
            
            <div className="space-y-4">
              <img 
                src={Image} 
                alt="Hotel View" 
                className="w-full h-full object-cover"
              />
            
              
              <div className="space-y-2">
                <p className="font-medium text-gray-800">{formData.roomType}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Check-In:</span>
                  <span>{new Date(formData.checkIn).toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Check-Out:</span>
                  <span>{new Date(formData.checkOut).toLocaleDateString('en-US', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Guests:</span>
                  <span>{formData.guests}</span>
                </div>
                <div className="flex text-yellow-500 text-sm">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-500 line-through text-sm">
                  <span>Original Price:</span>
                  <span>₱35,898.53</span>
                </div>
                <div className="flex justify-between text-lg font-semibold mt-2">
                  <span>Total:</span>
                  <span className="text-orange-500">₱26,923.91</span>
                </div>
                <p className="text-xs text-green-500 text-right">Best Offer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {bookingConfirmed && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" data-aos="zoom-in">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">Your reservation is complete. Check your email for details.</p>
              
              <div className="text-sm text-gray-600 space-y-2 mb-6">
                <p>Reference: <span className="font-medium">RES-{Math.floor(100000 + Math.random() * 900000)}</span></p>
                <p>Room: <span className="font-medium">{formData.roomType}</span></p>
              </div>

              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  window.location.href = "/accomodationpage";
                }}
                className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelBookingSystem;