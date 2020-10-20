
import React from 'react';
import {selectCollections} from '../../../redux/shop/shop.selectors'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import  CollectionPreview  from'../../../components/menu-item/preview_collection/collection-preview.js'


const  Shoppage=({collections})=> (


        <div className='Shop-page'>
        {

            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
  
        </div>)


const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})
            
 export default connect(mapStateToProps) (Shoppage);