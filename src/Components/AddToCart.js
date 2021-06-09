import React, { useState } from 'react'
import QuantityButtons from './QuantityButtons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart'
import styled from 'styled-components'

const AddToCart = ({ product }) => {
    const { id, stock } = product
    const [amount, setAmount ] = useState(1)
    const dispatch = useDispatch()

    const addThisToMyCart = (id, amount, product) => {
        dispatch(addToCart({id, amount, product}))
    }

    const increase = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount + 1
            if(tempAmount > stock) {
                tempAmount = stock
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setAmount((oldAmount) => {
            let tempAmount = oldAmount - 1
            if(tempAmount < 1) {
                tempAmount = 1
            }
            return tempAmount
        })
    }

    return (
        <Wrapper>
            <div className="btn-container">
                <QuantityButtons amount={amount} increase={increase} decrease={decrease}/>
                <Link to='/cart' className='btn' onClick={() => addThisToMyCart(id, amount, product)} >
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

export default AddToCart

const Wrapper = styled.section`
margin-top: 2rem;
.btn {
    margin-top: 1rem;
    width: 140px;
}
// .amount-btns {
//     display: grid;
//     width: 140px;
//     justify-items: center;
//     grid-template-columns: repeat(3, 1fr);
//     align-items: center;
//     h2 {
//         margin-bottom: 0
//     }
// }
`
