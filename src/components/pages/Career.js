import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';

import Testimonialhome from '../Testimonialhome';



class Career extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Career" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/career_banner.jpg`}
                        />
                        <section id="careers" className="services careers">
                            <div className="container">
                                <div className="section-title">
                                    <h2>REQUIREMENTS</h2>
                                    <p>We are looking for individuals who want to take responsibility, deliver results, & make a difference. Think you’re a good match?</p>
                                </div>
                                <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="icon-box">
                                    <h4><a href="">LAMP Stack Developers</a></h4>
                                    <ul>
                                    <li>– CMS: Drupal, Magento, Joomla, WordPress (any 2 of them)</li>
                                    <li>– Framework: Codiegnitor/ Cake php/ Laravel/ Yii/ Smarty (any 1 of them)</li>
                                    <li>– Javascript, HTML5, CSS3</li>
                                    <li>– SQL Server / MYSQL</li>
                                    <li>– You will be in charge of web sites front end and back-end development.</li>
                                    <li>– Capacity to understand requirements. Exploring new technologies.</li>
                                    <li>– Work independently and in team</li>
                                    <li>– Good problem solving ability</li>
                                    <li>– Meet deadlines</li>
                                    </ul>
                                    <p><span className="btn-read-more">Send your CV at hr@rackron.com</span></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="icon-box">
                                    <h4><a href="">MERN Stack Developers</a></h4>
                                    <ul>
                                    <li>– NodeJs: ExpressJs OR any NodeJs Framework</li>
                                    <li>– Database: MongoDB, MySQl, SQL Server (any 1 of them)</li>
                                    <li>– TypeScript, BootStap, HTML5, CSS3</li>
                                    <li>– ReactJs / AngularJs</li>
                                    <li>– You will be in charge of web sites front end and back-end development.</li>
                                    <li>– Capacity to understand requirements. Exploring new technologies.</li>
                                    <li>– Work independently and in team</li>
                                    <li>– Good problem solving ability</li>
                                    <li>– Meet deadlines</li>
                                    </ul>
                                    <p><span className="btn-read-more">Send your CV at hr@rackron.com</span></p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                    <div className="icon-box">
                                    {/*<div className="icon"><i className="bi bi-laptop"></i></div> */}
                                    <h4><a href="">Online Bidder / Business Developer</a></h4>
                                    <ul>
                                        <li>– Generate new business from Online Bidding portals like UPWORK (formerly ODESK), GURU, etc, for IT Projects Requirements</li>
                                        <li>– Handle the complete IT sales cycle – Bidding, negotiating & deal closure</li>
                                        <li>– Proficiency in writing & reviewing proposals</li>
                                        <li>– Creating Wire-frames and Data Flow Diagrams</li>
                                        <li>– Good Communication is a must</li>
                                        <li>– Capacity to understand Client's requirements. </li>
                                        <li>– Work independently and in team</li>
                                        <li>– Meet deadlines</li>
                                    </ul>

                                    <p><a className="btn-read-more">Send your CV at hr@rackron.com</a></p>
                                    </div>
                                </div>


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
    
export default Career;