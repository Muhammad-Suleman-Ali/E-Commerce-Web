import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../../components/menu-item/preview_collection/collection-preview';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'

import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) =>(
    <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps}) =>(
    <CollectionPreview key={id} {...otherCollectionProps}/>
))
}
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
});
export  default connect (mapStateToProps)(CollectionOverview)