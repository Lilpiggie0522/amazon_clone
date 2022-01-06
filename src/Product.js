import React, { useState } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider';

const Product = ({id, title, image, price, rating}) => {
    const [{ basket }, dispatch] = useStateValue();
    console.log("This is the basket >>> ", basket)
    const addToBasket = () => {
        // dispatch items to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">

            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {Array(rating).fill().map((item, index)=>{
                        return(<p key={index}>⭐</p>)
                    })}
                </div>
            </div>

            <img src={image} alt="pic"/>
            {/* https://m.media-amazon.com/images/I/510H2hKmk2L.jpg */}
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
        
    )
}

export default Product
