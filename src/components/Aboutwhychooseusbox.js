import React from 'react'; 

function Aboutwhychooseusbox(props)
{
    return(
            <>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div className="info-box">
                        <h3><i className={props.boxIcon}></i> {props.boxTitle}</h3>
                        <p>{props.boxDesc}</p>
                    </div>
                </div>
                
            </>
    );
}


    
export default Aboutwhychooseusbox;