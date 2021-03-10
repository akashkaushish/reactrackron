import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Digitalmarketing extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Digital Marketing" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/digital_marketing_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/digital_marketing_img.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">Digital Marketing</h2>
                                    <p>The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning. We bring you the best of digital marketing services that are not only custom made but are also well within your budget – no matter how big or small your organization is.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR DIGITAL MARKETING SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="Search Engine Optimization (SEO)" 
                                    boxIcon="bi bi-rss-fill" 
                                    boxDesc="SEO is a long term investment that delivers recurring benefits. Whether yours is a small, medium or large business – we can craft custom SEO strategies for you to benefit from. We have been working with large global accounts streamlining their SEO operations increasing natural traffic and reducing internal investment." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Social Media Marketing" 
                                    boxIcon="bi bi-phone-fill" 
                                    boxDesc="Today, brands are pressed to be highly active and involved as the world becomes increasingly social. This is one of the major challenges for any business that aims to leverage the benefits of social media marketing. We make this easier for you by identifying the hot topics around your brand, detecting sentiments, monitoring constantly, and measuring participation and hence establish thought leadership to strategize and engage for the success of your brand through social media." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Digital Analytics" 
                                    boxIcon="bi bi-graph-up" 
                                    boxDesc="With important statistics at your hand, you can easily evaluate and analyze the performance of your website. It is exactly where digital analytics come handy. RACKRON web analytics services aim to give you important insights in the form of data (traffic, visitors) so that you can tweak your strategy based on your visitors, interest and engagement with the website." 
                                    boxLink=""
                                    />

                                   

                                </div>
                            </div>
                        </section>

                        <Testimonialhome />
                        
                        
                        
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Digitalmarketing;