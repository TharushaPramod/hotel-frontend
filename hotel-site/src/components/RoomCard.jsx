import React from 'react';
import { Link } from 'react-router-dom';

function RoomCard({ category, image, priceRange, description,rooms }) {
  return (
    <Link to={`/rooms/${category}`}>
    <div className="m-4 overflow-hidden duration-500 bg-white rounded-lg shadow-lg transaction-transform hover:scale-105">
      <img
        src={image}
        alt={`${category} image`}
        className="object-cover w-full h-60"
        
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl font-bold">{category}</h3>
        <p className="mb-2 text-gray-600">{description}</p>
        <p className="text-gray-600">{priceRange}</p>
      </div>
    </div>
    </Link>
  );
}

export default RoomCard;