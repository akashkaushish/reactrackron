import React from 'react'; 

function Productbox(props)
{
    return(
            <>
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch">
                    <div className="icon-box">
                    <div class="product_img"><img src={props.productIcon} class="img-fluid" alt="" /></div>
                    <h4><a href="">{props.productName}</a></h4>
                    <p>{props.productDesc}</p>
                    <p><a href={props.btnLink} className="btn-read-more">{props.btnLabel}</a></p>
                    </div>
                </div>
                
            </>
    );
}


    
export default Productbox;