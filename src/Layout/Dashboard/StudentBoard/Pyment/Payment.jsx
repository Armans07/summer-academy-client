import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useClass from '../../../../hooks/useClass';



const stripePromise = loadStripe(import.meta.env.VITE_payment_Gatway_PK)
const Payment = () => {
    const [classes] = useClass()
    const amount = classes.reduce((sum, item) => {
        if (item.price) {
            return sum + parseInt(item.price)
        }
        else {
            return sum + 0
        }
    }, 0)
    const price = parseFloat(amount)
    return (
        <div className='w-full'>
            <h2>Please Payment</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm classes={classes} price={price}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;