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
                                boxTitle="South Miami United" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img1.jpeg`} 
                                boxDesc="Website"
                            />
                            <Portfoliodatabox 
                                boxTitle="AJ Barranco" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img2.jpg`} 
                                boxDesc="Website"
                            />
                            
                            <Portfoliodatabox 
                                boxTitle="Total Windows" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img3T.jpeg`} 
                                boxDesc="Website"
                            />
                            <Portfoliodatabox 
                                boxTitle="Castellano" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img4.jpeg`} 
                                boxDesc="Website"
                            />
                            <Portfoliodatabox 
                                boxTitle="MB Marquis Bank" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img5.jpeg`} 
                                boxDesc="Website"
                            />
                            <Portfoliodatabox 
                                boxTitle="Roland DJ" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/site_img6.jpeg`} 
                                boxDesc="Website"
                            />

                            
                        </div>

                    </div>
                    </section>
            </>
    );
}


    
export default Portfoliodata;