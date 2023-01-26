import React from 'react';
import Heroimg from '../../images/herosecimg.png';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div>
        <section className='hero-section'>
            <div className='hero-heading'>
                <h1> <span>Leadership </span>is for every young person</h1>
                <h4>Take part in one of our programs abroad, in your city, or virtually. Start your leadership journey with AIESEC.</h4>
                <button className='hero-btn'><span>Let's get started!</span></button>
            </div>
            <div className='hero-image'>
                <img src={Heroimg} alt="Hero image"/>
            </div>
        </section>
    </div>
  );
};

export default HeroSection;