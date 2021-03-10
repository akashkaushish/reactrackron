import React from 'react'; 
import CountUp from 'react-countup';

function Counterhome(props)
{
    return(
            <>
                <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className={props.boxIcon}></i>
                        <CountUp end={props.boxCnt} duration={20}  />
                        {/*
                        <span data-purecounter-start="0" data-purecounter-end={props.boxCnt} data-purecounter-duration="1" className="purecounter">{props.boxCnt}</span>*/}
                        <p><strong>{props.boxTitle}</strong></p>
                    </div>
                </div>
            </>
    );
}


    
export default Counterhome;