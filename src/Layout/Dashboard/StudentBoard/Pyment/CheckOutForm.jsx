import { CardElement, CartElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { data } from 'autoprefixer';

const CheckOutForm = ({ classes, price }) => {
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError(' ')
            console.log(paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            //TODO store payment method information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: classes.length,
                classItems: classes.map(item => item._id),
                status: 'service pending',
                itemNames: classes.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedId) {

                    }
                })

        }
    }

    return (
        <div className='ms-2'>
            <form className="mt-8 w-2/3" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {transactionId && <p >Payment Confirm with transaction id:
                <span className='text-green-500 ms-2'>{transactionId}</span></p>}
        </div>
    );
};

export default CheckOutForm;





