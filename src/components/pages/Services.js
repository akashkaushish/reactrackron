import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';

class Services extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Services" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/services_banner.jpg`}
                        />
                        

                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>WHAT WE DO?</h2>
                                    <p>OUR SERVICES ARE DELIVERED BY OUR TEAM WITH YEARS OF EXPERIENCE ARE PASSIONATE ABOUT DEVELOPING BUSINESS.</p>
                                </div>
                                <div className="row">
                                <Serviceboxhome 
                                boxTitle="Web Development" 
                                boxIcon="bi bi-file-code-fill" 
                                boxDesc="Rackron is always on hand to act immediately with any urgent task or project, ensuring high quality services are delivered and maintained consistently." 
                                boxLink="/webdevelopment"
                                />
                                <Serviceboxhome 
                                    boxTitle="Creative Designs" 
                                    boxIcon="bi bi-palette-fill" 
                                    boxDesc="Rackron is a full service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps and seller banner ads." 
                                    boxLink="/creativedesign"
                                />
                                <Serviceboxhome 
                                    boxTitle="Mobile Development" 
                                    boxIcon="bi bi-phone-fill" 
                                    boxDesc="Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. The onset of mobile era has changed the way consumers communicate and businesses operate." 
                                    boxLink="/mobiledevelopment"
                                />
                                <Serviceboxhome 
                                    boxTitle="Digital Marketing" 
                                    boxIcon="bi bi-megaphone-fill" 
                                    boxDesc="The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning." 
                                    boxLink="/digitalmarketing"
                                />
                                <Serviceboxhome 
                                    boxTitle="E-commerce Solution" 
                                    boxIcon="bi bi-cart-check-fill" 
                                    boxDesc="Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores." 
                                    boxLink="/ecommercesolution"
                                />
                                <Serviceboxhome 
                                    boxTitle="Quality Testing" 
                                    boxIcon="bi bi-patch-check-fill" 
                                    boxDesc="The importance of quality testing cannot be undermined but it often ends up being a rather tedious process for most organizations." 
                                    boxLink="/qualitytesting"
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
    
export default Services;