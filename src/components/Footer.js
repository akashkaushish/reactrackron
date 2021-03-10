import React from 'react'; 
import { Link } from 'react-router-dom'; 
import ScrollTopArrow from './ScrollToArrow';

class Footer extends React.Component {
    render() {
      return (
                <> 
                    <footer id="footer">
                        <div className="footer-top">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/aboutus">About Us</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/portfolio">Portfolio</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/ourproducts">Our Product</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/career">Career</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/contactus">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/webdevelopment">Web Development</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/creativedesign">Creative Designs</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/mobiledevelopment">Mobile Development</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/digitalmarketing">Digital Marketing</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/qualitytesting">Quality Testing</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link to="/ecommercesolution">E-commerce Solution</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h4>Contact Us</h4>
                                <p>C-133, Third Floor,<br/> Industrial Area, Phase-8,<br/> SAS Nagar, Mohali - 160072 <br/><br/>
                                <strong>Phone:</strong> +91-172-4005931<br/>
                                <strong>Email:</strong> info@rackron.com<br/>
                                </p>

                            </div>

                            <div className="col-lg-3 col-md-6 footer-info">
                                <h3>ABOUT RACKRON</h3>
                                <p>We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world. </p>
                                <div className="social-links mt-3">
                                <a href="https://www.facebook.com/RackronInfo/" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/2658148/" className="linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
                                <a href="https://twitter.com/rackrontech" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                                
                                </div>
                            </div>

                            </div>
                        </div>
                        <div className="copyright">© Copyright 2021 | Rackron Technologies Pvt. Ltd. All Rights Reseverd </div>
                        </div>
                    </footer>

                    <ScrollTopArrow />
                </>
            );
        }
    }
    
export default Footer;