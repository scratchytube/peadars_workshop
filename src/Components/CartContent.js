import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearWholeCart } from '../redux/cart'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'
import styled from 'styled-components'

const CartContent = () => {
    const cartArray = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()

    const clearCart = () => {
        dispatch(clearWholeCart())
    }

    return (
        <Wrapper className='section section-center'>
            <CartColumns />
            {
                cartArray.map((singleProduct) => {
                    return <CartItem key = {singleProduct.id} item={singleProduct} />
                })
            }
            <hr />
            <div className="link-container">
                <Link className='link-btn' to='/products'>Add More!</Link>
                <button className='link-btn clear-btn' type='button' onClick={clearCart}>clear shopping cart</button>
            </div>
            <CartTotals />
        </Wrapper>
    )
}

export default CartContent

const Wrapper = styled.section`
.link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
