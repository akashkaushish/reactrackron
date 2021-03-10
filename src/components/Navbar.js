import React from 'react'; 
import { Link } from 'react-router-dom'; 


class Navbar extends React.Component {
    
    render() {
      return (  <>
                    <ul className="navbar-nav ml-audio">
                        <li className="nav-item" ><Link className="nav-link"  to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/aboutus">About Us</Link></li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="nav-item"><Link className="nav-link" to="/webdevelopment">Web Development</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/creativedesign">Creative Designs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/mobiledevelopment">Mobile Development</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/digitalmarketing">Digital Marketing</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/qualitytesting">Quality Testing</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/ecommercesolution">E-commerce Solution</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/ourproducts">Our Product</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/career">Careers</Link></li>
                        <li className="nav-item headerContactCTA"><Link className="nav-link" to="/contactus">Contact</Link></li>
                    </ul>
                    
                </>
            );
        }
    }
    
export default Navbar;