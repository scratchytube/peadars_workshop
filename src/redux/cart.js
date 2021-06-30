import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        completeCartObject: [],
        cartId: null,
        totalCartItems: 0,
        totalAmount: 0,
        shippingFee: 534,
    },
    reducers: {
        defaultCart(state, action) {
            state.cart = action.payload
        },
        cartOrderId(state, action) {
            state.cartId = action.payload
        },
        fullCartObject(state, action) {
            state.completeCartObject = action.payload
            // state.cartId = action.payload.id
            // state.cartId = action.payload.id
            // state.cart = action.payload.products
        },
        addToCart(state, action) {
            const newItem = action.payload
            console.log(newItem)

            state.completeCartObject = {...state,completeCartObject:{...state.completeCartObject.product_orders, newItem } }

            // state.completeCartObject = {...state,completeCartObject:[...state.product_order, newItem]}
            // state.cart = {...state,cart:[...state.cart, newItem]}
                
                // this is for updating quantity in the cart
            // const tempItem = state.cart.find((i) => i.id === id)
            // if (tempItem) {
            //     const tempCart = state.cart.map((cartItem) => {
            //         if (cartItem.id === id) {
            //             let newAmount = cartItem.amount + amount
            //             if(newAmount > cartItem.stock) {
            //                 newAmount = cartItem.stock
            //             }
            //             return {...cartItem, amount: newAmount} 
            //         } else {
            //             return cartItem
            //         }
            //     } )
            //     return {...state, cart: tempCart}
            // } else {
            //     const newItem = {
            //         id, 
            //         name: product.name, 
            //         amount,
            //         image: product.images[0].url, 
            //         price: product.price, 
            //         stock: product.stock 
            //     }
            //     return {...state,cart:[...state.cart, newItem]}
            // }
        },
        removeCartItem(state, action) {
            const tempCart = state.cart.filter((item) => item.id !== action.payload)
            state.cart = tempCart
        },
        clearWholeCart(state) {
            state.cart = []
        },
        toggleAmount(state, action) {
            const {id, value} = action.payload
            console.log(action.payload)
            const tempCart = state.cart.map((item) => {
                if (item.id === id) {
                    if(value === 'increase') {
                        let newAmount = item.amount + 1
                        if (newAmount > item.stock) {
                            newAmount = item.stock
                        }
                        return {...item, amount: newAmount}
                    }
                    if (value === 'decrease') {
                        let newAmount = item.amount - 1
                        if (newAmount < 1) {
                            newAmount = 1
                        }
                        return { ...item, amount: newAmount }
                    }
                } 
                return item
            })
            return {...state,cart: tempCart}
        },
        countCartTotals(state) {
           
            // const myCart = state.cart.products
            // .map((item) => item.products)
            // console.log(myCart)
            
            const {totalCartItems, totalAmount} = state.cart.reduce((total, cartItem) => {
                const { amount, price } = cartItem

                total.totalCartItems += amount
                total.totalAmount += price * amount

                return total
            },{
                totalCartItems: 0, totalAmount: 0
            })
            return {...state, totalCartItems, totalAmount}
        },
    }
})

export const { addToCart, defaultCart, cartOrderId, fullCartObject, removeCartItem, clearWholeCart, toggleAmount, countCartTotals } = cartSlice.actions
export default cartSlice.reducer
