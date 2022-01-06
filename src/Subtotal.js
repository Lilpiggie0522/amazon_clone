import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBaskeTotal } from './reducer'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {
    const[{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        // 
        <div>
            <div className='subtotal'>
                <CurrencyFormat renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>
                                {/* {
                                basket.map((item) => {
                                total+=item.price;
                                })
                                }
                                {total} */}
                                {value}
                                </strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/>This contains a gift
                        </small>
                    </>
                )}
                decimalScale={3}
                value={getBaskeTotal(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix='$'
                />
                <button onClick={()=>{navigate('/payment')}}>Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Subtotal
