import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../redux/product'
import cartReducer from '../redux/cart'

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
})

export default store