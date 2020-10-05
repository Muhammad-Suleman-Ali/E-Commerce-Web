
import React, {Component} from 'react';
import  SHOP_DATA from './shop.data.js';
import  CollectionPreview  from'../../../components/menu-item/preview_collection/collection-preview.js'


class Shoppage extends Component{
    constructor(){
        super();
 this.state={
     collections:SHOP_DATA
 }
 }


 render(){
const {collections}=this.state;
    return (<div className='Shop-page'>
    {

        collections.map(({id, ...otherCollectionProps}) =>(
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))
    }
    
    </div>)
 }
    }
    export default Shoppage;