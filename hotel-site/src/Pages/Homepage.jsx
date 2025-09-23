import React from 'react'
import Navbar from '../components/Navbar'
import CoverImage from '../images/hotelcover.jpg'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className='min-h-screen font-sans bg-gray-100'>

      {/* Navbar at top */}
      <Navbar />

      {/* Cover image with overlay */}
      <div className="relative">
        <img
          src={CoverImage}
          alt="Serenity Hotel exterior"
          className="object-cover w-full h-[100vh]  md:h-[70vh] lg:h-[70vh]"
        />

        {/* Overlay with centered text */}
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black bg-opacity-40">
          <div className="max-w-3xl text-center text-gray-100">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Welcome to Hotel Opal
            </h1>
            <p className="mb-6 text-base sm:text-lg md:text-xl">
              Discover a haven of comfort and elegance in the heart of the city, where every stay is unforgettable.
            </p>
            <Link
              to="/contact"
              className="inline-block px-4 py-2 text-sm text-white transition-colors transition-transform duration-500 bg-blue-600 rounded-lg sm:px-6 sm:py-3 sm:text-base md:text-lg hover:bg-blue-700 hover:scale-105"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
