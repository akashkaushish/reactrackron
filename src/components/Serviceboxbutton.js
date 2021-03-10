import React from 'react'; 
import { Link } from 'react-router-dom'; 
function Serviceboxbutton(props)
{
    return(
            <>
                <Link to={props.boxLink} className="btn-read-more">Read More</Link>
            </>
    );
}


    
export default Serviceboxbutton;