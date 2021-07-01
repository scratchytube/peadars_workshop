import React from 'react'
// import QuantityButtons from './QuantityButtons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, myProductOrders } from '../redux/cart'
import styled from 'styled-components'

const AddToCart = ({ product }) => {
    const { id } = product
    const cartId = useSelector((state) => state.cart.cartId)
    const cart = useSelector((state) => state.cart.cart)
    const productOrders = useSelector(state => state.cart.productOrdersArray)
    console.log(cart)
    console.log(productOrders)


    const dispatch = useDispatch()

    const addThisToMyCart = (id, product) => {
        const inHere = productOrders.find((p) => p.product_id === product.id)
        
        if (!inHere) {
            const data = {
                order_id: cartId,
                product_id: product.id
            }
    fetch('http://localhost:3000/api/v1/productorders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(r => r.json())
            .then(newProductForCart => {
                addingProductOrder(newProductForCart)
                addingProductToCart(newProductForCart.product)
            })
        } else {
            return alert('Already in Cart!')
        }
        
    }

    const addingProductOrder = (newProOrd) => {
        const brandNewProductOrderArray = [...productOrders, newProOrd]
        dispatch(myProductOrders(brandNewProductOrderArray))
    }

        const addingProductToCart = (newItem) => {
            const brandNewdata = [ ...cart, newItem,]
            dispatch(addToCart(brandNewdata))
        }

        //hiding quantity buttons for now
    // const increase = () => {
    //     setAmount((oldAmount) => {
    //         let tempAmount = oldAmount + 1
    //         if(tempAmount > stock) {
    //             tempAmount = stock
    //         }
    //         return tempAmount
    //     })
    // }

    // const decrease = () => {
    //     setAmount((oldAmount) => {
    //         let tempAmount = oldAmount - 1
    //         if(tempAmount < 1) {
    //             tempAmount = 1
    //         }
    //         return tempAmount
    //     })
    // }

    return (
        <Wrapper>
            <div className="btn-container">
                {/* <QuantityButtons amount={amount} increase={increase} decrease={decrease}/> */}
                <Link to='/cart' className='btn' onClick={() => addThisToMyCart(id, product)} >
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
    margin-top: 0.5rem;
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
