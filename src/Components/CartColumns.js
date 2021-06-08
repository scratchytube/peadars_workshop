import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
    return (
        <Wrapper>
            <div className="content">
                <h5>Item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    )
}

export default CartColumns

const Wrapper = styled.div`

`
