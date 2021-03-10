import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Mobiledevelopment extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Mobile Development" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/mobile_development_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. The onset of mobile era has changed the way consumers communicate and businesses operate.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/mobile_development_img.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">Mobile Development</h2>
                                    <p>The onset of mobile era has changed the way consumers communicate and businesses operate. Leading brands around the world have lately realized the importance of this new channel and seek to use it to reach current and new customers. Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. We are well versed with different mobile technologies and have developed award-winning B2B and B2C mobile applications for enterprises looking to automate mission-critical business processes.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR MOBILE DEVELOPMENT SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="iOS APP Development" 
                                    boxIcon="bi bi-ui-radios-grid" 
                                    boxDesc="Rackron has been into iOS app development for iPhone and iPad ever since Apple made the development kit available to mobile developers. Our team of skilled and experienced mobile developers enables our clients to transform their best ideas into functional, feature-rich iPhone / iPad solutions. Ours is a promise to create an exclusive product that will strengthen your brand and cater to tastes of your end users." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Android APP Development" 
                                    boxIcon="bi bi-google" 
                                    boxDesc="The growing number of Android users all over the world testifies Android mobile platform’s rising popularity. Android app development is one of our core competencies. We have designed and developed high-quality Android smartphone and tablet applications for some of the world’s leading companies. We leverage our iterative, agile process to develop scalable and highly robust android mobile applications." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Window APP Development" 
                                    boxIcon="bi bi-window" 
                                    boxDesc="We have a strong track record in one of the latest mobile platforms – Windows Mobile. Our proficient team of mobile developers can create intuitive, reliable and well designed apps for your organization on the Windows operating system." 
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
    
export default Mobiledevelopment;