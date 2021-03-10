import React from 'react'; 
import { Link } from 'react-router-dom'; 


function Portfoliodatabox(props)
{    
    return(
            <>
                <div className="col-lg-4 col-md-6 portfolio-item">
                    <div className="portfolio-wrap">
                        <img src={props.boxImg} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>{props.boxTitle}</h4>
                            <p>{props.boxDesc}</p>
                        </div>
                    </div>
                </div>
            </>
    );
}


    
export default Portfoliodatabox;