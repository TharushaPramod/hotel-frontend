import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoverImage1 from '../images/hotelcover.jpg';
import CoverImage2 from '../images/hotel3.jpg';
import CoverImage3 from '../images/hotel2.jpg';

const images = [CoverImage1, CoverImage2, CoverImage3];

function HeroBanner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Image Slider */}
      <div className="w-full h-[70vh] md:h-[70vh] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hotel Opal view ${index + 1}`}
            className={`absolute top-0 left-0 object-cover w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

     
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

      {/* Navigation Dots */}
      <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-5 h-2 rounded-full ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBanner;