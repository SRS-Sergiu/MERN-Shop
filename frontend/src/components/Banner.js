import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Vopsitorie Auto</h1>
            <h3>Cel mai bun services din oras! apeleaza cu incredere</h3>
            <Link to='/services'>See More</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/autopaint.jpg' />
        </div>
      </div>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Spalatorie Auto</h1>
            <h3>Dispunem de o spalatorie self wash non-stop</h3>
            <Link to='/services'>See More</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/spalatorie.jpg' />
        </div>
      </div>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Mecanica Auto</h1>
            <h3>O echipa de profesionisti te asteapta la atelier!</h3>
            <Link to='/services'>Vezi mai multe</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/auto-2191185_1920.jpg' />
        </div>
      </div>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Electronica Auto</h1>
            <h3>O echipa de profesionisti te asteapta la atelier!</h3>
            <Link to='/services'>Vezi mai multe</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/autoparts.jpg' />
        </div>
      </div>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Detailing Auto</h1>
            <h3>O echipa de profesionisti iti face masina ca noua!</h3>
            <Link to='/services'>Vezi mai multe</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/polsihcar.jpg' />
        </div>
      </div>
      <div className='bannerItem'>
        <div className='bannerCaption'>
            <h1>Piese Auto</h1>
            <h3>Aici gasesti orice piesa auto</h3>
            <Link to='/services'>Vezi mai multe</Link>
        </div>
        <div className='bannerImg'>
                 <img src='/images/NAPA-AUTO-PARTS-Grand-Reopening.jpg' />
        </div>
      </div>
    
    </Slider>
  );
}