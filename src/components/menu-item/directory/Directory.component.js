import React, { Component } from 'react';
import MenuItem from '../MenuItem.component.js';
import './directory.styles.scss';
import {connect  } from "react-redux";
import { selectDiretorySections } from "../../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";


const Directory =({sections})=>(

        
    <div className="directory-menu"> 
    {sections.map(({id,...otherSectionProps})=>(
        <MenuItem key={id}  {...otherSectionProps}/>
    )
        
    )}
    </div>
);

const mapStateToProps = createStructuredSelector({
sections: selectDiretorySections
})

export default connect(mapStateToProps) (Directory);