import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import styled from 'styled-components'

const CartContent = () => {
    const cartArray = useSelector(state => state.cart.cart)


    const clearCart = () => {

    }

    return (
        <Wrapper classname='section section-center'>
            <CartColumns />
            {
                cartArray.map((item) => {
                    return <CartItem key={item.id} item={item} />
                })
            }
            <hr />
            <div className="link-container">
                <Link className='link-btn' to='/products'>Add More!</Link>
                <button className='link-btn clear-btn' type='button' onClick={clearCart}>clear cart</button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

export default CartContent

const Wrapper = styled.section`

`
