import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Aboutus extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="About Us" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/about_banner.jpg`}
                        />
                        
                        <section id="about" className="about">
                        <div className="container">

                            <div className="row">
                            <Aboutusinfobox 
                            pageImg={`${process.env.PUBLIC_URL}/assets/img/about.jpg`}
                            />
                            
                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <p>We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world.</p>
                                <h3>Creating a More Engaging Business Website</h3>
                                <p>Business websites have to have high quality content to be successful, but when you make the effort to design a visually engaging site, you’ll make that content more enjoyable, capture new visitors’ attention, and keep them around longer.We develop long-term, successful business partnerships. When we complete your digital project, our desired result is that you naturally consider us to be part of your team.</p>
                            </div>
                            </div>

                        </div>
                        </section>

                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                {/*<div className="section-title">
                                    <h2>WHAT WE DO?</h2>
                                    <p>POWERFUL WEBSITES THAT LOOK BEAUTIFUL.</p>
                                </div>*/}
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="Innovative" 
                                    boxIcon="bi bi-lightbulb-fill" 
                                    boxDesc="We aim to build long term relationships with our clients even while fulfilling their software development needs." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Experimental" 
                                    boxIcon="bi bi-file-earmark-easel-fill" 
                                    boxDesc="We use an open source Moodle LMS for developing backend and Joomla or WP for front end designing." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Perfect" 
                                    boxIcon="bi bi-check-circle-fill" 
                                    boxDesc="Rackron is committed to delivering high quality products to clients helping them in this constantly changing and challenging biz world." 
                                    boxLink=""
                                    />
                                </div>
                            </div>
                        </section>

                        <section id="why-choose" className="why-choose">
                            <div className="container">
                                <div className="section-title">
                                    <h2>Why choose us</h2>
                                    <p>With so many agencies out there, here’s why our offering stands head and shoulders above the competition:</p>
                                </div>
                                <div className="row">
                                    <Aboutwhychooseusbox
                                        boxTitle="Full-service digital Company" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="We look at all aspects of your web presence, so that we can deliver both short-term and long-term solutions." 
                                    />
                                    <Aboutwhychooseusbox
                                        boxTitle="Results" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="We excel at delivering results and pride ourselves on our successful track record. Check out our case studies." 
                                    />
                                    <Aboutwhychooseusbox
                                        boxTitle="Value" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="Total service transparency and affordable rates. We provide a India company service at a regional rate." 
                                    />
                                    <Aboutwhychooseusbox
                                        boxTitle="Small Company Service" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="Big enough to get the job done and small enough to care. We are passionate about your business success!" 
                                    />
                                    <Aboutwhychooseusbox
                                        boxTitle="Hertfordshire-based Team" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="Communication is paramount to the success of any project. We are always available to meet in person." 
                                    />
                                    <Aboutwhychooseusbox
                                        boxTitle="Easy to Work With" 
                                        boxIcon="bi bi-check-circle-fill" 
                                        boxDesc="We’re professional, enthusiastic and great fun to work with!" 
                                    />
                                
                                </div>
                            </div>
                        </section>
                        <section id="counts" class="counts mt-3 pt-5">
                            <div class="container">
                                <div class="row no-gutters">
                                    <Counterhome 
                                        boxTitle="Happy Clients" 
                                        boxIcon="bi bi-emoji-smile" 
                                        boxCnt="310" 
                                    />
                                    <Counterhome 
                                        boxTitle="Projects" 
                                        boxIcon="bi bi-journal-richtext" 
                                        boxCnt="656" 
                                    />
                                    <Counterhome 
                                        boxTitle="Hours Of Support" 
                                        boxIcon="bi bi-headset" 
                                        boxCnt="1270" 
                                    />
                                    <Counterhome 
                                        boxTitle="Pizza Orders" 
                                        boxIcon="bi bi-people" 
                                        boxCnt="480" 
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
    
export default Aboutus;