import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helpers'
import styled from 'styled-components'

const CartTotals = () => {
    const cartRedux = useSelector(state => state.cart)
    const {totalAmount, shippingFee } = cartRedux

    return (
        <Wrapper>
            <div>
                <article>
                    <h5>subtotal: <span>{formatPrice(totalAmount)}</span></h5>
                    <p>
                        shipping fee : {formatPrice(shippingFee)}
                    </p>
                    <hr />
                    <h4>order total : {formatPrice(totalAmount + shippingFee)}</h4>
                </article>
                <Link to="/checkout" className='btn'>proceed to checkout</Link>
            </div>
        </Wrapper>
    )
}

export default CartTotals

const Wrapper = styled.section`

`
