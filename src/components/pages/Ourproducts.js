import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer';
import Topslider from '../Topslider';
import Testimonialhome from '../Testimonialhome';
import Productbox from '../Productbox';


class Ourproducts extends React.Component {
    render() {
      return (
            <>
                <Header />
                    <main id="main">
                        <Topslider 
                            pageTitle="Our Products" 
                            pageSliderImg={`${process.env.PUBLIC_URL}/assets/img/product_banner.jpg`}
                        />
                        <section id="services" class="services product">
                            <div class="container">
                                <div class="row">
                                    <Productbox 
                                        productName="Checktolet.com" 
                                        productIcon={`${process.env.PUBLIC_URL}/assets/img/product_img1.jpg`} 
                                        productDesc="Checktolet.com is India’s fastest growing rent space website that helps people to search space like Rooms, PG, Flats, Office, and Shops for rent. Checktolet.com helps people to search rental space without cost." 
                                        btnLink="http://checktolet.com/"
                                        btnLabel="Click here to Visit Site"
                                    />
                                    <Productbox 
                                        productName="6 Months Training" 
                                        productIcon={`${process.env.PUBLIC_URL}/assets/img/product_img2.jpg`}  
                                        productDesc="Rackron offers various PHP-Traning programs. Rackron offers 6 Months training programs to make IT students perfect. Rackron is a Company not a Institute. Give experience to work on live project." 
                                        btnLink="/Contactus"
                                        btnLabel="Click here to Contact"
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
    
export default Ourproducts;