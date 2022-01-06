import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move'

const Checkout = () => {
        const [{ basket, user }, dispatch] = useStateValue();
    
        return (
            <div className='checkout'>
                {/* <h1>Smash the like button!</h1> */}
                <div className='checkout__left'>
                    <img 
                    className='checkout__ad' 
                    src='https://images-fe.ssl-images-amazon.com/images/G/35/AU-hq/2021/img/Subscribe_and_Save/XCM_Manual_1386083_2030543_4347417_AU_au_subscribe_and_save_sns_vpc_december_activation_v2_content_grid_1_column_new_1500x300_en_AU.jpg'
                    alt=''
                    />
    
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {/* For testing purposes */}
                        {/* <CheckoutProduct 
                         id = '1225211'
                         title= 'Just a test Just a test Just a test Just a test'
                         price= {199.99}
                         image= "https://m.media-amazon.com/images/I/51wMpWiO4BL.jpg"
                         rating={5}
                        /> */}
                            <FlipMove>
                            {basket.map((item, index) => (
                                <CheckoutProduct
                                key={index}  
                                id = {item.id}
                                title= {item.title}
                                price= {item.price}
                                image= {item.image}
                                rating={item.rating}
                                />
                            )
                            )}
                            </FlipMove>
                    </div>
                </div>
    
                <div className='checkout__right'>
                    <Subtotal />
                    {/* <h2>The subtotal will go here</h2> */}
                </div>
            </div>
        )
    }

export default Checkout
