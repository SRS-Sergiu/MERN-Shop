import React from 'react'
import '../components/cssComponents/ServicesPage.css'

const ServicesScreen = () => {
    return (
      <>
        <section className="leftServicesBox d-flex align-items-center mb-5 mt-5">
                <div className="imgServices">
                        <img alt='asd' src='/images/carpaint.jpg'/>
                </div>
                <div className='servicesDetailsBox'>
                    <h2>Vopsitorie</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
        </section>
        <section className="rightServicesBox d-flex align-items-center mb-5 mt-5">
                 <div className='servicesDetailsBox'>
                    <h2>Spalatorie</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
                <div className="imgServices">
                        <img alt='asd' src='/images/manual-car-wash-with-pressurized-water-car-wash-outside_56854-2074.jpg'/>
                </div>
        </section>




        <section className="leftServicesBox d-flex align-items-center mb-5 mt-5">
              <div className="imgServices">
                  <img alt='asd' src='/images/auto-mechanic-checking-car_1303-14042.jpg'/>
                </div>
                <div className='servicesDetailsBox'>
                    <h2>Mecanica</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
        </section>
        <section className="rightServicesBox d-flex align-items-center mb-5 mt-5">
                 <div className='servicesDetailsBox'>
                    <h2>Tinichigerie</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
                <div className="imgServices">
                        <img alt='asd' src='/images/mechanic-worker-repairman-sanding-polishing-car-body-preparing-automobile-painting-workshop-garage_342744-318.jpg'/>
                </div>
        </section>
        


        <section className="leftServicesBox d-flex align-items-center mb-5 mt-5">
                <div className="imgServices">
                        <img alt='asd' src='/images/man-polish-salon-car-garage_1157-36595.jpg'/>
                </div>
                <div className='servicesDetailsBox'>
                    <h2>Detailing</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
        </section>
        <section className="rightServicesBox d-flex align-items-center mb-5 mt-5">
                <div className='servicesDetailsBox'>
                    <h2>Piese Auto</h2>
                    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan</p>
                    <a className='btnSimple' href='/contact'>Contacteaza-ne</a>
                </div>
                <div className="imgServices">
                        <img alt='asd' src='/images/NAPA-AUTO-PARTS-Grand-Reopening.jpg'/>
                </div>
        </section>
      </>
    )
}

export default ServicesScreen