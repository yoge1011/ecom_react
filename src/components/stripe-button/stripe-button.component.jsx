import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51GwitkKFCATzvD549KfYPLi2AQq1QADJ7B50hU4et0hPxvSruCVStv2XY9gtk5MksBiXo3ShqPl4KYaCZ5Qvsx8c00Kt95Xukd'
    const onToken = token => {
        console.log(token);
        alert('Payment Success')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='ecom clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;