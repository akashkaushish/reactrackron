import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Creativedesign extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Creative Design" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/creative_design_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>Rackron is a full service creative designs company. We design beautiful Websites, Compelling Logo & Landing Pages, Interactive Mobile Apps and Seller Banner Ads.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/creative_design_img.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">Interactive Design</h2>
                                    <p>RACKRON is a full service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps and seller banner ads. When it comes to creative designing, our aim is to deliver services that are well aligned with your business objectives and brand messaging. We are highly passionate about our creative designing services and strive for innovation and uniqueness in whatever we deliver. It is our utmost priority to engage with our clients and develop designs that are quick to appeal and captivate.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR INTERACTIVE DESIGN SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="Website Design" 
                                    boxIcon="bi bi-file-image-fill" 
                                    boxDesc="Every business is unique – whether you need an innovative and interactive website or prefer a formal, traditional approach – we have experience that speaks for itself. Our USP lies in providing design mocks, wireframes, etc. until we ensure definitive client satisfaction. We also take customer feedback at every stage to design scalable websites optimized for the best desktop and mobile experiences whilst being easy to maintain." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Mobile APP Design" 
                                    boxIcon="bi bi-phone-fill" 
                                    boxDesc="In the “mobile first” world of today, it is increasingly important to create mobile app designs that engage, delight and retain users by providing a holistic, intuitive and easy to use interface. We design mobile apps for a remarkable user experience and do our best to ensure the app we develop for you is one of the most sought after in the targeted industry and has multiple downloads." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="LOGO & Landing Page Design" 
                                    boxIcon="bi bi-palette-fill" 
                                    boxDesc="Logo & Landing pages require strategic design that is targeted at providing all important information at one glance. Instant user engagement can also be achieved through an immensely captivating design. We have managed to do so successfully for several of our clients and continue to do so. We can create landing page designs with relevant content, impactful calls to action and highly user friendly layout customized for lead generation and sign-ups" 
                                    boxLink=""
                                    />

                                    

                                </div>
                            </div>
                        </section>

                        <Testimonialhome />
                        
                        
                        
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Creativedesign;