import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { removeCartItem } from '../redux/cart'
import QuantityButtons from './QuantityButtons'
import { formatPrice } from '../utils/helpers'
import { FaTrash } from 'react-icons/fa'

const CartItem = ({ item }) => {
    const { id, name, image, amount, price } = item
    console.log(item)
    console.log(name)
    const dispatch = useDispatch()

    // hiding quantity buttons for nows
    // const toggleQuantity = (id, value) => {
    //     dispatch(toggleAmount({id, value}))
    // }

    // const increase = () => {
    //     toggleQuantity(id, 'increase')
    // }
    // const decrease = () => {
    //     toggleQuantity(id, 'decrease')
    // }
    
    const removeItem = (id) => {
        dispatch(removeCartItem(id))
    }


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
            <QuantityButtons amount={amount} 
            // increase={increase} decrease={decrease} 
            />
            <h5 className="subtotal">{formatPrice(price * amount)}</h5>
            <button type='button' className='remove-btn' onClick={() => removeItem(id)}>
                <FaTrash />
            </button>
        </Wrapper>
    )
}

export default CartItem

const Wrapper = styled.article`
.subtotal {
    display: none;
}
.price {
    display: none;
}
display: grid;
grid-template-columns: 200px auto auto;
grid-template-rows: 75px;
gap: 3rem 1rem;
justify-items: center;
margin-bottom: 3rem;
align-items: center;
.title {
    grid-template-rows: 75px;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
}

img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
}
h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
}

.price-small {
    color: var(--clr-primary-5);
}

.amount-btns {
    width: 75px;
    button {
        width: 1rem;
        height: 0.5rem;
        font-size: 0.75rem;
    }
    h2 {
        font-size: 1rem;
    }
}
.remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
}

@media (min-width: 776px) {
    .subtotal {
        display: block;
        margin-bottom: 0;
        color: var(--clr-grey-5);
        font-weight: 400;
        font-size: 1rem;
    }
    .price-small {
        display: none;
    }
    .price {
        display: block;
        font-size: 1rem;
        color: var(--clr-primary-5);
        font-weight: 400;
    }
    .name {
        font-size: 0.85rem;
    }

grid-template-columns: 1fr 1fr 1fr 1fr auto;
align-items: center;
grid-template-rows: 75px;
img {
    height: 100%
}
.title {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 200px;
    align-items: center;
    gap: 1rem;
    text-align: left;
}
.amount-btns {
    width: 100px;
    button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
    }
    h2 {
        font-size: 1.5rem;
        }
    }
}


`
