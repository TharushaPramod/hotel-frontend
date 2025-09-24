import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import rooms from "../components/room";

function RoomDetails() {
  const { category } = useParams(); 
  const room = rooms.find((r) => r.category === category);

  return (
    <div>
    
      <div className="min-h-screen mx-auto mt-10 mb-15">
       
        <h2 className="mb-8 text-3xl font-bold text-center">
          {room.category} Details
        </h2>

      
        <div className="mb-12 text-center bg-gray-100 ">
         <p className="p-4 text-lg text-gray-600 md:p-8 md:px-40 lg:px-60">{room.idescription}</p>
          
        </div>

   
        <h3 className="mb-6 text-2xl font-bold text-center text-blue-800">Room Types</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 w-[90%] mx-auto">
          {room.subTypes.map((subType, index) => (
            <div
              key={index}
              className="m-4 overflow-hidden duration-500 bg-white rounded-lg shadow-lg transaction-transform hover:scale-105"
            >
              <img
                src={subType.image}
                alt={subType.name}
                className="object-cover w-full h-60"
              />
               <div className="p-4">
              <h3 className="mb-2 text-xl font-bold">{subType.name}</h3>
              <p className="mb-2 text-gray-600">{subType.description}</p>
              <p className="text-blue-600">{subType.priceRange}</p>
            </div>
            </div>
          ))}
        </div>

        
        <div className="mt-10 mb-10 text-center">
          <Link
            to="/rooms"
            className="inline-block px-6 py-2 text-white transition-colors duration-200 bg-blue-600 rounded-full hover:bg-blue-700"
          >
            Back to Rooms
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
