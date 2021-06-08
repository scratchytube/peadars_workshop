import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {
    const { id, name, image, price, amount } = item

    const increase = () => {}
    const decrease = () => {}
    const removeItem = () => {}
    const toggleAmount = () => {}


    return (
        <Wrapper>
            <div className="title">
                <img src={image} alt={name} />
                <div>
                    <h5 className="name">{name}</h5>
                    <h5 className="price-small">{formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className="price">{formatPrice(price)}</h5>
            <div className="amount-btns">
                    <button type='button' className='amount-btn' onClick={decrease}>
                        <FaMinus />
                    </button>
                    <h2 className='amount'>{amount}</h2>
                    <button type='button' className='amount-btn' onClick={increase}>
                        <FaPlus />
                    </button>
                </div>
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <button type='button' className='remove-btn' onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </Wrapper>
    )
}

export default CartItem

const Wrapper = styled.article`

`
