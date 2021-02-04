import React from 'react'
import emailjs from 'emailjs-com';
import '../components/cssComponents/ContactScreen.css'


const ContactScreen = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmailSRS', 'template_n3k7bbw', e.target, 'user_phjn8lI1i9wJXhsNe29HM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    
      return (
        // <form classNameNameName="contact-form" onSubmit={sendEmail}>
        //     <label>Name</label>
        //   <input type="text" name="from_name" placeholder='Nume' required/>
          
        //   <label>Email</label>
        //   <input type="text" name="from_email" placeholder='Email' required/>

        //   <label>Telefon</label>
        //   <input type="number" name="from_email" placeholder='Telefon' required/>
          
          
        //   <label>Message</label>
        //   <textarea name="message" required/>

        //   <input type="submit" value="Send" />
        // </form>
        <div className="contact3 py-5">
        <div className="row no-gutters">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-shadow">
                  <img src="/images/garraj.jpg" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-box ml-3">
                  <h1 className="font-weight-light mt-2">Contact SRS Auto</h1>
                  <form className="mt-4" onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="text" placeholder="nume" name='from_name' required/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="email" name="from_email" placeholder="email" required/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input className="form-control" type="text" name="from_phone" placeholder="phone" required/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea className="form-control" rows="3" placeholder="message" name="message" required/>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span>TRIMITE</span></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card mt-4 border-0 mb-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail pl-0">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Adresa</h6>
                          <p className="">str. 1 Decembrie nr. 2
                            <br />Baia Mare</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Telefon</h6>
                          <p className="">0745 672 523
                            <br /> 0745 672 523</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                      <div className="card-body d-flex align-items-center c-detail">
                        <div className="mr-3 align-self-center">
                            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                        </div>
                        <div className="">
                          <h6 className="font-weight-medium">Email</h6>
                          <p className="">           
                                   robbertsergiu@gmail.com
                            <br /> srsauto@office.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactScreen