import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalCartItems: 0,
        totalAmount: 0,
    },
    reducers: {
        // addToCart: (state, action) {

        // }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer