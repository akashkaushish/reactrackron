import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, showArrows:false, enableAutoPlay:true, focusOnSelect:true, pagination:true, },
    
  ];

function Mainsliderhome()
{
    return(
            <>
                <section id="hero">
                    <div className="banner">
                        <div id="rotate-words" className="sign"> 
                            <Carousel enableAutoPlay autoPlaySpeed={4000} breakPoints={breakPoints}> 
                                <item id="1">
                                <div className="title">WE ARE <span>CRAZY</span> CODERS</div>
                                </item>
                                <item id="2">
                                <div className="title">WE ARE <span>CREATIVE</span> NERDS</div>
                                </item>
                                <item id="3">
                                <div className="title">WE <span>BELIEVE</span> IN QUALITY</div>
                                </item>
                                <item id="4">
                                <div className="title">WE ARE <span>COFFEE</span> ADDICT</div>
                                </item>
                                <item id="5">
                                <div className="title">& WE <span>LOVE</span> PIZZA</div>
                                </item>
                            </Carousel>
                                <p>
                                    <Link to="/services" className="btn-read-more btn-services">Our Services</Link>
                                    <Link to="/portfolio" className="btn-read-more btn-portfolio">View Portfolio</Link>
                                    
                                </p>
                        </div>
                    </div>
                </section>
            </>
    );
}


    
export default Mainsliderhome;