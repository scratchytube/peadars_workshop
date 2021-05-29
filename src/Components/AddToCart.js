import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import AmountButtons from './AmountButtons'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const AddToCart = ({ product }) => {
    const { id, stock } = product
    const [amount, setAmount ] = useState(1)

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
                <div className="amount-btns">
                    <button type='button' className='amount-btn' onClick={decrease}>
                        <FaMinus />
                    </button>
                    <h2 className='amount'>{amount}</h2>
                    <button type='button' className='amount-btn' onClick={increase}>
                        <FaPlus />
                    </button>
                </div>
                <Link to='/cart' className='btn'>
                    add to cart
                </Link>
            </div>
        </Wrapper>
    )
}

export default AddToCart

const Wrapper = styled.section`
margin-top: 2rem;
// div {
//     display: flex;
// }
// .btn-container {
//     margin-top: 2rem;
// }
.btn {
    margin-top: 1rem;
    width: 140px;
}
.amount-btns {
    display: grid;
    width: 140px;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    h2 {
        margin-bottom: 0
    }
}
button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
h2 {
    margin-bottom: 0
}
`
