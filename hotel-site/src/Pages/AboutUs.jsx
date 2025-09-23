import React from 'react'
import aboutimage from '../images/aboutimage.jpg'

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container px-4 py-12 mx-auto">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={aboutimage}
              alt="Serenity Hotel Exterior"
              className="w-full h-auto rounded-lg shadow-lg "
            />
          </div>
          {/* Text Content */}
          <div className="md:w-1/2">
            <h2 className="mb-4 text-3xl font-semibold text-center text-gray-800 md:text-start">Our Story</h2>
            <p className="mb-3 text-gray-600">
              Established in 1995, Serenity Hotel is a haven of comfort and elegance in the heart of the city. Our mission is to provide guests with a restful retreat, combining modern amenities with a warm, welcoming atmosphere. From cozy rooms to exceptional dining, every aspect of our hotel is designed to create lasting memories.
            </p>
            <p className="mb-6 text-gray-600">
              Our dedicated team strives to deliver outstanding service, ensuring every guest feels at home. Whether you are traveling for business or leisure, Serenity Hotel offers a seamless blend of luxury and tranquility.
            </p>
            <a
              href="/contact"
             className="inline-block px-6 py-2 text-white transition-colors transition-transform duration-500 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 bg-gray-100">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">Our Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="text-center transition-transform duration-500 hover:scale-105">
              <h3 className="mb-2 text-xl font-medium text-blue-800">Hospitality</h3>
              <p className="text-gray-600">
                We treat every guest with care and respect, creating a home away from home.
              </p>
            </div>
            <div className="text-center transition-transform duration-500 hover:scale-105">
              <h3 className="mb-2 text-xl font-medium text-blue-800">Quality</h3>
              <p className="text-gray-600">
                From our facilities to our service, we uphold the highest standards.
              </p>
            </div>
            <div className="text-center transition-transform duration-500 hover:scale-105">
              <h3 className="mb-2 text-xl font-medium text-blue-800">Community</h3>
              <p className="text-gray-600">
                We support local businesses and foster a sense of connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
