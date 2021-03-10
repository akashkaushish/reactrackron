import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';

import Contactform from '../Contactform';
import Contactmap from '../Contactmap';

class Contactus extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                       {/* <Topslider 
                            pageTitle="Contact Us" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/contect_banner.jpg`}
                        /> */}
                        <section id="contact"  className="contact">
                            <div  className="container">

                                <div  className="row">
                                <div  className="col-lg-6">
                                    <div  className="info-box mb-4">
                                    <i  className="bi bi-geo-alt-fill"></i>
                                    <h3>Our Address</h3>
                                    <p>C-133, Third Floor, Industrial Area, Phase-8, SAS Nagar Mohali- 160072</p>
                                    </div>
                                </div>

                                <div  className="col-lg-3 col-md-6">
                                    <div  className="info-box  mb-4">
                                    <i  className="bi bi-envelope-fill"></i>
                                    <h3>Email Us</h3>
                                    <p>info@rackron.com</p>
                                    </div>
                                </div>

                                <div  className="col-lg-3 col-md-6">
                                    <div  className="info-box  mb-4">
                                    <i  className="bi bi-telephone-fill"></i>
                                    <h3>Call Us</h3>
                                    <p>+91-172-4005931</p>
                                    </div>
                                </div>

                                </div>

                                <div  className="row">

                                <Contactmap />

                                <Contactform />

                                </div>

                            </div>
                        </section>
                        
                       
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Contactus;