import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Webdevelopment extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Web Development" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/web_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>Rackron is always on hand to act immediately with any urgent task or project, ensuring high quality services are delivered and maintained consistently.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/web_development.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">Websites Development</h2>
                                    <p>RACKRON prides itself in successfully creating portals, websites, web applications as well as widgets and plugins for some of the top B2B and B2C companies. Whilst there is no dearth of web development services providers in today’s times, our USP lies in the custom pre-development process. We partner with our clients to provide the best suited solutions for their business. Your technical teams put forth the expectations and our seasoned analysts take it from there.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR WEB DEVELOPMENT SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="LAMP Development" 
                                    boxIcon="bi bi-circle-square" 
                                    boxDesc="Our talented programmers live up to mark all your LAMP (Linux, Apache, MySql,PHP) web development requirements including website development, corporate website development, etc. We make complete use of this open source scripting language to create lively web pages.Our experts follow proper documentation for every code and try to keep the codes simple as it proves to be time-saving." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="ReactJs & HTML5 Development" 
                                    boxIcon="bi bi-exclude" 
                                    boxDesc="We have the expertise to design and develop cross platform compatible rich internet applications. Our team works closely with our customers to understand the requirements and then define a user interface which is rich in navigation, visualization and interaction yet simple in terms of layout and usability." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="MERN Development" 
                                    boxIcon="bi bi-file-earmark-check-fill" 
                                    boxDesc="Rackron is a MERN (MongoDB, ExpressJs, ReactJs, NodeJs) development company, that run deep in MERN technologies and provides premium solutions to all clients. We have tremendous experience in developing, Websites, VOIP systems and plugins, Set Top box plugins, Enigma OS plugins, hardware integration, backend web services and API, and much more." 
                                    boxLink=""
                                    />

                                    <Serviceboxhome 
                                    boxTitle="eCommerce Solutions Development" 
                                    boxIcon="bi bi-cart-check-fill" 
                                    boxDesc="With more and more businesses going online, the e-commerce marketplace has become highly competitive. A standard off-the-shelf solution does not give the flexibility you require to enhance conversions and drive profit. Experienced RACKRON e-commerce design specialists and developers can create a custom e-commerce solution that works just right for your customers and maximizes conversions." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Framework" 
                                    boxIcon="bi bi-patch-check-fill" 
                                    boxDesc="Framework becomes intimately involved in the management and control of each property as we believe important information is often lost due to the finer details not being understood or acted upon. In addition, our employees and senior management regularly visit all properties to ensure that the management and administration of every site is handled with equal attention." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Shell Scripting" 
                                    boxIcon="bi bi-file-earmark-zip" 
                                    boxDesc="Like other UNIX operating systems and Linux, the IBM AIX operating system has several powerful tools that arm systems administrators, developers, and users to tackle day-to-day tasks and to simplify their or their customers’ business and life." 
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
    
export default Webdevelopment;