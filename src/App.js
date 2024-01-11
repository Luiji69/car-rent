import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import VehicleList from './pages/VehicleList';
import Testimonial from './pages/Testimonial';
import OurTeam from './pages/OurTeam';


import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicleslist" element={<VehicleList />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/ourteam" element={<OurTeam />} />
          
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
