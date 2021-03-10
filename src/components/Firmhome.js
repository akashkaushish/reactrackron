import React from 'react'; 


function Firmhome()
{
    return(
            <>
                <section id="awards" className="awards">
                    <div className="container">
                        <div className="section-title">
                            <h2>Top Web Development Company in India</h2>
                            <p>We are a full service development and design company located in India.<br/> Our team of talented designers and developers has been providing custom design<br/> and application development to clients in USA, UK, Australia and around the world.</p>
                            <br/>
                            <h3>AWARDS AND ACCOLADES</h3>
                            <div className="award_logo">
                                <a href="https://www.goodfirms.co/company/rackron-technologies-pvt-ltd" target="_blank"><img src={`${process.env.PUBLIC_URL}/assets/img/goodfirm_logo.png`} className="img-fluid" alt="" /></a>
                                <img src={`${process.env.PUBLIC_URL}/assets/img/upwork_logo.png`} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
    );
}


    
export default Firmhome;