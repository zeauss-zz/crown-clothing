import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HbYqEAAfobtDKNL5xRNgx8ae3KmxFsENr2peVr6mYIYFrcUYUS2fcMXstpMoChdmP2DifbmZl6uI2qLUDTwUv7h00njRZO3XN'

    const onToken = token => {
        console.log(token)
        alert('Payment successful ' + token)
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Crwn clothing Ltd.'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        
         />
    )
}

export default StripeCheckoutButton;