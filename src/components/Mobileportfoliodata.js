import React from 'react'; 
import Portfoliodatabox from './Portfoliodatabox';

function Portfoliodata()
{
    return(
            <>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        {/*<div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                        </div> */}

                        <div className="row portfolio-container">
                            <Portfoliodatabox 
                                boxTitle="Calleocho" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/mobile1.jpeg`} 
                                boxDesc="Website"
                            />
                            <Portfoliodatabox 
                                boxTitle="Atma Healthcare" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/mobile2.jpeg`} 
                                boxDesc="Website"
                            />
                            
                            <Portfoliodatabox 
                                boxTitle="NPF iReport" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/mobile4.jpeg`} 
                                boxDesc="Website"
                            />
                            

                            
                        </div>

                    </div>
                    </section>
            </>
    );
}


    
export default Portfoliodata;