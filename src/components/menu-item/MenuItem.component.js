import React from 'react';
import './MenuItem.styles.scss';
import {withRouter} from 'react-router-dom';



const MenuItem=({title,imageUrl,size,history,linkurl,match})=>(
    <div  className=  {`${size} menu-item`}  
    onClick={()=>history.push( `${match.url}${linkurl}`)}>
          
    <div className='background-Image'style={{backgroundImage:`url( ${imageUrl})`}}/>
                  <div className='content'>
                         <h1 className="title">{title.toUpperCase()}</h1>
                         <span className="subtitle">Shop Now</span>
   </div>
</div>
)
export default withRouter(MenuItem);