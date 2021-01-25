import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import './css/Slider.css' 
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  setTimeout(nextSlide, 5000)

  return (
    
    <section className='slider'>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          {SliderData.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' />
                )}
              </div>
            );
          })} 
          <Container>
              <div className='silderCaption'>
                  <h1>SRS <span>Auto</span></h1>
                  <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, w</p>
                  <Link to='/productslist' className='sliderBtn' >See more</Link>
              </div>
          </Container>
    </section> 
  );
};

export default ImageSlider;
