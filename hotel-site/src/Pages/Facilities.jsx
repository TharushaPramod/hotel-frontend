import React from 'react';
import Navbar from '../components/Navbar';
import pool from '../images/pool.jpg'
import spa from '../images/spa.jpg'
import gym from '../images/gym.jpg'
import rest from '../images/rest.jpg'
import wifi from '../images/wifi.jpg'
import park from '../images/park.jpg'



function Facilities() {
  const facilities = [
    {
      title: 'Swimming Pool',
      description: 'Relax in our sparkling outdoor pool, perfect for a refreshing dip or lounging under the sun.',
      image: pool,
      alt: 'Outdoor swimming pool with scenic surroundings',
    },
    {
      title: 'Spa',
      description: 'Unwind with a soothing massage or rejuvenating treatment in our tranquil spa.',
      image: spa,
      alt: 'Calm spa room with ambient lighting',
    },
    {
      title: 'Gym',
      description: 'Stay active in our modern fitness center, equipped with state-of-the-art machines.',
      image: gym,
      alt: 'Modern gym with exercise equipment',
    },
    {
      title: 'Restaurant',
      description: 'Savor delicious meals crafted by our chefs, from local flavors to international cuisine.',
      image: rest,
      alt: 'Elegant hotel restaurant dining area',
    },
    {
      title: 'Wi-Fi',
      description: 'Stay connected with high-speed Wi-Fi available throughout the hotel.',
      image: wifi,
      alt: 'Person using laptop with Wi-Fi',
    },
    {
      title: 'Parking',
      description: 'Enjoy hassle-free parking with our secure and convenient on-site facilities.',
      image: park,
      alt: 'Secure hotel parking area',
    },
  ];

  return (
    <div>
     
      <div className="container flex flex-col min-h-screen mx-auto mt-10 mb-24">
        <h2 className="mb-4 text-3xl font-semibold text-center">Our Facilities</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-center text-gray-600 ">
          Experience comfort and convenience with our exceptional amenities, designed to make your stay unforgettable.
        </p>
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="m-4 overflow-hidden duration-500 rounded-lg shadow-lg bg-gray-50 transaction-transform hover:scale-105"            >
              <img
                src={facility.image}
                alt={facility.alt}
                className="object-cover w-full h-60 "
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Facilities;