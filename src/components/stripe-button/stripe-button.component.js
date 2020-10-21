import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51HebtKA0ghTT5aziOx7JibgA8YrDqz60YvEdJG8YadTzbulqiqn96YsOZ5d7ECFHcgr8PbZZCcjQ2nMXeSw4WawL002HsBWP39'

  const  onToken= token =>{
        alert('Payment Successful');
    }
 return(
     <StripeCheckout
         label='Pay Now'
         name=' CRWN Clothing Ltd'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description= {`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token= {onToken}
         stripeKey={publishablekey}
     />
 )

}

export default StripeCheckoutButton;