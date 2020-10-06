import React from 'react';
import Homepage from './pages/Homepage/Homepage.component';
import {Route,Switch} from 'react-router-dom';
import Shoppage from './pages/Homepage/shop/shop.component.js';
import './App.css';
import Header from '../src/components/header/header.component';


function App() {
  return (
    <div>
<Header/>
    <Switch>
  <Route exact path='/' component={Homepage}/> 
 
  <Route exact path='/shop' component={Shoppage}/> 
  </Switch>
    
   </div>
  );
}
export default App;
