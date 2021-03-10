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
                                boxTitle="Jamboxx" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/jamboxx-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            <Portfoliodatabox 
                                boxTitle="Breakersfc" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/breakersfc-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            <Portfoliodatabox 
                                boxTitle="Changingroom Salons" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/changingroomsalons-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            
                            <Portfoliodatabox 
                                boxTitle="DJ Doons" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/djdoons-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            <Portfoliodatabox 
                                boxTitle="F3R Music" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/f3rmusic-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            <Portfoliodatabox 
                                boxTitle="In The Sound" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/inthe-sound-LOGO.jpeg`} 
                                boxDesc="LOGO"
                            />
                            
                            <Portfoliodatabox 
                                boxTitle="Roland DJ" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/rolanddj-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            <Portfoliodatabox 
                                boxTitle="Saeed Younana" 
                                boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/saeedyounan-logo.jpeg`} 
                                boxDesc="LOGO"
                            />
                            
                        </div>

                    </div>
                    </section>
            </>
    );
}


    
export default Portfoliodata;