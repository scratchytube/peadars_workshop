import React from 'react'
import { PageHero, CartContent } from '../Components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CartPage = () => {
    const cart = useSelector((state) => state.cart.cart)

    if (cart.length < 1) {
        return <Wrapper className='page-100'>
            <div className="empty">
                <h2>Your cart is empty unfortunately</h2>
                <Link to='/products' className='btn'>fill it!</Link>
            </div>
        </Wrapper>
    }

    return (
        <main>
            <PageHero title='cart'/>
            <Wrapper className='page' >
                <CartContent />

            </Wrapper>
        </main>
    )
}

export default CartPage

const Wrapper = styled.main`
.empty {
    text-align: center;
    h2 {
        margin-bottom: 1rem;
        text-transform: none;
    }
}
`
