import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';

import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Qualitytesting extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Quality Testing" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/testing_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>The importance of Quality Testing cannot be undermined but it often ends up being a rather tedious process for most organizations.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/testing_img.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">Quality Analysis & Testing</h2>
                                    <p>The importance of quality testing cannot be undermined but it often ends up being a rather tedious process for most organizations. This is where we help our clients by ensuring a rigorous quality testing process comprising of manual testing services, automated testing services, performance testing services and security testing services. Ours a holistic quality testing service that leaves no room for error and ensures the highest quality for your web and mobile applications.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR QA/QC SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="Manual Testing" 
                                    boxIcon="bi bi-person-check-fill" 
                                    boxDesc="No matter how skilled your developers are, errors may still be prevalent. That is where our manual testing specialists come in. We have decades of collective experience in different areas of manual testing including use case-driven scripted approaches, freeform exploratory testing, traditional desktop platforms, mobile testing, web accessibility and system interoperability." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Automated Testing" 
                                    boxIcon="bi bi-terminal-fill" 
                                    boxDesc="As enterprises rush to go live in shortest possible time or look to optimize budgets, effective software testing ends up in a casualty.RACKRON provides complete suite of test automation solutions ranging from assessment and consulting to execution and innovation. Our automated testing services help clients reduce testing cycle time provide higher productivity and drive greater predictability to help minimize time to market." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Performance Testing" 
                                    boxIcon="bi bi-symmetry-vertical" 
                                    boxDesc="Performance testing’s impact on business revenue, credibility of enterprise and customer satisfaction makes it a critical part of application testing services. While traditional performance testing approaches are reactive in nature, RACKRON performance testing services are a fusion of testing and engineering methodologies to help businesses transform new and existing applications." 
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
    
export default Qualitytesting;