import React from 'react';
import Navbar from '../components/Navbar';


function Facilities() {
  const facilities = [
    {
      title: 'Swimming Pool',
      description: 'Relax in our sparkling outdoor pool, perfect for a refreshing dip or lounging under the sun.',
      image: 'https://images.unsplash.com/photo-1576675764574-870ed801f7f7',
      alt: 'Outdoor swimming pool with scenic surroundings',
    },
    {
      title: 'Spa',
      description: 'Unwind with a soothing massage or rejuvenating treatment in our tranquil spa.',
      image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
      alt: 'Calm spa room with ambient lighting',
    },
    {
      title: 'Gym',
      description: 'Stay active in our modern fitness center, equipped with state-of-the-art machines.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      alt: 'Modern gym with exercise equipment',
    },
    {
      title: 'Restaurant',
      description: 'Savor delicious meals crafted by our chefs, from local flavors to international cuisine.',
      image: 'https://images.unsplash.com/photo-1578683014728-903d11dcdc91',
      alt: 'Elegant hotel restaurant dining area',
    },
    {
      title: 'Wi-Fi',
      description: 'Stay connected with high-speed Wi-Fi available throughout the hotel.',
      image: 'https://images.unsplash.com/photo-1516321318423-3b56ce18f053',
      alt: 'Person using laptop with Wi-Fi',
    },
    {
      title: 'Parking',
      description: 'Enjoy hassle-free parking with our secure and convenient on-site facilities.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      alt: 'Secure hotel parking area',
    },
  ];

  return (
    <div>
     
      <div className="container flex flex-col min-h-screen mx-auto">
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