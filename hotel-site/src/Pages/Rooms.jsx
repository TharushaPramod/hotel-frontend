import React from 'react';
import Navbar from '../components/Navbar';
import rooms from '../components/room';
import RoomCard from '../components/RoomCard';

function Rooms() {

    
    
  return (
    <div>
      
      <div className="min-h-screen mt-10 w-[90%] mx-auto mb-20">
        <div>
             <h2 className="mb-8 text-3xl font-semibold text-center">Our Rooms</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {rooms.map((room, index) => (
            <RoomCard
              key={index}
              rooms={room}
              category={room.category}
              image={room.image}
              priceRange={room.priceRange}
               description={room.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;