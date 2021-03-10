import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Serviceboxbutton from './Serviceboxbutton';

function Serviceboxhome(props)
{   var btn;
    if(props.boxLink != ''){
        btn = <Serviceboxbutton boxLink={props.boxLink} />
    }else{
        btn='';
    } 
    return(
            <>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                    <div className="icon-box">
                        <div className="icon"><i className={props.boxIcon}></i></div>
                        <h4>{props.boxTitle}</h4>
                        <p>{props.boxDesc}</p>
                        <p>{btn}</p>
                    </div>
                </div>
            </>
    );
}


    
export default Serviceboxhome;