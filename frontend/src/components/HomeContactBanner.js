import React from 'react'
import "./cssComponents/HomeContactBanner.css";
import { Container } from 'react-bootstrap'

export const HomeContactBanner = () => {
    return (
        <div className='HomeContactBannerSection'>
            <Container>
                <div className='HomeContactBanner'>
                <div className='hcbItem1'>
                    <p>Iti ridicam masina</p>
                    <span>la orice ora</span>
                </div>
                <div className='hcbItem2'>
                    <p>Timpul tau conteaza, de aceea iti venim in ajutor cu serviciul nou de preluare si predare a masinii tale din fata cassei </p>
                    <span>SRS Auto 24/7</span>
                </div>
                <div className='hcbItem3'>
                    <img src='/images/banner-key-new.png' />
                </div>
                <a className='btnDetails' href='/drop-off'>Detalii</a>
            </div>
            </Container>
        </div>
    )
}
