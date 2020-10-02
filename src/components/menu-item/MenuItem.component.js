import React from 'react';
import './MenuItem.styles.scss';

const MenuItem=({title,image,sized})=>(
    <div style={{backgroundImage:`url( ${image})`}}
     className=  {`${sized} menu-item`} >
    <div className='content'>
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
   </div>
</div>
)

export default MenuItem;