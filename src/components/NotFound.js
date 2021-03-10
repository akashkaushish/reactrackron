import React from 'react'; 
import Header from './Header';
import Footer from './Footer';

class NotFound extends React.Component {
  render() {
    return (<>
    	<Header />
    	  <h2 style={{textAlign: 'center', marginTop: '50px'}}>Page Not Found</h2>
      <Footer />
    </>);
  }
}

export default NotFound;