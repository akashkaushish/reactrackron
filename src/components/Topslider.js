import React from 'react'; 

function Topslider(props)
{
    return(
            <>
                <section id="page_banner" className="page_banner">
                    <img src={props.pageSliderImg} className="img-fluid" alt={props.pageTitle} />
                    <div className="page_head">
                    <div className="container"><h2>{props.pageTitle}</h2></div>
                </div>
                </section>
            </>
    );
}


    
export default Topslider;