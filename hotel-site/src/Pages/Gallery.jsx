import React from 'react';
import Navbar from '../components/Navbar';
import Gallery1 from '../images/Gallery/gallery1.jpg';
import Gallery2 from '../images/Gallery/gallery2.jpg';
import Gallery3 from '../images/Gallery/gallery3.jpg';
import Gallery4 from '../images/Gallery/gallery4.jpg';
import Gallery5 from '../images/Gallery/gallery5.jpg';
import Gallery6 from '../images/Gallery/gallery6.jpg';
import Gallery7 from '../images/Gallery/gallery7.jpg';
import Gallery8 from '../images/Gallery/gallery8.jpg';

function Gallery() {
  const images = [
    {
      src: Gallery1,
      alt: 'Cozy hotel lounge with modern decor',
    },
    {
      src: Gallery2,
      alt: 'Luxurious hotel bedroom with city view',
    },
    {
     src: Gallery3,
      alt: 'Elegant hotel dining area',
    },
    {
      src: Gallery4,
      alt: 'Outdoor pool with scenic surroundings',
    },
    {
     src: Gallery5,
      alt: 'Spa room with calming ambiance',
    },
    {
    src: Gallery6,
      alt: 'Hotel exterior at dusk',
    },
    {
      src: Gallery7,
      alt: 'Rooftop bar with city skyline',
    },
    {
      src: Gallery8,
      alt: 'Modern hotel lobby',
    },
  ];

  return (
    <div className='mb-20 '>
      
      <div className="container flex flex-col min-h-screen pt-10 mx-auto" >
        <h2 className="mb-4 text-3xl font-semibold text-center opacity-75">Our Gallery</h2>
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