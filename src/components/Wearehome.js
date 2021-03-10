import React from 'react'; 
import { Link } from 'react-router-dom'; 
function Wearehome()
{
    return(
            <>
                <section id="about" className="about">
                    <div className="container">
                        <h1>WE ARE RACKRON</h1>
                        <p>We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world. </p>
                        <Link to="/aboutus" className="btn-read-more">Read More</Link>
                    </div>
                </section>
                        
            </>
    );
}


    
export default Wearehome;