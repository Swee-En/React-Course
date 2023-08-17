import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Services from './Services';
import Portfolio from './Portfolio';
import About from './About';
import Team from './Team';
import Clients from './Clients';
import Contact from './Contact';
import Footer from './Footer';
import PortfolioModal from './PortfolioModal';
import Home from './Home';
import HeaderTop from './HeaderTop';

function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/team' element={<Team />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
