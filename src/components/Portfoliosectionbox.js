import React from 'react'; 
import { Link } from 'react-router-dom'; 


function Portfoliosectionbox(props)
{    
    return(
            <>
                <section class={props.boxCls}>
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-6">
                            <img src={props.boxImg} class="img-fluid" alt={props.boxTitle} />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content">
                            <h2 class="text-bold">{props.boxTitle}</h2>
                            <p><Link to={props.boxUrl} class="btn-read-more">View Portfolio</Link></p>
                        </div>
                        </div>
                    </div>
                </section>

            </>
    );
}


    
export default Portfoliosectionbox;