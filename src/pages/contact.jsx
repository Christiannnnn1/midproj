import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBackground from "../assets/images/hero1.webp";

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
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
    if (!name.trim()) newErrors.name = 'Name is required';
    else if (!/^[A-Za-z\s]+$/.test(name)) newErrors.name = 'Name should only contain letters and spaces';
    
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!message.trim()) newErrors.message = 'Message is required';

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
        setName('');
        setEmail('');
        setMessage('');
      }, 1000);
    } else {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-serif">
      <Navbar />

      {/* Hero Section with Reduced Black Opacity */}
      <div className="relative h-[500px] overflow-hidden" data-aos="fade">
        <img
          src={heroBackground}
          alt="Residencia Del Hamor"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500?text=Hero+Image'; }}
        />
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:bg-opacity-10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1
              className="text-5xl md:text-6xl font-light tracking-wide mb-4"
              data-aos="fade-down"
            >
              Contact Us
            </h1>
            <p
              className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We’re here to assist you with your luxurious escape
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all`}
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all`}
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={`w-full border ${errors.message ? 'border-red-400' : 'border-gray-200'} rounded-lg p-3 text-sm focus:ring-2 focus:ring-gray-300 focus:border-transparent transition-all`}
                    rows="4"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="md:w-1/2 flex flex-col gap-6" data-aos="fade-left">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">Contact Information</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  <strong className="text-gray-800">Address:</strong> Residencia Del Hamor Full View, Sta. Magdalena, Sorsogon, Philippines
                </p>
                <p>
                  <strong className="text-gray-800">Phone:</strong> +63 912 345 6789
                </p>
                <p>
                  <strong className="text-gray-800">Email:</strong> info@residenciadelhamor.com
                </p>
              </div>
            </div>

            {/* Updated Google Maps Embed for Recidencia Del Hamor Full View */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.37789143832!2d124.1068374!3d13.0557836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0f300616e90fd%3A0x52bff627d55853b7!2sRecidencia%20Del%20Hamor%20Full%20View!5e0!3m2!1sen!2sus!4v1697654321987!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Recidencia Del Hamor Full View Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-white py-16 border-t border-gray-100" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">About Residencia Del Hamor Full View</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Nestled along the pristine shores of Sta. Magdalena, Sorsogon, Residencia Del Hamor Full View offers an unparalleled retreat where luxury meets nature. Our beachfront resort is designed to provide guests with breathtaking panoramic views of Sorsogon Bay, complemented by world-class amenities and personalized service. Whether you’re seeking a serene escape or an adventure in paradise, our elegant villas and infinity pools promise an unforgettable experience at the southern tip of Luzon.
          </p>
          <button
            className="bg-gray-800 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium hover:bg-gray-900 transition-all duration-300 shadow-md"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md" data-aos="zoom-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-light text-gray-800">Message Sent!</h2>
              <p className="text-gray-600 text-sm mt-2">Thank you for reaching out. We’ll get back to you soon.</p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 text-sm uppercase tracking-wider font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactPage;