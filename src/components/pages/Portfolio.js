import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Testimonialhome from '../Testimonialhome';
import Portfoliosectionbox from '../Portfoliosectionbox';

class Portfolio extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <section class="page_info">
                            <div class="container">
                                <h1 class="page_title">Portfolio</h1>
                                <h4>We are a full service development and design company located in India. Our team of talented designers and developers has been providing custom design and application development to clients in USA, UK, Australia and around the world.</h4>
                            </div>
                        </section>
                        <Portfoliosectionbox 
                            boxTitle="Logo & Branding" 
                            boxCls="portfolio portfolio_sec3" 
                            boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-03.png`} 
                            boxUrl="/logobrandingportfolio"
                        />
                        <Portfoliosectionbox 
                            boxTitle="Mobile Apps" 
                            boxCls="portfolio portfolio_sec1" 
                            boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-02.png`} 
                            boxUrl="/mobileportfolio"
                        />
                        <Portfoliosectionbox 
                            boxTitle="eCommerce" 
                            boxCls="portfolio portfolio_sec2" 
                            boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-04.png`} 
                            boxUrl="/ecommerceportfolio"
                        />
                        
                        <Portfoliosectionbox 
                            boxTitle="Web Design" 
                            boxCls="portfolio portfolio_sec4" 
                            boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-01.png`} 
                            boxUrl="/webportfolio"
                        />
                        <Portfoliosectionbox 
                            boxTitle="Content Management System" 
                            boxCls="portfolio portfolio_sec5" 
                            boxImg={`${process.env.PUBLIC_URL}/assets/img/portfolio/portfolio-05.png`} 
                            boxUrl="/cmsportfolio"
                        />
                        
                        
                       
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Portfolio;