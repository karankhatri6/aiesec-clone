import React from 'react';
import Program1 from '../../images/program1.png';
import Program2 from '../../images/program2.jpg';
import Program3 from '../../images/program3.jpeg';
import Product1 from '../../images/product1.png';
import Product2 from '../../images/product2.png';
import Product3 from '../../images/product3.png';
import './program.css'

const Program = () => {
  return (
        <div className='program'>
            <h1>Our Programs</h1>
            <p>We aim to develop leadership qualities and capabilities in young people with these programs</p>

            <div className='Cards'>
                <div className='card'>
                    <img src={Program1} alt='Program' className='image' />
                    <p>Explore teaching</p>
                    <img src={Product1} alt='product' className='pro-img'/>
                </div>

                <div className='card'>
                    <img src={Program2} alt='Program' className='image' />
                    <p>Explore interning</p>
                    <img src={Product2} alt='product' className='pro-img'/>
                </div>

                <div className='card'>
                    <img src={Program3} alt='Program' className='image'/>
                    <p>Explore volunteering</p>
                    <img src={Product3} alt='product' className='pro-img'/>
                </div>
            </div>
        </div>
  );
};

export default Program;