import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Mainsliderhome from '../Mainsliderhome';
import Wearehome from '../Wearehome';
import Serviceboxhome from '../Serviceboxhome';
import Firmhome from '../Firmhome';
import Clienthome from '../Clienthome';
import Testimonialhome from '../Testimonialhome';
import Counterhome from '../Counterhome';


class Home extends React.Component {
    render() {
      return (
            <>
            <Header />
                <Mainsliderhome />
                <main id="main">
                    <Wearehome /> 
                    <section id="services" className="services">
                    <div className="container">
                                <div className="section-title">
                                    <h2>WHAT WE DO?</h2>
                                    <p>OUR SERVICES ARE DELIVERED BY OUR TEAM WITH YEARS OF EXPERIENCE ARE PASSIONATE ABOUT DEVELOPING BUSINESS.</p>
                                </div>
                        <div className="row">
                            <Serviceboxhome 
                                boxTitle="Web Development" 
                                boxIcon="bi bi-file-code-fill" 
                                boxDesc="Rackron is always on hand to act immediately with any urgent task or project, ensuring high quality services are delivered and maintained consistently." 
                                boxLink="/webdevelopment"
                            />
                            <Serviceboxhome 
                                boxTitle="Creative Designs" 
                                boxIcon="bi bi-palette-fill" 
                                boxDesc="Rackron is a full service creative designs company. We design beautiful websites, compelling landing pages, interactive mobile apps and seller banner ads." 
                                boxLink="/creativedesign"
                            />
                            <Serviceboxhome 
                                boxTitle="Mobile Development" 
                                boxIcon="bi bi-phone-fill" 
                                boxDesc="Rackron provides end-to-end mobile solutions across platforms – iOS, Android and Windows. The onset of mobile era has changed the way consumers communicate and businesses operate." 
                                boxLink="/mobiledevelopment"
                            />
                            <Serviceboxhome 
                                boxTitle="Digital Marketing" 
                                boxIcon="bi bi-megaphone-fill" 
                                boxDesc="The online world of today is highly competitive and in order to ensure that a business succeeds on the internet, it is inevitable to spend considerable effort on strategizing and planning." 
                                boxLink="/digitalmarketing"
                            />
                            <Serviceboxhome 
                                boxTitle="E-commerce Solution" 
                                boxIcon="bi bi-cart-check-fill" 
                                boxDesc="Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores." 
                                boxLink="/ecommercesolution"
                            />
                            <Serviceboxhome 
                                boxTitle="Quality Testing" 
                                boxIcon="bi bi-patch-check-fill" 
                                boxDesc="The importance of quality testing cannot be undermined but it often ends up being a rather tedious process for most organizations." 
                                boxLink="/qualitytesting"
                            />
                        </div>
                    </div>
                    </section>
                    <Firmhome /> 
                    <Clienthome /> 
                    <Testimonialhome />

                    <section id="counts" class="counts mt-3 pt-5">
                        <div class="container">
                            <div class="row no-gutters">
                                <Counterhome 
                                    boxTitle="Happy Clients" 
                                    boxIcon="bi bi-emoji-smile" 
                                    boxCnt="310" 
                                />
                                <Counterhome 
                                    boxTitle="Projects" 
                                    boxIcon="bi bi-journal-richtext" 
                                    boxCnt="656" 
                                />
                                <Counterhome 
                                    boxTitle="Hours Of Support" 
                                    boxIcon="bi bi-headset" 
                                    boxCnt="1270" 
                                />
                                <Counterhome 
                                    boxTitle="Pizza Orders" 
                                    boxIcon="bi bi-cart-dash" 
                                    boxCnt="480" 
                                />
                            </div>
                        </div>
                    </section>
                </main>
            <Footer />
            
            </>
            );
        }
    }
    
export default Home;