import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'


const CartButtons = () => {
    return (
        <div>
            <Wrapper className='cart-btn-wrapper'>
                <Link to='/cart' className='cart-btn'>
                    <FaShoppingCart />
                </Link>
            </Wrapper>
        </div>
    )
}

export default CartButtons

const Wrapper = styled.div`

`