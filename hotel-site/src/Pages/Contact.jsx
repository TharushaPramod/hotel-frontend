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
      
      
      <div className="min-h-screen  w-[100%] mx-auto pt-10 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-7">Contact Us</h2>
        <div className=''>
        <p className="max-w-4xl p-8 mx-auto mb-8 text-lg text-center text-gray-600 md:p-8">
          Get in touch with us to book your stay or for any inquiries. We are here to ensure your experience is exceptional.
        </p>
        </div>
        <div className="w-[90%] mx-auto">
           <div className="flex flex-col items-center gap-40 md:flex-row w-[90%] mx-auto">

             {/* Contact Form */}
        <div className=" md:w-1/2">
            <h3 className="mb-4 text-xl font-semibold text-center">Make a Booking</h3>
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
          {/* Contact Information */}
          <div className=" md:w-1/2">
           <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1565.2583748378097!2d79.9608827909192!3d6.625436593131797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1758693917885!5m2!1sen!2slk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location Map"
              ></iframe>
            </div>
            <h3 className="mt-10 mb-4 text-xl font-semibold text-center">Our Contact Details</h3>
            <div className="space-y-2 text-center text-gray-600">
              <p>
                <span className="font-semibold">Phone:</span> +94 70 323 8582
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <a href="hotelopal@.com" className="text-blue-600 hover:underline">
                  hotelopal@.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Address:</span> 61,1st Lane ,kalutara, Sri Lanka
              </p>
            </div>
           
          </div>
         
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;