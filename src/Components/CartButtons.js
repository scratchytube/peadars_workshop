import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../redux/user'
import { countCartTotals } from '../redux/cart'
import { toggleSideBar } from '../redux/product'
import styled from 'styled-components'
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa'


const CartButtons = () => {
    const dispatch = useDispatch()
    const itemInCart = useSelector((state) => state.cart.totalCartItems)
    const cart = useSelector(state => state.cart.cart)

    const logout = () => {
        localStorage.removeItem("token");
        dispatch(currentUser(null))
    }

    const handleToggleSideBar = () => {
        dispatch(toggleSideBar())
    }

    useEffect(() => {
        dispatch(countCartTotals())
    }, [dispatch, cart, itemInCart])

    return (
            <Wrapper className='cart-btn-wrapper'>
                <Link to='/cart' className='cart-btn' onClick={handleToggleSideBar} >
                    Cart 
                    <span className='cart-container'>
                        <FaShoppingCart />
                        <span className='cart-value'>{itemInCart}</span>
                    </span>
                </Link>
                <Link to='/auth' onClick={handleToggleSideBar} type='button' className='auth-button'>
                    Login <FaUserPlus />
                </Link>
                <button onClick={logout} type='button' className='auth-button'>
                    Logout <FaUserMinus />
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
.cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
        height: 1.6rem
        margin-left: 5px
    }
}
.cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
// .auth-btn {
//     display: flex;
//     align-items: center;
//     background: transparent;
//     border-color: transparent;
//     font-size: 1.5rem;
//     cursor: pointer;
//     color: var(--clr-grey-1);
//     letter-spacing; var(--spacing);
//     svg {
//         margin-left: 5px;
//     }
// }

.auth-button {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`