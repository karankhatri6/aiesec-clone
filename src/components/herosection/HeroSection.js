import React from 'react';
import Heroimg from '../../images/herosecimg.png';
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <section className='hero-section-box'>
            <div className='hero-heading'>
                <h1> <span>Leadership </span>is for every young person</h1>
                <p>Take part in one of our programs abroad, in your city, or virtually. Start your leadership journey with AIESEC.</p>
                <button className='hero-btn'><span>Let's get started!</span></button>
            </div>
            <div className='hero-image'>
                <img src={Heroimg} alt="Hero image" />
            </div>
        </section>
    </div>
  );
};

export default HeroSection;