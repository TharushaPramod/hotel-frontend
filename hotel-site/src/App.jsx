
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Homepage from './Pages/Homepage';
import Rooms from './Pages/Rooms';
import Gallery from './Pages/Gallery';
import Facilities from './Pages/Facilities';


function App() {

  return (
  <div>
    <Routes>
       <Route path='/' element={<Homepage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/rooms' element={<Rooms/>}></Route>
      <Route path='/facilities' element={<Facilities/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>

    </Routes>
  </div>
  );
}

export default App;