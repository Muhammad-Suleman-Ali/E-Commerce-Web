import React from 'react';
import './MenuItem.styles.scss';

const MenuItem=({title,image,sized})=>(
    <div  className=  {`${sized} menu-item`} >
     <div className='background-Image'style={{backgroundImage:`url( ${image})`}}/>
    <div className='content'>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">Shop Now</span>
   </div>
</div>
)

export default MenuItem;