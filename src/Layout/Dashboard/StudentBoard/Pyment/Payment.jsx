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
        <div className="w-full max-w-md mx-auto p-6 bg-gradient-to-r from-orange-500 via-orange-700 to-orange-600 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="text-2xl font-extrabold text-white mb-6">Payment Checkout</h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <Elements stripe={stripePromise}>
                    <CheckOutForm classes={classes} price={price}></CheckOutForm>
                </Elements>
            </div>
        </div>


    );
};

export default Payment;