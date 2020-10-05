import React from 'react';
import Homepage from './pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom';
import Shoppage from './pages/Homepage/shop/shop.component.js';
import './App.css';


function App() {
  return (
    <div>
  <Route exact path='/' component={Homepage}/> 
 
  <Route exact path='/shop' component={Shoppage}/> 
  
    
   </div>
  );
}
export default App;
