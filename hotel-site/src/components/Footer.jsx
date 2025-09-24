import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];
  const facility = [
   "Swimming Pool", "Spa" ,"Gym","Resturant","Wi-Fi","Parking"
  ];

  return (
    <footer className="py-8 text-gray-300 bg-gray-800">
      <div className="grid grid-cols-4 gap-6 px-4 mx-auto max-w-[80%] md:grid-cols-4   ">
        <div className='flex flex-col items-center '>
          <h3 className="mb-3 text-lg font-semibold text-white">OPAL Hotel</h3>
          <p className="text-sm text-gray-400">Luxury and comfort since 1995.</p>
        </div>
         <div className='flex flex-col items-center '>
          <h3 className="mb-3 text-lg font-semibold text-white">Contact</h3>
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div className="flex items-center">
              <PhoneIcon className="mr-2 text-blue-600" />
              <p>+94 70 323 8582</p>
            </div>
            <div className="flex items-center">
              <EmailIcon className="mr-2 text-blue-600" />
              <a href="mailto:info@opalhotel.lk" className="hover:text-blue-600">
                info@opalhotel.lk
              </a>
            </div>
            <div className="flex items-center">
              <LocationOnIcon className="mr-2 text-blue-600" />
              <p>61,1st Lane ,kalutara, Sri Lanka</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className="mb-3 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-blue-600">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex flex-col items-center'>
            <h3 className="mb-3 text-lg font-semibold text-white ">Facilities</h3>
            <ul className="flex flex-col items-center space-y-2 text-sm">
                {facility.map((item) => (
                <li key={item}>
                  
                    {item}
                </li>
                ))}
            </ul>
            </div>
      </div>
      
    </footer>
  );
};

export default Footer;