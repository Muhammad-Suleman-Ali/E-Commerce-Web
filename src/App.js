import React from 'react';
import Homepage from './pages/Homepage/Homepage.component';
import {Route,Switch} from 'react-router-dom';
import Shoppage from './pages/Homepage/shop/shop.component.js';
import './App.css';
import Header from '../src/components/header/header.component';
import SignInAndSignUpPage from './pages/Homepage/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
<Header/>
    <Switch>
  <Route exact path='/' component={Homepage}/> 
 
  <Route exact path='/shop' component={Shoppage}/> 
  <Route exact path='/signin' component={SignInAndSignUpPage}/>
  </Switch>
    
   </div>
  );
}
export default App;
