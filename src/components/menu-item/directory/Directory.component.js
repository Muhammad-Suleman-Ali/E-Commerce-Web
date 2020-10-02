import React, { Component } from 'react';
import MenuItem from '../MenuItem.component.js';
import './directory.styles.scss';

class Directory extends Component{
    constructor(){
        super();
        this.state={
            sections:[
                {title:'Hats',imageUrl:'https://i.ibb.co/cvpntL1/hats.png',id:1},
                {title:'Sneaker',imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',id:2},
                {title:'Jackets',imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',id:3},
                {title:'Men',imageUrl:'https://i.ibb.co/GCCdy8t/womens.png', size:'large',id:4},
                {title:'Women',imageUrl:'https://i.ibb.co/R70vBrQ/men.png',size:'large',id:5}]
        }
    }
render(){
    return(

        <div className="directory-menu"> 
        {this.state.sections.map(({title,imageUrl,id,size})=>(
            <MenuItem key={id} title={title} image={imageUrl} sized={size}/>
        )
            
        )}
        </div>
    )
}
}
export default Directory;