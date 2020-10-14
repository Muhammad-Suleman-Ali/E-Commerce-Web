import React, {Component} from 'react';
import Homepage from './pages/Homepage/Homepage.component.js';
import {Route,Switch} from 'react-router-dom';
import Shoppage from './pages/Homepage/shop/shop.component.js';
import './App.css';
import Header from '../src/components/header/header.component.js';
import SignInAndSignUpPage from './pages/Homepage/sign-in-and-sign-up/sign-in-and-sign-up.component.js';
import {auth , createUserProfileDocument} from './firebase/firebase.utils.js';


class App extends Component{
constructor(){
  super();
  this.state={
    currentUser:null
  }
}

unsubscribedFromAuth =null
componentDidMount(){

  this.unsubscribedFromAuth =auth.onAuthStateChanged( async userAuth=>{
   if(userAuth){
     const userRef = await createUserProfileDocument(userAuth);

     userRef.onSnapshot(snapShot =>{
       this.setState({
        currentUser:{
        id:snapShot.id,
        ...snapShot.data()
         }
       });
       console.log(this.state);
     });
   }
   this.setState({currentUser:userAuth });
  });
}
componentWillUnmount(){
  this.unsubscribedFromAuth();
}
render(){

  return (



                      <div>
                   <Header />
                       <Switch>
                     <Route exact path='/' component={Homepage}/>   
                     <Route exact path='/shop' component={Shoppage}/> 
                   <Route exact path='/signin' component={SignInAndSignUpPage}/>
                   </Switch>
                        
                      </div>
                      );
}
  
}
export default App;
