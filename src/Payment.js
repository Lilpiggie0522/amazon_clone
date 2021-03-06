import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import FlipMove from 'react-flip-move';
import { Link, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBaskeTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';


const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe('');
    const elements = useElements('');
    const navigate = useNavigate('');

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                url: `/payments/create?total=${getBaskeTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log("The secret is >>>", clientSecret);
    console.log("person ", user)

    const handleSubmit = async (event) => {
        // fancy stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            // push into database
            db.collection('users')
            .doc(user?.uid).collection('orders')
            .doc(paymentIntent?.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({
                type: 'EMPTY_BASKET',
            })
            navigate('/orders');
        })
    }

    const handleChange = (event) => {
        // listen for changes in cardelement and display any errors as customer types their details
        setDisabled(event.empty);
        setError(event.error? event.error.message : "")
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>23 Piggie Lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className='payment__item'>
                        <FlipMove>
                          {basket.map((item, index) => {
                              return(
                                    <CheckoutProduct
                                    key={index}  
                                    id = {item.id}
                                    title= {item.title}
                                    price= {item.price}
                                    image= {item.image}
                                    rating={item.rating}
                                />
                              )
                          })}  
                        </FlipMove>
                    </div>
                </div>

                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat renderText={
                                    (value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBaskeTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                     />
                                     <button disabled={processing || disabled || succeeded}>
                                     <span>
                                        {processing? <p>Processing</p>
                                        :"Buy now"}
                                     </span>
                                     </button>
                            </div>
                            { error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
