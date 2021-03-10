import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Serviceboxhome from '../Serviceboxhome';
import Aboutwhychooseusbox from '../Aboutwhychooseusbox';
import Counterhome from '../Counterhome';
import Testimonialhome from '../Testimonialhome';
import Aboutusinfobox from '../Aboutusinfobox';

class Ecommercesolution extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="eCommerce Solution" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/ecommerce_banner.jpg`}
                        />
                        <section className="page_info">
                            <div className="container">
                                <h4>Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores.</h4>
                            </div>
                        </section>
                        <section id="about" className="about">
                            <div className="container">

                                <div className="row">
                                
                                <Aboutusinfobox 
                                pageImg={`${process.env.PUBLIC_URL}/assets/img/ecommerce_img.jpg`}
                                />
                                
                                <div className="col-lg-6 pt-4 pt-lg-0 content">
                                    <h2 className="text-bold">eCommerce Solution</h2>
                                    <p>Rackron is a global e-commerce services provider with experience in designing and developing successful websites and web stores. Our e-commerce solutions connect buyers and sellers through B2C and B2B online business channels; integrate back-end applications as well as payment solutions. Our clients benefit from our expertise ranging from strategy through design and implementation based on all the major e-commerce platforms.</p>
                                </div>
                                </div>

                            </div>
                        </section>
                        <section id="what-we-do" className="what-we-do services">
                            <div className="container">
                                <div className="section-title">
                                    <h2>OUR eCOMMERCE SERVICES</h2>
                                    
                                </div>
                                <div className="row">
                                    <Serviceboxhome 
                                    boxTitle="Custom E-Commerce Solutions" 
                                    boxIcon="bi bi-file-code-fill" 
                                    boxDesc="With more and more businesses going online, the e-commerce marketplace has become highly competitive. A standard off-the-shelf solution does not give the flexibility you require to enhance conversions and drive profit. Experienced RACKRON e-commerce design specialists and developers can create a custom e-commerce solution that works just right for your customers and maximizes conversions." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Mobile E-Commerce Solutions" 
                                    boxIcon="bi bi-phone-fill" 
                                    boxDesc="Over the past few years, mobile commerce has emerged as the fastest growing retail channel and is expected to grow even bigger. RACKRON realizes the potential of the ubiquitous mobile channel, and offers rich mobile applications along with end-to-end mobile commerce solutions for merchants. We assist you to reach global customers, and tap the potential of this powerful channel." 
                                    boxLink=""
                                    />
                                    <Serviceboxhome 
                                    boxTitle="Payment Solutions" 
                                    boxIcon="bi bi-bar-chart-fill" 
                                    boxDesc="To drive sales across multiple channels, retailers not only need to accept multiple instruments like cash, credit/debit/gift cards, but also offer payment services, such as instant credit, bill me later, etc. RACKRON, with its deep understanding of retail payments, offers wide range of solutions – be it developing a PCI compliant solution or implementing a new payment instrument at POS." 
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
    
export default Ecommercesolution;