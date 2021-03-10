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
                                boxTitle="Tapson Tap" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg1.jpeg`} 
                                boxDesc="E-Store"
                            />
                            <Portfoliodatabox 
                                boxTitle="Mariko Distribuzione" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg2.jpeg`} 
                                boxDesc="E-Store"
                            />
                            <Portfoliodatabox 
                                boxTitle="Ozfit Sports" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg3.jpeg`} 
                                boxDesc="E-Store"
                            />
                            <Portfoliodatabox 
                                boxTitle="Cumberlandonline" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg4.jpeg`} 
                                boxDesc="E-Store"
                            />
                            
                            <Portfoliodatabox 
                                boxTitle="Planned Nutrition" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg5.jpeg`} 
                                boxDesc="E-Store"
                            />
                            <Portfoliodatabox 
                                boxTitle="Artful Pictureframe" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/eimg6.jpeg`} 
                                boxDesc="E-Store"
                            />
                            
                        </div>

                    </div>
                    </section>
            </>
    );
}


    
export default Portfoliodata;