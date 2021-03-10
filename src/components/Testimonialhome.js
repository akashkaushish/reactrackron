import React, { Component } from 'react'; 
import Carousel from 'react-elastic-carousel';


const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, showArrows:false, enableAutoPlay:true, focusOnSelect:true, pagination:true, },
    
  ];


function Testimonialhome()
{
    return(
            <>
                <section id="testimonials" className="testimonials">
                    <div className="container">
                        <div className="section-title">
                        <h2>SEE WHAT PEOPLE SAY ABOUT US</h2>
                        </div> 
                        <div className="testimonial_quote">
                            <Carousel enableAutoPlay autoPlaySpeed={4000} breakPoints={breakPoints}>
                                <item id="1">
                                    <blockquote><p>"Rackron went above and beyond what they was supposed to do. Everything was done properly and on time, and turned out perfectly. Will definitely hire again in the future, and highly recommend him."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Bryce Papenbrook (USA) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="2">
                                    <blockquote><p>"Rackron is a great team. I hope continue work with them."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Cleverson Viana (Brazil) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="3">
                                    <blockquote><p>"Rackron Team is very capable of any of the tasks I gave him and will be hiring him on other projects soon. Thank you!"</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Nathan Enriquez --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="4">
                                    <blockquote><p>"Job was completed successfully. A major job which involved a lot of work."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Jerry Friedman --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                
                                <item id="5">
                                    <blockquote><p>"Worked well on my Virtuemart customization. They are a quality programmer team."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Horward (USA) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="6">
                                    <blockquote><p>"I'm very happy with your work Rackron, and will hire you again in the future."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Devin Morgan (USA) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="7">
                                    <blockquote><p>"Rackron Team is very careful and good at his work. Recommended !!"</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Martin Howard (Australia) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="8">
                                    <blockquote><p>"Rackron delivered my products on time, within budget and to a high quality; it is extremely reassuring knowing that I have such a reliable, trustworthy Contractor to hand."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Michelle Over (UK) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                                <item id="9">
                                    <blockquote><p>"Rackron is always on hand to act immediately with any urgent task or project, ensuring high quality services are delivered and maintained consistently. They guys are extremely friendly and approachable person, an absolute pleasure to work with."</p></blockquote> 
                                    <div className="author"> 
                                        <h5><span>-- Michelle Over (UK) --</span><img src={`${process.env.PUBLIC_URL}/assets/img/user_icon.png`} className="img-fluid" alt="" /></h5>
                                    </div>
                                </item>
                            </Carousel>
                        </div>
                    </div>
                </section>
                        
            </>
    );
}


    
export default Testimonialhome;