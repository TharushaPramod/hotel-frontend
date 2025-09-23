import React from 'react';

function RoomCard({ category, image, priceRange }) {
  return (
    <div className="m-10 overflow-hidden transition-transform duration-500 bg-white rounded-lg shadow-lg hover:scale-105">
      <img
        src={image}
        alt={`${category} image`}
        className="object-cover w-full h-60"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{category}</h3>
        <p className="text-gray-600">{priceRange}</p>
      </div>
    </div>
  );
}

export default RoomCard;