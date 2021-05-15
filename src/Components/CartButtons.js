import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'


const CartButtons = () => {
    return (
            <Wrapper className='cart-btn-wrapper'>
                <Link to='/cart' className='cart-btn'>
                    Cart 
                    <span className='cart-container'>
                        <FaShoppingCart />
                        <span className='cart-value'>12</span>
                    </span>
                </Link>
                <button type='button' className='auth-button'>
                    Login <FaUserPlus />
                </button>
            </Wrapper>
    )
}

export default CartButtons

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
width: 225px;

.cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }

`