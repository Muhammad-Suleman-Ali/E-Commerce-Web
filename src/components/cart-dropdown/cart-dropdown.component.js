import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { connect } from "react-redux";
import {selectCartItems } from  '../../redux/cart/cart.selector'
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom'
import {toggleCartHidden, toogleCartHidden} from '../../redux/cart/cart.action'


const CartDropdown =({cartItems,history,dispatch })=>(
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.length?
            cartItems.map(cartItem =>(
             <CartItem key ={cartItem.id} item={cartItem} />))
             :
             <span className='empty-message'> your cart is empty </span>
        }

    </div> 
<CustomButton onClick={()=>{
    history.push('/checkout');
    dispatch(toggleCartHidden());
    }}> Go TO CHAECKOUT</CustomButton>
    </div>
)
 
const mapStateToProps =createStructuredSelector({
cartItems:selectCartItems
})

export default withRouter(connect (mapStateToProps,null)(CartDropdown));