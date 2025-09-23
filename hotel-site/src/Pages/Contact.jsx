import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import rooms from '../components/room';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    roomType: '',
    checkIn: '',
    checkOut: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, roomType, checkIn, checkOut, message } = formData;

    // Validate check-out date is after check-in date
    if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
      alert('Check-out date must be after check-in date.');
      return;
    }

  
     const phoneNumber = '+94703238582'; // Hotel's WhatsApp number
    const whatsappMessage = `Hello OPAL Hotel,\nI would like to make a booking:
                Name: ${name}
                Room Type: ${roomType}
                Check-in: ${checkIn || 'N/A'}
                Check-out: ${checkOut || 'N/A'}
                Message: ${message || 'N/A'}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({
      name: '',
   
      roomType: '',
      checkIn: '',
      checkOut: '',
      message: '',
    });
  };

  return (
    <div>
      <Navbar />
      
      <div className="min-h-screen mt-24 w-[90%] mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">Contact Us</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-center text-gray-600">
          Get in touch with us to book your stay or for any inquiries. We are here to ensure your experience is exceptional.
        </p>
        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-center">Our Contact Details</h3>
            <div className="space-y-3 text-center text-gray-600">
              <p>
                <span className="font-semibold">Phone:</span> +94 70 323 8582
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:info@hotel.com" className="text-blue-600 hover:underline">
                  info@hotel.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> 123 Serenity Lane, Downtown, City, Country
              </p>
            </div>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019020324364!2d-122.41941568468157!3d37.77492927975975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5e9a3c7b%3A0x9b3b7e8c2d3a4c5d!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1697051234567!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location Map"
              ></iframe>
            </div>
          </div>
          {/* Contact Form */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-semibold text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="roomType" className="block mb-1 font-semibold text-gray-600">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="" disabled>
                    Select a room type
                  </option>
                  {rooms.flatMap((category) =>
                    category.subTypes.map((subType) => (
                      <option key={`${category.category}-${subType.name}`} value={subType.name}>
                        {category.category} - {subType.name}
                      </option>
                    ))
                  )}
                </select>
              </div>
              <div>
                <label htmlFor="checkIn" className="block mb-1 font-semibold text-gray-600">
                  Check-in Date 
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="checkOut" className="block mb-1 font-semibold text-gray-600">
                  Check-out Date (Optional)
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-semibold text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Your message or inquiry"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;