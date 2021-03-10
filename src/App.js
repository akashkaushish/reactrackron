import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'; 
import Aboutus from './components/pages/Aboutus';
import Services from './components/pages/Services';
import Webdevelopment from './components/pages/Webdevelopment';
import Mobiledevelopment from './components/pages/Mobiledevelopment';
import Creativedesign from './components/pages/Creativedesign';
import Digitalmarketing from './components/pages/Digitalmarketing';
import Qualitytesting from './components/pages/Qualitytesting';
import Ecommercesolution from './components/pages/Ecommercesolution';
import Portfolio from './components/pages/Portfolio';
import Webportfolio from './components/pages/Webportfolio';
import Mobileportfolio from './components/pages/Mobileportfolio';
import Ecommerceportfolio from './components/pages/Ecommerceportfolio';
import Logobrandingportfolio from './components/pages/Logobrandingportfolio';
import Cmsportfolio from './components/pages/Cmsportfolio';
import Ourproducts from './components/pages/Ourproducts';
import Career from './components/pages/Career';
import Contactus from './components/pages/Contactus';
import NotFound from './components/NotFound'; 
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <Router> 
    <ScrollToTop />
    <div>
      <Switch> 
        <Route exact path='/' component={Home}></Route> 
        <Route exact path='/aboutus' component={Aboutus}></Route>
        <Route exact path='/services' component={Services}></Route>
        <Route exact path='/webdevelopment' component={Webdevelopment}></Route>
        <Route exact path='/mobiledevelopment' component={Mobiledevelopment}></Route> 
        <Route exact path='/creativedesign' component={Creativedesign}></Route>
        <Route exact path='/digitalmarketing' component={Digitalmarketing}></Route>
        <Route exact path='/qualitytesting' component={Qualitytesting}></Route>
        <Route exact path='/ecommercesolution' component={Ecommercesolution}></Route>

        <Route exact path='/portfolio' component={Portfolio}></Route>
        <Route exact path='/webportfolio' component={Webportfolio}></Route>
        <Route exact path='/mobileportfolio' component={Mobileportfolio}></Route>
        <Route exact path='/ecommerceportfolio' component={Ecommerceportfolio}></Route>
        <Route exact path='/logobrandingportfolio' component={Logobrandingportfolio}></Route>
        <Route exact path='/cmsportfolio' component={Cmsportfolio}></Route>
        <Route exact path='/ourproducts' component={Ourproducts}></Route>
        <Route exact path='/career' component={Career}></Route> 
        <Route exact path='/contactus' component={Contactus}></Route>
        <Route component={NotFound}></Route> 
      </Switch> 
      
    </div> 
  </Router> 
  );
}

export default App;
