import { React, forwardRef } from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = forwardRef(({rating, price, image, title, id, hideButton}, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct' ref={ref}>
            <img className='checkoutProduct__image' src={image} alt=''/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((item, index)=>(<p key={index}>⭐</p>))}
                </div>
                {!hideButton && (<button onClick={removeFromBasket}>Remove From Basket</button>)}
            </div>
        </div>
    )
})

export default CheckoutProduct
