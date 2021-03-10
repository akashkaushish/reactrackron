import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Testimonialhome from '../Testimonialhome';
import Cmsportfoliodata from '../Cmsportfoliodata';

class Webortfolio extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="CMS Portfolio" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/portfolio_banner.jpg`}
                        />
                        <Cmsportfoliodata />
                        <Testimonialhome />
                        
                       
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Webortfolio;