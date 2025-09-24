
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Homepage from './Pages/Homepage';
import Rooms from './Pages/Rooms';
import Gallery from './Pages/Gallery';
import Facilities from './Pages/Facilities';
import Contact from './Pages/Contact';
import RoomDetails from './Pages/RoomDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  return (
  <div>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/rooms' element={<Rooms/>}></Route>
      <Route path='/facilities' element={<Facilities/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
<Route path="/rooms/:category" element={<RoomDetails />} />
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;