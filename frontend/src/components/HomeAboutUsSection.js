import React from 'react'
import { Container } from 'react-bootstrap'
import "./cssComponents/HomeAboutUsSection.css";

export const HomeAboutUsSection = () => {
    return (
        <Container className="homeAboutUs">
           <div className='hAbUsImg'>
               <img src='./images/automobile-repairman-painter-protective-workwear-respirator-painting-car-body-paint-chamber_46383-573.jpg' />
           </div>
           <div className="hAbUsContent">
                <h2>De unde a inceput? <i class="fas fa-car"></i></h2>
                <p>Totul a inceput din pura pasiune pentru o masina bine ingrjita. Cu timpul ne-am specializat si am facut din domeniul auto o arta despre masini.</p>
                <div className='hAbUsIcons'>
                    
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car.svg' />
                        <h3>vopsitorie</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/wrench.svg' />
                        <h3>mecanica</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car-parts.svg' />
                        <h3>Piese Auto</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car-service.svg' />
                        <h3>detailing</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car-wash.svg' />
                        <h3>spalatorie</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/electric-car.svg' />
                        <h3>Electrica</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car-dealer.svg' />
                        <h3>Vanzari</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/car-rental.svg' />
                        <h3>Inchirieri</h3>
                    </div>
                    <div className='hAbUsIconsItem'>
                        <img src='./images/icons/trailer.svg' />
                        <h3>Remorci</h3>
                    </div>
                </div>
           </div>
        </Container>
    )
}
