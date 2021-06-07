import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalCartItems: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart(state, action) {
            const { id, amount, product } = action.payload
            const tempItem = state.cart.find((i) => i.id === id )
            if (tempItem) {

            } else {
                const newItem = {id, name: product.name, amount, image: product.images[0].url, price: product.price, max: product.stock }
                return {...state,cart:[...state.cart, newItem]}
            }
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer