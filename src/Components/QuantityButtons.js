import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const QuantityButtons = ({ amount, increase, decrease }) => {

    return (
        <Wrapper>
            <div className="amount-btns">
                    <button type='button' className='amount-btn' onClick={decrease}>
                        <FaMinus />
                    </button>
                    <h2 className='amount'>{amount}</h2>
                    <button type='button' className='amount-btn' onClick={increase}>
                        <FaPlus />
                    </button>
                </div>
        </Wrapper>
    )
}

export default QuantityButtons

const Wrapper = styled.div`
// hiding quantity buttons for now
.amount-btn {
  display: none;
}

// hiding grid for now
// .amount-btns {
//   display: grid;
//   width: 140px;
//   justify-items: center;
//   grid-template-columns: repeat(3, 1fr);
//   align-items: center;
//   h2 {
//     margin-bottom: 0;
//   }
// }

.amount {
  margin-left: 2.75rem;
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
    margin-bottom: 0;
  }
`

