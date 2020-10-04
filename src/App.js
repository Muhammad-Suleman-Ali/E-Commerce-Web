import React from 'react';
import Homepage from './pages/Homepage/Homepage.component';
import {Route} from 'react-router-dom';

const Hats= ()=>{
  return(
    <>
    <h1>Hats Page</h1>
    </>
  ) 
};
const Sneaker= ()=>{
  return(
    <>
    <h1>Sneaker Page</h1>
    </>
  ) 
};
const Jacket= ()=>{
  return(
    <>
    <h1>Jacket Page</h1>
    </>
  ) 
};
const Women= ()=>{
  return(
    <>
    <h1>Women Page</h1>
    </>
  ) 
};
const Men= ()=>{
  return(
    <>
    <h1>Men Page</h1>
    </>
  ) 
};

function App() {
  return (
    <div>
  <Route exact path='/' component={Homepage}/> 
 
  <Route exact path='/Hats' component={Hats}/> 
  <Route exact path='/jacket' component={Jacket}/>
  <Route exact path='/Women' component={Women}/>
  <Route exact path='/men' component={Men}/>
  <Route exact path='/sneaker' component={Sneaker}/>
    
   </div>
  );
}
export default App;
