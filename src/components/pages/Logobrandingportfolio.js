import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Testimonialhome from '../Testimonialhome';
import Lbportfoliodata from '../Lbportfoliodata';

class Webortfolio extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Logo & Branding Portfolio" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/portfolio_banner.jpg`}
                        />
                        <Lbportfoliodata />
                        <Testimonialhome />
                        
                       
                    </main>
                <Footer />
            </>
            );
        }
    }
    
export default Webortfolio;