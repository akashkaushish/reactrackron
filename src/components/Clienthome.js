import React from 'react'; 

function Clienthome()
{
    return(
            <>
                <section id="clients" className="clients">
                    <div className="container">

                        <div className="section-title">
                        <h2>OUR HAPPY CLIENTS</h2>
                        <p>WE BELIEVE IN GOING AN EXTRA MILE FOR OUR CLIENTS</p>
                        </div>

                        <div className="clients-slider swiper-container">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo1.png`} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo2.png`} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo3.png`} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo4.png`} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo5.png`} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={`${process.env.PUBLIC_URL}/assets/img/clients/client_logo6.png`} className="img-fluid" alt="" /></div>
                            </div>
                        </div>

                    </div>
                </section>        
            </>
    );
}


    
export default Clienthome;