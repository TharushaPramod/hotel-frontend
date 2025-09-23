import React from 'react';
import Navbar from '../components/Navbar';

function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      alt: 'Cozy hotel lounge with modern decor',
    },
    {
      src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      alt: 'Luxurious hotel bedroom with city view',
    },
    {
      src: 'https://images.unsplash.com/photo-1578683014728-903d11dcdc91',
      alt: 'Elegant hotel dining area',
    },
    {
      src: 'https://images.unsplash.com/photo-1576675764574-870ed801f7f7',
      alt: 'Outdoor pool with scenic surroundings',
    },
    {
      src: 'https://images.unsplash.com/photo-1596436889106-be35e843f974',
      alt: 'Spa room with calming ambiance',
    },
    {
      src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      alt: 'Hotel exterior at dusk',
    },
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      alt: 'Rooftop bar with city skyline',
    },
    {
      src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9',
      alt: 'Modern hotel lobby',
    },
  ];

  return (
    <div>
      
      <div className="flex flex-col min-h-screen w-[90%] mx-auto" >
        <h2 className="mb-4 text-3xl font-bold text-center">Our Gallery</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-center text-gray-600">
          Discover the elegance and comfort of our hotel through these vibrant images. From cozy rooms to stunning views, explore what makes our space truly special.
        </p>
        <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="m-4 overflow-hidden transition-transform duration-500 bg-white rounded-lg shadow-lg hover:scale-105 "
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;