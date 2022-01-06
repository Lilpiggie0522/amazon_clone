import React from 'react'
import './Order.css';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

function Order(props) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(props.order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p>
                <small>{props.order.id}</small>
            </p>
            {props.order.data.basket?.map((item, index) => (
                <CheckoutProduct 
                    key={index}  
                    id = {item.id}
                    title= {item.title}
                    price= {item.price}
                    image= {item.image}
                    rating={item.rating}
                    hideButton
                />
            ))}
            {console.log(props.order)}
            <CurrencyFormat renderText={value => (
                <>
                    <h3 className='order__total'>Order Total: {value}</h3>
                </>
            )}
            decimalScale={2}
            value={props.order.data.amount/100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    )
}

export default Order
