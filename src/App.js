import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/herosection/HeroSection';
import ScrollDown from './components/scrollDown/ScrollDown';
import Carousel from './components/carousel/Carousel';
import {CarouseData} from './components/carousel/CarouseData'; 
import Program from './components/program/Program'; 

const App = () => {
  return (
    <div>
      < Navbar />
      < HeroSection />
      < ScrollDown />
      < Carousel slides={CarouseData} />
      < Program />
    </div>
  );
};

export default App;