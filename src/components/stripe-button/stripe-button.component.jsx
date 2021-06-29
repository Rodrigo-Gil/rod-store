import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51J7kEjG4HQuZPTUBx3HSjuXezlTVReGm7AvEzVnsC4vsVhabhekM3YykyHBqNgsibnxyQSV5UbIad5F6EKrksekn00bCy0BxSI'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label='Pay Now'
        name='Rod Store'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Ycz.svg'
        description={`You total is $${price}`}
        amount={priceInCents}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey= {publishableKey}
        />
    )
}

export default StripeCheckoutButton