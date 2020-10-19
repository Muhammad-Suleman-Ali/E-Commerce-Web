import React, {Component} from 'react';
import Homepage from './pages/Homepage/Homepage.component.js';
import {Route,Switch,Redirect} from 'react-router-dom';
import Shoppage from './pages/Homepage/shop/shop.component.js';
import './App.css';
import Header from '../src/components/header/header.component.js';
import SignInAndSignUpPage from './pages/Homepage/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import {auth , createUserProfileDocument} from './firebase/firebase.utils.js';
import {connect  } from "react-redux";
import { createStructuredSelector } from "reselect";
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser  } from "./redux/user/user.selector";
import  CheckoutPage from './pages/Homepage/checkout/checkout.component'

class App extends Component{

unsubscribeFromAuth =null
componentDidMount(){
  const {setCurrentUser }=this.props;

  this.unsubscribeFromAuth =auth.onAuthStateChanged( async userAuth=>{
   if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapShot =>{
      setCurrentUser({
        id:snapShot.id,
        ...snapShot.data()
         });
       });
   }
   setCurrentUser(userAuth);
  });
}
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
render(){

  return (
           <div>
             <Header />
               <Switch>
                <Route exact path='/' component={Homepage}/>   
                <Route  path='/shop' component={Shoppage}/> 
                <Route exact path='/checkout' component={CheckoutPage}/> 
                <Route exact path='/signin' render={()=>
                 this.props.currentUser ? (
                  <Redirect to='/' />
                  ): (
                  <SignInAndSignUpPage/>
                  )}/>
                  </Switch>
            </div>
          );}}
                      
const mapStateToProps =createStructuredSelector({
currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect (mapStateToProps,mapDispatchToProps) (App);