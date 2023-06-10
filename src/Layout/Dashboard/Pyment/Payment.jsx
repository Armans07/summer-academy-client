import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useClass from '../../../hooks/useClass';



const stripePromise = loadStripe(import.meta.env.VITE_payment_Gatway_PK)
const Payment = () => {
    const [classes]=useClass()
    const amount = classes.reduce((sum, item)=> sum + item.price,0)
    const price = parseFloat(amount.toFixed(2))
    return (
        <div className='w-full'>
            <h2>Please Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;