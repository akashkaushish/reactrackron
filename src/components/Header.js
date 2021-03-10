import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Navbar from './Navbar';



class Header extends React.Component {
    render() {
      return (  <>
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                    <Link className="nav-brand" to="/"><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} class="img-fluid" alt="Logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <Navbar />
                        </div>
                    </div>
                    </nav>
                    
                </>
            );
        }
    }
    
export default Header;