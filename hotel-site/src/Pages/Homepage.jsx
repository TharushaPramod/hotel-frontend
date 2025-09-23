import React from 'react'
import Navbar from '../components/Navbar'
import Cover from '../images/Cover.png'

function Homepage() {
  return (
   <div className='min-h-screen font-sans bg-gray-100'>

      <div className=''>
        <Navbar/>
        <img 
            src={Cover}
            className='object-cover mx-auto '
        />
      </div>

      

   </div>
  )
}

export default Homepage
