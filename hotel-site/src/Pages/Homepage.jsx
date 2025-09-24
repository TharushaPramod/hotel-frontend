import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import PeopleIcon from '@mui/icons-material/People';
import HotelIcon from '@mui/icons-material/Hotel';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <div className="min-h-screen font-sans bg-gray-100">
     
      <HeroBanner />
      <div className="max-w-4xl px-4 py-12 mx-auto text-center">
        <h2 className="mb-6 text-3xl font-semibold text-gray-800">Welcome to OPAL Hotel</h2>
        <p className="mb-8 text-lg text-gray-600">
          Established in 1995, OPAL Hotel offers a serene escape in the heart of the city. Our mission is to provide guests with unparalleled comfort and elegance, blending modern amenities with a warm, inviting atmosphere. From cozy rooms to exceptional dining experiences, every detail is crafted to create unforgettable memories.
        </p>
      </div>
      <div className="py-10 pb-32 bg-white">
        <div className="grid max-w-4xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-3">
          <div className="text-center">
            <PeopleIcon className="mx-auto mb-4 text-4xl text-blue-600" />
            <h3 className="text-4xl font-bold text-gray-800">1000+</h3>
            <p className="text-gray-600">Visitors Monthly</p>
          </div>
          <div className="text-center">
            <HotelIcon className="mx-auto mb-4 text-4xl text-blue-600" />
            <h3 className="text-4xl font-bold text-gray-800">250</h3>
            <p className="text-gray-600">Rooms Available</p>
          </div>
          <div className="text-center">
            <RoomServiceIcon className="mx-auto mb-4 text-4xl text-blue-600" />
            <h3 className="text-4xl font-bold text-gray-800">75</h3>
            <p className="text-gray-600">Staff Members</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Homepage;