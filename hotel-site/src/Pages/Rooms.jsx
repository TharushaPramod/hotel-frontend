import React from 'react';
import Navbar from '../components/Navbar';
import rooms from '../components/room';
import RoomCard from '../components/RoomCard';

function Rooms() {
  return (
    <div>
      
      <div className="min-h-screen mt-24 w-[90%] mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {rooms.map((room, index) => (
            <RoomCard
              key={index} // Consider using a unique ID if available
              category={room.category}
              image={room.image}
              priceRange={room.priceRange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;