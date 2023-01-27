import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HeroSection from './components/herosection/HeroSection';

const App = () => {
  return (
    <div>
      < Navbar />
      < HeroSection />
      <div className='scroll-down'>
        <div className='scroll-down-line'></div>
        <span>Scroll Down</span>
        <div className='scroll-down-line'></div>
      </div>
    </div>
  );
};

export default App;