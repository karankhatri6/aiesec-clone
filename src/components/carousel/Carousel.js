import React, {useState} from 'react';
import {CarouseData} from './CarouseData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowLeft, faLongArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Carousel.css';


const Carousel = (slides) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

  return (
    <div className='image-carousel'>
        <div className='container'>
            <p>Spotlight</p>
            <div className='btn-container'>
                <button className='pre-btn' onClick={prevSlide}><FontAwesomeIcon icon={faLongArrowLeft} /></button>
                <button className='next-btn' onClick={nextSlide}><FontAwesomeIcon icon={faLongArrowRight} /></button>
            </div>
        </div>
        <div className='image-container'>
            {CarouseData.map((slide, index) => {
                return (
                    <div
                      className={index === current ? 'slide active' : 'slide'}
                      key={index}
                    >
                      {index === current && (
                        <img src={slide.image} alt='slide image' />
                      )}
                    </div>
                  );
            })}
        </div>
    </div>
  );
};

export default Carousel;